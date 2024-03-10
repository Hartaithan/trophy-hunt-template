import type { TrophyCounts, TrophyList } from "./TrophyModel";

export interface FetchGameResponse {
  title: string;
  platforms: string[];
  thumbnail: string | null;
  cover: string | null;
  lists: TrophyList[];
  counts: TrophyCounts;
  message?: string;
}
