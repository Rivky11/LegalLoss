import { Img, Heading, Button } from "./..";
import React from "react";

export default function AllAddsDealerLinesRowone({
  two = "הגש הצעה",
  two1 = "לצפיה",
  prop = "ממתין לאישור",
  prop1 = "פירוק",
  prop2 = "₪",
  plumbingrepair = "40,000",
  plumbingrepair1 = "8.9.23",
  plumbingrepair2 = "4",
  plumbingrepair3 = "80,000",
  plumbingrepair4 = "אוטומטי",
  zipcode = "2022",
  plumbingrepair5 = " במוו",
  plumbingrepair6 = "X8 – 5.0 במוו",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex items-center self-stretch px-1 py-3 flex-1 container-3xl`}>
      <div className="flex w-full items-center justify-between gap-5 md:flex-col">
        <div className="flex items-center self-end">
          <Img src="images/img_settings_black_900.svg" alt="הגש הצעה" className="h-[14px]" />
          <Heading size="heading2xl" as="p" className="self-end text-[15px] font-semibold">
            {two}
          </Heading>
        </div>
        <div className="flex flex-1 items-center justify-center md:flex-col md:self-stretch">
          <div className="flex flex-wrap items-start self-end px-3.5">
            <Img src="images/img_settings_black_900.svg" alt="לצפיה" className="h-[14px]" />
            <Heading size="heading2xl" as="p" className="self-center text-[15px] font-semibold">
              {two1}
            </Heading>
            <Img src="images/img_vector_deep_orange_500.svg" alt="לצפיה" className="ml-2 h-[12px]" />
          </div>
          <div className="flex flex-1 items-center justify-center md:flex-col md:self-stretch">
            <Button
              shape="round"
              className="min-w-[112px] rounded-[14px] border border-solid border-red-a700_03 px-[13px] font-dmsans font-medium capitalize !text-red-a700_03"
            >
              {prop}
            </Button>
            <div className="ml-10 flex w-[14%] items-center justify-center gap-[18px] rounded-[14px] bg-secondary-primary_white md:ml-0 md:w-full">
              <Heading
                size="textmd"
                as="p"
                className="self-end !font-dmsans text-[14px] font-medium capitalize !text-black-900"
              >
                {prop1}
              </Heading>
              <Img src="images/img_television_red_a700_03_1.svg" alt="פירוק" className="h-[22px]" />
            </div>
            <div className="flex flex-1 items-start justify-end md:self-stretch">
              <Img src="images/img_plus.svg" alt="Image" className="h-[18px]" />
              <Heading
                size="headingxl"
                as="p"
                className="ml-1.5 self-end !font-heebo text-[14px] font-bold !text-red-a700_03"
              >
                {prop2}
              </Heading>
              <Heading
                size="heading5xl"
                as="h6"
                className="ml-2.5 self-center !font-heebo text-[18px] font-bold !text-red-a700_03"
              >
                {plumbingrepair}
              </Heading>
              <Img src="images/img_user_secondary__primary_white.svg" alt="Image" className="ml-2.5 h-[18px]" />
            </div>
            <Heading size="heading5xl" as="h6" className="ml-7 text-[18px] font-semibold md:ml-0">
              {plumbingrepair1}
            </Heading>
            <Heading size="heading5xl" as="h6" className="ml-[42px] text-[18px] font-semibold md:ml-0">
              {plumbingrepair2}
            </Heading>
            <Heading size="heading5xl" as="h6" className="ml-[50px] self-end text-[18px] font-semibold md:ml-0">
              {plumbingrepair3}
            </Heading>
            <Heading size="heading5xl" as="h6" className="ml-[54px] self-end text-[18px] font-semibold md:ml-0">
              {plumbingrepair4}
            </Heading>
            <Heading size="heading5xl" as="h6" className="ml-[52px] text-[18px] font-semibold md:ml-0">
              {zipcode}
            </Heading>
            <Heading size="heading5xl" as="h6" className="ml-[46px] self-end text-[18px] font-semibold md:ml-0">
              {plumbingrepair5}
            </Heading>
            <Heading size="heading5xl" as="h6" className="ml-[46px] text-[18px] font-semibold md:ml-0">
              {plumbingrepair6}
            </Heading>
          </div>
          <Img
            src="images/img_signal_secondary__primary_white_1.svg"
            alt="הגש הצעה"
            className="ml-1 h-[16px] md:ml-0 md:w-full"
          />
        </div>
      </div>
    </div>
  );
}
