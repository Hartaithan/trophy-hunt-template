import { BASE_URL, POSTHOG_HOST, POSTHOG_KEY } from "@/constants/variables";
import { cookies } from "next/headers";
import type { PostHogOptions } from "posthog-node";
import { PostHog } from "posthog-node";

const options: PostHogOptions = {
  host: POSTHOG_HOST,
  flushAt: 1,
  flushInterval: 0,
};

export const capture = async (
  event: string,
  properties?: Record<string | number, any>,
) => {
  const id = cookies().get("database-id");
  const client = new PostHog(POSTHOG_KEY, options);
  const distinctId = id?.value || "anonymous";
  const allProperties = { ...properties, $current_url: BASE_URL + "/" };
  client.capture({ event, distinctId, properties: allProperties });
  await client.shutdown();
};
