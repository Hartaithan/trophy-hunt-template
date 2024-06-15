/* eslint-disable react/iframe-missing-sandbox */
import { Flex } from "@mantine/core";
import type { FC } from "react";
import classes from "./TutorialVideoSection.module.css";

const TutorialVideoSection: FC = () => {
  return (
    <Flex className={classes.container}>
      <iframe
        className={classes.frame}
        src="https://www.youtube.com/embed/Epk6h7hdUt4"
        frameBorder="0"
        sandbox="allow-scripts allow-same-origin allow-presentation"
        title="Trophy Hunt Template Tutorial"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </Flex>
  );
};

export default TutorialVideoSection;
