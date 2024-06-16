import type { FC } from "react";
import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer/PageContainer";
import SearchSection from "@/sections/SearchSection/SearchSection";
import AddGamesMessage from "@/components/AddGamesMessage/AddGamesMessage";
import DonationMessage from "@/components/DonationMessage/DonationMessage";

export const metadata: Metadata = {
  title: "Adding Games",
};

const AddPage: FC = () => {
  return (
    <PageContainer w="100%" justify="center" align="center">
      <DonationMessage />
      <AddGamesMessage />
      <SearchSection />
    </PageContainer>
  );
};

export default AddPage;
