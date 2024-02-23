import PageContainer from "@/components/PageContainer/PageContainer";
import SignInForm from "@/forms/signIn";
import type { FC } from "react";
import React from "react";

const SignInPage: FC = () => {
  return (
    <PageContainer w="100%" justify="center" align="center">
      <SignInForm />
    </PageContainer>
  );
};

export default SignInPage;
