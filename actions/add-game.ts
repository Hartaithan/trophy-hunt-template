"use server";

import { notion } from "@/utils/notion";

const GAMES_DATABASE = "f4f20be7b1cd44d3b5313416570ef19c";

export const addGame = async () => {
  let game = null;
  try {
    game = await notion.pages.create({
      cover: {
        type: "external",
        external: {
          url: "https://upload.wikimedia.org/wikipedia/commons/6/62/Tuscankale.jpg",
        },
      },
      parent: {
        type: "database_id",
        database_id: GAMES_DATABASE,
      },
      properties: {
        Name: {
          type: "title",
          title: [
            {
              type: "text",
              text: {
                content: new Date().toISOString(),
              },
            },
          ],
        },
        Platform: {
          type: "select",
          select: {
            name: "PS3",
          },
        },
        Status: {
          type: "status",
          status: {
            name: "Backlog",
          },
        },
      },
      children: [
        {
          object: "block",
          type: "heading_3",
          heading_3: {
            rich_text: [{ type: "text", text: { content: "Group" } }],
          },
        },
        {
          object: "block",
          type: "to_do",
          to_do: {
            rich_text: [{ type: "text", text: { content: "Trophy" } }],
          },
        },
        {
          object: "block",
          type: "to_do",
          to_do: {
            rich_text: [{ type: "text", text: { content: "Trophy" } }],
          },
        },
        {
          object: "block",
          type: "to_do",
          to_do: {
            rich_text: [{ type: "text", text: { content: "Trophy" } }],
          },
        },
        {
          object: "block",
          type: "heading_3",
          heading_3: {
            rich_text: [{ type: "text", text: { content: "Group" } }],
          },
        },
        {
          object: "block",
          type: "to_do",
          to_do: {
            rich_text: [{ type: "text", text: { content: "Trophy" } }],
          },
        },
        {
          object: "block",
          type: "to_do",
          to_do: {
            rich_text: [{ type: "text", text: { content: "Trophy" } }],
          },
        },
        {
          object: "block",
          type: "to_do",
          to_do: {
            rich_text: [{ type: "text", text: { content: "Trophy" } }],
          },
        },
      ],
    });
    console.log("game", game);
  } catch (error) {
    console.log("create game error", error);
    throw Error("create game error");
  }
};
