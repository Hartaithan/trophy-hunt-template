"use server";

import type { ActionResponse } from "@/models/ActionModel";
import { Octokit } from "@octokit/rest";

export const checkStar = async (
  token: string | undefined,
  owner = "Hartaithan",
  repo = "trophy-hunt-template",
): Promise<ActionResponse> => {
  if (!token) {
    return {
      status: "error",
      message: "Token not found!",
    };
  }

  const octokit = new Octokit({ auth: token });

  try {
    await octokit.rest.activity.checkRepoIsStarredByAuthenticatedUser({
      owner,
      repo,
    });
    return {
      status: "success",
      message: "Thanks for the star",
    };
  } catch (error) {
    return {
      status: "error",
      message: "Sorry, but you need to give the repository a star",
    };
  }
};
