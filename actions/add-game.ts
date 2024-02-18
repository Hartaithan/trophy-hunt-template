"use server";

import { notion } from "@/utils/notion";

const GAMES_DATABASE = "f4f20be7b1cd44d3b5313416570ef19c";

export const addGame = async () => {
  let game = null;
  let trophies = null;
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
                content: "This is from API",
              },
            },
          ],
        },
        Status: {
          type: "status",
          status: {
            name: "Backlog",
          },
        },
        Platform: {
          type: "select",
          select: {
            name: "PS3",
          },
        },
        Trophies: {
          type: "relation",
          relation: [],
        },
      },
    });
    console.log("game", game);
  } catch (error) {
    console.log("create game error", error);
    throw Error("create game error");
  }

  try {
    trophies = await notion.databases.create({
      parent: {
        type: "page_id",
        page_id: game?.id ?? "",
      },
      is_inline: true,
      title: [
        {
          text: {
            content: "Trophies",
          },
        },
      ],
      properties: {
        Complete: {
          type: "checkbox",
          checkbox: {},
        },
        Name: {
          type: "title",
          title: {},
        },
        Type: {
          type: "select",
          select: {
            options: [
              {
                name: "Platinum",
                color: "blue",
              },
              {
                name: "Gold",
                color: "yellow",
              },
              {
                name: "Silver",
                color: "gray",
              },
              {
                name: "Bronze",
                color: "brown",
              },
            ],
          },
        },
        List: {
          type: "rich_text",
          rich_text: {},
        },
        Base: {
          type: "checkbox",
          checkbox: {},
        },
        "Base Completed": {
          type: "checkbox",
          checkbox: {},
        },
      },
    });
    console.log("trophies", trophies);
  } catch (error) {
    console.log("create trophy error", error);
    throw Error("create trophy error");
  }

  try {
    const updated = await notion.pages.update({
      page_id: game?.id ?? "",
      properties: {
        Trophies: {
          type: "relation",
          relation: [
            {
              // TODO: grant access for this database
              id: trophies?.id ?? "",
            },
          ],
        },
      },
    });
    console.log("updated", updated);
  } catch (error) {
    console.log("update game error", error);
    throw Error("update game error");
  }
};
