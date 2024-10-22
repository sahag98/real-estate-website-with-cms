import schemas from "@/sanity/schemas"
import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"

const config = defineConfig({
  projectId: "02bmwvy4",
  dataset: "production",
  title: "alan-realestate",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: { types: schemas },
})

export default config
