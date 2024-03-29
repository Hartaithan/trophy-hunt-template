"use client";

import { checkRequirements } from "@/actions/check-requirements";
import { TEMPLATE_URL } from "@/constants/variables";
import { Button, Flex, Group } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconAlertOctagon, IconCheck } from "@tabler/icons-react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import type { FC } from "react";

const DownloadSection: FC = () => {
  const session = useSession();
  const router = useRouter();

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
    const { status, message } = await checkRequirements(
      session.data?.access_token,
    );
    if (status === "success") {
      router.push(TEMPLATE_URL);
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
        <Group>
          <Button onClick={handleСheckRequirements}>Download</Button>
          <Button onClick={() => signOut()}>Sign Out</Button>
        </Group>
      ) : (
        <Button onClick={() => signIn("github")}>Sign In</Button>
      )}
    </Flex>
  );
};

export default DownloadSection;
