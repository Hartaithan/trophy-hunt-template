"use client";

import type { SearchResult } from "@/models/SearchModel";
import { ActionIcon, Flex, Text } from "@mantine/core";
import type { RefObject } from "react";
import { useCallback, type FC } from "react";
import classes from "./ResultItem.module.css";
import IconPlus from "@/icons/IconPlus";
import { addGame } from "@/actions/add-game";
import ResultImage from "../ResultImage/ResultImage";
import { notifications } from "@mantine/notifications";
import { IconAlertOctagon, IconCheck } from "@tabler/icons-react";
import { getLanguageValue } from "@/utils/language";

interface Props {
  item: SearchResult;
  languageRef: RefObject<HTMLInputElement>;
}

const ResultItem: FC<Props> = (props) => {
  const { item, languageRef } = props;

  const handleAdd = useCallback(
    async (item: SearchResult) => {
      const { name, path } = item;
      const language = getLanguageValue(languageRef);
      notifications.show({
        id: path,
        loading: true,
        title: `Adding ${name}...`,
        message:
          "The game is being added, it shouldn't take long, don't reload the page.",
        autoClose: false,
        withCloseButton: false,
      });
      const response = await addGame(item, language);
      if (response?.status === "success") {
        notifications.update({
          id: path,
          loading: false,
          title: "Success!",
          message: response?.message,
          icon: <IconCheck size="1rem" />,
          autoClose: 3000,
        });
      } else {
        notifications.update({
          id: path,
          loading: false,
          color: "red",
          title: "Something went wrong!",
          message: response?.message,
          icon: <IconAlertOctagon size="1rem" />,
          withCloseButton: true,
        });
      }
    },
    [languageRef],
  );

  return (
    <Flex className={classes.container}>
      <ResultImage item={item} />
      <Flex className={classes.content}>
        <Text className={classes.name}>
          {item.name}
          {item.region && (
            <Text className={classes.name} component="span">
              &nbsp;{`• ${item.region}`}
            </Text>
          )}
        </Text>
        {item.platforms && (
          <Text className={classes.platform}>{item.platforms?.join(", ")}</Text>
        )}
      </Flex>
      <ActionIcon className={classes.button} onClick={() => handleAdd(item)}>
        <IconPlus width={18} height={18} />
        <Text>Add</Text>
      </ActionIcon>
    </Flex>
  );
};

export default ResultItem;
