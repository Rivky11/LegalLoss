import { Img, Heading } from "./..";
import React from "react";

export default function CarOfferDetails({
  offerText,
  prop = "₪",
  offerPrice = "40,000",
  prop1 = "מחיר ההצעה:",
  carModel = "X8 – 5.0 במוו",
  carYear = "2022",
  prop2 = "במוו",
  engineVolumeText = "2287 נפח מנוע",
  handText = "יד 4",
  transmissionText = "אוטומטי",
  soldText = "נמכר למשהו אחר",
  recoveryText = "שיקום",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} bg-secondary-primary_white rounded-[16px]`}>
      <div className="relative h-[218px] self-stretch">
        <Img
          src="images/img_car10_660x440_jpg_218x328.png"
          alt="Car10660x440"
          className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[218px] w-full flex-1 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 mx-auto flex flex-1 flex-col items-start">
          {!!offerText ? (
            <Heading
              size="textmd"
              as="p"
              className="ml-5 flex justify-center rounded-[14px] bg-gray-700_04 py-1 pl-4 pr-1.5 !font-dmsans text-[14px] font-medium capitalize !text-secondary-primary_white"
            >
              {offerText}
            </Heading>
          ) : null}
          <div className="mx-1.5 mt-9 h-[40px] self-stretch" />
          <div className="mt-[58px] flex justify-center self-stretch bg-gray-600_cc px-14 md:px-5">
            <div className="mt-1 flex items-center self-end bg-gray-600_cc">
              <div className="flex flex-wrap items-center">
                <Heading
                  size="headingxs"
                  as="p"
                  className="!font-heebo text-[9px] font-bold !text-secondary-primary_white"
                >
                  {prop}
                </Heading>
                <Heading as="h6" className="!font-heebo text-[17px] font-bold !text-secondary-primary_white">
                  {offerPrice}
                </Heading>
              </div>
              <Heading
                size="headingxl"
                as="p"
                className="!font-heebo text-[14px] font-bold !text-secondary-primary_white"
              >
                {prop1}
              </Heading>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center self-stretch rounded-bl-[16px] rounded-br-[16px] border-b border-l border-r border-solid border-gray-200 py-1">
        <Heading
          size="heading5xl"
          as="h6"
          className="ml-[110px] mt-1.5 self-start !font-heebo text-[18px] font-bold !text-black-900"
        >
          {carModel}
        </Heading>
        <div className="flex justify-center self-stretch px-14 md:px-5">
          <div className="mb-1.5 flex w-[40%] items-center justify-center">
            <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
              {carYear}
            </Heading>
            <div className="ml-1.5 h-[6px] w-[6px] rounded-[3px] bg-red-a700_03" />
            <Heading size="textmd" as="p" className="ml-2.5 !font-heebo text-[14px] font-normal !text-black-900">
              {prop2}
            </Heading>
          </div>
        </div>
        <div className="mx-[30px] mt-3.5 flex items-center justify-between gap-5 self-stretch">
          <div className="flex flex-1 items-center justify-between gap-5">
            <div className="flex flex-col items-start gap-0.5">
              <Img src="images/img_icon_black_900_01.svg" alt="Icononeone" className="ml-[26px] h-[26px]" />
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
            <Img src="images/img_icon_black_900.svg" alt="Iconthreeone" className="mr-3 h-[18px]" />
            <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
              {transmissionText}
            </Heading>
          </div>
        </div>
        <div className="relative ml-[30px] mr-[22px] mt-4 h-[56px] self-stretch">
          <div className="absolute bottom-0 left-0 right-0 top-0 my-auto ml-auto mr-2 h-max flex-1 border-t border-solid border-gray-200 py-3">
            <div className="flex self-end">
              <Heading size="heading2xl" as="p" className="!font-heebo text-[15px] font-bold !text-gray-500_02">
                {soldText}
              </Heading>
            </div>
          </div>
          <div className="absolute bottom-[10.88px] right-[-1px] m-auto flex w-[42%] items-center justify-center gap-4 rounded-[14px] bg-secondary-primary_white">
            <Heading
              size="textmd"
              as="p"
              className="self-end !font-dmsans text-[14px] font-medium capitalize !text-black-900"
            >
              {recoveryText}
            </Heading>
            <Img src="images/img_vector_red_a700_03_22x34.svg" alt="Vectoroneone" className="h-[22px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
