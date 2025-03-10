import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
const { projectId, dataset } = client.config();

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};
