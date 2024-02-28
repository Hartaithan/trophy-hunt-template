"use client";

import type { SearchResult } from "@/models/SearchModel";
import { Stack } from "@mantine/core";
import type { FC } from "react";
import ResultItem from "../ResultItem/ResultItem";

interface Props {
  results: SearchResult[];
}

const SearchResults: FC<Props> = (props) => {
  const { results } = props;
  return (
    <Stack w="100%">
      {results.map((result) => (
        <ResultItem key={result.id} item={result} />
      ))}
    </Stack>
  );
};

export default SearchResults;
