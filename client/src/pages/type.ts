export type MonthlyBrief = {
    month: string;
    year: number;
    description: string;
    stories: number;
    sectors: number;
    podcastDuration: string;
    status: "Latest" | "Archive";
};