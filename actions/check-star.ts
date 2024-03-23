"use server";

import type { ActionResponse } from "@/models/ActionModel";
import { Octokit } from "@octokit/rest";
import { cookies } from "next/headers";

export const checkStar = async (
  owner = "mantinedev",
  repo = "mantine",
): Promise<ActionResponse> => {
  const token = cookies().get("access_token")?.value ?? "";

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
