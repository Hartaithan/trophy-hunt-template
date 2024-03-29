"use server";

import type { ActionResponse } from "@/models/ActionModel";
import { Octokit } from "@octokit/rest";

const owner = process.env.NEXT_PUBLIC_OWNER ?? "";
const repo = process.env.NEXT_PUBLIC_REPO ?? "";

export const checkStar = async (
  token: string | undefined,
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
