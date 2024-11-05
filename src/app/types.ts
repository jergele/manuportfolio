import { Image } from "sanity";

export interface Project {
  _id: string;
  title: string;
  description?: string;
  year: string;
  slug: string;
  mainImage?: any;
  images?: {
    image: any;
    caption?: string;
  }[];
  category?: {
    title: string;
    slug: string;
  };
}

export interface Category {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
}
