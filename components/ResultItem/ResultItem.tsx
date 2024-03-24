"use client";

import type { SearchResult } from "@/models/SearchModel";
import { ActionIcon, Flex, Text } from "@mantine/core";
import { useCallback, type FC } from "react";
import classes from "./ResultItem.module.css";
import IconPlus from "@/icons/IconPlus";
import { addGame } from "@/actions/add-game";
import ResultImage from "../ResultImage/ResultImage";
import { notifications } from "@mantine/notifications";
import { IconAlertOctagon, IconCheck } from "@tabler/icons-react";

interface Props {
  item: SearchResult;
}

const ResultItem: FC<Props> = (props) => {
  const { item } = props;

  const handleAdd = useCallback(async (url: string) => {
    notifications.show({
      id: "add",
      loading: true,
      title: "Adding a game...",
      message:
        "The game is being added, it shouldn't take long, don't reload the page.",
      autoClose: false,
      withCloseButton: false,
    });
    const { status, message } = await addGame(url);
    if (status === "success") {
      notifications.update({
        id: "add",
        loading: false,
        title: "Success!",
        message: message,
        icon: <IconCheck size="1rem" />,
        autoClose: 3000,
      });
    } else {
      notifications.update({
        id: "add",
        loading: false,
        color: "red",
        title: "Something went wrong!",
        message: message,
        icon: <IconAlertOctagon size="1rem" />,
        withCloseButton: true,
      });
    }
  }, []);

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
      <ActionIcon
        className={classes.button}
        onClick={() => handleAdd(item.url)}>
        <IconPlus width={18} height={18} />
        <Text>Add</Text>
      </ActionIcon>
    </Flex>
  );
};

export default ResultItem;
