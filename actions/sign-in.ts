"use server";

import type { ActionResponse } from "@/models/ActionModel";
import type { SignInPayload } from "@/models/AuthModel";
import { getCookieExpires } from "@/utils/cookies";
import { cookies } from "next/headers";

const cookiesOptions = {
  expires: getCookieExpires(),
};

export const signIn = async (
  payload: SignInPayload,
): Promise<ActionResponse> => {
  if (payload.notion_token && payload.database_id) {
    cookies().set("database-id", payload.database_id, cookiesOptions);
    cookies().set("notion-token", payload.notion_token, cookiesOptions);
    return {
      status: "success",
      message: "Successful sign in!",
    };
  } else {
    console.error("Notion token or Database ID not found!");
    return {
      status: "error",
      message: "Unable to sign in",
    };
  }
};
