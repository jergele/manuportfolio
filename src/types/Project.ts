export type Project = {
  _id: string;
  _createdAt: Date;
  title: string;
  mainImage: {
    asset: {
      _ref: string;
    };
  };
  year: string;
  description: string;
  slug: {
    current: string;
  };
  category: {
    _id: string;
    title: string;
    slug: {
      current: string;
    };
  };
  images: Array<{
    image: {
      asset: {
        url: string;
      };
    };
    caption: string;
  }>;
};
