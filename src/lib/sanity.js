import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import config from "../sanity/config/client-config";

// Set up client for fetching data in the getProps page functions
export const client = createClient(config);

// Set up image builder
const builder = imageUrlBuilder(client);

export function urlFor(source) {
  if (!source) return "";

  // Handle image object with caption
  if (source.image && source.image.asset) {
    return builder.image(source.image).fit("max");
  }

  // Handle direct image reference
  if (source.asset) {
    return builder.image(source).fit("max");
  }

  // Handle raw asset reference
  return builder.image(source).fit("max");
}

export default client;
