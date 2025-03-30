import { Heading, Img, Button } from "./..";
import React from "react";

export default function MazalTovOfferSentColumncar10660x({
  link = "ממתין להצעה",
  x85zero = "X8 – 5.0 במוו",
  twothousandtwen = "2022",
  prop = "במוו",
  p2287 = "2287 נפח מנוע",
  four = "יד 4",
  prop1 = "אוטומטי",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} bg-secondary-primary_white rounded-[16px]`}>
      <div className="relative h-[218px] content-center self-stretch">
        <Img
          src="images/img_car10_660x440_jpg.png"
          alt="Car10660x440"
          className="h-[218px] w-full flex-1 object-cover"
        />
        <div className="absolute left-0 right-0 top-[22px] mx-auto flex flex-1 flex-col items-start gap-[38px] px-1.5">
          <Button shape="round" className="ml-3.5 min-w-[116px] rounded-[14px] px-4 font-dmsans font-medium capitalize">
            {link}
          </Button>
          <div className="h-[40px] self-stretch" />
        </div>
      </div>
      <div className="relative z-[1] flex flex-col items-center justify-center self-stretch rounded-bl-[16px] rounded-br-[16px] border-b border-l border-r border-solid border-gray-200 p-3">
        <div className="flex pl-[78px] pr-14 md:px-5">
          <Heading size="heading5xl" as="h6" className="!font-heebo text-[18px] font-bold !text-black-900">
            {x85zero}
          </Heading>
        </div>
        <div className="flex w-[26%] items-center justify-center">
          <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
            {twothousandtwen}
          </Heading>
          <div className="ml-1.5 h-[6px] w-[6px] rounded-[3px] bg-red-a700_03" />
          <Heading size="textmd" as="p" className="ml-2.5 !font-heebo text-[14px] font-normal !text-black-900">
            {prop}
          </Heading>
        </div>
        <div className="mb-1 mt-5 flex w-[88%] items-center justify-between gap-5">
          <div className="flex flex-1 items-center justify-between gap-5">
            <div className="flex flex-col items-start gap-0.5">
              <Img src="images/img_icon_black_900_01.svg" alt="Icononeone" className="ml-[26px] h-[26px]" />
              <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                {p2287}
              </Heading>
            </div>
            <div className="flex w-[28%] flex-col items-start gap-0.5">
              <Img src="images/img_artboard_2_copy_3.svg" alt="Artboard2copy" className="h-[24px]" />
              <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                {four}
              </Heading>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2 self-end">
            <Img src="images/img_icon_black_900.svg" alt="Iconthreeone" className="mr-3 h-[18px]" />
            <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
              {prop1}
            </Heading>
          </div>
        </div>
      </div>
    </div>
  );
}
