import sharp from 'sharp';
import path from 'path';
import fs from 'fs/promises';

interface ImageConfig {
  width: number;
  quality: number;
  suffix: string;
}

const configs: ImageConfig[] = [
  { width: 600, quality: 75, suffix: 'thumb' },
  { width: 1200, quality: 80, suffix: 'regular' },
  { width: 2000, quality: 85, suffix: 'large' }
];

async function optimizeImage(inputPath: string) {
  const ext = path.extname(inputPath);
  const basename = path.basename(inputPath, ext);
  const dir = path.dirname(inputPath);

  for (const config of configs) {
    const outputPath = path.join(
      dir, 
      `${basename}-${config.suffix}.webp`
    );

    await sharp(inputPath)
      .resize(config.width, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality: config.quality })
      .toFile(outputPath);

    console.log(`Created ${outputPath}`);
  }
}

// Usage example
// npm install sharp
// ts-node scripts/optimize-images.ts path/to/image.jpg
const inputPath = process.argv[2];
if (!inputPath) {
  console.error('Please provide an image path');
  process.exit(1);
}

optimizeImage(inputPath)
  .catch(console.error);