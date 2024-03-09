import { Center, Loader, Skeleton } from "@mantine/core";
import type { FC } from "react";

interface Props {
  height?: number;
}

const ResultFallback: FC<Props> = ({ height = 87 }) => {
  return (
    <Center pos="relative" h={height} w="100%" maw={{ base: "100%", sm: 300 }}>
      <Skeleton h="100%" w="100%" radius="md" />
      <Loader pos="absolute" type="bars" />
    </Center>
  );
};

export default ResultFallback;
