export interface Category {
  _id: string;
  title: string;
  slug: string;
}

export interface Project {
  _id: string;
  title: string;
  mainImage: any;
  slug: string;
  year: string;
  description: string;
  images: any[];
  category: Category;
}
