export interface SearchResult {
  path: string;
  name: string;
  platforms?: string[];
  region: string | null;
  image_url: string | undefined;
  url: string;
}

export interface SearchResponse {
  query: string;
  resultQuery: string | undefined;
  results: SearchResult[];
  nextPage: number | null;
}
