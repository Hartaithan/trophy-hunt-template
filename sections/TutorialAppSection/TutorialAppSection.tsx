import type { FC } from "react";
import { List, ListItem, Title } from "@mantine/core";
import classes from "../../styles/Tutorial.module.css";
import TutorialLink from "@/components/Highlight/TutorialLink";
import TutorialHighlight from "@/components/Highlight/TutorialHighlight";

const TutorialAppSection: FC = () => {
  return (
    <div className={classes.container}>
      <Title className={classes.title}>Start Adding Games!</Title>
      <List className={classes.list} type="ordered">
        <ListItem className={classes.item}>
          On the&nbsp;
          <TutorialLink href="https://trophy-hunt-template.vercel.app/signIn">
            login page
          </TutorialLink>
          , enter your&nbsp;
          <TutorialHighlight>Notion Secret</TutorialHighlight>
          &nbsp;and&nbsp;
          <TutorialHighlight>Database ID</TutorialHighlight>
        </ListItem>
        <ListItem className={classes.item}>
          <TutorialHighlight>You&apos;re all set!</TutorialHighlight>
          &nbsp;Head over to the&nbsp;
          <TutorialLink href="https://trophy-hunt-template.vercel.app/signIn">
            game addition page
          </TutorialLink>
          &nbsp;to start building your backlog
        </ListItem>
      </List>
    </div>
  );
};

export default TutorialAppSection;
