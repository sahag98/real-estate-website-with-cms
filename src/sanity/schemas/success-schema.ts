const success = {
  name: "success",
  title: "Successes",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
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
    {
      name: "video",
      title: "Video",
      type: "file",
      options: {
        accept: "video/*",
      },
      validation: (Rule: any) => Rule.required(),
    },
  ],
}

export default success
