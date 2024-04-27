"use client";

import Link from "next/link";
import { useMemo, useState, type FC } from "react";
import { useClickOutside, useDisclosure } from "@mantine/hooks";
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
    disabled: false,
  },
];

const Header: FC = () => {
  const segment = useSelectedLayoutSegment();
  const [opened, { toggle, close }] = useDisclosure(false);
  const [disabled, setDisabled] = useState(false);
  const [dropdown, setDropdown] = useState<HTMLDivElement | null>(null);
  const [trigger, setTrigger] = useState<HTMLButtonElement | null>(null);

  useClickOutside(() => close(), null, [trigger, dropdown]);

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
          ref={setTrigger}
          className={classes.trigger}
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
        <Transition
          transition="slide-down"
          duration={200}
          mounted={opened}
          onEnter={() => setDisabled(true)}
          onEntered={() => setDisabled(false)}
          onExit={() => setDisabled(true)}
          onExited={() => setDisabled(false)}
          keepMounted>
          {(styles) => (
            <Stack
              ref={setDropdown}
              hiddenFrom="sm"
              className={classes.dropdown}
              style={{
                ...styles,
                transform: styles.transform + " translateX(-50%)",
                pointerEvents: disabled ? "none" : "all",
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
