import SignInForm from "@/forms/signIn";
import { Flex } from "@mantine/core";
import type { FC } from "react";
import React from "react";

const SignInPage: FC = () => {
  return (
    <Flex w="100%" justify="center" align="center" direction="column">
      <SignInForm />
    </Flex>
  );
};

export default SignInPage;
