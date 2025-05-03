"use server";

import type { ActionResponse } from "@/models/ActionModel";
import type { PageBlocks } from "@/models/PageModel";
import { collectPaginatedAPI } from "@notionhq/client";
import { getNotionClient } from "@/utils/notion";
import { getNotionError } from "@/utils/error";
import { calculateProgress } from "@/utils/progress";
import { capture } from "@/utils/analytics";

export const updateProgressFetch = async (
  page: string,
  session?: string,
): Promise<ActionResponse<PageBlocks>> => {
  const { notion } = getNotionClient(session);

  try {
    const blocks = await collectPaginatedAPI(notion.blocks.children.list, {
      block_id: page,
    });
    const message = "Updating progress, don't reload the page...";
    await capture("tht-update-progress-fetch-success", { page, message });
    return { status: "success", message, data: blocks };
  } catch (error) {
    console.error("page children list error", error);
    const message = "Unable to fetch page blocks";
    await capture("tht-update-progress-fetch-error", { page, message });
    return { status: "error", message };
  }
};

export const updateProgress = async (
  page: string,
  blocks: PageBlocks,
  session?: string,
): Promise<ActionResponse> => {
  const { notion } = getNotionClient(session);

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
    const message = "Progress successfully updated!";
    await capture("tht-update-progress-success", { page, message });
    return { status: "success", message };
  } catch (error) {
    console.error("update page error", error);
    const message = getNotionError(error, "Unable to update page properties");
    await capture("tht-update-progress-error", { page, message });
    return { status: "error", message };
  }
};
