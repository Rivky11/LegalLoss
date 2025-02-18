import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading, Switch } from "../../components";
import React from "react";

export default function PackageSettingPage() {
  return (
    <>
      <Helmet>
        <title>Rivky miler&#39;s Application15</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="relative h-[1080px] w-full px-[74px] py-[120px] lg:p-8 md:p-5 sm:p-4">
        <div className="container-9xl absolute left-0 right-0 top-[16%] flex flex-1 flex-col items-center">
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
          <div className="relative mt-[-20px] flex w-[28%] flex-col items-center justify-center gap-3 rounded-md bg-secondary-primary_white px-14 py-[126px] shadow-xl lg:w-full lg:py-8 md:w-full md:p-5 sm:p-4">
            <div className="flex w-[64%] items-center justify-between gap-5 lg:w-full md:w-full">
              <div className="h-[42px] flex-1 rounded border border-solid border-gray-400_06" />
              <div className="flex">
                <Text as="p" className="self-end text-[18px] font-normal lg:text-[15px]">
                  מחיר מינימום
                </Text>
              </div>
            </div>
            <div className="w-[42%] lg:w-full md:w-full">
              <div className="flex pl-[60px] pr-14 md:px-5 sm:px-4">
                <Img src="images/img_inbox.svg" alt="Inboxoneone" className="h-[24px]" />
              </div>
              <div className="relative mt-[-8px] flex items-start justify-center gap-3">
                <Switch size="sm" value={true} className="self-center border border-solid border-gray-200" />
                <Text as="p" className="!font-heebo text-[18px] font-normal !text-black-900 lg:text-[15px]">
                  יעלה כמכרז:
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xs absolute bottom-0 left-0 right-0 top-0 my-auto flex h-[814px] flex-col items-center justify-center bg-[url(/public/images/img_rectangle_1.svg)] bg-cover bg-no-repeat p-[26px] lg:h-auto lg:px-5 md:h-auto md:px-5 sm:py-4">
          <Heading
            size="heading11xl"
            as="h2"
            className="!font-heebo text-[40px] font-bold !text-yellow-800 lg:text-[34px] md:text-[34px] sm:text-[32px]"
          >
            יצירת חבילה רכבים חדשה
          </Heading>
          <div className="mt-[466px] flex w-[16%] justify-between gap-5 lg:w-full md:w-full">
            <Button
              size="4xl"
              leftIcon={
                <div className="flex h-[10px] w-[6px] items-center justify-center">
                  <Img
                    src="images/img_arrowleft_secondary__primary_white.svg"
                    alt="Arrow Left"
                    className="mb-1.5 mt-0.5 h-[10px] w-[6px] object-contain"
                  />
                </div>
              }
              className="min-w-[68px] gap-2 rounded-[20px] px-2.5 font-semibold"
            >
              סיום
            </Button>
            <Button
              size="4xl"
              rightIcon={
                <div className="flex h-[10px] w-[6px] items-center justify-center">
                  <Img
                    src="images/img_arrowright_black_900_03.svg"
                    alt="Arrow Right"
                    className="mb-1.5 h-[10px] w-[6px] object-contain"
                  />
                </div>
              }
              className="min-w-[72px] gap-2 rounded-[20px] border border-solid border-gray-400_07 px-[9px] font-semibold"
            >
              קודם
            </Button>
          </div>
          <Img
            src="images/img_frame.png"
            alt="Imageone"
            className="ml-2.5 mt-[104px] h-[58px] w-[12%] self-start object-contain md:ml-0"
          />
          <div className="mr-3.5 mt-1.5 flex w-[96%] items-start justify-center gap-[18px] lg:w-full md:mr-0 md:w-full md:flex-col">
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
        <Img
          className="container-sm absolute bottom-0 left-0 right-0 top-0 my-auto h-[162px] object-contain"
          src="images/img_group_1261154409.svg"
          alt="Imageoneone"
        />
      </div>
    </>
  );
}
