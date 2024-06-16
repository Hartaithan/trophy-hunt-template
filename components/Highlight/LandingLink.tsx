import type { ButtonProps, MantineGradient } from "@mantine/core";
import { Button } from "@mantine/core";
import type { LinkProps } from "next/link";
import Link from "next/link";
import type { FC, PropsWithChildren } from "react";
import React from "react";

type Props = PropsWithChildren & ButtonProps & LinkProps;

const gradient: MantineGradient = {
  from: "accented.9",
  to: "accented.8",
  deg: 90,
};

const LandingLink: FC<Props> = (props) => {
  const { children, ...rest } = props;
  return (
    <Button
      variant="gradient"
      gradient={gradient}
      component={Link}
      prefetch={false}
      {...rest}>
      {children}
    </Button>
  );
};

export default LandingLink;
