"use server";

import type { ActionResponse } from "@/models/ActionModel";
import { getNotionClient } from "@/utils/config";
import type { ListBlockChildrenResponse } from "@notionhq/client/build/src/api-endpoints";

export const checkTrophies = async (
  page: string,
  value: boolean,
  session?: string,
): Promise<ActionResponse> => {
  const { notion } = getNotionClient(session);

  let blocks: ListBlockChildrenResponse | null = null;
  try {
    blocks = await notion.blocks.children.list({
      block_id: page,
      page_size: 999,
    });
  } catch (error) {
    console.error("page children list error", error);
    return {
      status: "error",
      message: "Unable to fetch page blocks",
    };
  }

  console.info("blocks", blocks.results.length);

  // const todos = blocks.results.filter(
  //   (block) => "type" in block && block.type === "to_do",
  // );

  // TODO: update all todos with single request
  // for (const todo of todos) {
  //   await notion.blocks.update({
  //     block_id: todo.id,
  //     to_do: {
  //       checked: true,
  //     },
  //   });
  // }

  return {
    status: "success",
    message: `All trophies successfully ${value ? "" : "un"}checked!`,
  };
};
