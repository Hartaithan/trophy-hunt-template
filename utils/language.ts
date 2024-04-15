import { defaultLanguage, languageMap } from "@/constants/language";
import type { RefObject } from "react";

export const getLanguageValue = (ref: RefObject<HTMLInputElement>): string => {
  if (!ref.current?.value) return defaultLanguage;
  const value = languageMap.get(ref.current?.value);
  if (!value) return defaultLanguage;
  return value;
};
