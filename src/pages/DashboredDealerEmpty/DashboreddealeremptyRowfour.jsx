import { Img, Heading } from "../../components";
import React from "react";

export default function DashboreddealeremptyRowfour() {
  return (
    <div className="flex self-stretch">
      <div className="flex w-[92%] rounded-[20px] bg-secondary-primary_white shadow-xs lg:w-full md:w-full">
        <div className="mt-2 flex w-full flex-col gap-[170px] lg:gap-[127px] md:gap-[127px] sm:gap-[85px]">
          <div className="ml-[26px] mr-[38px] md:mx-0">
            <div className="flex flex-col gap-2.5">
              <div className="flex justify-between gap-5 md:flex-col">
                <div className="flex items-start gap-3.5 rounded-[20px] border border-solid border-gray-400_07 bg-secondary-primary_white px-1 py-2">
                  <Img src="images/img_arrow_left_black_900_03_1.svg" alt="Arrowleftone" className="h-[10px]" />
                  <Heading
                    size="h4_assistant_16px_b"
                    as="h3"
                    className="self-center text-[16px] font-semibold lg:text-[13px]"
                  >
                    לכל המודעות
                  </Heading>
                </div>
                <div className="flex-1 md:self-stretch">
                  <div className="mt-1.5 flex items-center justify-end gap-[21px]">
                    <Heading
                      size="h3_assistant_25px_m"
                      as="h4"
                      className="self-end text-[25px] font-medium lg:text-[21px]"
                    >
                      ספקים
                    </Heading>
                    <Img src="images/img_car_red_a700_03_2.png" alt="Caroneone" className="h-[32px] object-cover" />
                  </div>
                </div>
              </div>
              <div className="h-[2px] border-b border-solid border-gray-200" />
            </div>
          </div>
          <div className="h-[214px] rounded-[20px] bg-gradient1" />
        </div>
      </div>
    </div>
  );
}
