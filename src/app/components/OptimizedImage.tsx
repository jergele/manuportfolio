import Image from "next/image";
import { urlFor } from "../../lib/sanity.js";
import type { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

type Props = {
  image: any;
  alt: string;
  className?: string;
  width?: number;
  quality?: number;
  sizes?: string;
  priority?: boolean;
  isCard?: boolean;
};

export default function OptimizedImage({
  image,
  alt,
  className = "",
  width = 800,
  quality = 75,
  sizes = "100vw",
  priority = false,
  isCard = false,
}: Props) {
  if (!image) {
    return null;
  }

  const imageBuilder = urlFor(image) as ImageUrlBuilder;
  const imageUrl = imageBuilder.width(width).quality(quality).url();

  if (!imageUrl) {
    return null;
  }

  if (isCard) {
    return (
      <div className="relative aspect-square">
        <Image
          src={imageUrl}
          alt={alt}
          className={`${className} object-cover`}
          width={width}
          height={width}
          quality={quality}
          sizes={sizes}
          priority={priority}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    );
  }

  // For modal images
  return (
    <div className="relative w-full">
      <Image
        src={imageUrl}
        alt={alt}
        className={`${className} object-contain`}
        width={width}
        height={Math.round(width * 0.66)} // Provide a default aspect ratio
        quality={quality}
        sizes={sizes}
        priority={priority}
        style={{
          width: "100%",
          height: "auto",
          maxWidth: "100%",
          display: "block",
        }}
        unoptimized // This will prevent Next.js from trying to optimize the image, which can sometimes cause cropping
      />
    </div>
  );
}
