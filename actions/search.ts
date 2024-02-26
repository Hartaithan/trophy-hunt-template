"use server";

import { BASE_URL } from "@/constants/urls";
import type { ActionResponse } from "@/models/ActionModel";
import type { SearchResponse, SearchResult } from "@/models/SearchModel";
import { fetchPage } from "@/utils/page";
import { load } from "cheerio";

const select = {
  query: "h3#breadCrumbs",
  resultRows: "table.zebra > tbody > tr",
  resultName: "td:nth-child(2) > a",
  platforms: "td:nth-child(2) > div.platforms > span.platform",
};

export const searchByQuery = async (
  query: string,
): Promise<ActionResponse<SearchResponse>> => {
  const url = `${BASE_URL}/search/games?q=${encodeURI(query)}`;
  const page = await fetchPage(url);

  if (!page) {
    console.error("unable to fetch page", url);
    return {
      status: "error",
      message: "Unable to fetch page",
    };
  }

  const cheerio = load(page.body);

  const results: SearchResult[] = [];

  const resultQuery = cheerio(select.query).text().split("›").pop();
  const resultRows = cheerio(select.resultRows);

  resultRows.each((index, result) => {
    const nameElement = cheerio(result).find(select.resultName);
    const name = nameElement.text().trim();
    const url = BASE_URL + nameElement.attr("href");

    const platforms: string[] = [];
    const platformsTags = cheerio(result).find(select.platforms);
    platformsTags.each((_, platform) => {
      const value = cheerio(platform).text();
      if (value) {
        platforms.push(value);
      }
    });
    results.push({ id: index + 1, name, url, platforms });
  });

  const response: SearchResponse = { query, resultQuery, results };

  return {
    data: response,
    status: "success",
    message: `Successful search by query: ${query}!`,
  };
};
