import type { FlexProps } from "@mantine/core";
import { Flex } from "@mantine/core";
import type { FC, PropsWithChildren } from "react";
import classes from "./PageContainer.module.css";
import clsx from "clsx";

type Props = PropsWithChildren & FlexProps;

const PageContainer: FC<Props> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <Flex className={clsx(className, classes.container)} {...rest}>
      {children}
    </Flex>
  );
};

export default PageContainer;
