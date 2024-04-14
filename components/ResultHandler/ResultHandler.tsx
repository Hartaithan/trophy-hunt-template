"use client";

import type { FC } from "react";
import type { ActionResponse } from "@/models/ActionModel";
import { useCallback, useEffect, useState } from "react";
import ResultFallback from "../ResultFallback/ResultFallback";
import ResultAlert from "../ResultAlert/ResultAlert";

interface Props {
  request: Promise<ActionResponse | null>;
}

const ResultHandler: FC<Props> = (props) => {
  const { request } = props;
  const [response, setResponse] = useState<ActionResponse | null>(null);

  const handleRequest = useCallback(async () => {
    const response = await request;
    setResponse(response);
  }, [request]);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  if (response === null) return <ResultFallback />;
  return <ResultAlert response={response} />;
};

export default ResultHandler;
