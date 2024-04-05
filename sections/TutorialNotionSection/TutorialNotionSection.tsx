import type { FC } from "react";
import { Anchor, Text, Title } from "@mantine/core";

const TutorialNotionSection: FC = () => {
  return (
    <div>
      <Title order={2} mb="sm">
        Set Up Your Notion Integration
      </Title>
      <ul>
        <Text component="li">
          Go to&nbsp;
          <Anchor
            fw="bold"
            c="accented.4"
            href="https://www.notion.so/my-integrations"
            target="_blank">
            Notion
          </Anchor>
          &nbsp;and sign in to your account.
        </Text>
        <Text component="li">
          Click the&nbsp;
          <Text fw="bold" c="accented.4" span>
            &quot;New Integration&quot;
          </Text>
          &nbsp;button, give your integration a name and click the&nbsp;
          <Text fw="bold" c="accented.4" span>
            &quot;Submit&quot;
          </Text>
          &nbsp;button.
        </Text>
        <Text component="li">
          Copy your&nbsp;
          <Text fw="bold" c="accented.4" span>
            Internal Integration Secret.
          </Text>
          &nbsp;You&apos;ll need it later.
        </Text>
      </ul>
    </div>
  );
};

export default TutorialNotionSection;
