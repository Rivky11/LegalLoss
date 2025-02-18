import { Heading, Img } from "./..";
import React from "react";

export default function CarProfilRow({
  prop = "זכית! במודעת רכב",
  plumbingrepair = "X8 – 5.0 במוו",
  zipcode = "2022",
  prop1 = "₪",
  plumbingrepair1 = "40,000",
  plumbingrepair2 = "רכב:",
  plumbingrepair3 = "מודל:",
  plumbingrepair4 = "מחיר:",
  twentytwomillio = "22.11.2023",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center self-stretch p-3 border-blue_gray-100_01 border-b border-solid bg-secondary-primary_white flex-1 rounded-md`}
    >
      <div className="mb-2 flex w-full flex-col items-start">
        <Img src="images/img_button.svg" alt="זכיתבמודעת רכב" className="h-[22px] rounded-[1px]" />
        <div className="relative mr-1 mt-[-16px] flex items-center self-stretch">
          <Img
            src="images/img_1_1390807166_1_132x150.png"
            alt="זכיתבמודעת רכב"
            className="h-[132px] w-[46%] object-contain"
          />
          <div className="relative ml-[-12px] flex flex-1 flex-col items-end gap-2">
            <Heading size="heading6xl" as="h5" className="!font-heebo text-[20px] font-bold !text-red-a700_03">
              {prop}
            </Heading>
            <div className="flex justify-between gap-5 self-stretch">
              <div className="flex flex-1 flex-col items-end justify-center">
                <Heading size="heading5xl" as="h6" className="text-[18px] font-bold">
                  {plumbingrepair}
                </Heading>
                <Heading size="heading5xl" as="h6" className="text-[18px] font-semibold">
                  {zipcode}
                </Heading>
                <div className="flex flex-wrap items-center justify-end self-stretch">
                  <Heading size="headingxs" as="p" className="self-end !font-heebo text-[9px] font-bold">
                    {prop1}
                  </Heading>
                  <Heading size="heading5xl" as="h6" className="!font-heebo text-[18px] font-bold !text-red-a700_03">
                    {plumbingrepair1}
                  </Heading>
                </div>
              </div>
              <div className="flex flex-col items-end justify-center">
                <Heading size="heading5xl" as="h6" className="text-[18px] font-semibold">
                  {plumbingrepair2}
                </Heading>
                <Heading size="heading5xl" as="h6" className="text-[18px] font-semibold">
                  {plumbingrepair3}
                </Heading>
                <Heading size="heading5xl" as="h6" className="text-[18px] font-semibold">
                  {plumbingrepair4}
                </Heading>
              </div>
            </div>
            <Heading size="h5_assistant_12px_r" as="p" className="text-[12px] font-semibold !text-gray-600">
              {twentytwomillio}
            </Heading>
          </div>
        </div>
      </div>
    </div>
  );
}
