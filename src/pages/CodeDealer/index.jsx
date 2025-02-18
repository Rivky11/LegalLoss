import { Helmet } from "react-helmet";
import { Heading, Button, Img, Text } from "../../components";
import React from "react";
import OTPInput from "react-otp-input";

export default function CodeDealerPage() {
  const [otp, setOtp1] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Rivky miler&#39;s Application15</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-secondary-primary_white">
        <div className="flex items-center md:flex-col">
          <div className="relative h-[1152px] flex-1 content-center lg:h-auto md:h-auto md:w-full md:flex-none md:self-stretch md:px-5">
            <div className="flex flex-1 items-start md:flex-col">
              <div className="relative h-[1152px] w-[56%] rotate-[-180deg] content-center self-center lg:h-auto md:h-auto md:w-full">
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
                className="relative z-[1] ml-[-194px] mt-[344px] h-[282px] w-[32%] object-contain md:ml-0 md:w-full"
              />
            </div>
            <Img
              src="images/img_mask_group_blue_gray_100_01.png"
              alt="Imagetwoone"
              className="absolute bottom-[10%] right-[17%] m-auto h-[376px] w-[46%] object-contain"
            />
            <Heading
              size="text3xl"
              as="h2"
              className="absolute left-[14%] top-[28%] z-[2] m-auto !font-heebo text-[20.24px] font-medium tracking-[3.24px] lg:text-[17px]"
            >
              הופכים רכבי תאונה להזדמנות עסקית
            </Heading>
          </div>
          <div className="mb-[78px] flex w-[44%] flex-col items-center gap-[344px] self-end px-14 lg:gap-[258px] md:w-full md:gap-[258px] md:px-5 sm:gap-[172px]">
            <div className="mr-6 flex w-[78%] flex-col items-center gap-6 bg-secondary-primary_white py-8 lg:w-full md:mr-0 md:w-full sm:py-4">
              <div className="flex flex-col items-center self-stretch px-14 md:px-5 sm:px-4">
                <Heading
                  size="heading10xl"
                  as="h2"
                  className="!font-heebo text-[35px] font-bold tracking-[-0.70px] !text-red-a700_03 lg:text-[29px] md:text-[29px] sm:text-[27px]"
                >
                  קבלת SMS
                </Heading>
                <Heading
                  size="text3xl"
                  as="h3"
                  className="!font-heebo text-[20px] font-medium tracking-[-0.40px] lg:text-[17px]"
                >
                  אנא הזינו את הקוד{" "}
                </Heading>
              </div>
              <div className="mx-[100px] flex flex-col gap-9 self-stretch md:mx-0">
                <div>
                  <div className="mt-1 flex flex-col items-end gap-4">
                    <Text size="h4_assistant16px_r" as="p" className="text-[16px] font-semibold lg:text-[13px]">
                      <span className="text-black-900_03">lbl_lbl2</span>
                      <span className="text-red-a700_03">lbl_lbl3</span>
                    </Text>
                    <OTPInput
                      value={otp}
                      onChange={setOtp1}
                      numInputs={6}
                      inputStyle="flex items-center justify-center cursor-text h-[50px] w-[50px] border-blue_gray-400 border border-solid text-center rounded-[3px]"
                      containerStyle="flex self-stretch w-auto pt-5 pb-2 gap-1.5 px-3"
                      renderInput={({ className, ...inputProps }, i) => (
                        <label
                          className="className flex h-[50px] w-[50px] cursor-text items-center justify-center rounded-[3px] border border-solid border-blue_gray-400 text-center"
                          key={i}
                        >
                          <input {...inputProps} />
                        </label>
                      )}
                    />
                  </div>
                </div>
                <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
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
                    className="mx-[84px] gap-2 self-stretch rounded-[20px] px-2.5 font-semibold md:mx-0"
                  >
                    כניסה לממשק סוחרים
                  </Button>
                </a>
              </div>
              <Heading size="textmd" as="h4" className="mb-3 !font-heebo text-[14px] font-normal !text-gray-700_04">
                לא קיבלתי את הקוד שלחו שוב
              </Heading>
            </div>
            <div className="mx-[52px] flex w-[74%] lg:w-full md:mx-0 md:w-full">
              <div className="h-[34px] w-[36px] bg-light_green-800" />
              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                <div className="ml-5 h-[34px] w-[36px] bg-yellow-800" />
              </a>
              <div className="ml-[26px] h-[34px] w-[36px] bg-red-a700_04" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
