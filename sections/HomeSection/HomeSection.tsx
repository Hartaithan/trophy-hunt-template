import type { FC } from "react";
import { Stack, UnstyledButton } from "@mantine/core";
import classes from "./HomeSection.module.css";
import { IconPlaylistAdd, IconUser } from "@tabler/icons-react";
import Link from "next/link";
import LandingFeature from "@/components/Highlight/LandingFeature";

const HomeSection: FC = () => {
  return (
    <Stack className={classes.container}>
      <UnstyledButton component={Link} href="/add" className={classes.card}>
        <IconPlaylistAdd
          size="1.2rem"
          color="var(--mantine-color-accent-dark-9)"
        />
        <LandingFeature className={classes.title}>Add games</LandingFeature>
      </UnstyledButton>
      <UnstyledButton component={Link} href="/profile" className={classes.card}>
        <IconUser size="1.2rem" color="var(--mantine-color-accent-dark-9)" />
        <LandingFeature className={classes.title}>Profile</LandingFeature>
      </UnstyledButton>
    </Stack>
  );
};

export default HomeSection;
