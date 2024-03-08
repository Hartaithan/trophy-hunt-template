import PageContainer from "@/components/PageContainer/PageContainer";
import type { RequestPage } from "@/models/AppModel";

const CheckPage: RequestPage = (props) => {
  const { params, searchParams } = props;
  const { page } = params;
  const { session } = searchParams;
  return (
    <PageContainer w="100%" justify="center" align="center">
      CheckPage
      <pre>
        {JSON.stringify(
          { props: props, page: page, session: session },
          null,
          2,
        )}
      </pre>
    </PageContainer>
  );
};

export default CheckPage;
