import { Anchor, Text } from "@mantine/core";
import type { ReactNode } from "react";

export const getNotionError = (
  error: unknown,
  message = "Unknown error",
): string | ReactNode => {
  const readableError = error as Record<string, string>;
  let result: string | ReactNode = message;
  if (readableError?.code === "object_not_found") {
    result = (
      <Text size="sm">
        Make sure you&apos;ve correctly linked the template to the integration.
        Check out the&nbsp;
        <Anchor href="/tutorial" size="sm">
          tutorial
        </Anchor>
        &nbsp;for guidance
      </Text>
    );
  }
  return result;
};
