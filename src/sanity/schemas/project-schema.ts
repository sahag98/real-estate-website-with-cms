const stat = {
  name: "stat",
  title: "Stats",
  type: "document",
  fields: [
    {
      name: "currency",
      title: "Currency",
      type: "string",
    },
    {
      name: "number",
      title: "Number",
      type: "number",
    },
    {
      name: "amount",
      title: "Amount",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "currency" },
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
  ],
}

export default stat
