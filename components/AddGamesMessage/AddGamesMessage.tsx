import { Flex, Text } from "@mantine/core";
import type { FC } from "react";
import classes from "./AddGamesMessage.module.css";
import LandingHighlight from "../Highlight/LandingHighlight";

const AddGamesMessage: FC = () => {
  return (
    <Flex className={classes.container}>
      <LandingHighlight className={classes.title}>
        Build your backlog!
      </LandingHighlight>
      <Text className={classes.description}>
        Find games that match your interests and add them to your backlog!
      </Text>
    </Flex>
  );
};

export default AddGamesMessage;
