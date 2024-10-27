export type Category = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
};

export type Image = {
  image: any;
  caption: string;
};

export type Project = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage: any;
  year: string;
  description: string;
  category: Category;
  images: Image[];
};
