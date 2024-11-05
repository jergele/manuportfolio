import { Image } from "sanity";

export interface Project {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage: Image;
  year: string;
  description?: string;
  category?: {
    _id: string;
    title: string;
    slug: {
      current: string;
    };
  };
  images?: {
    image: Image;
    caption?: string;
  }[];
}

export interface Category {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
}
