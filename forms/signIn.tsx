"use client";

import type { FC } from "react";
import { Box, Button, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

const SignInForm: FC = () => {
  const form = useForm({
    initialValues: {
      token: "",
      database: "",
    },
  });

  const handleSubmit = (values: typeof form.values): void => {
    console.info("values", values);
  };

  return (
    <Box
      component="form"
      w="100%"
      maw={{ base: "95%", sm: 400 }}
      onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <TextInput label="Notion Token" />
        <TextInput label="Database ID" />
        <Button type="submit">Submit</Button>
      </Stack>
    </Box>
  );
};

export default SignInForm;
