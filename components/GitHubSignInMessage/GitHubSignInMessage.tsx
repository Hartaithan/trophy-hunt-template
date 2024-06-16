"use client";

import type { FC } from "react";
import { Alert } from "@mantine/core";
import { IconNote } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import classes from "./GitHubSignInMessage.module.css";

const GitHubSignInMessage: FC = () => {
  const [visible, { close }] = useDisclosure(true);
  if (!visible) return;
  return (
    <Alert
      title="Developer's Note"
      icon={<IconNote />}
      classNames={classes}
      withCloseButton
      onClose={close}>
      Signing in with GitHub is a one-time requirement to download a template.
      This allows to verify if you&apos;ve followed profile and starred the
      repository. Once this step is completed, you won&apos;t need to worry
      about it again. Template is completely free and this requirements is a
      simple way to say &apos;thank you&apos; and show your appreciation.
    </Alert>
  );
};

export default GitHubSignInMessage;
