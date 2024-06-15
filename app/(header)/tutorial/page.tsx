import PageContainer from "@/components/PageContainer/PageContainer";
import TutorialVideoSection from "@/sections/TutorialVideoSection/TutorialVideoSection";
import TutorialPrerequisitesSection from "@/sections/TutorialPrerequisitesSection/TutorialPrerequisitesSection";
import TutorialNotionSection from "@/sections/TutorialNotionSection/TutorialNotionSection";
import TutorialDownloadSection from "@/sections/TutorialDownloadSection/TutorialDownloadSection";
import TutorialTemplateSection from "@/sections/TutorialTemplateSection/TutorialTemplateSection";
import TutorialAppSection from "@/sections/TutorialAppSection/TutorialAppSection";
import type { FC } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started",
};

const TutorialPage: FC = () => {
  return (
    <PageContainer w="100%" justify="center" gap="xl" pb="xl">
      <TutorialVideoSection />
      <TutorialPrerequisitesSection />
      <TutorialNotionSection />
      <TutorialDownloadSection />
      <TutorialTemplateSection />
      <TutorialAppSection />
    </PageContainer>
  );
};

export default TutorialPage;
