import type { FC } from "react";
import classes from "./HeroSection.module.css";
import { Flex, Group, Text } from "@mantine/core";
import LandingLink from "@/components/Highlight/LandingLink";
import LandingTitle from "@/components/Highlight/LandingTitle";
import LandingHighlight from "@/components/Highlight/LandingHighlight";

const HeroSection: FC = () => {
  return (
    <Flex className={classes.container}>
      <LandingTitle className={classes.title}>
        Effortless Backlog Management
      </LandingTitle>
      <Text className={classes.description}>
        <LandingHighlight>Organize&nbsp;</LandingHighlight>
        your trophy hunting adventures with our Notion template!
        <LandingHighlight>&nbsp;Add&nbsp;</LandingHighlight>
        new games to your backlog,
        <LandingHighlight>&nbsp;prioritize&nbsp;</LandingHighlight>
        your current goals, and
        <LandingHighlight>&nbsp;celebrate&nbsp;</LandingHighlight>
        each victory with a visual showcase.
      </Text>
      <Group className={classes.links}>
        <LandingLink className={classes.link} href="/tutorial">
          How to use it?
        </LandingLink>
        <LandingLink className={classes.link} href="/signIn">
          I already have a template
        </LandingLink>
        <LandingLink className={classes.link} href="/download">
          Get template!
        </LandingLink>
        <LandingLink className={classes.link} href="/help">
          I need help!
        </LandingLink>
      </Group>
    </Flex>
  );
};

export default HeroSection;
