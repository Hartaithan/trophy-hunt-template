"use client";

import type { FC } from "react";
import {
  ActionIcon,
  CopyButton as MantineCopyButton,
  Tooltip,
} from "@mantine/core";
import { IconCheck, IconCopy } from "@tabler/icons-react";

interface Props {
  value: string;
}

const CopyButton: FC<Props> = (props) => {
  const { value } = props;
  return (
    <MantineCopyButton value={value} timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? "Copied" : "Copy"} withArrow position="right">
          <ActionIcon
            color={copied ? "teal" : "gray"}
            variant="subtle"
            onClick={copy}>
            {copied ? <IconCheck size="1rem" /> : <IconCopy size="1rem" />}
          </ActionIcon>
        </Tooltip>
      )}
    </MantineCopyButton>
  );
};

export default CopyButton;
