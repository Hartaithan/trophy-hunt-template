import type { Trophy } from "@/models/TrophyModel";
import type { Cheerio, CheerioAPI, Element } from "cheerio";

const EMPTY_SYMBOL = "\u200B";

const select = {
  trophyContent: "td:nth-child(2)",
  trophyType: "td:nth-child(6) > span > img",
};

export const getTrophyList = (
  cheerio: CheerioAPI,
  rows: Cheerio<Element>,
): Trophy[] => {
  const trophies: Trophy[] = [];
  rows.each((_, row) => {
    const content = cheerio(row).find(select.trophyContent).first();
    const type =
      cheerio(row).find(select.trophyType).attr("title") || "Type not found";
    const name = content.find("a").text().trim();
    const description = content.contents().last().text().trim();
    if (name.length !== 0 && description.length !== 0) {
      trophies.push({ name, description, type });
    }
  });
  return trophies;
};

export const getTrophyTitle = (value: string): string => {
  return `[${EMPTY_SYMBOL}${value}${EMPTY_SYMBOL}]\n`;
};
