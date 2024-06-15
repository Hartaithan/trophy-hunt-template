import type { FC } from "react";
import { Flex, Stack, Text, UnstyledButton } from "@mantine/core";
import classes from "./HomeSection.module.css";
import { IconPlaylistAdd, IconUser } from "@tabler/icons-react";
import Link from "next/link";
import LandingFeature from "@/components/Highlight/LandingFeature";
import LandingHighlight from "@/components/Highlight/LandingHighlight";

const HomeSection: FC = () => {
  return (
    <Flex className={classes.container}>
      <LandingHighlight className={classes.heading}>
        Welcome, Trophy Hunter!
      </LandingHighlight>
      <Text className={classes.description}>
        Let&apos;s kick off by adding games to your backlog and tracking your
        trophy progress.
      </Text>
      <Stack className={classes.links}>
        <UnstyledButton component={Link} href="/add" className={classes.card}>
          <IconPlaylistAdd
            size="1.2rem"
            color="var(--mantine-color-accent-dark-9)"
          />
          <LandingFeature className={classes.title}>Add games</LandingFeature>
        </UnstyledButton>
        <UnstyledButton
          component={Link}
          href="/profile"
          className={classes.card}>
          <IconUser size="1.2rem" color="var(--mantine-color-accent-dark-9)" />
          <LandingFeature className={classes.title}>Profile</LandingFeature>
        </UnstyledButton>
      </Stack>
    </Flex>
  );
};

export default HomeSection;
