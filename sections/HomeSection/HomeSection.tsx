import type { FC } from "react";
import type { MantineGradient } from "@mantine/core";
import { Text, UnstyledButton } from "@mantine/core";
import classes from "./HomeSection.module.css";
import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";

const gradient: MantineGradient = {
  from: "accented.6",
  to: "accented.3",
  deg: 90,
};

const HomeSection: FC = () => {
  return (
    <UnstyledButton component={Link} href="/search" className={classes.card}>
      <IconSearch size="1.2rem" color="var(--mantine-color-accent-dark-9)" />
      <Text className={classes.title} variant="gradient" gradient={gradient}>
        Search
      </Text>
    </UnstyledButton>
  );
};

export default HomeSection;
