export interface Artwork {
    id: number;
    title: string;
    imageUrl: string;
    webpUrl?: string; // Optional WebP version of the image
    description: string;
}