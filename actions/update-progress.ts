"use server";

import type { ActionResponse } from "@/models/ActionModel";
import type { PageBlocks } from "@/models/PageModel";
import { collectPaginatedAPI } from "@notionhq/client";
import { getNotionClient } from "@/utils/notion";
import { getNotionError } from "@/utils/error";
import { calculateProgress } from "@/utils/progress";

export const updateProgress = async (
  page: string,
  session?: string,
): Promise<ActionResponse> => {
  const { notion } = getNotionClient(session);

  let blocks: PageBlocks | null = null;
  try {
    blocks = await collectPaginatedAPI(notion.blocks.children.list, {
      block_id: page,
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
      message: getNotionError(error, "Unable to update page properties"),
    };
  }
};
