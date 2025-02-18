import { Heading, Text, Img } from "./..";
import React from "react";

export default function AllAddsDealerCubesRow({ twenty = "20", prop = "מודעות חדשות", ...props }) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center self-stretch border-gray-200 border border-solid flex-1 rounded`}
    >
      <div className="flex w-full flex-col items-center">
        <div className="self-stretch">
          <div className="flex items-start">
            <div className="relative z-[2] mt-1.5 flex flex-col items-start gap-0.5">
              <Img src="images/img_close_red_a700_03.svg" alt="Image" className="h-[8px]" />
              <Img src="images/img_car_black_900_03.svg" alt="Image" className="h-[16px] self-end" />
            </div>
            <Text size="text10xl" as="p" className="self-center text-[41.11px] font-normal">
              {twenty}
            </Text>
          </div>
        </div>
        <Heading size="h5_assistant_12px_r" as="p" className="relative mt-[-8px] text-[12px] font-semibold">
          {prop}
        </Heading>
      </div>
    </div>
  );
}
