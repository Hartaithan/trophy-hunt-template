import PageContainer from "@/components/PageContainer/PageContainer";
import HelpContactsSection from "@/sections/HelpContactsSection/HelpContactsSection";
import type { FC } from "react";

const HelpPage: FC = () => {
  return (
    <PageContainer w="100%" justify="center" align="center">
      <HelpContactsSection />
    </PageContainer>
  );
};

export default HelpPage;
