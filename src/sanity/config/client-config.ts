const clientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
  apiVersion: "2024-02-20", // use today's date or your preferred version
  useCdn: false,
};

export default clientConfig;
