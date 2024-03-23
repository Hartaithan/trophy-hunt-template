import type { MantineGradient, TextProps } from "@mantine/core";
import { Flex, Grid, GridCol, Text } from "@mantine/core";
import type { FC } from "react";
import classes from "./FeaturesSection.module.css";
import {
  IconBooks,
  IconPlaylistAdd,
  IconRefreshDot,
} from "@tabler/icons-react";

const gradient: MantineGradient = {
  from: "accented.6",
  to: "accented.3",
  deg: 90,
};

const highlight: Partial<TextProps> = {
  span: true,
  c: "accented.3",
  fw: "bold",
  inherit: true,
};

const FeaturesSection: FC = () => {
  return (
    <Grid className={classes.container} gutter="xl">
      <GridCol span={12}>
        <Flex className={classes.feature}>
          <Flex className={classes.titleWrapper}>
            <IconBooks size="2rem" color="var(--mantine-color-accent-dark-9)" />
            <Text
              className={classes.title}
              variant="gradient"
              gradient={gradient}>
              Backlog Structuring
            </Text>
          </Flex>
          <Text className={classes.description}>
            Effortlessly
            <Text {...highlight}>&nbsp;structure your gaming backlog</Text> with
            our intuitive interface. Use the drag-and-drop sorting feature to
            prioritize your games. Stay updated with at-a-glance status updates
            that let you know whether a game in backlog, in progress, or
            completed. Template is designed to make managing your gaming backlog
            as <Text {...highlight}>simple and enjoyable</Text> as possible.
          </Text>
        </Flex>
      </GridCol>
      <GridCol span={6}>
        <Flex className={classes.feature}>
          <Flex className={classes.titleWrapper}>
            <IconPlaylistAdd
              size="1.85rem"
              color="var(--mantine-color-accent-dark-9)"
            />
            <Text
              className={classes.title}
              variant="gradient"
              gradient={gradient}>
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
      <GridCol span={6}>
        <Flex className={classes.feature}>
          <Flex className={classes.titleWrapper}>
            <IconRefreshDot
              size="1.85rem"
              color="var(--mantine-color-accent-dark-9)"
            />
            <Text
              className={classes.title}
              variant="gradient"
              gradient={gradient}>
              Quick Status Update
            </Text>
          </Flex>
          <Text className={classes.description}>
            Mark games as <Text {...highlight}>In Progress</Text>,
            <Text {...highlight}>&nbsp;Platinum</Text>, or
            <Text {...highlight}>&nbsp;100% Completed</Text> with a single
            click, making backlog updates quick and simple.
          </Text>
        </Flex>
      </GridCol>
    </Grid>
  );
};

export default FeaturesSection;
