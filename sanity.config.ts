import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { markdownSchema } from "sanity-plugin-markdown";
import { CustomMarkdownInput } from "./components/markdown/CustomMarkdownInput";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: "blog-studio",
  title: "studio",

  projectId,
  dataset,

  plugins: [
    deskTool(),
    markdownSchema({ input: CustomMarkdownInput }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      // logo: Logo,
      // navbar: StudioNavbar,
    },
  },
});
