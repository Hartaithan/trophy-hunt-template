"use server";

import type { ActionResponse } from "@/models/ActionModel";
import { getNotionClient } from "@/utils/notion";
import type { FetchGameResponse } from "@/models/GameModel";
import { fetchGame } from "@/utils/game";
import type {
  PageCover,
  PageProperties,
  PageChildren,
} from "@/models/PageModel";
import type { Example } from "@/models/ExampleModel";
import { trophyTypeColors } from "@/constants/colors";

const GAMES_DATABASE = "f4f20be7b1cd44d3b5313416570ef19c";

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

  const notion = getNotionClient();

  const cover: PageCover = {
    type: "external",
    external: {
      // TODO: add placeholder
      url: game.thumbnail ?? "Not Found",
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

  try {
    const page = await notion.pages.create({
      parent: {
        type: "database_id",
        database_id: GAMES_DATABASE,
      },
      cover: cover,
      properties,
      children,
    });
    console.info("page created", page);
    return {
      status: "success",
      message: "Game successfully added!",
    };
  } catch (error) {
    console.info("create game error", error);
    return {
      status: "error",
      message: "Unable to add game",
    };
  }
};
