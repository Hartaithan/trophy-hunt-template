import type { FC } from "react";
import { Anchor, Text, Title } from "@mantine/core";

const TutorialAppSection: FC = () => {
  return (
    <div>
      <Title order={2} mb="sm">
        Start Adding Games!
      </Title>
      <ul>
        <Text component="li">
          Once you&apos;ve duplicated the template to your workspace, locate
          the&nbsp;
          <Text fw="bold" c="accented.4" span>
            Database ID
          </Text>
        </Text>
        <Text component="li">
          You can find it in the template page link by selecting&nbsp;
          <Text fw="bold" c="accented.4" span>
            Share
          </Text>
          &nbsp;and&nbsp;
          <Text fw="bold" c="accented.4" span>
            Copy link
          </Text>
        </Text>
        <Text component="li">
          Either manually extract the ID from the link or use the handy tool
          provided on the&nbsp;
          <Anchor
            fw="bold"
            c="accented.4"
            href="https://trophy-hunt-template.vercel.app/signIn"
            target="_blank">
            login page
          </Anchor>
        </Text>
        <Text component="li">
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
        </Text>
        <Text component="li">
          <Text fw="bold" c="accented.4" span>
            You&apos;re all set!
          </Text>
          &nbsp;Head over to the search page to start adding games to your
          collection.
        </Text>
      </ul>
    </div>
  );
};

export default TutorialAppSection;
