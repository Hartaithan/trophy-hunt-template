export interface SearchResult {
  id: number;
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
}
