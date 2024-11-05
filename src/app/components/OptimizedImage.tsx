import { urlFor } from "@/app/lib/sanity";

interface ImageProps {
  image: any;
  alt: string;
  width?: number;
  quality?: number;
  sizes?: string;
  className?: string;
  priority?: boolean;
  isCard?: boolean;
}

export default function OptimizedImage({
  image,
  alt,
  width = 800,
  quality = 80,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  className = "",
  priority = false,
  isCard = false,
}: ImageProps) {
  // Generate different sizes for srcSet
  const srcSet = [400, 800, 1200].map((w) => ({
    url: urlFor(image)
      .width(w)
      .fit(isCard ? "crop" : "max")
      .quality(quality)
      .url(),
    width: w,
  }));

  return (
    <img
      src={urlFor(image)
        .width(width)
        .fit(isCard ? "crop" : "max")
        .quality(quality)
        .url()}
      srcSet={srcSet.map(({ url, width }) => `${url} ${width}w`).join(", ")}
      sizes={sizes}
      alt={alt}
      className={`${className} max-w-full h-auto`}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
