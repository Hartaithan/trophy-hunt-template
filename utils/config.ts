import { Client } from "@notionhq/client";
import { cookies } from "next/headers";
import lz from "lz-string";

export const getDatabaseID = () => {
  const id = cookies().get("database-id");
  return id?.value ?? "";
};

export const getNotionToken = (token?: string) => {
  if (token) return lz.decompressFromEncodedURIComponent(token);
  const cookie = cookies().get("notion-token");
  return cookie?.value ?? "";
};

export const getNotionClient = (token?: string) => {
  const auth = getNotionToken(token);
  return { notion: new Client({ auth }), token: auth };
};
