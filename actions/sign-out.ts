"use server";

import type { ActionResponse } from "@/models/ActionModel";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const signOut = async (): Promise<ActionResponse> => {
  cookies().delete("notion-token");
  redirect("/add");
};
