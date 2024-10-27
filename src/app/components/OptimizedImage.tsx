import { urlFor } from '@/app/lib/sanity'

interface ImageProps {
  image: any
  alt: string
  width?: number
  quality?: number
  sizes?: string
  className?: string
  priority?: boolean
}

export default function OptimizedImage({
  image,
  alt,
  width = 800,
  quality = 80,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  className = '',
  priority = false,
}: ImageProps) {
  // Generate different sizes for srcSet
  const srcSet = [400, 800, 1200].map((w) => ({
    url: urlFor(image)
      .width(w)
      .quality(quality)
      .url(),
    width: w,
  }))

  return (
    <img
      src={urlFor(image).width(width).quality(quality).url()}
      srcSet={srcSet.map(({ url, width }) => `${url} ${width}w`).join(', ')}
      sizes={sizes}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
    />
  )
}