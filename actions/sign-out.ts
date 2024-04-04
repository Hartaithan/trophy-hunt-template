"use server";

import type { ActionResponse } from "@/models/ActionModel";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const signOut = async (): Promise<ActionResponse> => {
  try {
    cookies().delete("notion-token");
    redirect("/");
  } catch (error) {
    console.error("sign out error", error);
    return {
      status: "error",
      message: "Unable to sign out",
    };
  }
};
