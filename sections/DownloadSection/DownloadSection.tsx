"use client";

import type { CheckResponse } from "@/actions/check-requirements";
import { checkRequirements } from "@/actions/check-requirements";
import { getDownloadLink } from "@/actions/get-download-link";
import { Alert, Anchor, Collapse, Group, Portal, Text } from "@mantine/core";
import { Button, Flex, Stepper } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import {
  IconAlertOctagon,
  IconCheck,
  IconDownload,
  IconFileSearch,
  IconLogin2,
  IconLogout2,
  IconNote,
} from "@tabler/icons-react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState, type FC } from "react";
import classes from "./DownloadSection.module.css";

const DownloadSection: FC = () => {
  const [check, setCheck] = useState<CheckResponse | null>(null);
  const session = useSession();

  const handleСheckRequirements = async () => {
    notifications.show({
      id: "check",
      loading: true,
      title: "Checking...",
      message:
        "Checking requirements, it shouldn't take long, don't reload the page.",
      autoClose: false,
      withCloseButton: false,
    });
    const { status, message, data } = await checkRequirements(
      session.data?.access_token,
    );
    setCheck(data ?? null);
    if (status === "success") {
      notifications.update({
        id: "check",
        loading: false,
        title: "Success!",
        message: message,
        icon: <IconCheck size="1rem" />,
        autoClose: 3000,
      });
    } else {
      notifications.update({
        id: "check",
        loading: false,
        color: "red",
        title: "Oops!",
        message: message,
        icon: <IconAlertOctagon size="1rem" />,
        withCloseButton: true,
      });
    }
  };

  const handleDownload = async () => {
    try {
      const { status, message } = await getDownloadLink(
        session.data?.access_token,
      );
      if (status === "error") {
        notifications.show({
          color: "red",
          title: "Oops!",
          message,
          icon: <IconAlertOctagon size="1rem" />,
          autoClose: false,
          withCloseButton: true,
        });
      }
    } catch (error) {
      console.error("getDownloadLink error", error);
    }
  };

  return (
    <Flex className={classes.container}>
      <Portal className={classes.portal}>
        <Alert
          title="Developer's Note"
          icon={<IconNote />}
          classNames={classes}>
          Signing in with GitHub is a one-time requirement to download a
          template. This allows to verify if you&apos;ve followed profile and
          starred the repository. Once this step is completed, you won&apos;t
          need to worry about it again. Template is completely free and this
          requirements is a simple way to say &apos;thank you&apos; and show
          your appreciation.
        </Alert>
      </Portal>
      {session.status === "authenticated" ? (
        <Flex direction="column" align="center">
          <Group>
            <Button
              variant="subtle"
              onClick={handleСheckRequirements}
              leftSection={<IconFileSearch size="1.2rem" />}>
              Check requirements
            </Button>
            <Button
              variant="subtle"
              onClick={() => signOut()}
              leftSection={<IconLogout2 size="1.2rem" />}>
              Sign Out
            </Button>
          </Group>
          <Group mt="xl" gap="xl">
            <Stepper active={check?.follow ? 1 : -1}>
              <Stepper.Step
                label="Follow"
                icon={<Text fw="bold">1</Text>}
                description={
                  <Text size="sm">
                    Follow&nbsp;
                    <Anchor
                      href="https://github.com/Hartaithan"
                      target="_blank">
                      my profile
                    </Anchor>
                  </Text>
                }
              />
            </Stepper>
            <Stepper active={check?.star ? 1 : -1}>
              <Stepper.Step
                label="Star"
                icon={<Text fw="bold">2</Text>}
                description={
                  <Text size="sm">
                    Star&nbsp;
                    <Anchor
                      href="https://github.com/Hartaithan/trophy-hunt-template"
                      target="_blank">
                      the repository
                    </Anchor>
                  </Text>
                }
              />
            </Stepper>
            <Stepper active={check?.download ? 1 : -1}>
              <Stepper.Step
                icon={<Text fw="bold">3</Text>}
                label="Download"
                description={
                  <Text size="sm">Thanks! Your link will be below!</Text>
                }
              />
            </Stepper>
          </Group>
          <Collapse in={check?.download ?? false}>
            <Button
              mt="xl"
              variant="subtle"
              onClick={handleDownload}
              leftSection={<IconDownload size="1.2rem" />}>
              Download!
            </Button>
          </Collapse>
        </Flex>
      ) : (
        <Button
          variant="subtle"
          onClick={() => signIn("github")}
          leftSection={<IconLogin2 size="1.2rem" />}>
          Sign In
        </Button>
      )}
    </Flex>
  );
};

export default DownloadSection;
