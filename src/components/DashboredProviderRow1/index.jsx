import { Heading, Text, Img } from "./..";
import React from "react";

export default function DashboredProviderRow1({
  prop = "קיבלת הצעת מחיר חדשה",
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
      className={`${props.className} flex items-center self-stretch h-[168px] lg:h-auto md:h-auto py-1 bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat flex-1 rounded-md`}
    >
      <div className="flex w-full flex-col items-start">
        <Img src="images/img_button.svg" alt="Image" className="ml-2.5 h-[22px] rounded-[1px]" />
        <div className="relative mb-2 mr-1.5 mt-[-12px] flex items-center self-stretch">
          <Img src="images/img_stock_photo_onl.png" alt="Image" className="h-[76px] w-[28%] object-contain" />
          <div className="relative ml-[-32px] flex flex-1 flex-col items-end gap-2.5">
            <Text size="textxl" as="p" className="!font-heebo text-[16px] font-medium">
              {prop}
            </Text>
            <div className="flex justify-between gap-5 self-stretch">
              <div className="flex flex-1 flex-col items-end justify-center">
                <Heading size="h4_assistant_16px_b" as="h6" className="text-[16px] font-semibold">
                  {plumbingrepair}
                </Heading>
                <Heading size="h4_assistant_16px_b" as="h6" className="text-[16px] font-semibold">
                  {zipcode}
                </Heading>
                <div className="flex flex-wrap items-center justify-end self-stretch">
                  <Heading size="headings" as="p" className="self-end !font-heebo text-[10px] font-bold">
                    {prop1}
                  </Heading>
                  <Text size="textxl" as="p" className="!font-heebo text-[16px] font-medium !text-red-a700_03">
                    {plumbingrepair1}
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-end justify-center gap-0.5">
                <Heading size="h4_assistant_16px_b" as="h6" className="text-[16px] font-semibold">
                  {plumbingrepair2}
                </Heading>
                <Heading size="h4_assistant_16px_b" as="h6" className="text-[16px] font-semibold">
                  {plumbingrepair3}
                </Heading>
                <Heading size="h4_assistant_16px_b" as="h6" className="text-[16px] font-semibold">
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
