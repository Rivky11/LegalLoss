import { Helmet } from "react-helmet";
import { Button, Img, Input, Heading, Text } from "../../components";
import React from "react";

export default function SignInDealerPage() {
  return (
    <>
      <Helmet>
        <title>Rivky miler&#39;s Application15555</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>  
      <div className="flex w-full items-start bg-secondary-primary_white md:flex-col">
        <div className="relative h-[1152px] w-[58%] content-center self-center lg:h-auto md:h-auto md:w-full md:px-5">
          <div className="flex flex-1 items-start md:flex-col">
            <div className="relative h-[1152px] w-[54%] rotate-[-180deg] content-center self-center lg:h-auto md:h-auto md:w-full">
              <Img
                src="images/img_1_1445554379_1.png"
                alt="Imageone"
                className="h-[1152px] w-full flex-1 rounded-bl-[200px] object-cover"
              />
              <div className="absolute left-0 right-0 top-[8%] mx-auto flex flex-1 flex-col items-start gap-1 pl-[142px] pr-14 lg:pl-8 md:px-5 sm:px-4">
                <Img
                  src="images/img_uuid_8da7836a_2.png"
                  alt="Uuid8da7836atwo"
                  className="ml-9 h-[142px] w-[60%] object-contain md:ml-0"
                />
                <Heading
                  size="heading15xl"
                  as="h1"
                  className="!font-montserrat text-[71.43px] font-extrabold !text-red-a700_01 lg:text-[48px] md:text-[48px]"
                >
                  <span className="text-black-900_03">lbl_lbl_buy</span>
                  <span className="text-red-a700_03">lbl_lbl_my</span>
                  <span className="text-black-900_03">lbl_lbl_car</span>
                </Heading>
              </div>
            </div>
            <Img
              src="images/img_mask_group.png"
              alt="Imageoneone"
              className="relative z-[1] ml-[-194px] mt-[344px] h-[282px] w-[30%] object-contain md:ml-0 md:w-full"
            />
          </div>
          <Img
            src="images/img_mask_group_blue_gray_100_01.png"
            alt="Imagetwoone"
            className="absolute bottom-[10%] right-[21%] m-auto h-[376px] w-[46%] object-contain"
          />
          <Heading
            size="text3xl"
            as="h2"
            className="absolute left-[14%] top-[28%] z-[2] m-auto !font-heebo text-[20.24px] font-medium tracking-[3.24px] lg:text-[17px]"
          >
            הופכים רכבי תאונה להזדמנות עסקית
          </Heading>
        </div>
        <div className="mt-[300px] flex w-[28%] flex-col gap-9 bg-secondary-primary_white py-7 md:w-full md:px-5 sm:py-4">
          <div className="flex flex-col items-center px-14 md:px-5 sm:px-4">
            <Heading
              size="heading10xl"
              as="h2"
              className="!font-heebo text-[35px] font-bold tracking-[-0.70px] !text-red-a700_03 lg:text-[29px] md:text-[29px] sm:text-[27px]"
            >
              הרשמה למערכת
            </Heading>
            <Heading
              size="text3xl"
              as="h3"
              className="!font-heebo text-[20px] font-medium tracking-[-0.40px] lg:text-[17px]"
            >
              אנא מלאו פרטיכם{" "}
            </Heading>
          </div>
          <div className="mx-[66px] mb-[34px] flex flex-col items-center gap-[46px] md:mx-0">
            <div className="flex flex-col gap-5 self-stretch">
              <div className="flex flex-col items-end gap-0.5">
                <Text
                  size="h4_assistant16px_r"
                  as="p"
                  className="mr-[18px] text-[16px] font-semibold lg:text-[13px] md:mr-0"
                >
                  <span className="text-black-900_03">lbl_lbl7</span>
                  <span className="text-red-a700_03">lbl_lbl3</span>
                </Text>
                <Input
                  size="sm"
                  name="largeinputone"
                  placeholder={`רשמו פה את שמכם המלא`}
                  className="self-stretch rounded-[16px] !border px-3"
                />
              </div>
              <div className="flex flex-col items-end gap-0.5">
                <Heading
                  size="h4_assistant_16px_b"
                  as="h2"
                  className="mr-[18px] text-[16px] font-semibold lg:text-[13px] md:mr-0"
                >
                  <span className="text-black-900_03">lbl_lbl9</span>
                  <span className="text-red-a700_03">lbl_lbl3</span>
                </Heading>
                <Input
                  size="sm"
                  type="password"
                  name="largeinputone"
                  placeholder={`רשמו פה את מספר הנייד `}
                  className="self-stretch rounded-[16px] !border px-3 !text-gray-700_04"
                />
              </div>
            </div>
            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
              <div className="flex px-7 sm:px-4">
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
                  className="min-w-[92px] gap-2 rounded-[20px] px-2.5 font-semibold"
                >
                  קבל קוד
                </Button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
