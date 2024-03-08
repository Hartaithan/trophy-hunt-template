import { updateProgress } from "@/actions/update-progress";
import PageContainer from "@/components/PageContainer/PageContainer";
import type { RequestPage } from "@/models/AppModel";

const ProgressPage: RequestPage = async (props) => {
  const {
    params: { page },
    searchParams: { session },
  } = props;

  const response = await updateProgress(page, session);

  return (
    <PageContainer w="100%" justify="center" align="center">
      ProgressPage
      <pre>
        {JSON.stringify(
          { props: props, page: page, session: session, response: response },
          null,
          2,
        )}
      </pre>
    </PageContainer>
  );
};

export default ProgressPage;
