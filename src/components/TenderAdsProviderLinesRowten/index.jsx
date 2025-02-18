import { Heading, Img } from "./..";
import React from "react";

export default function TenderAdsProviderLinesRowten({
  plumbingrepair = "ביצוע",
  plumbingrepair1 = "מכרז",
  plumbingrepair2 = "סטטוס",
  plumbingrepair3 = "מיועד ל",
  plumbingrepair4 = "הצעת מחיר",
  plumbingrepair5 = "תאריך",
  plumbingrepair6 = "יד",
  plumbingrepair7 = "קילומטר",
  plumbingrepair8 = "גיר",
  plumbingrepair9 = "שנת יצור",
  plumbingrepair10 = "חברה",
  plumbingrepair11 = "דגם הרכב",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} mr-[58px] md:mr-0 border-gray-200 border-b border-solid container-lg`}
    >
      <div className="w-full border-b border-solid border-gray-200 py-1.5">
        <div className="flex justify-center md:flex-col">
          <div className="flex w-[6%] justify-center md:w-full">
            <div className="flex w-full items-center gap-2.5">
              <Img src="images/img_group_758531290.svg" alt="Imageone" className="h-[12px]" />
              <Heading size="heading5xl" as="h6" className="text-[18px] font-semibold">
                {plumbingrepair}
              </Heading>
            </div>
          </div>
          <div className="flex items-center">
            <Img src="images/img_group_758531290.svg" alt="Imageoneone" className="h-[12px]" />
            <Heading size="heading5xl" as="h6" className="text-[18px] font-semibold">
              {plumbingrepair1}
            </Heading>
          </div>
          <div className="flex flex-1 justify-center md:flex-col md:self-stretch">
            <div className="flex items-center gap-2">
              <Img src="images/img_group_758531290.svg" alt="Imagetwoone" className="h-[12px]" />
              <Heading size="heading5xl" as="h6" className="text-[18px] font-semibold">
                {plumbingrepair2}
              </Heading>
            </div>
            <div className="flex flex-1 justify-center gap-2 md:flex-col md:self-stretch">
              <div className="flex flex-1 items-center justify-center gap-3 md:self-stretch">
                <Img src="images/img_group_758531290.svg" alt="Imagethreeone" className="h-[12px]" />
                <Heading size="heading5xl" as="h6" className="text-[18px] font-semibold">
                  {plumbingrepair3}
                </Heading>
              </div>
              <div className="flex flex-1 items-center justify-center gap-2.5 md:self-stretch">
                <Img src="images/img_group_758531290.svg" alt="Imagefourone" className="h-[12px]" />
                <Heading size="heading5xl" as="h6" className="text-[18px] font-semibold">
                  {plumbingrepair4}
                </Heading>
              </div>
              <div className="flex items-center gap-2.5">
                <Img src="images/img_group_758531290.svg" alt="Imagefiveone" className="h-[12px]" />
                <Heading size="heading5xl" as="h6" className="text-[18px] font-semibold">
                  {plumbingrepair5}
                </Heading>
              </div>
              <div className="flex items-center gap-2">
                <Img src="images/img_group_758531290.svg" alt="Imagesixone" className="h-[12px]" />
                <Heading size="heading5xl" as="h6" className="text-[18px] font-semibold">
                  {plumbingrepair6}
                </Heading>
              </div>
              <div className="flex items-center gap-2.5">
                <Img src="images/img_group_758531290.svg" alt="Imagesevenone" className="h-[12px]" />
                <Heading size="heading5xl" as="h6" className="text-[18px] font-semibold">
                  {plumbingrepair7}
                </Heading>
              </div>
              <div className="flex items-center">
                <Img src="images/img_group_758531290.svg" alt="Imageeightone" className="h-[12px]" />
                <Heading size="heading5xl" as="h6" className="self-end text-[18px] font-semibold">
                  {plumbingrepair8}
                </Heading>
              </div>
              <div className="flex items-center">
                <Img src="images/img_group_758531290.svg" alt="Imagenineone" className="h-[12px]" />
                <Heading size="heading5xl" as="h6" className="self-end text-[18px] font-semibold">
                  {plumbingrepair9}
                </Heading>
              </div>
              <div className="flex items-center">
                <Img src="images/img_group_758531290.svg" alt="Imagetenone" className="h-[12px]" />
                <Heading size="heading5xl" as="h6" className="self-end text-[18px] font-semibold">
                  {plumbingrepair10}
                </Heading>
              </div>
              <div className="flex items-center gap-1.5">
                <Img src="images/img_group_758531290.svg" alt="Imageelevenone" className="h-[12px]" />
                <Heading size="heading5xl" as="h6" className="self-end text-[18px] font-semibold">
                  {plumbingrepair11}
                </Heading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
