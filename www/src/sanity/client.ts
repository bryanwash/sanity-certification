import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "y92r46rs",
  dataset: "production",
  apiVersion: "v2025-03-10",
  useCdn: false,
  stega: {
    studioUrl:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://sanity-certification-sigma.vercel.app/",
  },
});

const { projectId, dataset, stega } = client.config();

export const createDataAttributeConfig = {
  projectId,
  dataset,
  baseUrl: typeof stega.studioUrl === "string" ? stega.studioUrl : "",
};
