import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";

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
  const imageUrl = urlFor(image).width(width).quality(quality).url();

  return (
    <Image
      src={imageUrl}
      alt={alt}
      className={className}
      width={width}
      height={width}
      quality={quality}
      sizes={sizes}
      priority={priority}
    />
  );
}
