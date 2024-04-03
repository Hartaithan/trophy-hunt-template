import type { FC } from "react";
import classes from "./HeroSection.module.css";
import { Button, Flex, Group, Text } from "@mantine/core";
import Link from "next/link";
import { titleGradient, linkGradient, highlight } from "@/constants/gradients";

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
          gradient={linkGradient}
          component={Link}
          href="/tutorial">
          How to use it?
        </Button>
        <Button
          className={classes.link}
          variant="gradient"
          gradient={linkGradient}
          component={Link}
          href="/signIn">
          I already have a template
        </Button>
        <Button
          className={classes.link}
          variant="gradient"
          gradient={linkGradient}
          component={Link}
          href="/download">
          Download template
        </Button>
      </Group>
    </Flex>
  );
};

export default HeroSection;
