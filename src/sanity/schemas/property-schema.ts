const property = {
  name: "property",
  title: "Properties",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "amount",
      title: "Amount",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "status",
      title: "Status",
      type: "string",
    },
    {
      name: "bedrooms",
      title: "No. of bedrooms",
      type: "string",
    },
    {
      name: "bathrooms",
      title: "No. of bathrooms",
      type: "string",
    },
    {
      name: "parking",
      title: "No. of parking spaces",
      type: "string",
    },
    {
      name: "space",
      title: "Space size in sqft",
      type: "string",
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
}

export default property
