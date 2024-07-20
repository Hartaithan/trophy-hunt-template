import { Flex } from "@mantine/core";
import type { FC } from "react";
import classes from "./VideoSection.module.css";
import EmbeddedVideo from "@/components/EmbeddedVideo/EmbeddedVideo";

const VideoSection: FC = () => {
  return (
    <Flex className={classes.container}>
      <EmbeddedVideo videoId="YMm_rRa7qjk" title="Trophy Hunt Template Promo" />
    </Flex>
  );
};

export default VideoSection;
