import { SERVICE_URL } from "@/constants/variables";
import type { Trophy, TrophyTarget } from "@/models/TrophyModel";
import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { Cheerio, CheerioAPI, Element } from "cheerio";

const target = {
  trophy: "\u200B",
  base: "\u200a",
};

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
    const nameElement = content.find("a");
    const name = nameElement.text().trim();
    const description = content.contents().last().text().trim();
    const url = nameElement.attr("href") ?? null;
    if (name.length !== 0 && description.length !== 0) {
      trophies.push({ name, description, type, url: SERVICE_URL + url });
    }
  });
  return trophies;
};

export const createTrophyTitle = (value: string, base = false): string => {
  const left = target.trophy;
  const right = target[base ? "base" : "trophy"];
  return `[${left}${value}${right}]\n`;
};

export const checkTrophyBlock = (block: BlockObjectResponse): TrophyTarget => {
  if (block.type !== "to_do") return null;
  const content = block.to_do.rich_text[0].plain_text;
  if (content.includes(target.base)) return "base";
  if (content.includes(target.trophy)) return "trophy";
  return null;
};
