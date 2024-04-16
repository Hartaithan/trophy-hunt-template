import type { Client } from "@notionhq/client";
import type {
  ListBlockChildrenResponse,
  ParagraphBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

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

export type PageCreate = Client["pages"]["create"];
export type PageCreateArgs = Parameters<PageCreate>[0];
export type PageCreateParams = Omit<PageCreateArgs, "auth">;
export type PageCover = PageCreateParams["cover"];
export type PageProperties = PageCreateParams["properties"];
export type PageChildren = NonNullable<PageCreateParams["children"]>[0];
export type PageBlocks = ListBlockChildrenResponse["results"];

export type TextAnnotationColor =
  ParagraphBlockObjectResponse["paragraph"]["color"];
