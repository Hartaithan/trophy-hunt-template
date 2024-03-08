export interface ProgressCounts {
  all: number;
  completed: number;
  progress: number;
}

export interface CalculatedProgress {
  base: ProgressCounts;
  total: ProgressCounts;
}
