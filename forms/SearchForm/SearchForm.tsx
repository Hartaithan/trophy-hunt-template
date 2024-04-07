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
  handleReset: () => void;
}

const SearchForm: FC<Props> = (props) => {
  const { search, setSearch, isLoading, setLoading, handleReset } = props;

  const handleChange = useCallback(
    (value: string) => {
      if (value.trim().length === 0) {
        handleReset();
      } else {
        setLoading(true);
      }
      setSearch(value);
    },
    [handleReset, setLoading, setSearch],
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
