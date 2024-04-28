"use server";

import type { ActionResponse } from "@/models/ActionModel";
import { getDatabaseID, getNotionClient } from "@/utils/notion";
import { getNotionError } from "@/utils/error";
import type { FetchGameResponse } from "@/models/GameModel";
import { fetchGame } from "@/utils/game";
import type {
  PageCover,
  PageProperties,
  PageChildren,
} from "@/models/PageModel";
import type { Example } from "@/models/ExampleModel";
import { trophyTypeColors } from "@/constants/colors";
import { BASE_URL } from "@/constants/variables";
import type {
  CreatePageResponse,
  CreatePageParameters,
} from "@notionhq/client/build/src/api-endpoints";
import lz from "lz-string";
import { createTrophyTitle } from "@/utils/trophy";
import { defaultLanguage } from "@/constants/language";
import { chunkBlocks } from "@/utils/blocks";
import { baseTitle } from "@/constants/trophy";

export const addGame = async (
  url: string,
  lang: string = defaultLanguage,
  example: Example | null = null,
): Promise<ActionResponse> => {
  let game: FetchGameResponse | null = await fetchGame(url, lang, example);
  if (!game) {
    console.error("unable to fetch game");
    return {
      status: "error",
      message: "Unable to add game",
    };
  }

  const databaseID = getDatabaseID();
  const { notion, token } = getNotionClient();

  const cover: PageCover = {
    type: "external",
    external: {
      url:
        game.thumbnail ?? "https://i.psnprofiles.com/games/23cbfb/L3563f1.png",
    },
  };

  const properties: PageProperties = {
    Name: {
      type: "title",
      title: [
        {
          type: "text",
          text: {
            content: game.title,
          },
        },
      ],
    },
    Platform: {
      type: "multi_select",
      multi_select: game.platforms.map((i) => ({ name: i })),
    },
    Status: {
      type: "status",
      status: {
        name: "Backlog",
      },
    },
    "Platinum Progress": {
      type: "number",
      number: 0,
    },
    "100% Progress": {
      type: "number",
      number: 0,
    },
    "Update Progress": {
      type: "url",
      url: null,
    },
    "All Trophies": {
      type: "number",
      number: game.counts.total,
    },
    "Base Trophies": {
      type: "number",
      number: game.counts.base,
    },
  };

  const children: PageChildren[] = [];
  children.push({
    object: "block",
    type: "heading_3",
    heading_3: {
      rich_text: [
        {
          type: "text",
          text: { content: "Links" },
        },
      ],
    },
  });
  children.push({
    object: "block",
    type: "paragraph",
    paragraph: {
      rich_text: [
        {
          type: "text",
          text: { content: "Game Page", link: { url: game.page } },
          annotations: { bold: true },
        },
      ],
    },
  });
  if (game.guide) {
    children.push({
      object: "block",
      type: "paragraph",
      paragraph: {
        rich_text: [
          {
            type: "text",
            text: { content: "Trophy Guide", link: { url: game.guide } },
            annotations: { bold: true },
          },
        ],
      },
    });
  }

  for (const list of game.lists) {
    const isBase = list.name === baseTitle;
    children.push({
      object: "block",
      type: "heading_3",
      heading_3: {
        rich_text: [{ type: "text", text: { content: list.name } }],
      },
    });
    for (const trophy of list.trophies) {
      children.push({
        object: "block",
        type: "to_do",
        to_do: {
          rich_text: [
            {
              type: "text",
              text: {
                content: createTrophyTitle(trophy.type, isBase),
              },
              annotations: {
                bold: true,
                color: trophyTypeColors[trophy.type],
              },
            },
            {
              type: "text",
              text: {
                content: trophy.name,
                link: { url: trophy.url ?? "" },
              },
              annotations: {
                bold: true,
                underline: true,
              },
            },
            {
              type: "text",
              text: {
                content: `\n${trophy.description}`,
              },
            },
          ],
        },
      });
    }
  }

  let page: CreatePageResponse | null = null;
  const parent: CreatePageParameters["parent"] = {
    type: "database_id",
    database_id: databaseID,
  };

  try {
    if (children.length > 100) {
      const chunked = chunkBlocks(children, 100);
      for (let i = 0; i < chunked.length; i++) {
        const chunk = chunked[i];
        if (i === 0) {
          page = await notion.pages.create({
            parent,
            cover,
            properties,
            children: chunk,
          });
          console.info("page created", chunk.length, page.id);
        } else {
          await notion.blocks.children.append({
            block_id: page?.id ?? "",
            children: chunk,
          });
          console.info("chunk appended", chunk.length, page?.id);
        }
      }
    } else {
      page = await notion.pages.create({
        parent,
        cover,
        properties,
        children,
      });
      console.info("page created", page.id);
    }
  } catch (error) {
    console.error("create game error", error);
    return {
      status: "error",
      message: getNotionError(error, "Unable to add game"),
    };
  }

  try {
    const compressed = lz.compressToEncodedURIComponent(token);
    const session = new URLSearchParams({ session: compressed });
    const updated = await notion.pages.update({
      page_id: page?.id ?? "",
      properties: {
        "Update Progress": {
          type: "url",
          url: `${BASE_URL}/${page?.id}/progress?${session.toString()}`,
        },
      },
    });
    console.info("page updated", updated.id);
    return {
      status: "success",
      message: "Game successfully added!",
    };
  } catch (error) {
    console.error("update game error", error);
    return {
      status: "error",
      message: getNotionError(error, "Unable to add links"),
    };
  }
};
