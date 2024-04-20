"use server";

import { SERVICE_URL } from "@/constants/variables";
import type { ActionResponse } from "@/models/ActionModel";
import type { Example } from "@/models/ExampleModel";
import type { SearchResponse, SearchResult } from "@/models/SearchModel";
import { fetchPage } from "@/utils/page";
import { load } from "cheerio";

const select = {
  query: "h3#breadCrumbs",
  rows: "table.zebra > tbody > tr",
  name: "td:nth-child(2) > a",
  region: "td:nth-child(2)",
  platforms: "td:nth-child(2) > div.platforms > span.platform",
  image: "td:nth-child(1) > a > img",
};

export const searchByQuery = async (
  query: string,
  page = 1,
  example: Example | null = null,
): Promise<ActionResponse<SearchResponse>> => {
  const url = new URL(`${SERVICE_URL}/search`);
  url.searchParams.set("q", encodeURI(query));
  url.searchParams.set("page", page.toString());

  const content = await fetchPage(url.toString(), example);
  if (!content) {
    console.error("unable to fetch page", url);
    return {
      status: "error",
      message: "Unable to fetch page",
    };
  }

  const cheerio = load(content.body);

  const results: SearchResult[] = [];
  const resultQuery = cheerio(select.query).text().split("›").pop();
  const rows = cheerio(select.rows);

  rows.each((index, result) => {
    const nameElement = cheerio(result).find(select.name);
    const name = nameElement.text().trim();
    const url = SERVICE_URL + nameElement.attr("href");

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

    results.push({ id: index + 1, name, url, platforms, region, image_url });
  });

  const response: SearchResponse = { query, resultQuery, results };

  return {
    data: response,
    status: "success",
    message: `Successful search by query: ${query}!`,
  };
};
