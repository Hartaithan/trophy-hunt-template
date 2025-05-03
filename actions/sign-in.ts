"use server";

import type { ActionResponse } from "@/models/ActionModel";
import type { SignInPayload } from "@/models/AuthModel";
import { capture } from "@/utils/analytics";
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
    const message = "Successful sign in!";
    await capture("tht-sign-in-success", { message });
    return { status: "success", message };
  } else {
    console.error("Notion token or Database ID not found!");
    const message = "Unable to sign in";
    await capture("tht-sign-in-error", { message, payload });
    return { status: "error", message };
  }
};
