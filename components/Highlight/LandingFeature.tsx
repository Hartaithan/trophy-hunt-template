import type { MantineGradient } from "@mantine/core";
import { Text, type TextProps } from "@mantine/core";
import type { FC, PropsWithChildren } from "react";
import React from "react";

type Props = PropsWithChildren & TextProps;

const gradient: MantineGradient = {
  from: "accented.6",
  to: "accented.3",
  deg: 90,
};

const LandingFeature: FC<Props> = (props) => {
  const { children, ...rest } = props;
  return (
    <Text component="h1" variant="gradient" gradient={gradient} {...rest}>
      {children}
    </Text>
  );
};

export default LandingFeature;
