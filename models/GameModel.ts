import type { TrophyList } from "./TrophyModel";

export interface FetchGameResponse {
  title: string;
  platforms: string[];
  thumbnail: string | null;
  cover: string | null;
  lists: TrophyList[];
  message?: string;
}
