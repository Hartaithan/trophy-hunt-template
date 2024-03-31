import type { FC } from "react";
import classes from "./HeroSection.module.css";
import type { MantineGradient, TextProps } from "@mantine/core";
import { Button, Flex, Group, Text } from "@mantine/core";
import Link from "next/link";

const titleGradient: MantineGradient = {
  from: "accented.4",
  to: "accented.5",
  deg: 90,
};

const linkGradient: MantineGradient = {
  from: "accented.9",
  to: "accented.8",
};

const highlight: Partial<TextProps> = {
  span: true,
  c: "accented.3",
  fw: "bold",
  inherit: true,
};

const HeroSection: FC = () => {
  return (
    <Flex className={classes.container}>
      <Text
        className={classes.title}
        variant="gradient"
        gradient={titleGradient}>
        Effortless Backlog Management
      </Text>
      <Text className={classes.description}>
        <Text {...highlight}>Organize&nbsp;</Text>
        your trophy hunting adventures with Notion.
        <Text {...highlight}>&nbsp;Add&nbsp;</Text>
        new games to your backlog,
        <Text {...highlight}>&nbsp;prioritize&nbsp;</Text>
        your current goals, and
        <Text {...highlight}>&nbsp;celebrate&nbsp;</Text>
        each victory with a visual showcase.
      </Text>
      <Group className={classes.links}>
        <Button
          className={classes.link}
          variant="gradient"
          gradient={{ ...linkGradient, deg: 0 }}
          component={Link}
          href="/signIn">
          Try it out!
        </Button>
        <Button
          className={classes.link}
          variant="gradient"
          gradient={{ ...linkGradient, deg: 180 }}
          component={Link}
          href="/download">
          Download!
        </Button>
      </Group>
    </Flex>
  );
};

export default HeroSection;
