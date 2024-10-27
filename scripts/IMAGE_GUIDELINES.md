# Image Upload Guidelines for Portfolio

## Quick Reference

### Recommended Image Specifications
- **Maximum dimensions**: 2000px on longest side
- **File formats**: WebP (preferred), JPEG, PNG
- **File size targets**:
  - Thumbnails: < 100KB
  - Regular images: < 500KB
  - Large detailed images: < 1MB
- **Quality settings**: 75-85%

### Size Guidelines by Usage
1. **Thumbnail/Card Images**
   - Width: 600-800px
   - Quality: 75%
   - Format: WebP/JPEG

2. **Regular Portfolio Images**
   - Width: 1200-1600px
   - Quality: 80%
   - Format: WebP/JPEG

3. **Detail/Zoom Images**
   - Width: 1600-2000px
   - Quality: 85%
   - Format: WebP/JPEG

## Pre-Upload Optimization Steps

### 1. Free Online Tools
- **[Squoosh](https://squoosh.app/)**
  - Web-based
  - Supports WebP conversion
  - Easy to use
  
- **[TinyPNG](https://tinypng.com/)**
  - Good for PNG files
  - Batch processing available
  - No account needed

### 2. Desktop Applications
- **Mac: ImageOptim**
  ```bash
  brew install imageoptim
  ```
  
- **Windows: FileOptimizer**
  - Download from: https://nikkhokkho.sourceforge.io/static.php?page=FileOptimizer

### 3. Image Preparation Checklist

✅ Before uploading any image:
1. Resize to recommended dimensions
2. Convert to WebP if possible
3. Remove EXIF data
4. Optimize file size
5. Verify image quality
6. Name file descriptively

## Uploading to Sanity Studio

### 1. Main Project Image
- Use clear, representative shot
- Set focal point using hotspot
- Add descriptive alt text
- Include relevant metadata

### 2. Gallery Images
- Maintain consistent aspect ratios
- Add descriptive captions
- Order from most to least important
- Group similar images together

## Best Practices by Image Type

### 1. Artwork Documentation
```
- Shoot in neutral lighting
- Include color reference
- Maintain true colors
- Capture texture details
```

### 2. Installation Views
```
- Show scale with reference objects
- Include context/environment
- Multiple angles if needed
```

### 3. Detail Shots
```
- Focus on specific features
- Use macro mode if needed
- Ensure sharp focus
```

## Example Image Processing

### Command Line Using ImageMagick:

```bash
# Resize image to 1200px width
convert input.jpg -resize 1200x output.jpg

# Convert to WebP with quality setting
cwebp -q 80 input.jpg -o output.webp

# Strip metadata
convert input.jpg -strip output.jpg
```

### Using Sharp in Node.js:

```javascript
import sharp from 'sharp';

sharp('input.jpg')
  .resize(1200, null) // width, height (null maintains aspect ratio)
  .webp({ quality: 80 })
  .toFile('output.webp')
```

## Storage Management Tips

1. **Organize by Project**
```
project-name/
  ├── main-image.webp
  ├── gallery/
  │   ├── 01-overview.webp
  │   ├── 02-detail.webp
  │   └── 03-installation.webp
  └── thumbnails/
      └── card-image.webp
```

2. **Naming Convention**
```
[project-name]-[image-type]-[number].[extension]

Examples:
- spring-awakening-main-01.webp
- spring-awakening-detail-01.webp
- spring-awakening-install-01.webp
```

## Common Issues and Solutions

### 1. Image Too Large
```
✗ 5MB image file
✓ Use ImageOptim to reduce size
✓ Verify dimensions aren't excessive
✓ Convert to WebP format
```

### 2. Poor Quality
```
✗ Blurry or pixelated images
✓ Check original resolution
✓ Use proper export settings
✓ Avoid multiple compressions
```

### 3. Color Issues
```
✗ Colors don't match original
✓ Use sRGB color space
✓ Calibrate your monitor
✓ Test on multiple devices
```

## Quality Control Checklist

Before publishing:
- [ ] Image dimensions are correct
- [ ] File size is within limits
- [ ] Colors are accurate
- [ ] Focus is sharp
- [ ] Metadata is appropriate
- [ ] Alt text is descriptive
- [ ] Captions are informative
- [ ] Hotspot is set correctly

## Additional Resources

1. **Color Management**
   - [Color Space Guide](https://www.color.org/sRGB.xalter)
   - Monitor calibration tools

2. **Photography Tips**
   - Lighting setups
   - Camera settings
   - Post-processing workflows

3. **Tools and Software**
   - Adobe Lightroom
   - Capture One
   - DxO PhotoLab