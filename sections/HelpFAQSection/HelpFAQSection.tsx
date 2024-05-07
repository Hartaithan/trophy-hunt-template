import {
  Box,
  Accordion,
  AccordionItem,
  AccordionControl,
  AccordionPanel,
  Flex,
} from "@mantine/core";
import type { FC } from "react";
import classes from "./HelpFAQSection.module.css";
import LandingTitle from "@/components/Highlight/LandingTitle";

const HelpFAQSection: FC = () => {
  return (
    <Flex className={classes.container}>
      <LandingTitle className={classes.title}>
        Frequently Asked Questions
      </LandingTitle>
      <Box className={classes.wrapper}>
        <Accordion variant="separated" radius="md" classNames={classes}>
          <AccordionItem value="pricing">
            <AccordionControl>
              Is it possible to make the progress calculated automatically?
            </AccordionControl>
            <AccordionPanel>
              At the moment, this is not possible. In order to do this I need to
              use not just todo items, but a table together with Roll up
              properties. And this is not so easy to do with the current version
              of Notion API.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Flex>
  );
};

export default HelpFAQSection;
