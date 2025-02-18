import { Heading, Text, Img } from "./..";
import React from "react";

export default function CarAdNotification({
  notificationText = "זכית! במודעת רכב",
  carModel = "X8 – 5.0 במוו",
  carYear = "2022",
  prop = "₪",
  carPrice = "40,000",
  plumbingrepair = "רכב:",
  plumbingrepair1 = "מודל:",
  plumbingrepair2 = "מחיר:",
  notificationDate = "22.11.2023",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex items-center self-stretch py-1 flex-1`}>
      <div className="mb-2 flex w-full flex-col items-start">
        <Img src="images/img_button.svg" alt="זכיתבמודעת רכב" className="ml-2 h-[22px] rounded-[1px]" />
        <div className="relative mr-2 mt-[-12px] flex items-center self-stretch">
          <Img src="images/img_1_1390807166_1.png" alt="זכיתבמודעת רכב" className="h-[98px] w-[36%] object-contain" />
          <div className="relative ml-[-30px] flex flex-1 flex-col items-end gap-2.5">
            <Text size="textxl" as="p" className="!font-heebo text-[16px] font-medium">
              {notificationText}
            </Text>
            <div className="flex justify-between gap-5 self-stretch">
              <div className="flex flex-1 flex-col items-end justify-center">
                <Heading size="heading5xl" as="h6" className="text-[18px] font-bold">
                  {carModel}
                </Heading>
                <Heading size="heading5xl" as="h6" className="text-[18px] font-semibold">
                  {carYear}
                </Heading>
                <div className="flex flex-wrap items-center justify-end self-stretch">
                  <Heading size="headingxs" as="p" className="self-end !font-heebo text-[9px] font-bold">
                    {prop}
                  </Heading>
                  <Heading size="heading5xl" as="h6" className="!font-heebo text-[18px] font-bold !text-red-a700_03">
                    {carPrice}
                  </Heading>
                </div>
              </div>
              <div className="flex flex-col items-end justify-center gap-0.5">
                <Heading size="h4_assistant_16px_b" as="h6" className="text-[16px] font-semibold">
                  {plumbingrepair}
                </Heading>
                <Heading size="h4_assistant_16px_b" as="h6" className="text-[16px] font-semibold">
                  {plumbingrepair1}
                </Heading>
                <Heading size="h4_assistant_16px_b" as="h6" className="text-[16px] font-semibold">
                  {plumbingrepair2}
                </Heading>
              </div>
            </div>
            <Heading size="h5_assistant_12px_r" as="p" className="text-[12px] font-semibold !text-gray-600">
              {notificationDate}
            </Heading>
          </div>
        </div>
      </div>
    </div>
  );
}
