"use client";

import { Box, Loader, TextInput } from "@mantine/core";
import {
  useCallback,
  type Dispatch,
  type FC,
  type SetStateAction,
} from "react";

interface Props {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const SearchForm: FC<Props> = (props) => {
  const { search, setSearch, isLoading, setLoading } = props;

  const handleChange = useCallback(
    (value: string) => {
      if (value.trim().length > 0) setLoading(true);
      setSearch(value);
    },
    [setLoading, setSearch],
  );

  return (
    <Box w="100%">
      <TextInput
        label="Search"
        placeholder="Search..."
        value={search}
        onChange={(e) => handleChange(e.target.value)}
        rightSection={isLoading && <Loader size="xs" />}
      />
    </Box>
  );
};

export default SearchForm;
