"use client";

import Link from "next/link";
import { useMemo, type FC } from "react";
import { useDisclosure } from "@mantine/hooks";
import {
  Anchor,
  Burger,
  Container,
  Flex,
  Group,
  Stack,
  Transition,
} from "@mantine/core";
import type { NavLink } from "@/models/NavigationModel";
import { useSelectedLayoutSegment } from "next/navigation";
import classes from "./Header.module.css";

const items: NavLink[] = [
  {
    id: 1,
    label: "Home",
    href: "/",
    segment: null,
    disabled: false,
  },
  {
    id: 2,
    label: "Add",
    href: "/add",
    segment: "add",
    disabled: false,
  },
  {
    id: 3,
    label: "Tutorial",
    href: "/tutorial",
    segment: "tutorial",
    disabled: false,
  },
  {
    id: 4,
    label: "Download",
    href: "/download",
    segment: "download",
    disabled: false,
  },
  {
    id: 5,
    label: "Help",
    href: "/help",
    segment: "help",
    disabled: true,
  },
];

const Header: FC = () => {
  const segment = useSelectedLayoutSegment();
  const [opened, { toggle }] = useDisclosure(false);

  const links = useMemo(
    () =>
      items.map((link) => (
        <Anchor
          size="sm"
          component={Link}
          key={link.label}
          href={link.href}
          className={classes.link}
          data-active={segment === link.segment}
          data-disabled={link.disabled}
          prefetch={false}>
          {link.label}
        </Anchor>
      )),
    [segment],
  );

  return (
    <Flex id="header" className={classes.root}>
      <Container className={classes.container}>
        <Group className={classes.links} visibleFrom="sm">
          {links}
        </Group>
        <Burger
          className={classes.trigger}
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
        <Transition transition="slide-down" duration={200} mounted={opened}>
          {(styles) => (
            <Stack
              hiddenFrom="sm"
              className={classes.dropdown}
              style={{
                ...styles,
                transform: styles.transform + " translateX(-50%)",
              }}>
              {links}
            </Stack>
          )}
        </Transition>
      </Container>
    </Flex>
  );
};

export default Header;
