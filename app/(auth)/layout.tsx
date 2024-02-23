import type { Metadata, Viewport } from "next";
import type { FC, PropsWithChildren } from "react";
import { Container } from "@mantine/core";

export const metadata: Metadata = {
  title: "Trophy Hunt Template",
  description: "Trophy Hunt Template",
  applicationName: "Trophy Hunt Template",
};

export const viewport: Viewport = {
  themeColor: "#121212",
  colorScheme: "dark",
};

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return <Container id="main">{children}</Container>;
};

export default AuthLayout;
