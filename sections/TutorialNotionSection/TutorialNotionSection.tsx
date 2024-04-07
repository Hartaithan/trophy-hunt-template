import type { FC } from "react";
import { List, ListItem, Title } from "@mantine/core";
import classes from "../../styles/Tutorial.module.css";
import TutorialLink from "@/components/Highlight/TutorialLink";
import TutorialHighlight from "@/components/Highlight/TutorialHighlight";

const TutorialNotionSection: FC = () => {
  return (
    <div className={classes.container}>
      <Title className={classes.title}>Set Up Your Notion Integration</Title>
      <List className={classes.list} type="ordered">
        <ListItem className={classes.item}>
          Go to&nbsp;
          <TutorialLink href="https://www.notion.so/my-integrations">
            Notion Integrations
          </TutorialLink>
          &nbsp;and sign in to your account
        </ListItem>
        <ListItem className={classes.item}>
          Click the&nbsp;
          <TutorialHighlight>New Integration</TutorialHighlight>
          &nbsp;button, give your integration a name and click the&nbsp;
          <TutorialHighlight>Submit</TutorialHighlight>
          &nbsp;button
        </ListItem>
        <ListItem className={classes.item}>
          Copy your&nbsp;
          <TutorialHighlight>Internal Integration Secret.</TutorialHighlight>
          &nbsp;You&apos;ll need it later
        </ListItem>
      </List>
    </div>
  );
};

export default TutorialNotionSection;
