export interface SearchResult {
  id: number;
  name: string;
  platform?: string;
  platforms?: string[];
  url: string;
}

export interface SearchResponse {
  query: string;
  resultQuery: string | undefined;
  results: SearchResult[];
}
