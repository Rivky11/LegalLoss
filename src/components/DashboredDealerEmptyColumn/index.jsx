import { Heading, Img, Text } from "./..";
import React from "react";

export default function DashboredDealerEmptyColumn({ twenty = "20", prop = "הצעות שנדחו", ...props }) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-[50%] gap-[26px]`}>
      <div className="flex flex-col items-end self-stretch">
        <Text
          size="text11xl"
          as="p"
          className="relative z-[4] mr-2 !font-heebo text-[44.98px] font-normal !text-secondary-primary_white"
        >
          {twenty}
        </Text>
        <div className="relative mt-[-26px] flex self-stretch rounded bg-gray-600 px-[18px]">
          <Img src="images/img_vector_secondary__primary_white.png" alt="Image" className="mt-5 h-[4px] object-cover" />
        </div>
      </div>
      <Heading size="textxs" as="p" className="!font-heebo text-[12.59px] font-medium !text-secondary-primary_white">
        {prop}
      </Heading>
    </div>
  );
}
