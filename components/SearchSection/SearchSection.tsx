"use client";

import type { FC } from "react";
import { Flex } from "@mantine/core";
import SearchForm from "@/forms/search";
import SearchResults from "../SearchResults/SearchResults";

const SearchSection: FC = () => {
  return (
    <Flex direction="column" w="100%" maw={{ base: "95%", sm: 400 }} gap="md">
      <SearchForm />
      <SearchResults />
    </Flex>
  );
};

export default SearchSection;
