export interface MetaImage {
  id: string;
  category: string;
  title: string;
  description: string;
  thumbnail: string;
}

export type Category = {
  id: string;
  name: string;
  description: string;
};

export interface SurpriseContent {
  id: string;
  category: string;
  title: string;
  description: string;
  thumbnail: string;
  contentUrl: string;
  contentType: "youtube" | "youtube-shorts";
}
