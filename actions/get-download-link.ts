"use server";

import { TEMPLATE_URL } from "@/constants/variables";
import { redirect } from "next/navigation";
import type { ActionResponse } from "@/models/ActionModel";
import { checkRequirements } from "./check-requirements";
import type { Session } from "next-auth";
import { capture } from "@/utils/analytics";

export const getDownloadLink = async (
  session: Session | null,
): Promise<ActionResponse> => {
  if (!session) {
    const message = "Session not found!";
    await capture("tht-download-error", { message });
    return { status: "error", message };
  }

  const response = await checkRequirements(session);
  if (response.status === "error") {
    const message = response.message;
    await capture("tht-download-error", { message });
    return response;
  }

  await capture("tht-download-success");
  return redirect(TEMPLATE_URL);
};
