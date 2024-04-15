import type { ComboboxItem } from "@mantine/core";

export const languageMap: Map<string, string> = new Map([
  ["English (US)", "en-us"],
  ["English (UK)", "en-gb"],
  ["Danish", "da"],
  ["German", "de"],
  ["Spanish", "es"],
  ["Finnish", "fi"],
  ["French", "fr"],
  ["Italian", "it"],
  ["Japanese", "jp"],
  ["Korean", "ko"],
  ["Dutch", "nl"],
  ["Norwegian", "no"],
  ["Polish", "pl"],
  ["Portuguese", "pt"],
  ["Portuguese (Brazil)", "pt-br"],
  ["Russian", "ru"],
  ["Swedish", "sv"],
  ["Simplified Chinese", "zh-cn"],
  ["Traditional Chinese", "zh-tw"],
]);

export const languageOptions: ComboboxItem[] = Array.from(languageMap).map(
  ([label, value]) => ({
    label,
    value,
  }),
);

export const defaultLanguage = "en-us";
