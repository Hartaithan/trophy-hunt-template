import type { FC } from "react";
import { Anchor, List, ListItem, Text, Title } from "@mantine/core";
import classes from "../../styles/Tutorial.module.css";

const TutorialAppSection: FC = () => {
  return (
    <div className={classes.container}>
      <Title className={classes.title}>Start Adding Games!</Title>
      <List className={classes.list} type="ordered">
        <ListItem className={classes.item}>
          Once you&apos;ve duplicated the template to your workspace, locate
          the&nbsp;
          <Text fw="bold" c="accented.4" span>
            Database ID
          </Text>
        </ListItem>
        <ListItem className={classes.item}>
          You can find it in the template page link by selecting&nbsp;
          <Text fw="bold" c="accented.4" span>
            Share
          </Text>
          &nbsp;and&nbsp;
          <Text fw="bold" c="accented.4" span>
            Copy link
          </Text>
        </ListItem>
        <ListItem className={classes.item}>
          Either manually extract the ID from the link or use the handy tool
          provided on the&nbsp;
          <Anchor
            fw="bold"
            c="accented.4"
            href="https://trophy-hunt-template.vercel.app/signIn"
            target="_blank">
            login page
          </Anchor>
        </ListItem>
        <ListItem className={classes.item}>
          On the&nbsp;
          <Anchor
            fw="bold"
            c="accented.4"
            href="https://trophy-hunt-template.vercel.app/signIn"
            target="_blank">
            login page
          </Anchor>
          , enter your&nbsp;
          <Text fw="bold" c="accented.4" span>
            Notion Secret
          </Text>
          &nbsp;and&nbsp;
          <Text fw="bold" c="accented.4" span>
            Database ID
          </Text>
        </ListItem>
        <ListItem className={classes.item}>
          <Text fw="bold" c="accented.4" span>
            You&apos;re all set!
          </Text>
          &nbsp;Head over to the search page to start adding games to your
          collection.
        </ListItem>
      </List>
    </div>
  );
};

export default TutorialAppSection;
