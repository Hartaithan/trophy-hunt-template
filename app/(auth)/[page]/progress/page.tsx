import { updateProgress } from "@/actions/update-progress";
import PageContainer from "@/components/PageContainer/PageContainer";
import type { RequestPage } from "@/models/AppModel";
import { Alert, Center, Loader, Skeleton } from "@mantine/core";
import { Suspense, type FC } from "react";

const Fallback: FC = () => (
  <Center pos="relative" h={87} w="100%" maw={{ base: "100%", sm: 300 }}>
    <Skeleton h="100%" w="100%" radius="md" />
    <Loader pos="absolute" type="bars" />
  </Center>
);

const Result: RequestPage = async (props) => {
  const {
    params: { page },
    searchParams: { session },
  } = props;
  const response = await updateProgress(page, session);
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

const ProgressPage: RequestPage = async (props) => {
  return (
    <PageContainer w="100%" justify="center" align="center">
      <Suspense fallback={<Fallback />}>
        <Result {...props} />
      </Suspense>
    </PageContainer>
  );
};

export default ProgressPage;
