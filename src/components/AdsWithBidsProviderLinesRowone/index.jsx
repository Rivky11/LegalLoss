import { Heading, Img, Button } from "./..";
import React from "react";

export default function AdsWithBidsProviderLinesRowone({
  prop = "לצפיה באישור",
  prop1 = "מאושר",
  prop2 = "פירוק",
  prop3 = "₪",
  plumbingrepair = "40,000",
  plumbingrepair1 = "8.9.23",
  plumbingrepair2 = "4",
  plumbingrepair3 = "80,000",
  plumbingrepair4 = "אוטומטי",
  zipcode = "2022",
  plumbingrepair5,
  plumbingrepair6 = "X8 – 5.0 במוו",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex items-center self-stretch flex-1 container-5xl`}>
      <div className="flex w-full items-center justify-center border-b border-solid border-gray-200 p-3 md:flex-col">
        <div className="relative z-[3] flex items-center">
          <Img src="images/img_settings_black_900.svg" alt="לצפיה באישור" className="h-[14px]" />
          <Heading size="h4_assistant_16px_b" as="h6" className="text-[16px] font-semibold">
            {prop}
          </Heading>
        </div>
        <div className="relative ml-[-20px] flex flex-1 items-center justify-center md:ml-0 md:flex-col md:self-stretch">
          <div className="flex flex-1 items-center justify-center md:self-stretch sm:flex-col">
            <Button
              shape="round"
              className="min-w-[112px] rounded-[14px] border border-solid border-light_green-800 px-[31px] font-dmsans font-medium capitalize !text-light_green-800 sm:px-5"
            >
              {prop1}
            </Button>
            <div className="ml-12 flex w-[22%] items-center justify-center gap-[18px] rounded-[14px] bg-secondary-primary_white sm:ml-0 sm:w-full">
              <Heading
                size="textmd"
                as="p"
                className="self-end !font-dmsans text-[14px] font-medium capitalize !text-black-900"
              >
                {prop2}
              </Heading>
              <Img src="images/img_television_red_a700_03_1.svg" alt="פירוק" className="h-[22px]" />
            </div>
            <div className="flex flex-wrap items-start">
              <Img src="images/img_plus.svg" alt="Image" className="h-[18px]" />
              <Heading
                size="headingxl"
                as="p"
                className="self-center !font-heebo text-[14px] font-bold !text-red-a700_03"
              >
                {prop3}
              </Heading>
              <Heading
                size="heading5xl"
                as="h6"
                className="self-center !font-heebo text-[18px] font-bold !text-red-a700_03"
              >
                {plumbingrepair}
              </Heading>
              <Img src="images/img_user_secondary__primary_white.svg" alt="Image" className="h-[18px]" />
            </div>
            <Heading size="heading5xl" as="h6" className="ml-10 text-[18px] font-semibold sm:ml-0">
              {plumbingrepair1}
            </Heading>
            <Heading size="heading5xl" as="h6" className="ml-[52px] text-[18px] font-semibold sm:ml-0">
              {plumbingrepair2}
            </Heading>
          </div>
          <Heading size="heading5xl" as="h6" className="self-end text-[18px] font-semibold">
            {plumbingrepair3}
          </Heading>
          <Heading size="heading5xl" as="h6" className="ml-16 self-end text-[18px] font-semibold md:ml-0">
            {plumbingrepair4}
          </Heading>
          <Heading size="heading5xl" as="h6" className="ml-[60px] text-[18px] font-semibold md:ml-0">
            {zipcode}
          </Heading>
          <div className="flex w-[22%] flex-wrap justify-between gap-5 md:w-full">
            <Heading size="heading5xl" as="h6" className="ml-[54px] text-[18px] font-semibold">
              <span>&nbsp;</span>
              <span className="font-bold">lbl_lbl20</span>
            </Heading>
            <Heading size="heading5xl" as="h6" className="text-[18px] font-bold">
              {plumbingrepair6}
            </Heading>
          </div>
        </div>
      </div>
    </div>
  );
}
