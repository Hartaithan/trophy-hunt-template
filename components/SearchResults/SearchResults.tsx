import type { SearchResult } from "@/models/SearchModel";
import { Stack } from "@mantine/core";
import { memo } from "react";
import type { FC, RefObject } from "react";
import ResultItem from "../ResultItem/ResultItem";

interface Props {
  results: SearchResult[];
  languageRef: RefObject<HTMLInputElement>;
}

const SearchResults: FC<Props> = (props) => {
  const { results, languageRef } = props;
  return (
    <Stack w="100%">
      {results.map((result) => (
        <ResultItem key={result.path} item={result} languageRef={languageRef} />
      ))}
    </Stack>
  );
};

export default memo(SearchResults);
