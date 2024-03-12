import { updateProgress } from "@/actions/update-progress";
import PageContainer from "@/components/PageContainer/PageContainer";
import ResultAlert from "@/components/ResultAlert/ResultAlert";
import ResultFallback from "@/components/ResultFallback/ResultFallback";
import type { RequestPage } from "@/models/AppModel";
import { Suspense } from "react";

const Result: RequestPage = async (props) => {
  const {
    params: { page },
    searchParams: { session },
  } = props;
  const response = await updateProgress(page, session);
  return <ResultAlert response={response} />;
};

const ProgressPage: RequestPage = async (props) => {
  return (
    <PageContainer w="100%" justify="center" align="center">
      <Suspense fallback={<ResultFallback />}>
        <Result {...props} />
      </Suspense>
    </PageContainer>
  );
};

export default ProgressPage;
