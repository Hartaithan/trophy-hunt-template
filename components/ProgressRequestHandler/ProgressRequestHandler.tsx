"use client";

import type { FC, ReactElement } from "react";
import { useCallback, useEffect, useState } from "react";
import { updateProgress, updateProgressFetch } from "@/actions/update-progress";
import { Alert, Loader } from "@mantine/core";
import type { ExtendedCustomColors } from "@/@types/mantine";
import classes from "./ProgressRequestHandler.module.css";
import { IconAlertOctagon, IconCheck } from "@tabler/icons-react";

interface Props {
  page: string;
  session?: string;
}

type Status = "loading" | "error" | "success";

const titles: Record<Status, string> = {
  loading: "Updating...",
  error: "Oops...",
  success: "Success!",
};

const colors: Record<Status, ExtendedCustomColors> = {
  loading: "accented",
  error: "red",
  success: "accented",
};

const icons: Record<Status, ReactElement> = {
  loading: <Loader size="1.5rem" />,
  error: <IconAlertOctagon size="1.5rem" />,
  success: <IconCheck size="1.5rem" />,
};

const ProgressRequestHandler: FC<Props> = (props) => {
  const { page, session } = props;
  const [status, setStatus] = useState<Status>("loading");
  const [message, setMessage] = useState<string>(
    "Receiving trophies, don't reload the page...",
  );

  const handleRequest = useCallback(async () => {
    setStatus("loading");
    const fetchRes = await updateProgressFetch(page, session);
    if (fetchRes.status === "error") {
      setMessage(fetchRes.message as string);
      setStatus("error");
      return;
    }
    const updateRes = await updateProgress(page, fetchRes.data!, session);
    if (updateRes.status === "error") {
      setMessage(updateRes.message as string);
      setStatus("error");
      return;
    }
    setMessage(updateRes.message as string);
    setStatus("success");
  }, [page, session]);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  return (
    <Alert
      variant="light"
      color={colors[status]}
      title={titles[status]}
      icon={icons[status]}
      classNames={classes}>
      {message ?? "Message not found"}
    </Alert>
  );
};

export default ProgressRequestHandler;
