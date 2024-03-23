import { Flex } from "@mantine/core";
import type { FC } from "react";
import HeroSection from "../HeroSection/HeroSection";
import FeaturesSection from "../FeaturesSection/FeaturesSection";

const LandingSection: FC = () => {
  return (
    <Flex direction="column" w="100%" align="center">
      <HeroSection />
      <FeaturesSection />
    </Flex>
  );
};

export default LandingSection;
