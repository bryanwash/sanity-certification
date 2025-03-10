import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "y92r46rs",
  dataset: "production",
  apiVersion: "2024-11-01",
  useCdn: false,
  stega: { studioUrl: "/studio" },
});
