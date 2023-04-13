export interface OtherArticlesInterface {
    id:          number;
    title:       string;
    url:         string;
    imageUrl:    string;
    newsSite:    string;
    summary:     string;
    publishedAt: string;
    updatedAt:   string;
    featured:    boolean;
    launches:    any[];
    events:      any[];
}

export interface Launch {
    id:       string;
    provider: string;
}

export enum NewsSite {
    Arstechnica = "Arstechnica",
    NASASpaceflight = "NASASpaceflight",
    SpaceNews = "SpaceNews",
}