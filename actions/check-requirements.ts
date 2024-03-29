"use server";

import type { ActionResponse } from "@/models/ActionModel";
import { Octokit } from "@octokit/rest";

const owner = process.env.NEXT_PUBLIC_OWNER ?? "";
const repo = process.env.NEXT_PUBLIC_REPO ?? "";

export const checkRequirements = async (
  token: string | undefined,
): Promise<ActionResponse> => {
  if (!token) {
    return {
      status: "error",
      message: "Token not found!",
    };
  }

  const octokit = new Octokit({ auth: token });

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
  if (follow.status === "rejected") {
    return {
      status: "error",
      message: "Sorry, but you need to follow the profile",
    };
  }
  if (star.status === "rejected") {
    return {
      status: "error",
      message: "Sorry, but you need to give the repository a star",
    };
  }

  return {
    status: "success",
    message:
      "Thanks for the follow and star. You will be redirected to the template download link",
  };
};
