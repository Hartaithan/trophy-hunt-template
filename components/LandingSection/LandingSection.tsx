import { Button, Flex, Text } from "@mantine/core";
import Link from "next/link";
import type { FC } from "react";

const LandingSection: FC = () => {
  return (
    <Flex
      direction="column"
      w="100%"
      maw={{ base: "100%", sm: 600 }}
      gap="md"
      align="center">
      <Text>Please sign in</Text>
      <Button component={Link} href="/signIn">
        Sign in!
      </Button>
    </Flex>
  );
};

export default LandingSection;
