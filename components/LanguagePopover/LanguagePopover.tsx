import type { PopoverWidth } from "@mantine/core";
import { Anchor, Popover, Text } from "@mantine/core";
import type { FC } from "react";
import { memo } from "react";
import classes from "./LanguagePopover.module.css";

const LanguagePopover: FC = () => {
  return (
    <Popover
      classNames={{ dropdown: classes.dropdown }}
      width={null as unknown as PopoverWidth}
      position="top-end">
      <Popover.Target>
        <Anchor className={classes.link} component="button">
          Not working?
        </Anchor>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">
          If the game was added with English language, even if you&apos;ve
          selected a different language, it indicates that the game only offers
          English as a language option.
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
};

export default memo(LanguagePopover);
