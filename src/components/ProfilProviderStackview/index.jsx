import { Heading, Text, Input, Img, Button, Switch } from "./..";
import React from "react";

export default function ProfilProviderStackview({
  prop = "פרופיל ספק",
  prop2 = "גילי עטיה",
  prop3 = "מנהל",
  prop4 = "התנתקות",
  bmc,
  ...props
}) {
  return (
    <div {...props} className={`${props.className} h-[1094px] relative`}>
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[1080px] flex-1 bg-gray-100 shadow-xs" />
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 items-center px-[38px] md:relative md:flex-col sm:px-4">
        <div className="flex flex-1 items-start md:flex-col md:self-stretch">
          <div className="flex flex-1 flex-col items-end self-center rounded-[20px] bg-secondary-primary_white py-[42px] pl-14 pr-[62px] shadow-xs lg:pr-8 md:self-stretch md:p-5 sm:p-4">
            <div className="flex items-center justify-end gap-[22px] self-stretch">
              <Heading size="h3_assistant_25px_m" as="p" className="self-end text-[25px] font-medium lg:text-[21px]">
                {prop}
              </Heading>
              <Img src="images/img_vector_red_a700_03_36x40.png" alt="Vectoroneone" className="h-[36px] object-cover" />
            </div>
            <Switch value={false} className="mr-[90px] mt-[262px] border border-solid border-gray-200 md:mr-0" />
            <Button
              size="4xl"
              shape="circle"
              leftIcon={
                <div className="flex h-[10px] w-[6px] items-center justify-center">
                  <Img
                    src="images/img_arrowleft_secondary__primary_white.svg"
                    alt="Arrow Left"
                    className="mb-1.5 mt-0.5 h-[10px] w-[6px] object-contain"
                  />
                </div>
              }
              className="mb-[584px] mr-[324px] mt-5 min-w-[76px] gap-2 rounded-[20px] px-3.5 font-semibold md:mr-0"
            >
              שמור
            </Button>
          </div>
          <div className="relative ml-[-82px] mt-10 flex w-[10%] flex-col items-end gap-[30px] md:ml-0 md:w-full">
            <Button size="6xl" className="mt-[76px] w-[52px] rounded-lg px-4">
              <Img src="images/img_search_secondary__primary_white.svg" />
            </Button>
            <div className="flex flex-col gap-1 self-stretch">
              <div className="flex justify-end px-3.5 py-4">
                <Img src="images/img__secondary__primary_white.svg" alt="Imageone" className="h-[20px]" />
              </div>
              <div className="flex justify-end px-3.5 py-4">
                <Img src="images/img__20x20.svg" alt="Imageoneone" className="h-[20px]" />
              </div>
              <div className="flex justify-end px-3.5 py-4">
                <Img src="images/img__6.svg" alt="Imagetwoone" className="h-[20px]" />
              </div>
              <div className="flex justify-end px-3.5 py-4">
                <Img src="images/img__7.svg" alt="Imagethreeone" className="h-[20px]" />
              </div>
              <div className="flex justify-end px-3.5 py-4">
                <Img src="images/img__4.svg" alt="Imagefourone" className="h-[20px]" />
              </div>
              <div className="flex justify-end px-3.5 py-4">
                <Img src="images/img_layers.png" alt="Layersoneone" className="h-[18px] object-cover" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative ml-[-70px] flex w-[5%] items-start justify-center md:ml-0 md:w-full">
          <div className="w-full self-center rounded-[16px] bg-black-900_03 px-3.5 py-9 sm:py-4">
            <div className="mt-[894px] flex flex-col items-center">
              <Heading
                size="headingxl"
                as="p"
                className="!font-inter text-[14px] font-semibold !text-secondary-primary_white"
              >
                {prop2}
              </Heading>
              <Heading size="headinglg" as="p" className="!font-inter text-[12px] font-semibold !text-light_green-800">
                {prop3}
              </Heading>
              <Heading
                size="textxs"
                as="p"
                className="mt-1.5 !font-inter text-[12px] font-medium !text-white-a700_7f underline"
              >
                {prop4}
              </Heading>
            </div>
          </div>
          <div className="relative ml-[-88px] mt-[18px] flex w-full flex-col gap-1.5">
            <Img
              src="images/img_uuid_8da7836a_2_red_700.png"
              alt="Uuid8da7836atwo"
              className="mx-3 h-[28px] object-cover md:mx-0"
            />
            <div className="flex justify-center px-2.5">
              <Heading
                size="heading9xl"
                as="h4"
                className="!font-montserrat text-[25.98px] font-extrabold !text-red-a700_01 lg:text-[21px]"
              >
                <span className="text-secondary-primary_white">lbl_lbl_b</span>
                <span className="text-red-a700_03">lbl_lbl_m</span>
                <span className="text-secondary-primary_white">lbl_lbl_c</span>
              </Heading>
            </div>
          </div>
        </div>
      </div>
      <div className="container-6xl absolute left-0 right-0 top-[17%] flex flex-col items-end gap-0.5 lg:px-5 md:px-5">
        <Text size="h4_assistant16px_r" as="p" className="mr-[18px] text-[16px] font-semibold lg:text-[13px] md:mr-0">
          <span className="text-black-900_03">lbl_lbl7</span>
          <span className="text-red-a700_03">lbl_lbl3</span>
        </Text>
        <Input
          size="sm"
          name="largeinputone"
          placeholder={`רשמו פה את שמכם המלא`}
          className="w-[28%] rounded-[16px] !border px-3"
        />
      </div>
      <div className="container-6xl absolute left-0 right-0 top-1/4 flex flex-col items-end gap-0.5 lg:px-5 md:px-5">
        <Heading
          size="h4_assistant_16px_b"
          as="h6"
          className="mr-[18px] text-[16px] font-semibold lg:text-[13px] md:mr-0"
        >
          <span className="text-black-900_03">lbl_lbl9</span>
          <span className="text-red-a700_03">lbl_lbl3</span>
        </Heading>
        <Text
          size="h4_assistant16px_r"
          as="p"
          className="rounded-[16px] border border-solid border-indigo-100 pb-2 pl-[34px] pr-6 pt-5 text-[16px] font-normal !text-gray-700_04 lg:text-[13px] sm:px-4"
        >
          רשמו פה את מספר הנייד{" "}
        </Text>
      </div>
      <Heading
        size="h4_assistant_16px_b"
        as="h6"
        className="absolute right-[12%] top-[34%] m-auto text-[16px] font-semibold !text-black-900 lg:text-[13px]"
      >
        בעל רישיון
      </Heading>
    </div>
  );
}
