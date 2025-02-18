import { Heading, Img } from "./..";
import React from "react";

export default function AwaitingAddsProviderLinesRoweleven({
  plumbingrepair = "סיבת הביטול",
  plumbingrepair1 = "סטטוס",
  plumbingrepair2 = "מיועד ל",
  plumbingrepair3 = "הצעת מחיר",
  plumbingrepair4 = "תאריך",
  plumbingrepair5 = "יד",
  plumbingrepair6 = "קילומטר",
  plumbingrepair7 = "גיר",
  plumbingrepair8 = "שנת יצור",
  plumbingrepair9 = "חברה",
  plumbingrepair10 = "דגם הרכב",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} mr-2 md:mr-0 border-gray-200 border-b border-solid container-2xl`}>
      <div className="flex w-full justify-center border-b border-solid border-gray-200 p-1.5">
        <div className="flex w-[94%] justify-center md:w-full md:flex-col">
          <div className="flex w-[18%] justify-center gap-7 md:w-full">
            <div className="w-full">
              <div className="flex items-center justify-center gap-2">
                <Img src="images/img_group_758531290.svg" alt="Imageone" className="h-[12px] self-end" />
                <Heading size="heading5xl" as="h6" className="text-[18px] font-semibold">
                  {plumbingrepair}
                </Heading>
              </div>
            </div>
            <div className="flex w-full items-center gap-2">
              <Img src="images/img_group_758531290.svg" alt="Imageoneone" className="h-[12px]" />
              <Heading size="heading5xl" as="h6" className="text-[18px] font-semibold">
                {plumbingrepair1}
              </Heading>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Img src="images/img_group_758531290.svg" alt="Imagetwoone" className="h-[12px]" />
            <Heading size="heading5xl" as="h6" className="text-[18px] font-semibold">
              {plumbingrepair2}
            </Heading>
          </div>
          <div className="flex flex-1 justify-center gap-3.5 px-7 md:self-stretch sm:px-5">
            <div className="flex flex-1 items-center justify-center gap-3">
              <Img src="images/img_group_758531290.svg" alt="Imagethreeone" className="h-[12px]" />
              <Heading size="heading5xl" as="h6" className="text-[18px] font-semibold">
                {plumbingrepair3}
              </Heading>
            </div>
            <div className="flex items-center gap-[9px]">
              <Img src="images/img_group_758531290.svg" alt="Imagefourone" className="h-[12px]" />
              <Heading size="heading5xl" as="h6" className="text-[18px] font-semibold">
                {plumbingrepair4}
              </Heading>
            </div>
            <div className="flex items-center gap-1.5">
              <Img src="images/img_group_758531290.svg" alt="Imagefiveone" className="h-[12px]" />
              <Heading size="heading5xl" as="h6" className="text-[18px] font-semibold">
                {plumbingrepair5}
              </Heading>
            </div>
            <div className="flex items-center gap-[9px]">
              <Img src="images/img_group_758531290.svg" alt="Imagesixone" className="h-[12px]" />
              <Heading size="heading5xl" as="h6" className="text-[18px] font-semibold">
                {plumbingrepair6}
              </Heading>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <Img src="images/img_group_758531290.svg" alt="Imagesevenone" className="h-[12px]" />
            <Heading size="heading5xl" as="h6" className="text-[18px] font-semibold">
              {plumbingrepair7}
            </Heading>
          </div>
          <div className="flex w-[26%] justify-center gap-[18px] md:w-full">
            <div className="flex flex-1 items-center justify-end gap-2">
              <Img src="images/img_group_758531290.svg" alt="Imageeightone" className="h-[12px]" />
              <Heading size="heading5xl" as="h6" className="self-end text-[18px] font-semibold">
                {plumbingrepair8}
              </Heading>
            </div>
            <div className="flex items-center gap-1.5">
              <Img src="images/img_group_758531290.svg" alt="Imagenineone" className="h-[12px]" />
              <Heading size="heading5xl" as="h6" className="self-end text-[18px] font-semibold">
                {plumbingrepair9}
              </Heading>
            </div>
            <div className="flex flex-1 items-center justify-center gap-2.5">
              <Img src="images/img_group_758531290.svg" alt="Imagetenone" className="h-[12px]" />
              <Heading size="heading5xl" as="h6" className="self-end text-[18px] font-semibold">
                {plumbingrepair10}
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
