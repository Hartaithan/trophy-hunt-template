"use client";

import type { ChangeEventHandler } from "react";
import { useCallback, useState, type FC } from "react";
import {
  Box,
  Button,
  Input,
  InputDescription,
  InputLabel,
  InputWrapper,
  Loader,
  Stack,
  TextInput,
} from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import type { SignInPayload } from "@/models/AuthModel";
import { signIn } from "@/actions/sign-in";
import { useRouter } from "next/navigation";
import { extractDatabaseID } from "@/utils/auth";

interface Props {
  databaseID: string | null;
}

const SignInForm: FC<Props> = (props) => {
  const { databaseID } = props;
  const { push } = useRouter();
  const [isLoading, setLoading] = useState<boolean>(false);

  const form = useForm<SignInPayload>({
    initialValues: {
      notion_token: "",
      database_id: databaseID ?? "",
    },
    validate: {
      notion_token: isNotEmpty("Notion token is empty"),
      database_id: isNotEmpty("Database ID is empty"),
    },
  });

  const handleDatabaseID: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const { value } = e.target;
      const extracted = extractDatabaseID(value);
      form.setFieldValue("database_id", extracted);
    },
    [form],
  );

  const handleSubmit = async (values: typeof form.values): Promise<void> => {
    setLoading(true);
    const response = await signIn(values);
    if (response.status === "success") {
      push("/");
    } else {
      setLoading(false);
    }
  };

  return (
    <Box
      component="form"
      w="100%"
      maw={{ base: "100%", sm: 400 }}
      onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <TextInput
          label="Notion Secret"
          placeholder="Enter your Notion secret"
          {...form.getInputProps("notion_token")}
        />
        <InputWrapper>
          <InputLabel>Database ID</InputLabel>
          <Input
            placeholder="Enter your Trophy Hunt database ID"
            {...form.getInputProps("database_id")}
            onChange={handleDatabaseID}
          />
          <InputDescription mt="xs">
            Paste the Trophy Hunt Page link here, I&apos;ll extract ID for you.
          </InputDescription>
        </InputWrapper>
        <Button
          type="submit"
          disabled={!form.isValid() || isLoading}
          rightSection={isLoading && <Loader size="xs" />}>
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

export default SignInForm;
