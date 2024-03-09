import PageContainer from "@/components/PageContainer/PageContainer";
import ResultFallback from "@/components/ResultFallback/ResultFallback";
import type { RequestPage } from "@/models/AppModel";
import { mockResponse } from "@/utils/mock";
import { Alert } from "@mantine/core";
import { Suspense } from "react";

const Result: RequestPage = async (props) => {
  const {
    params: { page: _page },
    searchParams: { session: _session },
  } = props;
  const response = await mockResponse(2000, {
    status: "success",
    message: "UncheckPage",
  });
  return (
    <Alert
      w="100%"
      variant="light"
      maw={{ base: "100%", sm: 300 }}
      radius="md"
      color={response?.status === "success" ? "accented" : "red"}
      title={response?.status === "success" ? "Success!" : "Oops..."}>
      {response?.message ?? "Message not found"}
    </Alert>
  );
};

const UncheckPage: RequestPage = (props) => {
  return (
    <PageContainer w="100%" justify="center" align="center">
      <Suspense fallback={<ResultFallback />}>
        <Result {...props} />
      </Suspense>
    </PageContainer>
  );
};

export default UncheckPage;
