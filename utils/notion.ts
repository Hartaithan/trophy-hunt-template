import { Client } from "@notionhq/client";
import { cookies } from "next/headers";

export const getNotionClient = () => {
  const token = cookies().get("notion-token");
  return new Client({
    auth: token?.value,
  });
};
