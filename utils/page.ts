import { API_KEY, HOST, FETCH_URL } from "@/constants/urls";
import type { PageResponse } from "@/models/PageModel";

export const fetchPage = async (url: string): Promise<PageResponse | null> => {
  try {
    const response = await fetch(FETCH_URL, {
      method: "POST",
      body: JSON.stringify({ url }),
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": HOST,
      },
    }).then((res) => res.json());
    return response;
  } catch (error) {
    console.error("unable to fetch page", error);
    return null;
  }
};
