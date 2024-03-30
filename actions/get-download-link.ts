"use server";

import { TEMPLATE_URL } from "@/constants/variables";
import { redirect } from "next/navigation";
import type { ActionResponse } from "@/models/ActionModel";
import { checkRequirements } from "./check-requirements";

export const getDownloadLink = async (
  token: string | undefined,
): Promise<ActionResponse> => {
  if (!token) return { status: "error", message: "Token not found!" };

  const response = await checkRequirements(token);
  if (response.status === "error") return response;

  return redirect(TEMPLATE_URL);
};
