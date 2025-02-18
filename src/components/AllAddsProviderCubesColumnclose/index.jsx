import { CloseSVG } from "../Input/close";
import { Text, Button, Img, Input, Heading } from "./..";
import React from "react";

export default function AllAddsProviderCubesColumnclose({
  prop = "מחיר",
  price = "₪1,000             ₪1,000,000",
  prop1 = "למכרז",
  prop2 = "לשיקום",
  prop3 = "לפירוק",
  prop4 = "מיועד ל",
  prop5 = "סוג התאונה",
  prop6 = "סוג הרכב",
  prop7 = "שנת יצור",
  prop8 = "דגמים",
  prop9 = "יצרנים",
  plumbingrepair = "רשומות",
  ten = "10",
  plumbingrepair1 = "מציג",
  ...props
}) {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");

  return (
    <div {...props} className={`${props.className} flex flex-col gap-4`}>
      <div className="flex items-center gap-6 self-stretch rounded-[38px] border border-solid border-blue_gray-100 bg-secondary-primary_white p-2.5 md:flex-col">
        <Img
          src="images/img_close_red_a700_03_54x54.svg"
          alt="Closethreeone"
          className="h-[54px] w-[4%] object-contain md:w-full"
        />
        <div className="flex flex-1 items-start justify-center md:flex-col md:self-stretch">
          <div className="relative h-[50px] w-[16%] self-center md:h-auto md:w-full">
            <div className="mt-1 h-[36px] flex-1 border-l border-solid border-gray-200" />
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1 px-[22px] sm:px-5">
              <div className="flex flex-col items-center">
                <Text size="h4_assistant16px_r" as="p" className="text-[16px] font-normal !text-black-900">
                  {prop}
                </Text>
                <div className="relative mt-[-2px] flex flex-col items-center self-stretch">
                  <Img src="images/img_group_758531157.svg" alt="Imageoneone" className="h-[10px] w-full" />
                  <Text size="h4_assistant16px_r" as="p" className="text-[16px] font-normal">
                    {price}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-2 flex items-center gap-2.5 border-l border-solid border-gray-200 py-2 md:ml-0">
            <Text size="h4_assistant16px_r" as="p" className="text-[16px] font-normal !text-black-900">
              {prop1}
            </Text>
            <Img src="images/img_checkmark.svg" alt="Checkmarkone" className="h-[16px]" />
          </div>
          <div className="ml-2 flex-1 border-l border-solid border-gray-200 p-1 md:ml-0 md:self-stretch">
            <div className="flex items-center justify-center gap-5">
              <div className="flex flex-1 items-center gap-3">
                <div className="flex w-full items-center justify-center gap-[7px]">
                  <Text size="h4_assistant16px_r" as="p" className="text-[16px] font-normal !text-black-900">
                    {prop2}
                  </Text>
                  <Img
                    src="images/img_contrast_gray_600_07_1.png"
                    alt="Contrastoneone"
                    className="h-[16px] rounded object-cover"
                  />
                </div>
                <div className="flex w-full items-center justify-center gap-2.5">
                  <Text size="h4_assistant16px_r" as="p" className="text-[16px] font-normal !text-black-900">
                    {prop3}
                  </Text>
                  <Img src="images/img_checkmark.svg" alt="Checkmarkthree" className="h-[16px]" />
                </div>
              </div>
              <Heading size="h4_assistant_16px_b" as="h6" className="text-[16px] font-semibold !text-black-900">
                {prop4}
              </Heading>
            </div>
          </div>
          <div className="ml-2 mt-1 flex w-[10%] items-end justify-between gap-5 border-l border-solid border-gray-200 py-1 md:ml-0 md:w-full">
            <div className="black_900_black_900_00_border mb-2 ml-2 h-[5px] w-[8px] border-l-4 border-r-4 border-t-[5px] border-solid" />
            <Text size="h4_assistant16px_r" as="p" className="mt-1.5 text-[16px] font-normal !text-black-900">
              {prop5}
            </Text>
          </div>
          <div className="ml-2 mt-1 flex w-[10%] items-end justify-between gap-5 border-l border-solid border-gray-200 py-1 md:ml-0 md:w-full">
            <div className="black_900_black_900_00_border mb-2 ml-2 h-[5px] w-[8px] border-l-4 border-r-4 border-t-[5px] border-solid" />
            <Text size="h4_assistant16px_r" as="p" className="mt-1.5 text-[16px] font-normal !text-black-900">
              {prop6}
            </Text>
          </div>
          <div className="ml-2 mt-1 flex w-[10%] items-center justify-between gap-5 border-l border-solid border-gray-200 py-1 md:ml-0 md:w-full">
            <div className="black_900_black_900_00_border ml-2 h-[5px] w-[8px] border-l-4 border-r-4 border-t-[5px] border-solid" />
            <Heading size="textlg" as="p" className="!font-heebo text-[15px] font-normal !text-black-900">
              {prop7}
            </Heading>
          </div>
          <div className="ml-2 mt-1 flex w-[10%] items-end justify-between gap-5 border-l border-solid border-gray-200 md:ml-0 md:w-full">
            <div className="black_900_black_900_00_border mb-2 ml-2 h-[5px] w-[8px] border-l-4 border-r-4 border-t-[5px] border-solid" />
            <Text size="h4_assistant16px_r" as="p" className="mt-2 text-[16px] font-normal !text-black-900">
              {prop8}
            </Text>
          </div>
          <div className="ml-2 mt-1 flex w-[10%] justify-center border-l border-solid border-gray-200 md:ml-0 md:w-full">
            <div className="mt-2 flex w-full items-center justify-between gap-5">
              <div className="black_900_black_900_00_border ml-2 h-[5px] w-[8px] border-l-4 border-r-4 border-t-[5px] border-solid" />
              <Text size="h4_assistant16px_r" as="p" className="text-[16px] font-normal !text-black-900">
                {prop9}
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-[18px] mr-6 flex self-stretch md:mx-0 md:flex-col">
        <div className="flex flex-1 md:self-stretch sm:flex-col">
          <Input
            shape="round"
            name="search"
            placeholder={`חיפוש חופשי`}
            value={searchBarValue1}
            onChange={(e) => setSearchBarValue1(e.target.value)}
            prefix={
              <Img src="images/img_icon_red_a700_01.svg" alt="Icon" className="h-[22px] w-[22px] object-contain" />
            }
            suffix={
              searchBarValue1?.length > 0 ? (
                <CloseSVG onClick={() => setSearchBarValue1("")} height={22} width={22} fillColor="#ce0000ff" />
              ) : null
            }
            className="w-[28%] gap-4 rounded-md !border text-black-900 sm:w-full"
          />
          <div className="flex flex-1 px-[26px] sm:self-stretch sm:px-5">
            <Button
              variant="outline"
              leftIcon={
                <Img
                  src="images/img_plus_black_900_03_1.svg"
                  alt="Plus"
                  className="my-1 h-[12px] w-[12px] object-contain"
                />
              }
              className="min-w-[186px] gap-2 rounded-[3px] !border-[0.8px] px-[11.2px] !text-black-900_03"
            >
              צור חבילת רכבים חדשה
            </Button>
          </div>
        </div>
        <div className="flex w-[38%] items-start justify-center gap-2 md:w-full">
          <div className="flex flex-1 items-start justify-end gap-[9px] self-center">
            <Text as="p" className="text-[18px] font-normal">
              {plumbingrepair}
            </Text>
            <Button
              variant="outline"
              shape="square"
              leftIcon={
                <Img
                  src="images/img_group_1261154236.png"
                  alt="Group 1261154236"
                  className="my-0.5 h-[14px] w-[8px] object-contain"
                />
              }
              className="min-w-[56px] gap-3.5 self-center !border px-[7px]"
            >
              {ten}
            </Button>
          </div>
          <Text as="p" className="text-[18px] font-normal">
            {plumbingrepair1}
          </Text>
        </div>
      </div>
    </div>
  );
}
