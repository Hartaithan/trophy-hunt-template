import { Box, Stack, TextInput } from "@mantine/core";
import type { FC } from "react";

const SearchForm: FC = () => {
  return (
    <Box w="100%">
      <Stack>
        <TextInput label="Search" placeholder="Search..." />
      </Stack>
    </Box>
  );
};

export default SearchForm;
