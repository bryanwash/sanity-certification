import type { OneUpBlock } from "@/sanity/types";
import Image from "next/image";
import { urlFor } from "@/sanity/image";

export function OneUpBlock({ block }: { block: OneUpBlock }) {
  const { image, title } = block;
  return (
    <div className="w-full py-4">
      <Image
        src={
          image
            ? urlFor(image)?.width(550).height(310).url()
            : "https://placehold.co/550x310/png"
        }
        alt={title || "Event"}
        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
        height="310"
        width="550"
      />
    </div>
  );
}
