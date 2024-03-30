"use server";

import type { ActionResponse } from "@/models/ActionModel";
import { Octokit } from "@octokit/rest";

interface Response {
  follow: boolean;
  star: boolean;
  download: boolean;
}

const owner = process.env.NEXT_PUBLIC_OWNER ?? "";
const repo = process.env.NEXT_PUBLIC_REPO ?? "";

export const checkRequirements = async (
  token: string | undefined,
): Promise<ActionResponse<Response>> => {
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
    return { status: "error", message, data };
  }

  return {
    status: "success",
    message:
      "Thanks for the follow and star. You will be redirected to the template download link",
    data,
  };
};
