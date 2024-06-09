import { Flex } from "@mantine/core";
import type { FC } from "react";
import HeroSection from "../HeroSection/HeroSection";
import VideoSection from "../VideoSection/VideoSection";
import FeaturesSection from "../FeaturesSection/FeaturesSection";
import classes from "./LandingSection.module.css";

const LandingSection: FC = () => {
  return (
    <Flex className={classes.container}>
      <HeroSection />
      <VideoSection />
      <FeaturesSection />
    </Flex>
  );
};

export default LandingSection;
