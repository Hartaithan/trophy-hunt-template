import { Container } from "@mantine/core";
import type { FC, PropsWithChildren } from "react";

const UnAuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return <Container id="main">{children}</Container>;
};

export default UnAuthLayout;
