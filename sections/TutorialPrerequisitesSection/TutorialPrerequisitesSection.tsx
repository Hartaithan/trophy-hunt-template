import type { FC } from "react";
import { List, ListItem, Text, Title } from "@mantine/core";
import classes from "../../styles/Tutorial.module.css";
import TutorialHighlight from "@/components/Highlight/TutorialHighlight";
import TutorialLink from "@/components/Highlight/TutorialLink";

const TutorialPrerequisitesSection: FC = () => {
  return (
    <div className={classes.container}>
      <Title className={classes.title}>Prerequisites</Title>
      <List className={classes.list}>
        <Text className={classes.item} ml="var(--paragraph)" mb="sm">
          Before you begin,&nbsp;
          <TutorialHighlight>ensure you have the following</TutorialHighlight>
        </Text>
        <ListItem className={classes.item}>
          Notion account. You can create one&nbsp;
          <TutorialLink href="https://www.notion.so/signup">here</TutorialLink>
        </ListItem>
        <ListItem className={classes.item}>
          GitHub account. You can create one&nbsp;
          <TutorialLink href="https://github.com/signup">here</TutorialLink>
        </ListItem>
      </List>
    </div>
  );
};

export default TutorialPrerequisitesSection;
