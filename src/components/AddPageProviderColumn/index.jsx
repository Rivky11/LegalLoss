import { Text, Img, Heading } from "./..";
import React from "react";

export default function AddPageProviderColumn({
  prop = "שחור",
  prop1 = "צבע",
  two = "images/img_artboard_2_copy.svg",
  four = "4",
  prop2 = "יד",
  two1 = "images/img_artboard_2_copy_3.svg",
  prop3 = "?",
  prop4 = "בעלות מקורית",
  prop5 = "images/img_artboard_2_copy_3.svg",
  p1205 = "1,205 ש”ח",
  prop6 = "אגרת ריוי שנתיתי",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col sm:w-full gap-[22px]`}>
      <div className="flex items-center justify-end gap-[34px] self-stretch">
        <Text size="textxl" as="p" className="self-end !font-heebo text-[16px] font-normal">
          {prop}
        </Text>
        <div className="flex w-[56%] items-center justify-end gap-[19px] border-l border-solid border-gray-200">
          <Text size="textxl" as="p" className="self-end text-[16px] font-normal">
            {prop1}
          </Text>
          <Img src={two} alt="צבע" className="h-[22px]" />
        </div>
      </div>
      <div className="flex items-center justify-end gap-[33px] self-stretch">
        <Text size="textxl" as="p" className="!font-heebo text-[16px] font-normal">
          {four}
        </Text>
        <div className="flex w-[58%] items-center justify-end gap-[17px] border-l border-solid border-gray-200">
          <Text size="h4_assistant16px_r" as="p" className="self-end text-[16px] font-normal">
            {prop2}
          </Text>
          <Img src={two1} alt="יד" className="h-[24px]" />
        </div>
      </div>
      <div className="flex items-center justify-end gap-7 self-stretch">
        <Heading size="heading3xl" as="h6" className="text-[16px] font-bold">
          {prop3}
        </Heading>
        <div className="flex items-center gap-2 border-l border-solid border-gray-200">
          <Text size="h4_assistant16px_r" as="p" className="self-end text-[16px] font-normal">
            {prop4}
          </Text>
          <Img src={prop5} alt="בעלות מקורית" className="h-[24px]" />
        </div>
      </div>
      <div className="flex items-center justify-center gap-[26px] self-stretch">
        <Text size="textxl" as="p" className="!font-heebo text-[16px] font-normal">
          {p1205}
        </Text>
        <div className="flex-1">
          <div className="flex items-center justify-center">
            <Text size="h4_assistant16px_r" as="p" className="self-end text-[16px] font-normal">
              {prop6}
            </Text>
            <div className="flex w-[20%] justify-end border-l border-solid border-gray-200 py-1">
              <div className="h-[18px] w-[18px] border border-solid border-black-900_03" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
