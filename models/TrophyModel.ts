export interface Trophy {
  name: string;
  description: string;
  type: string;
  url: string | null;
}

export interface TrophyList {
  name: string;
  count: number;
  trophies: Trophy[];
}

export interface TrophyCounts {
  base: number;
  total: number;
}
