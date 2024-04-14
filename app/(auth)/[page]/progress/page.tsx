import { updateProgress } from "@/actions/update-progress";
import PageContainer from "@/components/PageContainer/PageContainer";
import ResultFallback from "@/components/ResultFallback/ResultFallback";
import ResultHandler from "@/components/ResultHandler/ResultHandler";
import type { RequestPage } from "@/models/AppModel";

const ProgressPage: RequestPage = (props) => {
  const {
    params: { page },
    searchParams: { session },
  } = props;

  const request = updateProgress(page, session);

  return (
    <PageContainer w="100%" justify="center" align="center">
      <ResultHandler fallback={<ResultFallback />} request={request} />
    </PageContainer>
  );
};

export default ProgressPage;
