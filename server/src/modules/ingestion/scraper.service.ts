import axios from "axios";
import * as cheerio from "cheerio";

export class ScrapperService {
  async enrichDescription(url: string): Promise<string | null> {
    try {
      const response = await axios.get(url, {
        timeout: 10000,
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/151 Safari/537.36",
        },
      });

      const $ = cheerio.load(response.data);

      return (
        $('meta[name="description"]').attr("content")?.trim() ||
        $('meta[property="og:description"]').attr("content")?.trim() ||
        null
      );
    } catch (error) {
      console.error(`Failed to enrich description: ${url}`, error);
      return null;
    }
  }
}