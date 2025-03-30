import { Img, Heading, Button } from "./..";
import React from "react";

export default function SettingsAndStatusRow({
  settingsText = "לצפיה במודעה",
  approvalButton = "ממתין לאישור",
  disassemblyText = "פירוק",
  prop = "₪",
  plumbingrepair = "40,000",
  dateText = "8.9.23",
  quantityText = "4",
  priceText = "80,000",
  statusText = "אוטומטי",
  zipcodeText = "2022",
  carModelText,
  carDetailsText = "X8 – 5.0 במוו",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} mb-6 mr-1.5 md:mr-0 container-4xl`}>
      <div className="flex w-full items-center justify-center gap-3 border-b border-solid border-gray-200 py-2.5 md:flex-col">
        <div className="flex flex-1 items-center justify-center gap-[26px] md:flex-col md:self-stretch">
          <div className="flex items-center gap-0.5">
            <Img src="images/img_settings_black_900.svg" alt="Settingsoneone" className="h-[14px]" />
            <Heading size="h4_assistant_16px_b" as="h6" className="text-[16px] font-semibold">
              {settingsText}
            </Heading>
          </div>
          <div className="flex flex-1 items-center justify-center md:flex-col md:self-stretch">
            <div className="flex flex-1 items-center justify-center md:self-stretch sm:flex-col">
              <Button
                shape="round"
                className="min-w-[112px] rounded-[14px] border border-solid border-red-a700_03 px-[13px] font-dmsans font-medium capitalize !text-red-a700_03"
              >
                {approvalButton}
              </Button>
              <div className="ml-12 flex w-[22%] items-center justify-center gap-[18px] rounded-[14px] bg-secondary-primary_white sm:ml-0 sm:w-full">
                <Heading
                  size="textmd"
                  as="p"
                  className="!font-dmsans text-[14px] font-medium capitalize !text-black-900"
                >
                  {disassemblyText}
                </Heading>
                <Img src="images/img_television_red_a700_03_1.svg" alt="Televisionone" className="h-[22px]" />
              </div>
              <div className="flex flex-wrap items-end">
                <Img src="images/img_plus.svg" alt="Plusoneone" className="h-[18px]" />
                <Heading size="headingxl" as="p" className="!font-heebo text-[14px] font-bold !text-red-a700_03">
                  {prop}
                </Heading>
                <Heading
                  size="heading5xl"
                  as="h6"
                  className="self-center !font-heebo text-[18px] font-bold !text-red-a700_03"
                >
                  {plumbingrepair}
                </Heading>
                <Img src="images/img_user_secondary__primary_white.svg" alt="Useroneone" className="h-[18px]" />
              </div>
              <Heading size="heading5xl" as="h6" className="ml-10 self-start text-[18px] font-semibold sm:ml-0">
                {dateText}
              </Heading>
              <Heading size="heading5xl" as="h6" className="ml-[52px] self-start text-[18px] font-semibold sm:ml-0">
                {quantityText}
              </Heading>
            </div>
            <Heading size="heading5xl" as="h6" className="self-start text-[18px] font-semibold">
              {priceText}
            </Heading>
            <Heading size="heading5xl" as="h6" className="ml-16 text-[18px] font-semibold md:ml-0">
              {statusText}
            </Heading>
            <Heading size="heading5xl" as="h6" className="ml-[60px] self-start text-[18px] font-semibold md:ml-0">
              {zipcodeText}
            </Heading>
            <div className="flex w-[22%] flex-wrap justify-between gap-5 md:w-full">
              <Heading size="heading5xl" as="h6" className="ml-[54px] text-[18px] font-semibold">
                <span>&nbsp;</span>
                <span className="font-bold">lbl_lbl20</span>
              </Heading>
              <Heading size="heading5xl" as="h6" className="text-[18px] font-bold">
                {carDetailsText}
              </Heading>
            </div>
          </div>
        </div>
        <Img src="images/img_checkmark.svg" alt="Checkmarkfive" className="h-[16px] md:w-full" />
      </div>
    </div>
  );
}
