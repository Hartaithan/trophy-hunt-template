import type { PageBlocks } from "@/models/PageModel";
import type { Client } from "@notionhq/client";

export const chunkBlocks = <T>(array: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  let index = 0;
  for (let i = 0; i < array.length; i += size) {
    const chunk = array.slice(i, i + size);
    chunks[index] = chunk;
    index++;
  }
  return chunks;
};

export const getAllBlocks = async (
  notion: Client,
  page: string,
): Promise<PageBlocks | null> => {
  let blocks: PageBlocks | null = null;
  let nextCursor: string | null = null;
  let hasMore = true;
  try {
    while (hasMore) {
      const { results, has_more, next_cursor } =
        await notion.blocks.children.list({
          block_id: page,
          start_cursor: nextCursor || undefined,
        });
      blocks = blocks ? blocks.concat(results) : results;
      nextCursor = next_cursor;
      hasMore = has_more;
    }
    return blocks;
  } catch (error) {
    return null;
  }
};
