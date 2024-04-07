import type { FC } from "react";
import { Anchor, List, ListItem, Text, Title } from "@mantine/core";
import classes from "../../styles/Tutorial.module.css";

const TutorialTemplateSection: FC = () => {
  return (
    <div className={classes.container}>
      <Title className={classes.title}>Prepare the Template</Title>
      <List className={classes.list} type="ordered">
        <Text className={classes.item} ml="var(--paragraph)" mb="sm">
          Once you&apos;ve duplicated the template to your workspace, there are
          two things you need to do:&nbsp;
          <br />
          <Text fw="bold" c="accented.4" span>
            connect the template to the integration
          </Text>
          &nbsp;and find the&nbsp;
          <Text fw="bold" c="accented.4" span>
            Database ID
          </Text>
        </Text>
        <ListItem className={classes.item}>
          To connect the template to the integration, follow these steps:&nbsp;
          <Text fw="bold" c="accented.4" span>
            Menu (•••)
          </Text>
          &nbsp;-&nbsp;
          <Text fw="bold" c="accented.4" span>
            Connect to
          </Text>
          &nbsp;-&nbsp;
          <Text fw="bold" c="accented.4" span>
            [Search for your Integration name]
          </Text>
          &nbsp;-&nbsp;
          <Text fw="bold" c="accented.4" span>
            Confirm
          </Text>
        </ListItem>
        <ListItem className={classes.item}>
          <Text fw="bold" c="accented.4" span>
            The Database ID&nbsp;
          </Text>
          can be found in the template link by following the steps:&nbsp;
          <Text fw="bold" c="accented.4" span>
            Share
          </Text>
          &nbsp;-&nbsp;
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
      </List>
    </div>
  );
};

export default TutorialTemplateSection;
