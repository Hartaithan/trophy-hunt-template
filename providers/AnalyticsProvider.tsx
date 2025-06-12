"use client";

import { BASE_URL, POSTHOG_KEY } from "@/constants/variables";
import type { CaptureResult, PostHogConfig } from "posthog-js";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import type { FC, PropsWithChildren } from "react";

const KEY = POSTHOG_KEY;
const HOST = BASE_URL + "/status";

const NODE = process.env.NODE_ENV;
const VERCEL = process.env.NEXT_PUBLIC_VERCEL_ENV;
const VERCEL_PUBLIC = process.env.NEXT_PUBLIC_VERCEL_ENV;

const environment = VERCEL || VERCEL_PUBLIC || NODE;

const isClientSide = typeof window !== "undefined";
const isProd = environment === "production";

const config: Partial<PostHogConfig> = {
  api_host: HOST,
  person_profiles: "identified_only",
  before_send: (event: CaptureResult | null): CaptureResult | null => {
    const path = window.location.pathname;
    const isProgress = path.endsWith("/progress");
    if (isProgress) return null;
    return event;
  },
};

if (isClientSide && isProd) posthog.init(KEY, config);

const AnalyticsProvider: FC<PropsWithChildren> = ({ children }) => {
  if (!isProd) return children;
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
};

export default AnalyticsProvider;
