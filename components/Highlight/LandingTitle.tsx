import type { MantineGradient } from "@mantine/core";
import { Text, type TextProps } from "@mantine/core";
import type { FC, PropsWithChildren } from "react";
import React from "react";

type Props = PropsWithChildren & TextProps;

const gradient: MantineGradient = {
  from: "accented.4",
  to: "accented.5",
  deg: 90,
};

const LandingTitle: FC<Props> = (props) => {
  const { children, ...rest } = props;
  return (
    <Text variant="gradient" gradient={gradient} {...rest}>
      {children}
    </Text>
  );
};

export default LandingTitle;
