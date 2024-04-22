import type { FC } from "react";
import { Stack, UnstyledButton } from "@mantine/core";
import classes from "./HomeSection.module.css";
import { IconLogout2, IconPlaylistAdd } from "@tabler/icons-react";
import Link from "next/link";
import { signOut } from "@/actions/sign-out";
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
      <form action={signOut}>
        <UnstyledButton className={classes.card} type="submit">
          <IconLogout2
            size="1.2rem"
            color="var(--mantine-color-accent-dark-9)"
          />
          <LandingFeature className={classes.title}>Sign Out</LandingFeature>
        </UnstyledButton>
      </form>
    </Stack>
  );
};

export default HomeSection;
