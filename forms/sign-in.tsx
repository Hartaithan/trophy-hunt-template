"use client";

import type { FC } from "react";
import { Box, Button, Stack, TextInput } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import type { SignInPayload } from "@/models/AuthModel";
import { signIn } from "@/actions/sign-in";
import { useRouter } from "next/navigation";

interface Props {
  databaseID: string | null;
}

const SignInForm: FC<Props> = (props) => {
  const { databaseID } = props;
  const router = useRouter();
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

  const handleSubmit = async (values: typeof form.values): Promise<void> => {
    const response = await signIn(values);
    if (response.status === "success") {
      router.push("/");
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
          label="Notion Token"
          placeholder="Enter your Notion token"
          {...form.getInputProps("notion_token")}
        />
        <TextInput
          label="Database ID"
          placeholder="Enter your Trophy Hunt database ID"
          {...form.getInputProps("database_id")}
        />
        <Button type="submit" disabled={!form.isValid()}>
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

export default SignInForm;
