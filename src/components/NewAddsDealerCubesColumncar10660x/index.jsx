import { Img, Heading, Button } from "./..";
import React from "react";

export default function NewAddsDealerCubesColumncar10660x({
  link = "ממתין להצעה",
  x85zero = "X8 – 5.0 במוו",
  twothousandtwen = "2022",
  prop = "במוו",
  p2287,
  four,
  prop1,
  settingsoneone,
  prop2,
  prop3,
  vectoroneone,
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
        <div className="absolute left-0 right-0 top-[19.72px] mx-auto flex flex-1 items-start justify-between gap-5 px-5">
          <Button shape="round" className="min-w-[116px] rounded-[14px] px-4 font-dmsans font-medium capitalize">
            {link}
          </Button>
          <Button size="xl" shape="square" className="w-[36px] self-center">
            <Img src="images/defaultNoData.png" />
          </Button>
        </div>
      </div>
      <div className="self-stretch rounded-bl-[16px] rounded-br-[16px] border-b border-l border-r border-solid border-gray-200 py-1">
        <div className="mx-[30px] mt-1.5 flex pl-[78px] pr-14 md:px-5">
          <Heading size="heading5xl" as="h6" className="!font-heebo text-[18px] font-bold !text-black-900">
            {x85zero}
          </Heading>
        </div>
        <div className="flex justify-center px-14 md:px-5">
          <div className="mb-1.5 flex w-[38%] items-center justify-center">
            <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
              {twothousandtwen}
            </Heading>
            <div className="ml-1.5 h-[6px] w-[6px] rounded-[3px] bg-red-a700_03" />
            <Heading size="textmd" as="p" className="ml-2.5 !font-heebo text-[14px] font-normal !text-black-900">
              {prop}
            </Heading>
          </div>
        </div>
        <div className="ml-[30px] mr-[34px] mt-3.5 flex items-center justify-between gap-5">
          <div className="flex flex-1 items-center justify-between gap-5">
            <div className="flex flex-col items-start gap-0.5">
              <Img src="images/img_icon_black_900_01.svg" alt="Icononeone" className="ml-[26px] h-[26px]" />
              {!!p2287 ? (
                <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                  {p2287}
                </Heading>
              ) : null}
            </div>
            <div className="flex w-[28%] flex-col items-start gap-0.5">
              <Img src="images/img_artboard_2_copy_3.svg" alt="Artboard2copy" className="h-[24px]" />
              {!!four ? (
                <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                  {four}
                </Heading>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col items-end gap-2 self-end">
            <Img src="images/img_icon_black_900.svg" alt="Iconthreeone" className="mr-3 h-[18px]" />
            {!!prop1 ? (
              <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                {prop1}
              </Heading>
            ) : null}
          </div>
        </div>
        <div className="ml-[30px] mr-7 mt-4 flex items-center border-t border-solid border-gray-200 py-3">
          <div className="flex-1 self-end">
            <div className="flex items-center">
              {!!settingsoneone ? <Img src={settingsoneone} alt="Settingsoneone" className="h-[14px]" /> : null}
              {!!prop2 ? (
                <Heading size="heading2xl" as="p" className="self-end text-[15px] font-semibold">
                  {prop2}
                </Heading>
              ) : null}
            </div>
          </div>
          <div className="flex w-[42%] items-center justify-center gap-4 rounded-[14px] bg-secondary-primary_white">
            {!!prop3 ? (
              <Heading
                size="textmd"
                as="p"
                className="self-end !font-dmsans text-[14px] font-medium capitalize !text-black-900"
              >
                {prop3}
              </Heading>
            ) : null}
            {!!vectoroneone ? <Img src={vectoroneone} alt="Vectoroneone" className="h-[22px]" /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
