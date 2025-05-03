"use server";

import type { ActionResponse } from "@/models/ActionModel";
import { capture } from "@/utils/analytics";
import { Octokit } from "@octokit/rest";
import type { Session } from "next-auth";

export interface CheckResponse {
  follow: boolean;
  star: boolean;
  download: boolean;
}

const owner = process.env.NEXT_PUBLIC_OWNER ?? "";
const repo = process.env.NEXT_PUBLIC_REPO ?? "";

export const checkRequirements = async (
  session: Session | null,
): Promise<ActionResponse<CheckResponse>> => {
  if (!session) {
    const message = "Session not found!";
    await capture("tht-check-error", { message, session });
    return { status: "error", message };
  }

  console.info(session?.user?.email, "checking", owner, "and", repo);

  const octokit = new Octokit({ auth: session.access_token });

  const requirements = [
    octokit.rest.users.checkPersonIsFollowedByAuthenticated({
      username: owner,
    }),
    octokit.rest.activity.checkRepoIsStarredByAuthenticatedUser({
      owner,
      repo,
    }),
  ];

  const [follow, star] = await Promise.allSettled(requirements);

  const followFound = follow.status === "fulfilled";
  const starFound = star.status === "fulfilled";

  let message = "Unknown error";
  if (!followFound) {
    message = "Sorry, but you need to follow the profile";
  }
  if (!starFound) {
    message = "Sorry, but you need to give the repository a star";
  }

  const data = {
    follow: followFound,
    star: starFound,
    download: followFound && starFound,
  };

  if (!followFound || !starFound) {
    await capture("tht-check-error", { message, data });
    return { status: "error", message, data };
  }

  message =
    "Thanks for the follow and star. Now you can download the template!";
  await capture("tht-check-success", { message, data });

  return { status: "success", message, data };
};
