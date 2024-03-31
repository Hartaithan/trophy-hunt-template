import { Flex, Grid, GridCol, Text } from "@mantine/core";
import type { FC } from "react";
import classes from "./FeaturesSection.module.css";
import {
  IconBooks,
  IconPlaylistAdd,
  IconRefreshDot,
} from "@tabler/icons-react";
import { featureGradient, highlight } from "@/constants/gradients";

const FeaturesSection: FC = () => {
  return (
    <Grid
      className={classes.container}
      gutter={{ base: "sm", xs: "md", md: "xl" }}>
      <GridCol span={12}>
        <Flex className={classes.feature}>
          <Flex className={classes.titleWrapper}>
            <IconBooks size="2rem" color="var(--mantine-color-accent-dark-9)" />
            <Text
              className={classes.title}
              variant="gradient"
              gradient={featureGradient}>
              Backlog Structuring
            </Text>
          </Flex>
          <Text className={classes.description}>
            Effortlessly
            <Text {...highlight}>&nbsp;structure your backlog</Text> with
            intuitive interface. Use the drag-and-drop sorting feature to
            prioritize your goals. Stay updated with at-a-glance status updates
            that let you know whether a game in backlog, in progress, or
            completed. Template is designed to make managing your backlog as
            <Text {...highlight}>&nbsp;simple and enjoyable</Text> as possible.
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
            <Text
              className={classes.title}
              variant="gradient"
              gradient={featureGradient}>
              Intuitive Game Addition
            </Text>
          </Flex>
          <Text className={classes.description}>
            <Text {...highlight}>Quickly</Text> add new titles to your backlog
            with our streamlined search and select feature, designed to make
            building your backlog a breeze.
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
            <Text
              className={classes.title}
              variant="gradient"
              gradient={featureGradient}>
              Quick Status Update
            </Text>
          </Flex>
          <Text className={classes.description}>
            Mark games as <Text {...highlight}>In Progress</Text>,
            <Text {...highlight}>&nbsp;Platinum</Text>, or
            <Text {...highlight}>&nbsp;100% Completed</Text> with a simple
            action, making backlog updates quick and simple.
          </Text>
        </Flex>
      </GridCol>
    </Grid>
  );
};

export default FeaturesSection;
