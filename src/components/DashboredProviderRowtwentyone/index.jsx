import { Heading, Img } from "./..";
import React from "react";

export default function DashboredProviderRowtwentyone({
  settingseleven = "images/img_settings_black_900.svg",
  one = "הצעה חדשה",
  one1,
  four = "פירוק",
  televisionnine = "images/img_television_red_a700_03_1.svg",
  plusnineoneOne = "images/img_plus.svg",
  four1 = "₪",
  plumbingrepair = "40,000",
  usernineoneOne = "images/img_user_secondary__primary_white.svg",
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
    <div {...props} className={`${props.className} container-5xl`}>
      <div className="w-full border-b border-solid border-gray-200 p-3">
        <div className="flex items-center gap-[42px] md:flex-col">
          <div className="flex w-[8%] justify-center md:w-full">
            <div className="flex w-full items-center">
              <Img src={settingseleven} alt="Settingseleven" className="h-[14px]" />
              <Heading size="h4_assistant_16px_b" as="h6" className="self-end text-[16px] font-semibold">
                {one}
              </Heading>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center md:flex-col md:self-stretch">
            <div className="flex flex-1 items-center justify-center md:self-stretch sm:flex-col">
              <div className="flex w-[22%] justify-center rounded-[14px] border border-solid border-gray-700_04 bg-secondary-primary_white sm:w-full">
                {!!one1 ? (
                  <Heading
                    size="textmd"
                    as="p"
                    className="!font-dmsans text-[14px] font-medium capitalize !text-gray-700_04"
                  >
                    {one1}
                  </Heading>
                ) : null}
              </div>
              <div className="ml-12 flex w-[22%] items-center justify-center gap-[18px] rounded-[14px] bg-secondary-primary_white sm:ml-0 sm:w-full">
                <Heading
                  size="textmd"
                  as="p"
                  className="self-end !font-dmsans text-[14px] font-medium capitalize !text-black-900"
                >
                  {four}
                </Heading>
                <Img src={televisionnine} alt="Televisionnine" className="h-[22px]" />
              </div>
              <div className="flex flex-wrap items-start">
                <Img src={plusnineoneOne} alt="Plusnineone" className="h-[18px]" />
                <Heading
                  size="headingxl"
                  as="p"
                  className="self-center !font-heebo text-[14px] font-bold !text-red-a700_03"
                >
                  {four1}
                </Heading>
                <Heading
                  size="heading5xl"
                  as="h6"
                  className="self-center !font-heebo text-[18px] font-bold !text-red-a700_03"
                >
                  {plumbingrepair}
                </Heading>
                <Img src={usernineoneOne} alt="Usernineone" className="h-[18px]" />
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
    </div>
  );
}
