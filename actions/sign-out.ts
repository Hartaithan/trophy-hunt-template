"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const signOut = async () => {
  try {
    cookies().delete("notion-token");
  } catch (error) {
    console.error("sign out error", error);
  } finally {
    redirect("/");
  }
};
