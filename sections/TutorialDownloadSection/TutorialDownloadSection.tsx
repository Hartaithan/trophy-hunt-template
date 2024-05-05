import type { FC } from "react";
import { List, ListItem, Title } from "@mantine/core";
import classes from "../../styles/Tutorial.module.css";
import TutorialLink from "@/components/Highlight/TutorialLink";
import TutorialHighlight from "@/components/Highlight/TutorialHighlight";

const TutorialDownloadSection: FC = () => {
  return (
    <div className={classes.container}>
      <Title className={classes.title}>Download the Template</Title>
      <List className={classes.list} type="ordered">
        <ListItem className={classes.item}>
          Go to&nbsp;
          <TutorialLink href="/download">Download Page</TutorialLink>
          &nbsp;and sign in using your GitHub account
        </ListItem>
        <ListItem className={classes.item}>
          Show your appreciation by following&nbsp;
          <TutorialLink href="https://github.com/Hartaithan">
            the profile
          </TutorialLink>
          &nbsp;and starring&nbsp;
          <TutorialLink href="https://github.com/Hartaithan/trophy-hunt-template">
            the repository
          </TutorialLink>
        </ListItem>
        <ListItem className={classes.item}>
          Verify the requirements by clicking on&nbsp;
          <TutorialHighlight>Check requirements</TutorialHighlight>
          &nbsp;and then download the template
        </ListItem>
      </List>
    </div>
  );
};

export default TutorialDownloadSection;
