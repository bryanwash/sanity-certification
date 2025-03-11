"use client";

import type { ContentArea } from "@/sanity/types";
import { OneUpBlock } from "./OneUpBlock";
import { TwoUpBlock } from "./TwoUpBlock";

type Block = NonNullable<NonNullable<ContentArea["blocks"]>[number]>;

function Content({ block }: { block: Block }) {
  switch (block._type) {
    case "oneUpBlock":
      return <OneUpBlock block={block} />;
    case "twoUpBlock":
      return <TwoUpBlock block={block} />;
    default:
      return null;
  }
}

export default function ContentArea({ content }: { content: ContentArea }) {
  return (
    <div>
      {content?.blocks &&
        content.blocks.map((block) => (
          <Content key={block._key} block={block} />
        ))}
    </div>
  );
}
