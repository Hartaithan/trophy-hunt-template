"use server";

import { notion } from "@/utils/notion";

const GAMES_DATABASE = "4fa54e371a6f49968153694ef897d642";
const TROPHIES_DATABASE = "7772e75b9c2940a484c22a29b48c1546";

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
      },
    });
    console.log("game", game);
  } catch (error) {
    console.log("create game error", error);
  }

  try {
    const trophy = await notion.pages.create({
      parent: {
        type: "database_id",
        database_id: TROPHIES_DATABASE,
      },
      properties: {
        Complete: {
          type: "checkbox",
          checkbox: false,
        },
        Game: {
          type: "relation",
          relation: [
            {
              id: game?.id ?? "",
            },
          ],
        },
      },
    });
    console.log("trophy", trophy);
  } catch (error) {
    console.log("create trophy error", error);
  }
};
