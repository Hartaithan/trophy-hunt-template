import { Flex, Grid, GridCol, Text } from "@mantine/core";
import type { FC } from "react";
import classes from "./FeaturesSection.module.css";
import {
  IconBooks,
  IconPlaylistAdd,
  IconRefreshDot,
} from "@tabler/icons-react";
import LandingHighlight from "@/components/Highlight/LandingHighlight";
import LandingFeature from "@/components/Highlight/LandingFeature";

const FeaturesSection: FC = () => {
  return (
    <Grid
      className={classes.container}
      gutter={{ base: "sm", xs: "md", md: "xl" }}>
      <GridCol span={12}>
        <Flex className={classes.feature}>
          <Flex className={classes.titleWrapper}>
            <IconBooks size="2rem" color="var(--mantine-color-accent-dark-9)" />
            <LandingFeature className={classes.title}>
              Backlog Structuring
            </LandingFeature>
          </Flex>
          <Text className={classes.description}>
            Effortlessly
            <LandingHighlight>
              &nbsp;structure your backlog&nbsp;
            </LandingHighlight>
            with intuitive interface. Easily prioritize your goals using our
            drag-and-drop feature. Stay updated with at-a-glance status updates
            that let you know whether a game is in backlog, in progress, or
            completed. Template is designed to make managing your platinum
            backlog as
            <LandingHighlight>&nbsp;simple and enjoyable</LandingHighlight> as
            possible.
          </Text>
        </Flex>
      </GridCol>
      <GridCol span={{ base: 12, sm: 6 }}>
        <Flex className={classes.feature}>
          <Flex className={classes.titleWrapper}>
            <IconPlaylistAdd
              size="1.85rem"
              color="var(--mantine-color-accent-dark-9)"
            />
            <LandingFeature className={classes.title}>
              Intuitive Game Addition
            </LandingFeature>
          </Flex>
          <Text className={classes.description}>
            <LandingHighlight>Quickly</LandingHighlight> add new titles to your
            trophy backlog with our streamlined search and select feature,
            designed to make building your backlog a breeze.
          </Text>
        </Flex>
      </GridCol>
      <GridCol span={{ base: 12, sm: 6 }}>
        <Flex className={classes.feature}>
          <Flex className={classes.titleWrapper}>
            <IconRefreshDot
              size="1.85rem"
              color="var(--mantine-color-accent-dark-9)"
            />
            <LandingFeature className={classes.title}>
              Quick Status Update
            </LandingFeature>
          </Flex>
          <Text className={classes.description}>
            Mark games as <LandingHighlight>Backlog</LandingHighlight>,
            <LandingHighlight>&nbsp;In Progress</LandingHighlight>,
            <LandingHighlight>&nbsp;Platinum</LandingHighlight>, or
            <LandingHighlight>&nbsp;100% Completed</LandingHighlight> with a
            simple action, making backlog updates quick and simple.
          </Text>
        </Flex>
      </GridCol>
    </Grid>
  );
};

export default FeaturesSection;
