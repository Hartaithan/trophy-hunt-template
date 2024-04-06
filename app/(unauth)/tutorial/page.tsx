import PageContainer from "@/components/PageContainer/PageContainer";
import TutorialAppSection from "@/sections/TutorialAppSection/TutorialAppSection";
import TutorialDownloadSection from "@/sections/TutorialDownloadSection/TutorialDownloadSection";
import TutorialNotionSection from "@/sections/TutorialNotionSection/TutorialNotionSection";
import type { FC } from "react";

const TutorialPage: FC = () => {
  return (
    <PageContainer w="100%" justify="center" gap="xl" py="3rem">
      <TutorialNotionSection />
      <TutorialDownloadSection />
      <TutorialAppSection />
    </PageContainer>
  );
};

export default TutorialPage;
