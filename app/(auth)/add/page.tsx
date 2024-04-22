import type { FC } from "react";
import PageContainer from "@/components/PageContainer/PageContainer";
import SearchSection from "@/sections/SearchSection/SearchSection";
import AddGamesMessage from "@/components/AddGamesMessage/AddGamesMessage";

const AddPage: FC = () => {
  return (
    <PageContainer w="100%" justify="center" align="center">
      <AddGamesMessage />
      <SearchSection />
    </PageContainer>
  );
};

export default AddPage;
