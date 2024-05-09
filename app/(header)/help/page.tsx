import PageContainer from "@/components/PageContainer/PageContainer";
import HelpContactsSection from "@/sections/HelpContactsSection/HelpContactsSection";
import HelpFAQSection from "@/sections/HelpFAQSection/HelpFAQSection";
import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = {
  title: "Help",
};

const HelpPage: FC = () => {
  return (
    <PageContainer w="100%" justify="center" align="center">
      <HelpFAQSection />
      <HelpContactsSection />
    </PageContainer>
  );
};

export default HelpPage;
