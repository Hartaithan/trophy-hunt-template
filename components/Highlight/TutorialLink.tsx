import { Anchor, type AnchorProps } from "@mantine/core";
import type { AnchorHTMLAttributes, FC, PropsWithChildren } from "react";

type Props = PropsWithChildren &
  AnchorHTMLAttributes<HTMLAnchorElement> &
  AnchorProps;

const TutorialLink: FC<Props> = (props) => {
  const { children, ...rest } = props;
  return (
    <Anchor fw="bold" c="accented.4" target="_blank" {...rest}>
      {children}
    </Anchor>
  );
};

export default TutorialLink;
