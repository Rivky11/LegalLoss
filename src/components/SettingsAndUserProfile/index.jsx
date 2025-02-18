import { Img, Heading, Button } from "./..";
import React from "react";

export default function SettingsAndUserProfile({
  submitProposalText = "הגש הצעה",
  viewText = "לצפיה",
  approvedButton = "מאושר",
  disassembleText = "פירוק",
  currencySymbol = "₪",
  amountText = "40,000",
  dateText = "8.9.23",
  quantityText = "4",
  priceText = "80,000",
  automaticText = "אוטומטי",
  zipcodeText = "2022",
  carModelText = " במוו",
  carDetailsText = "X8 – 5.0 במוו",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} mt-3 container-3xl`}>
      <div className="flex w-full items-center justify-between gap-5 border-b border-solid border-gray-200 px-1 py-3 md:flex-col">
        <div className="flex items-center self-end">
          <Img src="images/img_settings_black_900.svg" alt="Settingsoneone" className="h-[14px]" />
          <Heading size="heading2xl" as="p" className="self-end text-[15px] font-semibold">
            {submitProposalText}
          </Heading>
        </div>
        <div className="flex flex-1 items-center justify-center md:flex-col md:self-stretch">
          <div className="flex flex-wrap items-center self-end">
            <Img src="images/img_settings_black_900.svg" alt="Settingsthree" className="h-[14px]" />
            <Heading size="heading2xl" as="p" className="text-[15px] font-semibold">
              {viewText}
            </Heading>
            <Img
              src="images/img_vector_deep_orange_500.svg"
              alt="Vectorthreeone"
              className="ml-2 h-[12px] self-start"
            />
          </div>
          <div className="flex flex-1 items-center justify-center md:flex-col md:self-stretch">
            <Button
              shape="round"
              className="min-w-[112px] rounded-[14px] border border-solid border-light_green-800 px-[31px] font-dmsans font-medium capitalize !text-light_green-800 sm:px-5"
            >
              {approvedButton}
            </Button>
            <div className="ml-10 flex w-[12%] items-center justify-center gap-[18px] rounded-[14px] bg-secondary-primary_white md:ml-0 md:w-full">
              <Heading
                size="textmd"
                as="p"
                className="self-end !font-dmsans text-[14px] font-medium capitalize !text-black-900"
              >
                {disassembleText}
              </Heading>
              <Img src="images/img_television_red_a700_03_1.svg" alt="Televisionone" className="h-[22px]" />
            </div>
            <div className="flex flex-1 items-start justify-center gap-2.5 md:self-stretch">
              <div className="flex flex-1 items-start justify-end self-center">
                <Img src="images/img_plus.svg" alt="Plusoneone" className="h-[18px]" />
                <Heading
                  size="headingxl"
                  as="p"
                  className="ml-1.5 self-end !font-heebo text-[14px] font-bold !text-red-a700_03"
                >
                  {currencySymbol}
                </Heading>
                <Heading
                  size="heading5xl"
                  as="h6"
                  className="ml-2.5 self-center !font-heebo text-[18px] font-bold !text-red-a700_03"
                >
                  {amountText}
                </Heading>
              </div>
              <Img src="images/img_user_secondary__primary_white.svg" alt="Useroneone" className="h-[18px]" />
            </div>
            <Heading size="heading5xl" as="h6" className="ml-7 text-[18px] font-semibold md:ml-0">
              {dateText}
            </Heading>
            <div className="flex flex-1 flex-wrap justify-between gap-5 self-end px-6 md:self-stretch sm:px-5">
              <Heading size="heading5xl" as="h6" className="ml-[18px] text-[18px] font-semibold md:ml-0">
                {quantityText}
              </Heading>
              <Heading size="heading5xl" as="h6" className="text-[18px] font-semibold">
                {priceText}
              </Heading>
            </div>
            <Heading size="heading5xl" as="h6" className="ml-7 self-end text-[18px] font-semibold md:ml-0">
              {automaticText}
            </Heading>
            <Heading size="heading5xl" as="h6" className="ml-[52px] text-[18px] font-semibold md:ml-0">
              {zipcodeText}
            </Heading>
            <Heading size="heading5xl" as="h6" className="ml-[46px] self-end text-[18px] font-semibold md:ml-0">
              {carModelText}
            </Heading>
            <Heading size="heading5xl" as="h6" className="ml-[46px] text-[18px] font-semibold md:ml-0">
              {carDetailsText}
            </Heading>
          </div>
          <Img
            src="images/img_signal_secondary__primary_white_1.svg"
            alt="Signalthreeone"
            className="ml-1 h-[16px] md:ml-0 md:w-full"
          />
        </div>
      </div>
    </div>
  );
}
