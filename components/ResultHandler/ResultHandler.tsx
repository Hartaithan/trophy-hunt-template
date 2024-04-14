"use client";

import type { FC, ReactElement } from "react";
import type { ActionResponse } from "@/models/ActionModel";
import { useCallback, useEffect, useState } from "react";
import ResultAlert from "../ResultAlert/ResultAlert";

interface Props {
  fallback: ReactElement;
  request: Promise<ActionResponse | null>;
}

const ResultHandler: FC<Props> = (props) => {
  const { fallback, request } = props;
  const [response, setResponse] = useState<ActionResponse | null>(null);

  const handleRequest = useCallback(async () => {
    const response = await request;
    setResponse(response);
  }, [request]);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  if (response === null) return fallback;
  return <ResultAlert response={response} />;
};

export default ResultHandler;
