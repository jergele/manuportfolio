module.exports = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  buildCommand: "next build",
  devCommand: "next dev",
  installCommand: "npm install",
  framework: "nextjs",
  outputDirectory: ".next",
};
