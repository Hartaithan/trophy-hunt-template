import type { SearchResult } from "@/models/SearchModel";
import { Text } from "@mantine/core";
import type { FC } from "react";

interface Props {
  results: SearchResult[];
}

const SearchResults: FC<Props> = (props) => {
  const { results } = props;
  return (
    <Text component="pre" size="xs">
      {JSON.stringify(results, null, 2)}
    </Text>
  );
};

export default SearchResults;
