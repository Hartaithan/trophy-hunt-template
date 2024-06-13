"use server";

import { TEMPLATE_URL } from "@/constants/variables";
import { redirect } from "next/navigation";
import type { ActionResponse } from "@/models/ActionModel";
import { checkRequirements } from "./check-requirements";
import type { Session } from "next-auth";

export const getDownloadLink = async (
  session: Session | null,
): Promise<ActionResponse> => {
  if (!session) return { status: "error", message: "session not found!" };

  const response = await checkRequirements(session);
  if (response.status === "error") return response;

  return redirect(TEMPLATE_URL);
};
