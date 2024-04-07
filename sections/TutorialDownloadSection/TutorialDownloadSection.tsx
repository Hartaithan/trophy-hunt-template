import type { FC } from "react";
import { Anchor, List, ListItem, Text, Title } from "@mantine/core";
import classes from "../../styles/Tutorial.module.css";

const TutorialDownloadSection: FC = () => {
  return (
    <div className={classes.container}>
      <Title className={classes.title}>Download the Template</Title>
      <List className={classes.list} type="ordered">
        <ListItem className={classes.item}>
          Go to&nbsp;
          <Anchor
            fw="bold"
            c="accented.4"
            href="https://trophy-hunt-template.vercel.app/download"
            target="_blank">
            Download Page
          </Anchor>
          &nbsp;and sign in using your GitHub account
        </ListItem>
        <ListItem className={classes.item}>
          Show your appreciation by following&nbsp;
          <Anchor
            fw="bold"
            c="accented.4"
            href="https://github.com/Hartaithan"
            target="_blank">
            the profile
          </Anchor>
          &nbsp;and starring&nbsp;
          <Anchor
            fw="bold"
            c="accented.4"
            href="https://github.com/Hartaithan/trophy-hunt-template"
            target="_blank">
            the repository
          </Anchor>
        </ListItem>
        <ListItem className={classes.item}>
          Verify the requirements by clicking on&nbsp;
          <Text fw="bold" c="accented.4" span>
            Check requirements
          </Text>
          &nbsp;and then download the template
        </ListItem>
      </List>
    </div>
  );
};

export default TutorialDownloadSection;
