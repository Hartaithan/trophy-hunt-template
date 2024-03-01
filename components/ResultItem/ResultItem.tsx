"use client";

import type { SearchResult } from "@/models/SearchModel";
import { ActionIcon, Flex, Text } from "@mantine/core";
import type { FC } from "react";
import classes from "./ResultItem.module.css";
import Image from "next/image";
import IconPlus from "@/icons/IconPlus";
import { addGame } from "@/actions/add-game";

interface Props {
  item: SearchResult;
}

const ResultItem: FC<Props> = (props) => {
  const { item } = props;
  return (
    <Flex className={classes.container}>
      {item.image_url && (
        <Image
          className={classes.image}
          src={item.image_url}
          alt={`${item.name} card`}
          height={56}
          width={10}
          unoptimized
        />
      )}
      <Flex className={classes.content}>
        <Text className={classes.name} lineClamp={2}>
          {item.name}
        </Text>
        {item.platforms && (
          <Text className={classes.platform}>{item.platforms?.join(", ")}</Text>
        )}
      </Flex>
      <ActionIcon className={classes.button} onClick={() => addGame(item.url)}>
        <IconPlus width={18} height={18} />
        <Text>Add</Text>
      </ActionIcon>
    </Flex>
  );
};

export default ResultItem;
