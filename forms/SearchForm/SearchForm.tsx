"use client";

import { defaultLanguage, languageOptions } from "@/constants/language";
import { Flex, Loader, Select, TextInput } from "@mantine/core";
import { memo } from "react";
import type { FC, RefObject } from "react";

interface Props {
  search: string;
  isLoading: boolean;
  handleChange: (value: string) => void;
  languageRef: RefObject<HTMLInputElement>;
}

const SearchForm: FC<Props> = (props) => {
  const { search, isLoading, handleChange, languageRef } = props;
  return (
    <Flex direction="column" w="100%" gap="md">
      <Select
        ref={languageRef}
        label="Language"
        placeholder="Select"
        defaultValue={defaultLanguage}
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

export default memo(SearchForm);
