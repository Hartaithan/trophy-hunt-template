"use client";

import clsx from "clsx";
import Image from "next/image";
import {
  useCallback,
  useState,
  type ComponentPropsWithoutRef,
  type FC,
} from "react";
import classes from "./EmbeddedVideo.module.css";
import { Flex, Text, UnstyledButton } from "@mantine/core";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";

interface Props extends ComponentPropsWithoutRef<"iframe"> {
  videoId: string;
  title: string;
  alt: string;
}

const sandbox = "allow-scripts allow-same-origin allow-presentation";

const EmbeddedVideo: FC<Props> = (props) => {
  const { videoId, title, alt, className, ...rest } = props;
  const [visible, setVisible] = useState<boolean>(false);

  const handleVideoClick = useCallback(() => {
    setVisible(true);
  }, []);

  if (!visible) {
    return (
      <UnstyledButton
        className={clsx(classes.container, classes.video, className)}
        onClick={handleVideoClick}>
        <Text className={classes.title}>{title}</Text>
        <Flex className={classes.overlay}>
          <IconBrandYoutubeFilled size="5rem" />
        </Flex>
        <Image
          className={clsx(classes.video, className)}
          src={`https://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
          alt={alt}
          height={500}
          width={890}
          unoptimized
          loading="lazy"
        />
      </UnstyledButton>
    );
  }

  return (
    <iframe
      className={clsx(classes.video, className)}
      src={`https://www.youtube.com/embed/${videoId}`}
      frameBorder="0"
      sandbox={sandbox}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      {...rest}
    />
  );
};

export default EmbeddedVideo;
