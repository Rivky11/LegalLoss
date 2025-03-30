import { Img, Heading, Button } from "./..";
import React from "react";

export default function AwaitingAdsDealerCubesColumncarx({
  prop = "ממתין לאישור",
  prop1 = "₪",
  fortythousand = "40,000",
  prop2 = "מחיר ההצעה:",
  x85zero = "X8 – 5.0 במוו",
  zipcode = "2022",
  prop3 = "במוו",
  p2287 = "2287 נפח מנוע",
  four = "יד 4",
  two = "אוטומטי",
  two1 = "לצפיה בהצעה",
  prop4 = "שיקום",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col w-full bg-secondary-primary_white rounded-[16px]`}>
      <div className="relative h-[218px] content-center self-stretch">
        <Img
          src="images/img_car20_660x440_jpg.png"
          alt="Car20660x440"
          className="h-[218px] w-full flex-1 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 mx-auto flex flex-1 flex-col items-start">
          <Button
            shape="round"
            className="ml-5 min-w-[128px] rounded-[14px] px-[22px] font-dmsans font-medium capitalize sm:px-5"
          >
            {prop}
          </Button>
          <div className="mx-1.5 mt-[38px] flex justify-between gap-5 self-stretch">
            <div className="flex w-[18%] justify-center rounded-[20px] bg-white-a700_33 p-3">
              <Img src="images/img_icon_secondary__primary_white.svg" alt="Icononeone" className="h-[12px]" />
            </div>
            <div className="flex w-[18%] justify-center rounded-[20px] bg-white-a700_33 p-3">
              <Img src="images/img_arrow_right.svg" alt="Arrowrightone" className="h-[12px]" />
            </div>
          </div>
          <div className="mt-[58px] flex justify-center self-stretch bg-red-a700_cc px-14 md:px-5">
            <div className="mt-1 flex items-center self-end">
              <div className="flex flex-wrap items-center">
                <Heading
                  size="headingxs"
                  as="p"
                  className="!font-heebo text-[9px] font-bold !text-secondary-primary_white"
                >
                  {prop1}
                </Heading>
                <Heading as="h6" className="!font-heebo text-[17px] font-bold !text-secondary-primary_white">
                  {fortythousand}
                </Heading>
              </div>
              <Heading
                size="headingxl"
                as="p"
                className="!font-heebo text-[14px] font-bold !text-secondary-primary_white"
              >
                {prop2}
              </Heading>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center self-stretch rounded-bl-[16px] rounded-br-[16px] border-b border-l border-r border-solid border-gray-200 p-1">
        <div className="mx-1 mt-1.5 flex pl-[78px] pr-14 md:px-5">
          <Heading size="heading5xl" as="h6" className="!font-heebo text-[18px] font-bold !text-black-900">
            {x85zero}
          </Heading>
        </div>
        <div className="flex w-[26%] items-center justify-center">
          <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
            {zipcode}
          </Heading>
          <div className="ml-1.5 h-[6px] w-[6px] rounded-[3px] bg-red-a700_03" />
          <Heading size="textmd" as="p" className="ml-2.5 !font-heebo text-[14px] font-normal !text-black-900">
            {prop3}
          </Heading>
        </div>
        <div className="mx-1 mt-5 flex w-[86%] items-center justify-between gap-5">
          <div className="flex flex-1 items-center justify-between gap-5">
            <div className="flex flex-col items-start gap-0.5">
              <Img src="images/img_icon_black_900_01.svg" alt="2287 נפח מנוע" className="ml-[26px] h-[26px]" />
              <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                {p2287}
              </Heading>
            </div>
            <div className="flex w-[28%] flex-col items-start gap-0.5">
              <Img src="images/img_artboard_2_copy_3.svg" alt="יד" className="h-[24px]" />
              <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                {four}
              </Heading>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2 self-end">
            <Img src="images/img_icon_black_900.svg" alt="אוטומטי" className="mr-3 h-[18px]" />
            <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
              {two}
            </Heading>
          </div>
        </div>
        <div className="relative ml-1 mt-4 h-[56px] w-[86%]">
          <div className="absolute bottom-0 left-0 right-0 top-0 my-auto ml-auto mr-1 h-max flex-1 border-t border-solid border-gray-200 py-2.5">
            <div className="mt-1.5 flex items-center">
              <Img src="images/img_settings_black_900.svg" alt="לצפיה בהצעה" className="h-[14px]" />
              <Heading size="heading2xl" as="p" className="text-[15px] font-semibold">
                {two1}
              </Heading>
            </div>
          </div>
          <div className="absolute bottom-[9.60px] right-[-1px] m-auto flex w-[42%] items-center justify-center gap-4 rounded-[14px] bg-secondary-primary_white">
            <Heading
              size="textmd"
              as="p"
              className="self-end !font-dmsans text-[14px] font-medium capitalize !text-black-900"
            >
              {prop4}
            </Heading>
            <Img src="images/img_vector_red_a700_03_22x34.svg" alt="שיקום" className="h-[22px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
