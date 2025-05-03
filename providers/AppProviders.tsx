"use client";

import { theme } from "@/styles/theme";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import type { FC, PropsWithChildren } from "react";
import AnalyticsProvider from "@/providers/AnalyticsProvider";

interface Props extends PropsWithChildren {
  fontFamily: string;
}

const AppProviders: FC<Props> = (props) => {
  const { children, fontFamily } = props;
  return (
    <AnalyticsProvider>
      <MantineProvider
        theme={{
          ...theme,
          fontFamily,
        }}
        defaultColorScheme="dark">
        <Notifications position="top-right" />
        {children}
      </MantineProvider>
    </AnalyticsProvider>
  );
};

export default AppProviders;
