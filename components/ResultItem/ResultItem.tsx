"use client";

import type { SearchResult } from "@/models/SearchModel";
import { ActionIcon, Flex, Text } from "@mantine/core";
import type { FC } from "react";
import classes from "./ResultItem.module.css";
import IconPlus from "@/icons/IconPlus";
import { addGame } from "@/actions/add-game";
import ResultImage from "../ResultImage/ResultImage";

interface Props {
  item: SearchResult;
}

const ResultItem: FC<Props> = (props) => {
  const { item } = props;
  return (
    <Flex className={classes.container}>
      <ResultImage item={item} />
      <Flex className={classes.content}>
        {item.region ? (
          <Flex>
            <Text className={classes.name} lineClamp={2}>
              {item.name}
            </Text>
            {item.region && (
              <Text className={classes.name}>&nbsp;{`• ${item.region}`}</Text>
            )}
          </Flex>
        ) : (
          <Text className={classes.name} lineClamp={2}>
            {item.name}
          </Text>
        )}
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
