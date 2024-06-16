"use client";

import type { FC } from "react";
import Link from "next/link";
import type { AlertProps } from "@mantine/core";
import { Alert, Button, Group } from "@mantine/core";
import { IconCoin } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import classes from "./DonationMessage.module.css";

const DonationMessage: FC<AlertProps> = (props) => {
  const [visible, { close }] = useDisclosure(true);
  if (!visible) return;
  return (
    <Alert icon={<IconCoin />} classNames={classes} {...props}>
      If you find this backlog template useful, please consider making a
      donation. Your support will be greatly appreciated!
      <Group className={classes.buttons}>
        <Button
          component={Link}
          variant="light"
          href="https://boosty.to/hartaithan/donate"
          target="_blank"
          className={classes.button}
          size="xs">
          Donate
        </Button>
        <Button
          onClick={close}
          className={classes.button}
          variant="light"
          size="xs">
          Close
        </Button>
      </Group>
    </Alert>
  );
};

export default DonationMessage;
