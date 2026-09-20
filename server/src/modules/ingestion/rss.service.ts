import axios from "axios";
import { XMLParser } from "fast-xml-parser";
import type { ParsedFeed, RawArticle, SourceConfig } from "./types.js"
export class RssService {
    
    private readonly parser = new XMLParser({
        ignoreAttributes: false,
        attributeNamePrefix: "",
        trimValues: true,
    });

    constructor(private readonly timeout = 10000) { }

    // async fetchFeeds(sources: SourceConfig[]): Promise<RawArticle[]> {
    //     console.log("sources: ",sources)
    //     const results = await Promise.all(
    //         //sources.map((source) => 
    //             [this.fetchFeed(sources[0])])
    //     );
    //     return results.flat();
    // }

    async fetchFeed(source: SourceConfig): Promise<RawArticle[]> {
        try {
            const { data: xml } = await axios.get<string>(source.url, {
                timeout: this.timeout,
                responseType: "text",
                headers: {
                    "User-Agent": "PulseVow/1.0",
                    Accept: "application/rss+xml, application/xml, text/xml",
                },
            });

            const parsed = this.parser.parse(xml);
            const { metadata, items } = this.extractItems(parsed);
            return items.map((item) => ({
                sourceId: source.sourceId,
                sourceUrl: source.url,
                language: source.language,
                metadata,
                raw: item,
            }));
        } catch (error) {
            console.error(`Failed to fetch ${source.url}`, error);
            return [];
        }
    }

    private extractItems(feed: any): ParsedFeed {
        // RSS extraction
        if (feed?.rss?.channel) {
            const channel = feed.rss.channel;

            return {
                metadata: {
                    title: channel.title,
                    description: channel.description,
                    link: channel.link?.trim?.() ?? channel.link,
                    language: channel.language,
                    lastBuildDate: channel.lastBuildDate,
                },
                items: Array.isArray(channel.item)
                    ? channel.item
                    : channel.item
                        ? [channel.item]
                        : [],
            };
        }

        // Atom
        if (feed?.feed) {
            const atom = feed.feed;

            return {
                metadata: {
                    title: atom.title,
                    description: atom.subtitle,
                    link: Array.isArray(atom.link)
                        ? atom.link[0]?.href
                        : atom.link?.href,
                    language: atom.language,
                    lastBuildDate: atom.updated,
                },
                items: Array.isArray(atom.entry)
                    ? atom.entry
                    : atom.entry
                        ? [atom.entry]
                        : [],
            };
        }

        return {
            metadata: {},
            items: [],
        };
    }
}