import type { FC } from "react";
import type { ProfileFormValues } from "@/models/ProfileModel";
import { Button, Flex, TextInput } from "@mantine/core";
import CopyValueButton from "@/components/CopyButton/CopyButton";
import { signOut } from "@/actions/sign-out";

interface Props {
  values: ProfileFormValues;
}

const ProfileForm: FC<Props> = (props) => {
  const { values } = props;
  return (
    <Flex
      component="form"
      action={signOut}
      direction="column"
      w="100%"
      maw={{ base: "100%", sm: 400 }}
      gap="md">
      <TextInput
        label="Notion Secret"
        value={values.notionToken}
        rightSection={<CopyValueButton value={values.notionToken} />}
        readOnly
      />
      <TextInput
        label="Database ID"
        value={values.databaseID}
        rightSection={<CopyValueButton value={values.notionToken} />}
        readOnly
      />
      <Button type="submit" fullWidth mt="md" variant="light" color="red">
        Sign Out
      </Button>
    </Flex>
  );
};

export default ProfileForm;
