import type { MantineGradient, TextProps } from "@mantine/core";

export const titleGradient: MantineGradient = {
  from: "accented.4",
  to: "accented.5",
  deg: 90,
};

export const linkGradient: MantineGradient = {
  from: "accented.9",
  to: "accented.8",
};

export const featureGradient: MantineGradient = {
  from: "accented.6",
  to: "accented.3",
  deg: 90,
};

export const highlight: Partial<TextProps> = {
  span: true,
  c: "accented.3",
  fw: "bold",
  inherit: true,
};
