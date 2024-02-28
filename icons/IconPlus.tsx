import type { IconProps } from "@/models/IconModel";
import type { FC } from "react";

const IconPlus: FC<IconProps> = ({ width = 24, height = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    className="icon icon-tabler icon-tabler-plus"
    viewBox="0 0 24 24">
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export default IconPlus;
