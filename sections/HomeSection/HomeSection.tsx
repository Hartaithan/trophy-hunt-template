import type { FC } from "react";
import { Group, Text, UnstyledButton } from "@mantine/core";
import classes from "./HomeSection.module.css";
import { IconLogout2, IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import { featureGradient } from "@/constants/gradients";
import { signOut } from "@/actions/sign-out";

const HomeSection: FC = () => {
  return (
    <Group justify="center" align="center">
      <UnstyledButton component={Link} href="/search" className={classes.card}>
        <IconSearch size="1.2rem" color="var(--mantine-color-accent-dark-9)" />
        <Text
          className={classes.title}
          variant="gradient"
          gradient={featureGradient}>
          Search
        </Text>
      </UnstyledButton>
      <form action={signOut}>
        <UnstyledButton className={classes.card} type="submit">
          <IconLogout2
            size="1.2rem"
            color="var(--mantine-color-accent-dark-9)"
          />
          <Text
            className={classes.title}
            variant="gradient"
            gradient={featureGradient}>
            Sign Out
          </Text>
        </UnstyledButton>
      </form>
    </Group>
  );
};

export default HomeSection;
