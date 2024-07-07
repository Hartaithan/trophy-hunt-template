"use client";

import { defaultLanguage, languageOptions } from "@/constants/language";
import {
  ComboboxClearButton,
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
  onClear: () => void;
  handleChange: (value: string) => void;
  languageRef: RefObject<HTMLInputElement>;
}

interface RightSectionProps {
  isClear: boolean;
  isLoading: boolean;
  onClear: () => void;
}

const RightSection: FC<RightSectionProps> = memo((props) => {
  const { isLoading, isClear, onClear } = props;
  if (isLoading) return <Loader size="xs" />;
  if (isClear) return <ComboboxClearButton onClear={onClear} />;
  return null;
});

const SearchForm: FC<Props> = (props) => {
  const { search, isLoading, handleChange, onClear, languageRef } = props;
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
        rightSection={
          <RightSection
            isLoading={isLoading}
            isClear={search.length > 0}
            onClear={onClear}
          />
        }
      />
    </Flex>
  );
};

export default memo(SearchForm);
