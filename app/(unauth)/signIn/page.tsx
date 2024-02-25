import PageContainer from "@/components/PageContainer/PageContainer";
import SignInForm from "@/forms/signIn";
import { cookies } from "next/headers";
import type { FC } from "react";
import React from "react";

const getDatabaseID = async (): Promise<string | null> => {
  const id = cookies().get("database-id");
  return id?.value ?? null;
};

const SignInPage: FC = async () => {
  const databaseID = await getDatabaseID();
  return (
    <PageContainer w="100%" justify="center" align="center">
      <SignInForm databaseID={databaseID} />
    </PageContainer>
  );
};

export default SignInPage;
