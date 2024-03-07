"use server";

import type { ActionResponse } from "@/models/ActionModel";
import { getDatabaseID, getNotionClient } from "@/utils/config";
import type { FetchGameResponse } from "@/models/GameModel";
import { fetchGame } from "@/utils/game";
import type {
  PageCover,
  PageProperties,
  PageChildren,
} from "@/models/PageModel";
import type { Example } from "@/models/ExampleModel";
import { trophyTypeColors } from "@/constants/colors";
import { BASE_URL } from "@/constants/urls";
import type { CreatePageResponse } from "@notionhq/client/build/src/api-endpoints";

export const addGame = async (
  url: string,
  example: Example | null = null,
): Promise<ActionResponse> => {
  let game: FetchGameResponse | null = await fetchGame(url, example);
  if (!game) {
    console.info("unable to fetch game");
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
    "Update progress": {
      type: "url",
      url: null,
    },
    "Check all trophies": {
      type: "url",
      url: null,
    },
    "Uncheck all trophies": {
      type: "url",
      url: null,
    },
  };

  const children: PageChildren[] = [];
  for (const list of game.lists) {
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
                content: `[${trophy.type}]\n`,
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
  try {
    page = await notion.pages.create({
      parent: {
        type: "database_id",
        database_id: databaseID,
      },
      cover: cover,
      properties,
      children,
    });
    console.info("page created", page);
  } catch (error) {
    console.info("create game error", error);
    return {
      status: "error",
      message: "Unable to add game",
    };
  }

  try {
    const session = new URLSearchParams({ session: token });
    const updated = await notion.pages.update({
      page_id: page?.id,
      properties: {
        "Update progress": {
          type: "url",
          url: `${BASE_URL}/${page?.id}/progress?${session.toString()}`,
        },
        "Check all trophies": {
          type: "url",
          url: `${BASE_URL}/${page?.id}/check?${session.toString()}`,
        },
        "Uncheck all trophies": {
          type: "url",
          url: `${BASE_URL}/${page?.id}/uncheck?${session.toString()}`,
        },
      },
    });
    console.info("page updated", updated);
    return {
      status: "success",
      message: "Game successfully added!",
    };
  } catch (error) {
    console.info("update game error", error);
    return {
      status: "error",
      message: "Unable to add links",
    };
  }
};
