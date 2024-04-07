"use client";

import { useState, type FC, useEffect, useCallback } from "react";
import { Flex } from "@mantine/core";
import SearchForm from "@/forms/SearchForm/SearchForm";
import SearchResults from "../../components/SearchResults/SearchResults";
import type { SearchResult } from "@/models/SearchModel";
import { useDebouncedValue } from "@mantine/hooks";
import { searchByQuery } from "@/actions/search";
import { notifications } from "@mantine/notifications";
import { IconAlertOctagon } from "@tabler/icons-react";

const SearchSection: FC = () => {
  const [search, setSearch] = useState<string>("");
  const [debounced] = useDebouncedValue(search, 1500);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleReset = useCallback(() => {
    setResults([]);
  }, []);

  const handleDebouncedChange = useCallback(async () => {
    if (debounced.trim().length === 0) return;
    const { status, message, data } = await searchByQuery(debounced);
    if (status === "success") {
      setResults(data?.results ?? []);
    } else {
      notifications.update({
        loading: false,
        color: "red",
        title: "Something went wrong!",
        message: message,
        icon: <IconAlertOctagon size="1rem" />,
        withCloseButton: true,
      });
    }
    setLoading(false);
  }, [debounced]);

  useEffect(() => {
    handleDebouncedChange();
  }, [handleDebouncedChange]);

  return (
    <Flex
      direction="column"
      w="100%"
      maw={{ base: "100%", sm: 600 }}
      gap="md"
      align="center">
      <SearchForm
        search={search}
        setSearch={setSearch}
        isLoading={isLoading}
        setLoading={setLoading}
        handleReset={handleReset}
      />
      <SearchResults results={results} />
    </Flex>
  );
};

export default SearchSection;
