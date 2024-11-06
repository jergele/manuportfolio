"use client";

import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "i3l7154n";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "default",
  title: "portfolio-site",
  projectId,
  dataset,
  // Remove basePath when deploying to sanity.studio
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
