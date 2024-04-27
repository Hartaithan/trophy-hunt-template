import type { FC } from "react";
import { Anchor, Flex, Group, Stack, Text } from "@mantine/core";
import classes from "./HelpContactsSection.module.css";
import LandingTitle from "@/components/Highlight/LandingTitle";
import { IconBrandDiscord, IconMail } from "@tabler/icons-react";

const HelpContactsSection: FC = () => {
  return (
    <Flex className={classes.container}>
      <LandingTitle className={classes.title}>
        Feel free to reach out if you have any questions!
      </LandingTitle>
      <Text className={classes.description}>
        You can always contact me using the details below.
      </Text>
      <Stack className={classes.links}>
        <Group className={classes.link}>
          <IconMail />
          <Anchor href="mailto:hartaithan@gmail.com">
            hartaithan@gmail.com
          </Anchor>
        </Group>
        <Group className={classes.link}>
          <IconBrandDiscord />
          <Anchor
            href="https://discord.com/channels/@me/hartaithan"
            target="_blank">
            @hartaithan
          </Anchor>
        </Group>
      </Stack>
    </Flex>
  );
};

export default HelpContactsSection;
