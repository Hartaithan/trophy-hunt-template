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
          <AccordionItem value="web-or-app">
            <AccordionControl>Is it available on mobile?</AccordionControl>
            <AccordionPanel>
              This template is built using Notion, which offers a seamless
              experience across all devices, including desktop, web browser, and
              mobile. This means you can access and edit your backlog on any
              device you like.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="progress">
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
          <AccordionItem value="check">
            <AccordionControl>
              Can I mark more than one trophy at once
            </AccordionControl>
            <AccordionPanel>
              If you are on a desktop device, just select the items you want and
              click on any of the checkboxes. If you are on mobile, you need to
              double click on any text on the page, select the items and do the
              same.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Flex>
  );
};

export default HelpFAQSection;
