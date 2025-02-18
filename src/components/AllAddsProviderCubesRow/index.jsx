import { Heading, Text, Img } from "./..";
import React from "react";

export default function AllAddsProviderCubesRow({
  image = "images/img_car_black_900_03.svg",
  twenty = "20",
  prop = "מודעות",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center self-stretch border-gray-200 border border-solid flex-1 rounded`}
    >
      <div className="mb-1 flex w-full flex-col items-center">
        <div className="flex items-center justify-center gap-1.5 self-stretch">
          <Img src={image} alt="Image" className="mb-3 h-[16px] self-end" />
          <Text size="text10xl" as="p" className="text-[41.11px] font-normal">
            {twenty}
          </Text>
        </div>
        <Heading size="h5_assistant_12px_r" as="p" className="relative mt-[-10px] text-[12px] font-semibold">
          {prop}
        </Heading>
      </div>
    </div>
  );
}
