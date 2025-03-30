import { Img, Heading, Button } from "./..";
import React from "react";

export default function CarDetailsComponent1({
  approvalButtonText = "ממתין לאישור",
  prop = "₪",
  priceText = "40,000",
  maxPriceLabel = "מחיר המקסימום:",
  carModelText = "X8 – 5.0 במוו",
  yearText = "2022",
  brandText = "במוו",
  engineVolumeText = "2287 נפח מנוע",
  handText = "יד 4",
  transmissionText = "אוטומטי",
  viewOffersText = "לצפיה בהצעות",
  dismantlingText = "פירוק",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} w-full bg-secondary-primary_white rounded-[16px]`}>
      <div className="relative h-[218px] content-center self-stretch">
        <Img
          src="images/img_car20_660x440_jpg.png"
          alt="Car20660x440"
          className="h-[218px] w-full flex-1 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 mx-auto flex flex-1 flex-col items-start">
          <Button shape="round" className="ml-5 min-w-[114px] rounded-[14px] px-4 font-dmsans font-medium capitalize">
            {approvalButtonText}
          </Button>
          <div className="mx-1.5 mt-[38px] flex justify-between gap-5 self-stretch">
            <Button size="3xl" shape="circle" className="w-[60px] rounded-[20px] px-3">
              <Img src="images/img_icon_secondary__primary_white.svg" />
            </Button>
            <Button size="3xl" shape="circle" className="w-[60px] rounded-[20px] px-3">
              <Img src="images/img_arrow_right.svg" />
            </Button>
          </div>
          <div className="mt-[58px] self-stretch bg-red-a700_cc px-14 md:px-5">
            <div className="mt-1 flex items-center justify-center self-end">
              <div className="flex flex-wrap items-start">
                <Heading
                  size="headingxs"
                  as="p"
                  className="mt-1 !font-heebo text-[9px] font-bold !text-secondary-primary_white"
                >
                  {prop}
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
                className="ml-1 self-end !font-heebo text-[14px] font-bold !text-secondary-primary_white"
              >
                {maxPriceLabel}
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
        <div className="ml-[30px] mr-[26px] mt-3 flex flex-col gap-4">
          <div className="flex items-center justify-between gap-5">
            <div className="flex flex-1 items-center justify-between gap-5">
              <div className="flex flex-col items-start gap-0.5">
                <Img src="images/img_icon_black_900_01.svg" alt="Icontwentyone" className="ml-[26px] h-[26px]" />
                <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                  {engineVolumeText}
                </Heading>
              </div>
              <div className="flex w-[28%] flex-col items-start gap-0.5">
                <Img src="images/img_artboard_2_copy_3.svg" alt="Artboard2copy" className="h-[24px]" />
                <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                  {handText}
                </Heading>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2 self-end">
              <Img src="images/img_icon_black_900.svg" alt="Iconone" className="mr-3 h-[18px]" />
              <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                {transmissionText}
              </Heading>
            </div>
          </div>
          <div className="relative h-[56px]">
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1 border-t border-solid border-gray-200 py-2.5">
              <div className="mt-1.5 flex items-center">
                <Img src="images/img_settings_black_900.svg" alt="Settingsseven" className="h-[14px]" />
                <Heading size="h4_assistant_16px_b" as="h6" className="text-[16px] font-semibold">
                  {viewOffersText}
                </Heading>
              </div>
            </div>
            <div className="absolute bottom-0 right-px top-0 my-auto flex h-max w-[42%] items-center justify-center gap-[18px] rounded-[14px] bg-secondary-primary_white">
              <Heading
                size="textmd"
                as="p"
                className="self-end !font-dmsans text-[14px] font-medium capitalize !text-black-900"
              >
                {dismantlingText}
              </Heading>
              <Img src="images/img_television_red_a700_03_1.svg" alt="Television" className="h-[22px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
