export interface SearchResult {
  id: number;
  name: string;
  platforms?: string[];
  image_url: string | undefined;
  url: string;
}

export interface SearchResponse {
  query: string;
  resultQuery: string | undefined;
  results: SearchResult[];
}
