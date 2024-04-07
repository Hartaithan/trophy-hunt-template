import type { FC } from "react";
import { Group, UnstyledButton } from "@mantine/core";
import classes from "./HomeSection.module.css";
import { IconLogout2, IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import { signOut } from "@/actions/sign-out";
import LandingFeature from "@/components/Highlight/LandingFeature";

const HomeSection: FC = () => {
  return (
    <Group justify="center" align="center">
      <UnstyledButton component={Link} href="/search" className={classes.card}>
        <IconSearch size="1.2rem" color="var(--mantine-color-accent-dark-9)" />
        <LandingFeature className={classes.title}>Search</LandingFeature>
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
    </Group>
  );
};

export default HomeSection;
