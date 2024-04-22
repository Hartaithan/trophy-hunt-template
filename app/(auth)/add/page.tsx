import type { FC } from "react";
import PageContainer from "@/components/PageContainer/PageContainer";
import SearchSection from "@/sections/SearchSection/SearchSection";

const AddPage: FC = () => {
  return (
    <PageContainer w="100%" justify="center" align="center">
      <SearchSection />
    </PageContainer>
  );
};

export default AddPage;
