"use server";

import type { ActionResponse } from "@/models/ActionModel";
import { getNotionClient } from "@/utils/config";
import { calculateProgress } from "@/utils/progress";
import type { ListBlockChildrenResponse } from "@notionhq/client/build/src/api-endpoints";

export const updateProgress = async (
  page: string,
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

  try {
    const calculated = calculateProgress(blocks);
    await notion.pages.update({
      page_id: page,
      properties: {
        "Platinum Progress": {
          type: "number",
          number: calculated.base.progress / 100,
        },
        "100% Progress": {
          type: "number",
          number: calculated.total.progress / 100,
        },
      },
    });
    return {
      status: "success",
      message: `Progress successfully updated!`,
    };
  } catch (error) {
    console.error("update page error", error);
    return {
      status: "error",
      message: "Unable to update page properties",
    };
  }
};
