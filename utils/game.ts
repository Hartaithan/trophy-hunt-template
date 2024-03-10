"use server";

import type { FetchGameResponse } from "@/models/GameModel";
import { fetchPage } from "./page";
import type { Example } from "@/models/ExampleModel";
import { load } from "cheerio";
import type { TrophyList } from "@/models/TrophyModel";
import { getTrophyList } from "./trophy";

const select = {
  list: "#content > div.row > div.col-xs > div.box.no-top-border",
  table: "table.zebra",
  tableRows: "tbody > tr",
  name: "tbody > tr > td:nth-child(2) > span",
  nameRow: "table[style='border-bottom: 1px solid #dfdfdf;']",
  platforms: "div.platforms",
  platform: "span.platform",
  thumbnail: "div.game-image-holder",
  cover: "div#first-banner > div.img",
};

export const fetchGame = async (
  url: string,
  example: Example | null = null,
): Promise<FetchGameResponse | null> => {
  const page = await fetchPage(url, example);

  if (!page) {
    console.error("unable to fetch page", url);
    return null;
  }

  const cheerio = load(page.body);

  let title = cheerio("title").text();
  if (title.includes("PSNProfiles.com")) {
    title = title.replace("• PSNProfiles.com", "");
    title = title.replace("Trophies", "").trim();
  }

  const platforms: string[] = [];
  const platformsTags = cheerio(select.platforms).first().find(select.platform);
  platformsTags.each((_, platform) => {
    const value = cheerio(platform).text();
    if (value) {
      platforms.push(value);
    }
  });

  const thumbnail = cheerio(select.thumbnail).find("img").attr("src") || null;

  let cover = cheerio(select.cover).attr("style") || null;
  if (cover !== null) {
    cover = cover.replace(/.*\(|\).*/g, "");
  }

  const listsEl = cheerio(select.list);
  const lists: TrophyList[] = [];

  let base = 0;
  let total = 0;

  listsEl.each((_, list) => {
    const haveDLC = listsEl.length > 1;
    const nameRow = cheerio(list).find(select.nameRow);
    const name = haveDLC
      ? cheerio(nameRow).find(select.name).text().trim()
      : "Base Game";
    const table = haveDLC ? nameRow.next() : listsEl.first().find(select.table);
    const rows = table.find(select.tableRows);
    const trophies = getTrophyList(cheerio, rows);
    const count = trophies.length;

    if (name === "Base Game") base = base + trophies.length;
    total = total + trophies.length;

    lists.push({ name, count, trophies });
  });

  const response: FetchGameResponse = {
    title,
    platforms,
    thumbnail,
    cover,
    lists,
    counts: { base, total },
  };

  return response;
};
