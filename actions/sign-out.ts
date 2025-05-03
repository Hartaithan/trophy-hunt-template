"use server";

import { capture } from "@/utils/analytics";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const signOut = async () => {
  try {
    await capture("tht-sign-out-success");
    cookies().delete("notion-token");
  } catch (error) {
    await capture("tht-sign-out-error", { error });
    console.error("sign out error", error);
  } finally {
    redirect("/");
  }
};
