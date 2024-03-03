import Image from "next/image";
import { Fragment, type FC } from "react";
import type { SearchResult } from "@/models/SearchModel";
import classes from "./ResultImage.module.css";
import { Box, Overlay } from "@mantine/core";
import clsx from "clsx";

interface Props {
  className?: string;
  item: SearchResult;
}

const ResultImage: FC<Props> = (props) => {
  const { className, item } = props;
  if (!item.image_url) return null;
  const overlay = item.platforms && item.platforms.includes("PS5");
  return (
    <Box className={clsx(classes.wrapper, className)}>
      <Image
        className={classes.image}
        src={item.image_url}
        alt={`${item.name} card`}
        height={56}
        width={10}
        unoptimized
      />
      {overlay && (
        <>
          <Overlay
            zIndex={2}
            gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))"
          />
          <Image
            className={classes.background}
            src={item.image_url}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={`${item.name} card background`}
          />
        </>
      )}
    </Box>
  );
};

export default ResultImage;
