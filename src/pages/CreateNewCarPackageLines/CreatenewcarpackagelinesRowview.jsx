import { Img, Heading, Button } from "../../components";
import AdsWithBidsProviderLinesRowten from "../../components/AdsWithBidsProviderLinesRowten";
import AllAddsProviderCubesColumnclose from "../../components/AllAddsProviderCubesColumnclose";
import React from "react";

export default function CreatenewcarpackagelinesRowview() {
  return (
    <div className="mb-[158px] w-full px-9 sm:px-4">
      <div className="flex flex-col gap-0.5">
        <div className="flex items-start justify-center md:flex-col">
          <Img src="images/img_close_black_900_03.svg" alt="Closeoneone" className="h-[44px] md:w-full" />
          <div className="flex flex-1 items-start justify-center self-center px-14 md:self-stretch md:px-5 sm:flex-col sm:px-4">
            <div className="mt-2.5 flex gap-[15px]">
              <Img src="images/img_button1.svg" alt="Buttononeone" className="h-[32px] rounded-[10px]" />
              <Button size="md" className="w-[32px] rounded-[10px] px-1.5">
                <Img src="images/img_megaphone_red_a700_03.svg" />
              </Button>
            </div>
            <div className="flex items-center gap-[11px] self-center pl-14 pr-[74px] lg:pr-8 md:px-5 sm:flex-col sm:px-4">
              <Heading
                size="heading11xl"
                as="h2"
                className="!font-heebo text-[40px] font-bold lg:text-[34px] md:text-[34px] sm:text-[32px]"
              >
                יצרת חבילת רכבים חדשה
              </Heading>
              <Img src="images/img__black_900_03.svg" alt="Imageone" className="h-[48px] sm:w-full" />
            </div>
          </div>
        </div>
        <div className="relative ml-[124px] mr-[152px] h-[732px] md:mx-0">
          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[732px] w-[44%] bg-secondary-primary_white" />
          <div className="absolute left-0 right-0 top-[26px] mx-auto flex flex-1 flex-col gap-[22px]">
            <AllAddsProviderCubesColumnclose />
            <AdsWithBidsProviderLinesRowten className="ml-[62px] mr-11 md:mx-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
