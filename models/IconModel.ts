import type { ComponentPropsWithoutRef } from "react";

export interface IconProps extends ComponentPropsWithoutRef<"svg"> {
  width?: number;
  height?: number;
  color?: string;
}
