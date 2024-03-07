import { FETCH_API_KEY, FETCH_HOST, FETCH_URL } from "@/constants/urls";
import { examples } from "@/example";
import type { Example } from "@/models/ExampleModel";
import type { PageResponse } from "@/models/PageModel";

export const fetchPage = async (
  url: string,
  example: Example | null = null,
): Promise<PageResponse | null> => {
  if (example) return examples[example];
  try {
    const response = await fetch(FETCH_URL, {
      method: "POST",
      body: JSON.stringify({ url }),
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": FETCH_API_KEY,
        "X-RapidAPI-Host": FETCH_HOST,
      },
    }).then((res) => res.json());
    return response;
  } catch (error) {
    console.error("unable to fetch page", error);
    return null;
  }
};
