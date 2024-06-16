import { updateProgress } from "@/actions/update-progress";
import PageContainer from "@/components/PageContainer/PageContainer";
import ResultFallback from "@/components/ResultFallback/ResultFallback";
import ResultHandler from "@/components/ResultHandler/ResultHandler";
import DonationMessage from "@/components/DonationMessage/DonationMessage";
import type { RequestPage } from "@/models/AppModel";

const ProgressPage: RequestPage = (props) => {
  const { page } = props.params;
  const { session } = props.searchParams;
  const request = updateProgress(page, session);
  return (
    <PageContainer w="100%" justify="center" align="center">
      <DonationMessage top="var(--mantine-spacing-lg)" bottom="unset" />
      <ResultHandler fallback={<ResultFallback />} request={request} />
    </PageContainer>
  );
};

export default ProgressPage;
