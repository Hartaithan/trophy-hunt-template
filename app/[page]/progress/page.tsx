import PageContainer from "@/components/PageContainer/PageContainer";
import DonationMessage from "@/components/DonationMessage/DonationMessage";
import ProgressRequestHandler from "@/components/ProgressRequestHandler/ProgressRequestHandler";
import type { RequestPage } from "@/models/AppModel";

const ProgressPage: RequestPage = (props) => {
  const { page } = props.params;
  const { session } = props.searchParams;
  return (
    <PageContainer w="100%" justify="center" align="center">
      <DonationMessage top="var(--mantine-spacing-lg)" bottom="unset" />
      <ProgressRequestHandler page={page} session={session} />
    </PageContainer>
  );
};

export default ProgressPage;
