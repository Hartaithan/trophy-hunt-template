export interface Trophy {
  name: string;
  description: string;
  type: string;
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
