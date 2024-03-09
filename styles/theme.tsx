"use client";

import {
  Container,
  type ContainerProps,
  Modal,
  ModalRoot,
  createTheme,
  type ModalProps,
  type NotificationProps,
  Notification,
  mergeMantineTheme,
  DEFAULT_THEME,
  Badge,
  Menu,
  SegmentedControl,
  Input,
  Select,
  Popover,
  Button,
  Skeleton,
  Alert,
} from "@mantine/core";
import { extendedColors } from "./colors";
import BadgeClasses from "./Badge.module.css";
import ButtonClasses from "./Button.module.css";
import ModalClasses from "./Modal.module.css";
import NotificationClasses from "./Notification.module.css";
import MenuClasses from "./Menu.module.css";
import SegmentedControlClasses from "./SegmentedControl.module.css";
import InputClasses from "./Input.module.css";
import SelectClasses from "./Select.module.css";
import PopoverClasses from "./Popover.module.css";
import SkeletonClasses from "./Skeleton.module.css";
import AlertClasses from "./Alert.module.css";

const ContainerDefaultProps: Partial<ContainerProps> = {
  size: "xl",
  px: { base: "md", xl: 0 },
};

const ModalDefaultProps: Partial<ModalProps> = {
  centered: true,
};

const NotificationDefaultProps: Partial<NotificationProps> = {
  radius: "md",
};

export const theme = createTheme({
  defaultGradient: { deg: 90, from: "accented.9", to: "accented.6" },
  colors: extendedColors,
  primaryColor: "accented",
  components: {
    Badge: Badge.extend({
      classNames: BadgeClasses,
    }),
    Button: Button.extend({
      classNames: ButtonClasses,
    }),
    Container: Container.extend({
      defaultProps: ContainerDefaultProps,
    }),
    Modal: Modal.extend({
      defaultProps: ModalDefaultProps,
      classNames: ModalClasses,
    }),
    ModalRoot: ModalRoot.extend({
      defaultProps: ModalDefaultProps,
    }),
    Notification: Notification.extend({
      defaultProps: NotificationDefaultProps,
      classNames: NotificationClasses,
    }),
    Menu: Menu.extend({
      classNames: MenuClasses,
    }),
    SegmentedControl: SegmentedControl.extend({
      classNames: SegmentedControlClasses,
    }),
    Input: Input.extend({
      classNames: InputClasses,
    }),
    Select: Select.extend({
      classNames: SelectClasses,
    }),
    Popover: Popover.extend({
      classNames: PopoverClasses,
    }),
    Skeleton: Skeleton.extend({
      classNames: SkeletonClasses,
    }),
    Alert: Alert.extend({
      classNames: AlertClasses,
    }),
  },
});

export const mantineTheme = mergeMantineTheme(DEFAULT_THEME, theme);
