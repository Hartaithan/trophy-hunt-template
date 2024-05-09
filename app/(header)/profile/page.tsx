import type { FC } from "react";
import PageContainer from "@/components/PageContainer/PageContainer";
import ProfileForm from "@/forms/ProfileForm/ProfileForm";
import { getDatabaseID, getNotionToken } from "@/utils/notion";
import type { ProfileFormValues } from "@/models/ProfileModel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

const getFormValues = (): ProfileFormValues => {
  const databaseID = getDatabaseID();
  const notionToken = getNotionToken();
  return { databaseID, notionToken };
};

const ProfilePage: FC = () => {
  const values = getFormValues();
  return (
    <PageContainer w="100%" justify="center" align="center">
      <ProfileForm values={values} />
    </PageContainer>
  );
};

export default ProfilePage;
