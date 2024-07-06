"use client";

import type { SearchResult } from "@/models/SearchModel";
import { ActionIcon, Flex, Text } from "@mantine/core";
import type { RefObject } from "react";
import { useCallback, type FC } from "react";
import classes from "./ResultItem.module.css";
import { addGameFetch, addGameCreate, addGameUpdate } from "@/actions/add-game";
import ResultImage from "../ResultImage/ResultImage";
import { notifications } from "@mantine/notifications";
import { IconAlertOctagon, IconCheck, IconPlus } from "@tabler/icons-react";
import { getLanguageValue } from "@/utils/language";

interface Props {
  item: SearchResult;
  languageRef: RefObject<HTMLInputElement>;
}

const ResultItem: FC<Props> = (props) => {
  const { item, languageRef } = props;

  const handleAdd = useCallback(
    async (item: SearchResult) => {
      const { name } = item;
      const language = getLanguageValue(languageRef);

      const id = notifications.show({
        loading: true,
        title: `Adding ${name}...`,
        message: "Receiving trophies, don't reload the page...",
        autoClose: false,
        withCloseButton: false,
      });

      const fetchRes = await addGameFetch(item, language);
      if (fetchRes?.status === "error") {
        notifications.update({
          id,
          loading: false,
          color: "red",
          title: "Something went wrong!",
          message: fetchRes?.message,
          icon: <IconAlertOctagon size="1rem" />,
          withCloseButton: true,
        });
        return;
      }
      notifications.update({
        id,
        message: fetchRes?.message,
      });

      const createRes = await addGameCreate(fetchRes.data!);
      if (createRes?.status === "error") {
        notifications.update({
          id,
          loading: false,
          color: "red",
          title: "Something went wrong!",
          message: createRes?.message,
          icon: <IconAlertOctagon size="1rem" />,
          withCloseButton: true,
        });
        return;
      }
      notifications.update({
        id,
        message: createRes?.message,
      });

      const updateRes = await addGameUpdate(item, createRes.data!);
      if (updateRes?.status === "error") {
        notifications.update({
          id,
          loading: false,
          color: "red",
          title: "Something went wrong!",
          message: updateRes?.message,
          icon: <IconAlertOctagon size="1rem" />,
          withCloseButton: true,
        });
        return;
      }
      notifications.update({
        id,
        loading: false,
        title: "Success!",
        message: updateRes?.message,
        icon: <IconCheck size="1rem" />,
        autoClose: 3000,
      });
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
