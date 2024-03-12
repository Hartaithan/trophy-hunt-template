import type { ActionResponse } from "@/models/ActionModel";
import { Alert } from "@mantine/core";
import type { FC } from "react";

interface Props {
  response: ActionResponse | null;
}

const ResultAlert: FC<Props> = (props) => {
  const { response } = props;
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

export default ResultAlert;
