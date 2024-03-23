"use client";

import { checkStar } from "@/actions/check-star";
import { Text } from "@mantine/core";
import { Button, Flex, Group } from "@mantine/core";
import { useSession, signIn, signOut } from "next-auth/react";
import type { FC } from "react";

const DownloadSection: FC = () => {
  const session = useSession();

  const handleCheckStar = async () => {
    const response = await checkStar();
    console.info("response", response);
  };

  return (
    <Flex direction="column" justify="center" align="center">
      {session.status === "authenticated" ? (
        <>
          <Group>
            <Button onClick={handleCheckStar}>Download</Button>
            <Button onClick={() => signOut()}>Sign Out</Button>
          </Group>
          <Text fz="xs" component="pre" mt="lg">
            session: {JSON.stringify(session, null, 2)}
          </Text>
        </>
      ) : (
        <Button onClick={() => signIn("github")}>Sign In</Button>
      )}
    </Flex>
  );
};

export default DownloadSection;
