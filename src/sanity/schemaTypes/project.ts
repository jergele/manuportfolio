export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule: any) => Rule.required(),
    },
    {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true, // Enables UI for selecting focal point
          // Add metadata for better optimization
          metadata: ['blurhash', 'lqip', 'palette'],
          // Add image preprocessing
          storeOriginalFilename: false, // Don't store original filename
          accept: 'image/jpeg, image/png, image/webp', // Limit file types
        },
        validation: (Rule: any) => Rule.required()
  
    },
    {
      name: "year",
      title: "Year",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
                metadata: ['blurhash', 'lqip', 'palette'],
                storeOriginalFilename: false,
                accept: 'image/jpeg, image/png, image/webp',
              }
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string'
            }
          ],
        },
      ],
    },
  ],
};
