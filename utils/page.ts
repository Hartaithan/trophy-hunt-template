import { FETCH_API_KEY, FETCH_HOST, FETCH_URL } from "@/constants/variables";
import { examples } from "@/example";
import type { Example } from "@/models/ExampleModel";
import type { PageResponse } from "@/models/PageModel";

export const fetchPage = async (
  url: string,
  example: Example | null = null,
): Promise<PageResponse | null> => {
  if (example) return examples[example];
  try {
    const request = await fetch(FETCH_URL, {
      method: "POST",
      body: JSON.stringify({ url }),
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": FETCH_API_KEY,
        "X-RapidAPI-Host": FETCH_HOST,
      },
    });
    const response = await request.json();
    if (!request.ok) throw Error(JSON.stringify(response));
    return response;
  } catch (error) {
    console.error("unable to fetch page", error);
    return null;
  }
};
