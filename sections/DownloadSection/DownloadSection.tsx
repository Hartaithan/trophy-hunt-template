"use client";

import type { CheckResponse } from "@/actions/check-requirements";
import { checkRequirements } from "@/actions/check-requirements";
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

  return (
    <Flex direction="column" justify="center" align="center">
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
          <Group mt="lg" gap="xl">
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
              mt="lg"
              variant="subtle"
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
