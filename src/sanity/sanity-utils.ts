import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";
import { Category } from "@/types/Category";
import clientConfig from "@/sanity/config/client-config";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient(clientConfig);

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export async function getProjects(): Promise<Project[]> {
  return client.fetch(
    groq`*[_type == "project"] {
      _id,
      _createdAt,
      title,
      year,
      description,
      "mainImage": mainImage.asset->{
        url
      },
      slug,
      "category": category->{
        _id,
        title,
        slug
      },
      images[] {
        image,
        caption
      }
    }`
  );
}

export async function getCategories(): Promise<Category[]> {
  return client.fetch(
    groq`*[_type == "category"] {
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`
  );
}

// Your existing functions like getProjects() etc...
