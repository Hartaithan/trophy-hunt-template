/* eslint-disable react/iframe-missing-sandbox */
import { Flex } from "@mantine/core";
import type { FC } from "react";
import classes from "./VideoSection.module.css";

const VideoSection: FC = () => {
  return (
    <Flex className={classes.container}>
      <iframe
        className={classes.frame}
        src="https://www.youtube.com/embed/YMm_rRa7qjk"
        frameBorder="0"
        sandbox="allow-scripts allow-same-origin allow-presentation"
        title="Trophy Hunt Template Promo"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </Flex>
  );
};

export default VideoSection;
