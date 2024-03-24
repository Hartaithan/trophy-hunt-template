import type {
  CalculatedProgress,
  ProgressCounts,
} from "@/models/ProgressModel";
import type {
  BlockObjectResponse,
  ListBlockChildrenResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { isTrophyBlock } from "./trophy";

export const empty: ProgressCounts = {
  all: 0,
  completed: 0,
  progress: 0,
};

export const calculateProgress = (
  blocks: ListBlockChildrenResponse | null,
): CalculatedProgress => {
  if (blocks === null) return { base: empty, total: empty };
  const results = blocks.results as BlockObjectResponse[];
  let headings = 0;
  let base: ProgressCounts = { all: 0, completed: 0, progress: 0 };
  let total: ProgressCounts = { all: 0, completed: 0, progress: 0 };
  for (const block of results) {
    if (block.type === "heading_3") headings = headings + 1;
    if (block.type !== "to_do") continue;
    if (!isTrophyBlock(block)) continue;
    total.all = total.all + 1;
    total.completed = total.completed + (block.to_do.checked ? 1 : 0);
    const isBaseBlock = headings <= 1;
    if (isBaseBlock) {
      base.all = base.all + 1;
      base.completed = base.completed + (block.to_do.checked ? 1 : 0);
    }
  }
  base.progress = parseFloat(((base.completed * 100) / base.all).toFixed(1));
  total.progress = parseFloat(((total.completed * 100) / total.all).toFixed(1));
  return { base, total };
};
