import { Flex } from "@mantine/core";
import type { FC } from "react";
import HeroSection from "../HeroSection/HeroSection";

const LandingSection: FC = () => {
  return (
    <Flex direction="column" w="100%">
      <HeroSection />
    </Flex>
  );
};

export default LandingSection;
