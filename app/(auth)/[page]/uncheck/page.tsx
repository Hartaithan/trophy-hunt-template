import PageContainer from "@/components/PageContainer/PageContainer";
import ResultHandler from "@/components/ResultHandler/ResultHandler";
import type { RequestPage } from "@/models/AppModel";
import { mockResponse } from "@/utils/mock";

const UncheckPage: RequestPage = (props) => {
  const {
    params: { page: _page },
    searchParams: { session: _session },
  } = props;

  const request = mockResponse(2000, {
    status: "success",
    message: "UncheckPage",
  });

  return (
    <PageContainer w="100%" justify="center" align="center">
      <ResultHandler request={request} />
    </PageContainer>
  );
};

export default UncheckPage;
