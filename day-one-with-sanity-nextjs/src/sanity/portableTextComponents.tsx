import Image from "next/image";
import {
  PortableTextBlock,
  PortableTextComponents,
  PortableText,
} from "next-sanity";
import { urlFor } from "@/sanity/image";

export const components: PortableTextComponents = {
  types: {
    image: (props) =>
      props.value ? (
        <Image
          className="rounded-lg not-prose w-full h-auto"
          src={urlFor(props.value)
            .width(600)
            .height(400)
            .quality(80)
            .auto("format")
            .url()}
          alt={props?.value?.alt || ""}
          width="600"
          height="400"
        />
      ) : null,
  },
};

export const RichText = ({ value }: { value: PortableTextBlock[] }) => {
  return <PortableText components={components} value={value} />;
};
