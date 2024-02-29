import type { TrophyList } from "./TrophyModel";

export interface FetchGameResponse {
  title: string;
  platform: string | null;
  thumbnail: string | null;
  cover: string | null;
  lists: TrophyList[];
  message?: string;
}
