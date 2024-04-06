import type { FC } from "react";
import { Anchor, Text, Title } from "@mantine/core";

const TutorialDownloadSection: FC = () => {
  return (
    <div>
      <Title order={2} mb="sm">
        Download the Template
      </Title>
      <ul>
        <Text component="li">
          Go to&nbsp;
          <Anchor
            fw="bold"
            c="accented.4"
            href="https://trophy-hunt-template.vercel.app/download"
            target="_blank">
            Download Page
          </Anchor>
          &nbsp;and sign in with your GitHub account
        </Text>
        <Text component="li">
          Show your appreciation by following&nbsp;
          <Anchor
            fw="bold"
            c="accented.4"
            href="https://github.com/Hartaithan"
            target="_blank">
            profile
          </Anchor>
          &nbsp;and starring&nbsp;
          <Anchor
            fw="bold"
            c="accented.4"
            href="https://github.com/Hartaithan/trophy-hunt-template"
            target="_blank">
            the repository
          </Anchor>
        </Text>
        <Text component="li">
          Verify the requirements by clicking on&nbsp;
          <Text fw="bold" c="accented.4" span>
            Check requirements
          </Text>
          &nbsp;and then download the template
        </Text>
      </ul>
    </div>
  );
};

export default TutorialDownloadSection;
