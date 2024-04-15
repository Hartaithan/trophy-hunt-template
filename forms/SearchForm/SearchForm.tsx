"use client";

import { defaultLanguage, languageOptions } from "@/constants/language";
import { Flex, Loader, Select, TextInput } from "@mantine/core";
import { memo } from "react";
import type { Dispatch, FC, SetStateAction } from "react";

interface Props {
  search: string;
  isLoading: boolean;
  handleChange: (value: string) => void;
  setLanguage: Dispatch<SetStateAction<string>>;
}

const SearchForm: FC<Props> = (props) => {
  const { search, isLoading, handleChange, setLanguage } = props;
  return (
    <Flex direction="column" w="100%" gap="md">
      <Select
        label="Language"
        placeholder="Select"
        defaultValue={defaultLanguage}
        data={languageOptions}
        onChange={(value) => setLanguage(value ?? "")}
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

export default memo(SearchForm);
