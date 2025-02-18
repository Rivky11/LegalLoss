import { Img, Heading } from "./..";
import React from "react";

export default function CreateNewCarPackageCubeColumncar20660x({
  x85zero = "X8 – 5.0 במוו",
  twothousandtwen = "2022",
  prop = "במוו",
  p2287 = "2287 נפח מנוע",
  four = "יד 4",
  prop1 = "אוטומטי",
  prop2 = "פירוק",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} bg-secondary-primary_white rounded-[16px]`}>
      <div className="relative h-[218px] content-center self-stretch">
        <Img
          src="images/img_car20_660x440_jpg.png"
          alt="Car20660x440"
          className="h-[218px] w-full flex-1 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 justify-between gap-5 px-1.5">
          <div className="flex w-[18%] justify-center rounded-[20px] bg-white-a700_33 p-3">
            <Img src="images/img_icon_secondary__primary_white.svg" alt="Icononeone" className="h-[12px]" />
          </div>
          <div className="flex w-[18%] justify-center rounded-[20px] bg-white-a700_33 p-3">
            <Img src="images/img_arrow_right.svg" alt="Arrowrightone" className="h-[12px]" />
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-bl-[16px] rounded-br-[16px] border-b border-l border-r border-solid border-gray-200 py-1">
        <div className="mx-[30px] mt-1.5 flex pl-[78px] pr-14 md:px-5">
          <Heading size="heading5xl" as="h6" className="!font-heebo text-[18px] font-bold !text-black-900">
            {x85zero}
          </Heading>
        </div>
        <div className="flex justify-center px-14 md:px-5">
          <div className="mb-1.5 flex w-[40%] items-center justify-center">
            <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
              {twothousandtwen}
            </Heading>
            <div className="ml-1.5 h-[6px] w-[6px] rounded-[3px] bg-red-a700_03" />
            <Heading size="textmd" as="p" className="ml-2.5 !font-heebo text-[14px] font-normal !text-black-900">
              {prop}
            </Heading>
          </div>
        </div>
        <div className="mx-[30px] mt-3 flex items-center justify-between gap-5">
          <div className="flex flex-1 items-center justify-between gap-5">
            <div className="flex flex-col items-start gap-0.5">
              <Img src="images/img_icon_black_900_01.svg" alt="Iconthreeone" className="ml-[26px] h-[26px]" />
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
            <Img src="images/img_icon_black_900.svg" alt="Iconfiveone" className="mr-3 h-[18px]" />
            <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
              {prop1}
            </Heading>
          </div>
        </div>
        <div className="mx-[30px] mt-4 flex justify-end border-t border-solid border-gray-200 py-3">
          <div className="flex w-[42%] items-center justify-center gap-[18px] rounded-[14px] bg-secondary-primary_white">
            <Heading
              size="textmd"
              as="p"
              className="self-end !font-dmsans text-[14px] font-medium capitalize !text-black-900"
            >
              {prop2}
            </Heading>
            <Img src="images/img_television_red_a700_03_1.svg" alt="Televisionone" className="h-[22px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
