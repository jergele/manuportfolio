import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";

type Props = {
  image: any;
  alt: string;
  className?: string;
  width?: number;
  quality?: number;
  sizes?: string;
};

export default function OptimizedImage({
  image,
  alt,
  className = "",
  width = 800,
  quality = 75,
  sizes = "100vw",
}: Props) {
  const imageUrl = urlFor(image).width(width).quality(quality).url();

  return (
    <Image
      src={imageUrl}
      alt={alt}
      className={className}
      width={width}
      height={width} // You might want to adjust this based on your aspect ratio
      quality={quality}
      sizes={sizes}
    />
  );
}
