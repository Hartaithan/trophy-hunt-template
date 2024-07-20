import { Flex } from "@mantine/core";
import type { FC } from "react";
import classes from "./TutorialVideoSection.module.css";
import EmbeddedVideo from "@/components/EmbeddedVideo/EmbeddedVideo";

const TutorialVideoSection: FC = () => {
  return (
    <Flex className={classes.container}>
      <EmbeddedVideo
        videoId="Epk6h7hdUt4"
        title="Trophy Hunt Template Tutorial"
        alt="Thumbnail for Trophy Hunt Template tutorial video"
      />
    </Flex>
  );
};

export default TutorialVideoSection;
