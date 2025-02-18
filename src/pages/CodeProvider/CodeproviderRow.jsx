import { Button, Img, Text, Heading } from "../../components";
import React from "react";
import OTPInput from "react-otp-input";

export default function CodeproviderRow() {
  const [otp, setOtp] = React.useState("");

  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[1152px] flex-1 bg-[url(/public/images/img_group_3.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
      <div className="flex items-center md:flex-col">
        <div className="relative h-[1152px] w-[56%] content-center lg:h-auto md:h-auto md:w-full md:px-5">
          <Img
            src="images/img_1_1445554379_2.png"
            alt="Image"
            className="h-[1152px] w-[78%] rounded-bl-[200px] object-contain"
          />
          <div className="absolute left-0 right-0 top-1/4 mx-auto flex w-[46%] flex-col gap-0.5">
            <Img
              src="images/img_uuid_8da7836a_2.png"
              alt="Uuid8da7836atwo"
              className="ml-[22px] h-[90px] w-[38%] object-contain md:ml-0"
            />
            <div className="flex flex-col items-start">
              <Heading
                size="heading12xl"
                as="h1"
                className="!font-montserrat text-[45.14px] font-extrabold !text-red-a700_01 lg:text-[38px] md:text-[29px] sm:text-[23px]"
              >
                <span className="text-black-900_03">BUY</span>
                <span className="text-red-a700_03">MY</span>
                <span className="text-black-900_03">CAR</span>
              </Heading>
              <Heading size="texts" as="h2" className="!font-heebo text-[13.24px] font-medium tracking-[2.12px]">
                הופכים רכבי תאונה להזדמנות עסקית
              </Heading>
            </div>
          </div>
        </div>
        <div className="relative h-[464px] w-[28%] rounded-[10px] bg-secondary-primary_white px-[100px] py-6 lg:px-8 md:w-full md:px-5 sm:py-4">
          <div className="absolute left-0 right-0 top-6 mx-auto flex w-[84%] flex-col items-center justify-end bg-secondary-primary_white p-11 md:p-5 sm:p-4">
            <Heading size="textmd" as="h3" className="mt-[282px] !font-heebo text-[14px] font-normal !text-gray-700_04">
              לא קיבלתי את הקוד שלחו שוב
            </Heading>
          </div>
          <div className="absolute left-0 right-0 top-[12%] mx-auto flex flex-1 flex-col items-center">
            <Heading
              size="heading10xl"
              as="h4"
              className="!font-heebo text-[35px] font-bold tracking-[-0.70px] !text-red-a700_03 lg:text-[29px] md:text-[29px] sm:text-[27px]"
            >
              קבלת SMS
            </Heading>
            <Heading
              size="text3xl"
              as="h5"
              className="!font-heebo text-[20px] font-medium tracking-[-0.40px] lg:text-[17px]"
            >
              אנא הזינו את הקוד{" "}
            </Heading>
            <div className="mt-[22px] self-stretch">
              <div className="mt-1 flex flex-col items-end gap-4">
                <Text size="h4_assistant16px_r" as="p" className="text-[16px] font-semibold lg:text-[13px]">
                  <span className="text-black-900_03">קוד</span>
                  <span className="text-red-a700_03">*</span>
                </Text>
                <OTPInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  inputStyle="flex items-center justify-center cursor-text h-[50px] w-[50px] border-blue_gray-400 border border-solid text-center rounded-[3px]"
                  containerStyle="flex self-stretch w-auto gap-1.5 p-3"
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
              <div className="mx-[76px] mt-9 self-stretch px-2 md:mx-0">
                <Button
                  leftIcon={
                    <div className="flex h-[10px] w-[6px] items-center justify-center">
                      <Img
                        src="images/img_arrowleft.svg"
                        alt="Arrow Left"
                        className="mb-1.5 mt-0.5 h-[10px] w-[6px] object-contain"
                      />
                    </div>
                  }
                  className="h-[40px] w-full gap-2 rounded-[20px] bg-red-800 px-2.5 text-[16px] font-semibold text-secondary-primary_white lg:text-[13px]"
                >
                  כניסה לממשק ספקים
                </Button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
