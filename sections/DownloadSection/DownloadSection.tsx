"use client";

import type { CheckResponse } from "@/actions/check-requirements";
import { checkRequirements } from "@/actions/check-requirements";
import { getDownloadLink } from "@/actions/get-download-link";
import { Anchor, Collapse, Group, Text } from "@mantine/core";
import { Button, Flex, Stepper } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import {
  IconAlertOctagon,
  IconCheck,
  IconDownload,
  IconFileSearch,
  IconLogin2,
  IconLogout2,
} from "@tabler/icons-react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState, type FC } from "react";
import classes from "./DownloadSection.module.css";
import LandingFeature from "@/components/Highlight/LandingFeature";
import GitHubSignInMessage from "@/components/GitHubSignInMessage/GitHubSignInMessage";

const DownloadSection: FC = () => {
  const session = useSession();
  const [check, setCheck] = useState<CheckResponse | null>(null);
  const [isChecking, setChecking] = useState<boolean>(false);
  const [isDownloading, setDownloading] = useState<boolean>(false);

  const handleСheckRequirements = async () => {
    setChecking(true);
    const id = notifications.show({
      loading: true,
      title: "Checking...",
      message:
        "Checking requirements, it shouldn't take long, don't reload the page.",
      autoClose: false,
      withCloseButton: false,
    });
    const response = await checkRequirements(session.data);
    setChecking(false);
    setCheck(response?.data ?? null);
    if (response?.status === "success") {
      notifications.update({
        id,
        loading: false,
        title: "Success!",
        message: response?.message,
        icon: <IconCheck size="1rem" />,
        autoClose: 3000,
      });
    } else {
      notifications.update({
        id,
        loading: false,
        color: "red",
        title: "Oops!",
        message: response?.message,
        icon: <IconAlertOctagon size="1rem" />,
        withCloseButton: true,
      });
    }
  };

  const handleDownload = async () => {
    try {
      setDownloading(true);
      const response = await getDownloadLink(session.data);
      setDownloading(false);
      if (response?.status === "error") {
        notifications.show({
          color: "red",
          title: "Oops!",
          message: response?.message,
          icon: <IconAlertOctagon size="1rem" />,
          autoClose: false,
          withCloseButton: true,
        });
      }
    } catch (error) {
      console.error("getDownloadLink error", error);
      setDownloading(false);
    }
  };

  return (
    <Flex className={classes.container}>
      <GitHubSignInMessage />
      {session.status === "authenticated" ? (
        <Flex className={classes.section}>
          <Group className={classes.buttons}>
            <Button
              variant="subtle"
              onClick={handleСheckRequirements}
              disabled={isChecking}
              leftSection={<IconFileSearch size="1.2rem" />}>
              Check requirements
            </Button>
            <Button
              variant="subtle"
              onClick={() => signOut()}
              disabled={isChecking}
              leftSection={<IconLogout2 size="1.2rem" />}>
              Sign Out
            </Button>
          </Group>
          <Group className={classes.steps}>
            <Stepper
              active={check?.follow ? 1 : -1}
              classNames={{ root: classes.step }}>
              <Stepper.Step
                label="Follow"
                loading={isChecking}
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
            <Stepper
              active={check?.star ? 1 : -1}
              classNames={{ root: classes.step }}>
              <Stepper.Step
                label="Star"
                loading={isChecking}
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
            <Stepper
              active={check?.download ? 1 : -1}
              classNames={{ root: classes.step }}>
              <Stepper.Step
                label="Download"
                loading={isChecking}
                icon={<Text fw="bold">3</Text>}
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
              loading={isDownloading}
              leftSection={<IconDownload size="1.2rem" />}>
              Download!
            </Button>
          </Collapse>
        </Flex>
      ) : (
        <Flex direction="column" align="center">
          <LandingFeature className={classes.title}>
            Alright, before we dive in
          </LandingFeature>
          <Text className={classes.description}>
            Could you quickly sign into your GitHub account?
          </Text>
          <Button
            variant="subtle"
            onClick={() => signIn("github")}
            leftSection={<IconLogin2 size="1.2rem" />}>
            Sign In
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

export default DownloadSection;
