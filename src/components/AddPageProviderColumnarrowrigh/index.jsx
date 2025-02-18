import { Heading, Button, Img, Text } from "./..";
import React from "react";

export default function AddPageProviderColumnarrowrigh({
  plumbingrepair = "Nivo Car\\\\&#96;s",
  plumbingrepair1 = "חדרה",
  plumbingrepair2 = "מיקום ההצעה:",
  plumbingrepair3 = "4",
  plumbingrepair4 = "מועד ההצעה:",
  prop = "אישור ההצעה",
  plumbingrepair5 = "300,000",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col self-stretch gap-2.5 px-1.5 py-4 border-gray-200 border-b border-solid flex-1`}
    >
      <div className="flex items-start justify-center self-stretch">
        <Button size="xs" variant="outline" className="w-[22px] rounded-[10px] !border px-1">
          <Img src="images/img_arrow_right_gray_700.svg" />
        </Button>
        <div className="flex flex-1 justify-end self-center px-3">
          <Heading size="ass_20" as="h5" className="text-[20px] font-semibold">
            {plumbingrepair}
          </Heading>
        </div>
      </div>
      <div className="mx-3 flex items-center justify-between gap-5 self-stretch">
        <div className="flex flex-wrap items-center">
          <Text as="p" className="self-end text-[18px] font-normal">
            {plumbingrepair1}
          </Text>
          <Heading size="heading5xl" as="h6" className="self-end text-[18px] font-semibold">
            {plumbingrepair2}
          </Heading>
        </div>
        <div className="h-[16px] w-px bg-gray-400_07" />
        <div className="flex flex-wrap">
          <Text as="p" className="text-[18px] font-normal">
            {plumbingrepair3}
          </Text>
          <Heading size="heading5xl" as="h6" className="text-[18px] font-semibold">
            {plumbingrepair4}
          </Heading>
        </div>
      </div>
      <div className="mr-3.5 flex items-start justify-center self-stretch">
        <div className="mb-1.5 flex flex-1 px-2">
          <Button
            size="lg"
            shape="round"
            leftIcon={
              <div className="flex h-[10px] w-[6px] items-center justify-center">
                <Img
                  src="images/img_arrowleft_light_green_800_1.svg"
                  alt="Arrow Left"
                  className="mb-1.5 mt-0.5 h-[10px] w-[6px] object-contain"
                />
              </div>
            }
            className="min-w-[124px] gap-2 rounded-[16px] border border-solid border-light_green-800 px-[11px] font-semibold !text-light_green-800"
          >
            {prop}
          </Button>
        </div>
        <Heading size="heading7xl" as="h5" className="self-end text-[22px] font-bold !text-red-a700_03">
          {plumbingrepair5}
        </Heading>
      </div>
    </div>
  );
}
