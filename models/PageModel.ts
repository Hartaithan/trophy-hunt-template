export interface PageHeaders {
  date: string;
  "content-type": string;
  vary: string;
  "cache-control": string;
  "set-cookie": string[];
  "strict-transport-security": string;
  "x-frame-options": string;
  "cf-cache-status": string;
  "x-content-type-options": string;
  server: string;
  "cf-ray": string;
  "content-encoding": string;
}

export interface PageInfo {
  version: string;
  statusCode: number;
  statusMessage: string;
  headers: PageHeaders;
}

export interface PageResponse {
  info?: PageInfo;
  body: string;
}
