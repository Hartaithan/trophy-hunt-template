"use client";

import { useState, type FC, useEffect, useCallback } from "react";
import { Flex } from "@mantine/core";
import SearchForm from "@/forms/search";
import SearchResults from "../SearchResults/SearchResults";
import type { SearchResult } from "@/models/SearchModel";
import { useDebouncedValue } from "@mantine/hooks";
import { searchByQuery } from "@/actions/search";

const SearchSection: FC = () => {
  const [search, setSearch] = useState<string>("");
  const [debounced] = useDebouncedValue(search, 1500);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleDebouncedChange = useCallback(async () => {
    const response = await searchByQuery(debounced);
    if (response.status === "success") {
      setResults(response.data?.results ?? []);
      setLoading(false);
    }
  }, [debounced]);

  useEffect(() => {
    handleDebouncedChange();
  }, [handleDebouncedChange]);

  return (
    <Flex direction="column" w="100%" maw={{ base: "100%", sm: 400 }} gap="md">
      <SearchForm
        search={search}
        setSearch={setSearch}
        isLoading={isLoading}
        setLoading={setLoading}
      />
      <SearchResults results={results} />
    </Flex>
  );
};

export default SearchSection;
