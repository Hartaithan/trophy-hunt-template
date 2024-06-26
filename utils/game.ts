"use server";

import type { FetchGameResponse } from "@/models/GameModel";
import { fetchPage } from "./page";
import type { Example } from "@/models/ExampleModel";
import { load } from "cheerio";
import type { TrophyList } from "@/models/TrophyModel";
import { getTrophyList } from "./trophy";
import { SERVICE_URL } from "@/constants/variables";
import { baseTitle } from "@/constants/trophy";

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
  guide: "div.guide-page-info > a",
};

export const fetchGame = async (
  url: string,
  lang: string,
  example: Example | null = null,
): Promise<FetchGameResponse | null> => {
  const urlWithParams = new URL(url);
  urlWithParams.searchParams.set("lang", lang);
  const urlFormatted = urlWithParams.toString();

  const page = await fetchPage(urlFormatted, example);

  if (!page) {
    console.error("unable to fetch page", urlFormatted);
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
      : baseTitle;
    const table = haveDLC ? nameRow.next() : listsEl.first().find(select.table);
    const rows = table.find(select.tableRows);
    const trophies = getTrophyList(cheerio, rows);
    const count = trophies.length;

    if (name === baseTitle) base = base + trophies.length;
    total = total + trophies.length;

    lists.push({ name, count, trophies });
  });

  const guideElement = cheerio(select.guide);
  const guide =
    guideElement.length > 0 ? SERVICE_URL + guideElement.attr("href") : null;

  const response: FetchGameResponse = {
    title,
    platforms,
    thumbnail,
    cover,
    lists,
    counts: { base, total },
    page: urlFormatted,
    guide,
  };

  return response;
};
