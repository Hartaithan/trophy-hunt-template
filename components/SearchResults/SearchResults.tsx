import type { SearchResult } from "@/models/SearchModel";
import { Stack, Text } from "@mantine/core";
import { memo } from "react";
import type { FC, RefObject } from "react";
import ResultItem from "../ResultItem/ResultItem";

interface Props {
  results: SearchResult[] | null;
  languageRef: RefObject<HTMLInputElement>;
}

const SearchResults: FC<Props> = (props) => {
  const { results, languageRef } = props;
  return (
    <Stack w="100%">
      {results && results.length === 0 && (
        <Text ta="center" fw="bold" mt="xl">
          Nothing found :(
        </Text>
      )}
      {results &&
        results.length > 0 &&
        results.map((result) => (
          <ResultItem
            key={result.path}
            item={result}
            languageRef={languageRef}
          />
        ))}
    </Stack>
  );
};

export default memo(SearchResults);
