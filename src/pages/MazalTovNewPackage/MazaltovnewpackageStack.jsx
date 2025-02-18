import { Img, Text, Button, Heading } from "../../components";
import React from "react";

export default function MazaltovnewpackageStack() {
  return (
    <div className="relative mb-6 h-[814px] px-[74px] lg:px-8 md:px-5 sm:px-4">
      <div className="container-9xl absolute left-0 right-0 top-[6%] flex flex-1 flex-col items-center">
        <Heading
          size="heading14xl"
          as="h1"
          className="self-stretch text-center !font-heebo text-[63px] font-bold leading-[60px] lg:text-[48px] md:text-[48px]"
        >
          <>
            המודעה נשלחה
            <br />
            בהצלחה למוכר
          </>
        </Heading>
        <div className="relative mt-[-20px] flex w-[28%] justify-center rounded-md bg-secondary-primary_white py-[118px] shadow-xl lg:w-full lg:py-8 md:w-full md:py-5 sm:py-4">
          <Heading
            size="heading11xl"
            as="h2"
            className="mb-8 flex-1 text-center !font-heebo text-[40px] font-bold leading-[44px] !text-secondary-primary_white lg:text-[34px] md:text-[34px] sm:text-[32px]"
          >
            <span className="text-yellow-800">lbl_lbl87</span>
            <span className="text-secondary-primary_white">
              <>
                <br />
              </>
            </span>
            <span className="text-black-900_03">lbl_msg44</span>
          </Heading>
        </div>
      </div>
      <div className="container-xs absolute bottom-0 left-0 right-0 top-0 my-auto flex h-[814px] items-end justify-center bg-[url(/public/images/img_rectangle_1.svg)] bg-cover bg-no-repeat p-[30px] lg:h-auto lg:px-5 md:h-auto md:px-5 sm:py-4">
        <div className="mt-[520px] w-full">
          <div className="flex flex-col items-center">
            <div className="flex px-14 md:px-5 sm:px-4">
              <Button
                size="4xl"
                rightIcon={
                  <div className="flex h-[16px] w-[16px] items-center justify-center">
                    <Img
                      src="images/img_television_secondary__primary_white.svg"
                      alt="Television"
                      className="mb-0.5 h-[16px] w-[16px] object-contain"
                    />
                  </div>
                }
                className="min-w-[174px] gap-2.5 rounded-[20px] px-2.5 font-semibold"
              >
                לצפיה בכל החבילות
              </Button>
            </div>
            <Img
              src="images/img_frame.png"
              alt="Imageone"
              className="ml-2.5 mt-[104px] h-[58px] w-[14%] self-start object-contain md:ml-0"
            />
            <div className="mr-3.5 mt-1.5 flex items-start justify-center gap-[18px] self-stretch md:mr-0 md:flex-col">
              <div className="mt-1 h-[10px] flex-1 rounded-[5px] bg-yellow-800 md:self-stretch" />
              <Text
                size="h4_assistant16px_r"
                as="p"
                className="self-center text-[16px] font-normal !text-gray-900 lg:text-[13px]"
              >
                2/2
              </Text>
            </div>
          </div>
        </div>
      </div>
      <Img
        className="container-sm absolute bottom-[34%] left-0 right-0 h-[162px] object-contain"
        src="images/img_group_1261154409.svg"
        alt="Imageoneone"
      />
    </div>
  );
}
