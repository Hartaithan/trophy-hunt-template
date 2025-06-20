"use server";

import { SERVICE_URL } from "@/constants/variables";
import type { ActionResponse } from "@/models/ActionModel";
import type { Example } from "@/models/ExampleModel";
import type { SearchResponse, SearchResult } from "@/models/SearchModel";
import { capture } from "@/utils/analytics";
import { fetchPage } from "@/utils/page";
import { load } from "cheerio";

const select = {
  query: "h3#breadCrumbs",
  rows: "table.zebra > tbody > tr",
  name: "td:nth-child(2) > a",
  region: "td:nth-child(2)",
  platforms: "td:nth-child(2) > div.platforms > span.platform",
  image: "td:nth-child(1) > a > img",
  active: "a.typo-button.active",
};

export const searchByQuery = async (
  query: string,
  page: number | null = null,
  example: Example | null = null,
): Promise<ActionResponse<SearchResponse>> => {
  const url = new URL(`${SERVICE_URL}/search`);
  url.searchParams.set("q", encodeURI(query));
  url.searchParams.set("page", page ? page.toString() : "1");

  const content = await fetchPage(url.toString(), example);
  if (!content) {
    console.error("unable to fetch page", url);
    const message = "Unable to fetch page";
    await capture("tht-search-error", { message, query });
    return { status: "error", message };
  }

  const cheerio = load(content.body);

  const results: SearchResult[] = [];
  const resultQuery = cheerio(select.query).text().split("›").pop();
  const rows = cheerio(select.rows);

  rows.each((_index, result) => {
    const nameElement = cheerio(result).find(select.name);
    const name = nameElement.text().trim();

    const path = nameElement.attr("href") ?? name;
    const url = SERVICE_URL + path;

    let region: string | null = null;
    const regionElement = cheerio(result).find(select.region);
    if (regionElement.children().length > 3) {
      region =
        regionElement
          .contents()
          .filter((_, node) => node.type === "text")
          .text() ?? null;
    }

    const platforms: string[] = [];
    const platformsTags = cheerio(result).find(select.platforms);
    platformsTags.each((_, platform) => {
      const value = cheerio(platform).text();
      if (value) {
        platforms.push(value);
      }
    });

    const image = cheerio(result).find(select.image);
    const image_url = image.attr("src");

    results.push({ path, name, url, platforms, region, image_url });
  });

  let nextPage: number | null = null;
  const activePage = cheerio(select.active);
  const nextLink = activePage.parent().next().find("a");
  if (nextLink.length > 0 && nextLink.hasClass("typo-button")) {
    const link = nextLink.attr("href") ?? "";
    const page = link.split("page=")[1];
    nextPage = page ? Number(page) : null;
  }

  const response: SearchResponse = { query, resultQuery, results, nextPage };

  const message = `Successful search by query: ${query}!`;
  await capture("tht-search-success", { message, query });
  return { data: response, status: "success", message };
};
