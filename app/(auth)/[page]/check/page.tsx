import PageContainer from "@/components/PageContainer/PageContainer";
import ResultAlert from "@/components/ResultAlert/ResultAlert";
import ResultFallback from "@/components/ResultFallback/ResultFallback";
import type { RequestPage } from "@/models/AppModel";
import { mockResponse } from "@/utils/mock";
import { Suspense } from "react";

const Result: RequestPage = async (props) => {
  const {
    params: { page: _page },
    searchParams: { session: _session },
  } = props;
  const response = await mockResponse(2000, {
    status: "success",
    message: "CheckPage",
  });
  return <ResultAlert response={response} />;
};

const CheckPage: RequestPage = (props) => {
  return (
    <PageContainer w="100%" justify="center" align="center">
      <Suspense fallback={<ResultFallback />}>
        <Result {...props} />
      </Suspense>
    </PageContainer>
  );
};

export default CheckPage;
