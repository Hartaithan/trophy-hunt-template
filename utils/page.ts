import {
  FETCH_TARGET,
  FETCH_DEFAULT_URL,
  FETCH_BACKUP_URL,
  FETCH_BACKUP_HOST,
  FETCH_BACKUP_API_KEY,
} from "@/constants/variables";
import { examples } from "@/example";
import type { Example } from "@/models/ExampleModel";
import type { PageResponse } from "@/models/PageModel";

export const getFetchTarget = (url: string) => {
  const variable = FETCH_TARGET;
  if (variable === "backup") {
    return fetch(FETCH_BACKUP_URL, {
      method: "POST",
      body: JSON.stringify({ url }),
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": FETCH_BACKUP_API_KEY,
        "X-RapidAPI-Host": FETCH_BACKUP_HOST,
      },
    });
  } else {
    const fetchURL = new URL(FETCH_DEFAULT_URL);
    fetchURL.searchParams.set("url", url);
    return fetch(fetchURL);
  }
};

export const fetchPage = async (
  url: string,
  example: Example | null = null,
): Promise<PageResponse | null> => {
  if (example) return examples[example];
  try {
    const request = await getFetchTarget(url);
    const response = await request.json();
    if (!request.ok) throw Error(JSON.stringify(response));
    return response;
  } catch (error) {
    console.error("unable to fetch page", error);
    return null;
  }
};
