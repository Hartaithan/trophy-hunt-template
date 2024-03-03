import { Client } from "@notionhq/client";
import { cookies } from "next/headers";

export const getDatabaseID = () => {
  const id = cookies().get("database-id");
  return id?.value ?? "";
};

export const getNotionToken = () => {
  const token = cookies().get("notion-token");
  return token?.value;
};

export const getNotionClient = () => {
  const token = getNotionToken();
  return new Client({
    auth: token,
  });
};
