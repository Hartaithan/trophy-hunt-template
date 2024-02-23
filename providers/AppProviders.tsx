"use client";

import { theme } from "@/styles/theme";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import type { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  fontFamily: string;
}

const AppProviders: FC<Props> = (props) => {
  const { children, fontFamily } = props;
  return (
    <MantineProvider
      theme={{
        ...theme,
        fontFamily,
      }}
      defaultColorScheme="dark">
      <Notifications />
      <ModalsProvider>{children}</ModalsProvider>
    </MantineProvider>
  );
};

export default AppProviders;
