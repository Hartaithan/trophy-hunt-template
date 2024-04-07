import { Text, type TextProps } from "@mantine/core";
import type { FC, PropsWithChildren } from "react";
import React from "react";

type Props = PropsWithChildren & TextProps;

const TutorialHighlight: FC<Props> = (props) => {
  const { children, ...rest } = props;
  return (
    <Text span fw="bold" c="accented.4" inherit {...rest}>
      {children}
    </Text>
  );
};

export default TutorialHighlight;
