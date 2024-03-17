import type { FC } from "react";
import PageContainer from "@/components/PageContainer/PageContainer";
import DownloadSection from "@/components/DownloadSection/DownloadSection";

const DownloadPage: FC = () => {
  return (
    <PageContainer w="100%" justify="center" align="center">
      <DownloadSection />
    </PageContainer>
  );
};

export default DownloadPage;
