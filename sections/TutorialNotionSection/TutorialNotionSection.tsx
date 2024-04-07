import type { FC } from "react";
import { Anchor, List, ListItem, Text, Title } from "@mantine/core";
import classes from "../../styles/Tutorial.module.css";

const TutorialNotionSection: FC = () => {
  return (
    <div className={classes.container}>
      <Title className={classes.title}>Set Up Your Notion Integration</Title>
      <List className={classes.list} type="ordered">
        <ListItem className={classes.item}>
          Go to&nbsp;
          <Anchor
            fw="bold"
            c="accented.4"
            href="https://www.notion.so/my-integrations"
            target="_blank">
            Notion Integrations
          </Anchor>
          &nbsp;and sign in to your account
        </ListItem>
        <ListItem className={classes.item}>
          Click the&nbsp;
          <Text fw="bold" c="accented.4" span>
            New Integration
          </Text>
          &nbsp;button, give your integration a name and click the&nbsp;
          <Text fw="bold" c="accented.4" span>
            Submit
          </Text>
          &nbsp;button
        </ListItem>
        <ListItem className={classes.item}>
          Copy your&nbsp;
          <Text fw="bold" c="accented.4" span>
            Internal Integration Secret.
          </Text>
          &nbsp;You&apos;ll need it later
        </ListItem>
      </List>
    </div>
  );
};

export default TutorialNotionSection;
