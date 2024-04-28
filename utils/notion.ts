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

export const getNotionError = (
  error: unknown,
  message = "Unknown error",
): string => {
  const readableError = error as Record<string, string>;
  let result = message;
  if (readableError?.code === "object_not_found") {
    result =
      "Cannot create the page, make sure you have linked the template to the integration";
  }
  return result;
};
