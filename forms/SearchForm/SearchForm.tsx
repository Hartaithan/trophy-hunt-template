"use client";

import { languageOptions } from "@/constants/language";
import { Flex, Loader, Select, TextInput } from "@mantine/core";
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
    <Flex direction="column" w="100%" gap="md">
      <Select
        label="Language"
        placeholder="Select"
        defaultValue="en-us"
        data={languageOptions}
      />
      <TextInput
        label="Search"
        placeholder="Search..."
        value={search}
        onChange={(e) => handleChange(e.target.value)}
        rightSection={isLoading && <Loader size="xs" />}
      />
    </Flex>
  );
};

export default SearchForm;
