"use server";

import { BASE_URL, POSTHOG_HOST, POSTHOG_KEY } from "@/constants/variables";
import { cookies } from "next/headers";
import type { PostHogOptions } from "posthog-node";
import { PostHog } from "posthog-node";

const options: PostHogOptions = {
  host: POSTHOG_HOST,
  flushAt: 1,
  flushInterval: 0,
};

class PostHogClient {
  private static instance: PostHog | null = null;
  public static getInstance(): PostHog {
    if (PostHogClient.instance) return PostHogClient.instance;
    PostHogClient.instance = new PostHog(POSTHOG_KEY, options);
    return PostHogClient.instance;
  }
}

export const capture = async (
  event: string,
  properties?: Record<string | number, any>,
) => {
  const id = cookies().get("database-id");
  const client = PostHogClient.getInstance();
  const distinctId = id?.value || "anonymous";
  const allProperties = { ...properties, $current_url: BASE_URL + "/" };
  client.capture({ event, distinctId, properties: allProperties });
  await client.shutdown();
};
