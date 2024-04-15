import type { SearchResult } from "@/models/SearchModel";
import { Stack } from "@mantine/core";
import { memo } from "react";
import type { FC } from "react";
import ResultItem from "../ResultItem/ResultItem";

interface Props {
  results: SearchResult[];
  language: string;
}

const SearchResults: FC<Props> = (props) => {
  const { results, language } = props;
  return (
    <Stack w="100%">
      {results.map((result) => (
        <ResultItem key={result.id} item={result} language={language} />
      ))}
    </Stack>
  );
};

export default memo(SearchResults);
