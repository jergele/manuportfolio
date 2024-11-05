export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

// This is the document id used for the preview secret that's stored in your dataset.
// This is used to verify that you are previewing from a trusted source.
export const previewSecretId = "preview.secret";
