"use client";

import { defaultLanguage, languageOptions } from "@/constants/language";
import {
  Flex,
  Group,
  InputLabel,
  InputWrapper,
  Loader,
  Select,
  TextInput,
} from "@mantine/core";
import { memo } from "react";
import type { FC, RefObject } from "react";
import classes from "./SearchForm.module.css";
import LanguagePopover from "@/components/LanguagePopover/LanguagePopover";

interface Props {
  search: string;
  isLoading: boolean;
  handleChange: (value: string) => void;
  languageRef: RefObject<HTMLInputElement>;
}

const SearchForm: FC<Props> = (props) => {
  const { search, isLoading, handleChange, languageRef } = props;
  return (
    <Flex className={classes.container}>
      <InputWrapper>
        <Group className={classes.group}>
          <InputLabel>Language</InputLabel>
          <LanguagePopover />
        </Group>
        <Select
          ref={languageRef}
          placeholder="Select"
          defaultValue={defaultLanguage}
          data={languageOptions}
        />
      </InputWrapper>
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
