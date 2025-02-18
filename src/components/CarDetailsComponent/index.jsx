import { Img, Heading, Button } from "./..";
import React from "react";

export default function CarDetailsComponent({
  approvalButtonText = "מאושר",
  currencySymbol = "₪",
  priceText = "40,000",
  priceLabelText = "מחיר שאישרת:",
  carModelText = "X8 – 5.0 במוו",
  yearText = "2022",
  brandText = "במוו",
  engineVolumeText = "2287 נפח מנוע",
  handText = "יד 4",
  transmissionText = "אוטומטי",
  approvalViewText = "לצפיה באישור",
  dismantlingText = "פירוק",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col w-full bg-secondary-primary_white rounded-[16px]`}>
      <div className="relative h-[218px] self-stretch">
        <Img
          src="images/img_car9_660x440_jpg.png"
          alt="Car9660x440one"
          className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[218px] w-full flex-1 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 mx-auto flex flex-1 flex-col items-start">
          <Button
            shape="round"
            className="ml-5 min-w-[104px] rounded-[14px] px-8 font-dmsans font-medium capitalize sm:px-5"
          >
            {approvalButtonText}
          </Button>
          <div className="mx-1.5 mt-[38px] flex justify-between gap-5 self-stretch">
            <div className="flex w-[18%] justify-center rounded-[20px] bg-white-a700_33 p-3">
              <Img src="images/img_icon_secondary__primary_white.svg" alt="Icononeone" className="h-[12px]" />
            </div>
            <div className="flex w-[18%] justify-center rounded-[20px] bg-white-a700_33 p-3">
              <Img src="images/img_arrow_right.svg" alt="Arrowrightone" className="h-[12px]" />
            </div>
          </div>
          <div className="mt-[58px] self-stretch bg-light_green-800_cc px-14 md:px-5">
            <div className="mt-1 flex items-center justify-between gap-5 self-end">
              <div className="flex flex-wrap items-start">
                <Heading
                  size="headingxs"
                  as="p"
                  className="mt-1 !font-heebo text-[9px] font-bold !text-secondary-primary_white"
                >
                  {currencySymbol}
                </Heading>
                <Heading
                  as="h6"
                  className="self-center !font-heebo text-[17px] font-bold !text-secondary-primary_white"
                >
                  {priceText}
                </Heading>
              </div>
              <Heading
                size="headingxl"
                as="p"
                className="!font-heebo text-[14px] font-bold !text-secondary-primary_white"
              >
                {priceLabelText}
              </Heading>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-bl-[16px] rounded-br-[16px] border-b border-l border-r border-solid border-gray-200 py-1">
        <div className="mx-[30px] mt-1.5 flex pl-[78px] pr-14 md:px-5">
          <Heading size="heading5xl" as="h6" className="!font-heebo text-[18px] font-bold !text-black-900">
            {carModelText}
          </Heading>
        </div>
        <div className="flex justify-center px-14 md:px-5">
          <div className="mb-1.5 flex w-[40%] items-center justify-center">
            <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
              {yearText}
            </Heading>
            <div className="ml-1.5 h-[6px] w-[6px] rounded-[3px] bg-red-a700_03" />
            <Heading size="textmd" as="p" className="ml-2.5 !font-heebo text-[14px] font-normal !text-black-900">
              {brandText}
            </Heading>
          </div>
        </div>
        <div className="ml-[26px] mr-[18px] mt-3 flex flex-col gap-4">
          <div className="ml-1 mr-3 flex items-center justify-between gap-5">
            <div className="flex flex-1 items-center justify-between gap-5">
              <div className="flex flex-col items-start gap-0.5">
                <Img src="images/img_icon_black_900_01.svg" alt="2287 נפח מנוע" className="ml-[26px] h-[26px]" />
                <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                  {engineVolumeText}
                </Heading>
              </div>
              <div className="flex w-[28%] flex-col items-start gap-0.5">
                <Img src="images/img_artboard_2_copy_3.svg" alt="יד" className="h-[24px]" />
                <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                  {handText}
                </Heading>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2 self-end">
              <Img src="images/img_icon_black_900.svg" alt="אוטומטי" className="mr-3 h-[18px]" />
              <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                {transmissionText}
              </Heading>
            </div>
          </div>
          <div className="relative h-[56px]">
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[56px] flex-1 border-t border-solid border-gray-200" />
            <div className="absolute bottom-[11.02px] left-0 right-0 mx-auto flex flex-1 items-center">
              <div className="relative z-[4] flex flex-1 items-center">
                <Img src="images/img_settings_black_900.svg" alt="לצפיה באישור" className="h-[14px]" />
                <Heading size="h4_assistant_16px_b" as="h6" className="text-[16px] font-semibold">
                  {approvalViewText}
                </Heading>
              </div>
              <div className="relative ml-[-14px] flex w-[38%] items-center justify-center gap-[18px] rounded-[14px] bg-secondary-primary_white">
                <Heading
                  size="textmd"
                  as="p"
                  className="self-end !font-dmsans text-[14px] font-medium capitalize !text-black-900"
                >
                  {dismantlingText}
                </Heading>
                <Img src="images/img_television_red_a700_03_1.svg" alt="פירוק" className="h-[22px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
