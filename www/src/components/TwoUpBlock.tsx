import type { TwoUpBlock } from "@/sanity/types";
import Image from "next/image";
import { urlFor } from "@/sanity/image";
import { RichText } from "@/sanity/portableTextComponents";
import { PortableTextBlock } from "next-sanity";
export function TwoUpBlock({ block }: { block: TwoUpBlock }) {
  const { leftColumn, rightColumn } = block;
  return (
    <div className="w-full mx-auto py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-1 flex flex-col gap-4">
          <Image
            src={
              leftColumn?.image
                ? urlFor(leftColumn.image).width(550).height(310).url()
                : "https://placehold.co/550x310/png"
            }
            alt={"Left Column Image"}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            height="310"
            width="550"
          />
          <RichText value={leftColumn?.content as PortableTextBlock[]} />
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <Image
            src={
              rightColumn?.image
                ? urlFor(rightColumn.image).width(550).height(310).url()
                : "https://placehold.co/550x310/png"
            }
            alt={"Right Column Image"}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            height="310"
            width="550"
          />
          <RichText value={rightColumn?.content as PortableTextBlock[]} />
        </div>
      </div>
    </div>
  );
}
