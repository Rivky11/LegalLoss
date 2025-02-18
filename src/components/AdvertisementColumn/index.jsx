import { Heading, Text, Img } from "./..";
import React from "react";

export default function AdvertisementColumn({ numberText = "20", newAdsText = "מודעות חדשות", ...props }) {
  return (
    <div {...props} className={`${props.className} flex items-center w-full`}>
      <div className="mb-1 flex w-full flex-col items-center">
        <div className="self-stretch">
          <div className="flex items-start justify-center">
            <div className="mt-3 flex flex-col items-start gap-1">
              <Img src="images/img_arrow_left_red_a700_03_1.svg" alt="Image" className="h-[8px]" />
              <Img src="images/img_car_secondary__primary_white_2.svg" alt="Image" className="h-[18px] self-end" />
            </div>
            <Text
              size="text11xl"
              as="p"
              className="self-center !font-heebo text-[44.98px] font-normal !text-secondary-primary_white"
            >
              {numberText}
            </Text>
          </div>
        </div>
        <Heading
          size="textxs"
          as="p"
          className="relative mt-[-12px] !font-heebo text-[12.59px] font-medium !text-secondary-primary_white"
        >
          {newAdsText}
        </Heading>
      </div>
    </div>
  );
}
