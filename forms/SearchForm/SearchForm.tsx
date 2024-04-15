"use client";

import { defaultLanguage, languageOptions } from "@/constants/language";
import type { PopoverWidth } from "@mantine/core";
import {
  Anchor,
  Flex,
  Group,
  InputLabel,
  InputWrapper,
  Loader,
  Popover,
  Select,
  TextInput,
} from "@mantine/core";
import { memo } from "react";
import type { FC, RefObject } from "react";
import classes from "./SearchForm.module.css";
import { Text } from "@mantine/core";

interface Props {
  search: string;
  isLoading: boolean;
  handleChange: (value: string) => void;
  languageRef: RefObject<HTMLInputElement>;
}

const LanguagePopover: FC = memo(() => (
  <Popover
    classNames={{ dropdown: classes.dropdown }}
    width={null as unknown as PopoverWidth}
    position="top-end">
    <Popover.Target>
      <Anchor className={classes.link} component="button">
        Not working?
      </Anchor>
    </Popover.Target>
    <Popover.Dropdown>
      <Text size="xs">
        Multilingual trophy lists aren&apos;t available for all games. When a
        game is added with English as its main language, it usually only has an
        English trophy list.
      </Text>
    </Popover.Dropdown>
  </Popover>
));

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
