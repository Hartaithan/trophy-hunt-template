"use server";

import type { ActionResponse } from "@/models/ActionModel";
import type { PageBlocks } from "@/models/PageModel";
import { getAllBlocks } from "@/utils/blocks";
import { getNotionClient } from "@/utils/config";
import { calculateProgress } from "@/utils/progress";

export const updateProgress = async (
  page: string,
  session?: string,
): Promise<ActionResponse> => {
  const { notion } = getNotionClient(session);

  let blocks: PageBlocks | null = null;
  try {
    blocks = await getAllBlocks(notion, page);
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
