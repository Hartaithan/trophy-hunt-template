import type { FC } from "react";
import { List, ListItem, Text, Title } from "@mantine/core";
import classes from "../../styles/Tutorial.module.css";
import TutorialHighlight from "@/components/Highlight/TutorialHighlight";
import TutorialLink from "@/components/Highlight/TutorialLink";

const TutorialTemplateSection: FC = () => {
  return (
    <div className={classes.container}>
      <Title className={classes.title}>Prepare the Template</Title>
      <List className={classes.list} type="ordered">
        <Text className={classes.item} ml="var(--paragraph)" mb="sm">
          Once you&apos;ve duplicated the template to your workspace, there are
          two things you need to do:&nbsp;
          <br />
          <TutorialHighlight>
            connect the template to the integration
          </TutorialHighlight>
          &nbsp;and find the&nbsp;
          <TutorialHighlight>Database ID</TutorialHighlight>
        </Text>
        <ListItem className={classes.item}>
          To connect the template to the integration, follow these steps:&nbsp;
          <TutorialHighlight>Menu (•••)</TutorialHighlight>
          &nbsp;-&nbsp;
          <TutorialHighlight>Connect to</TutorialHighlight>
          &nbsp;-&nbsp;
          <TutorialHighlight>
            [Search for your Integration name]
          </TutorialHighlight>
          &nbsp;-&nbsp;
          <TutorialHighlight>Confirm</TutorialHighlight>
        </ListItem>
        <ListItem className={classes.item}>
          <TutorialHighlight>The Database ID&nbsp;</TutorialHighlight>
          can be found in the template link by following the steps:&nbsp;
          <TutorialHighlight>Share</TutorialHighlight>
          &nbsp;-&nbsp;
          <TutorialHighlight>Copy link</TutorialHighlight>
        </ListItem>
        <ListItem className={classes.item}>
          Either manually extract the ID from the link or use the handy tool
          provided on the&nbsp;
          <TutorialLink href="https://trophy-hunt-template.vercel.app/signIn">
            login page
          </TutorialLink>
        </ListItem>
      </List>
    </div>
  );
};

export default TutorialTemplateSection;
