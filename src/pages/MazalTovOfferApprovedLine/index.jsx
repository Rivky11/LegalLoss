import { Helmet } from "react-helmet";
import { Img, Heading, Text } from "../../components";
import React from "react";

export default function MazalTovOfferApprovedLinePage() {
  return (
    <>
      <Helmet>
        <title>Rivky miler&#39;s Application15</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="relative h-[1080px] w-full px-[366px] py-[110px] lg:p-8 md:p-5 sm:p-4">
        <Img
          className="container-xs absolute left-0 right-0 top-[10%] h-[732px] flex-1"
          src="images/img_rectangle_1_secondary__primary_white.svg"
          alt="Imageone"
        />
        <div className="container-md absolute left-0 right-0 top-[14%] flex flex-1">
          <div className="flex w-full flex-col gap-[60px] sm:gap-[30px]">
            <Heading
              size="heading11xl"
              as="h1"
              className="text-center !font-heebo text-[40px] font-bold leading-[65px] !text-secondary-primary_white lg:text-[34px] md:text-[34px] sm:text-[32px]"
            >
              <span className="text-red-a700_03">lbl_lbl87</span>
              <span className="text-secondary-primary_white">
                <>
                  <br />
                </>
              </span>
              <span className="text-black-900_03">lbl_msg22</span>
            </Heading>
            <div className="mx-[110px] flex items-start justify-end md:mx-0 md:flex-col">
              <Img
                src="images/img_shutterstock_1832393104.png"
                alt="Shutterstock"
                className="h-[318px] w-[36%] self-center object-contain md:w-full"
              />
              <div className="mt-[42px] flex w-[48%] justify-center rounded-[20px] bg-secondary-primary_white px-[18px] py-[22px] shadow-md md:w-full sm:py-4">
                <div className="flex w-full items-center justify-between gap-5 sm:flex-col">
                  <div className="flex w-[58%] flex-col items-end sm:w-full">
                    <Heading
                      size="heading7xl"
                      as="h2"
                      className="text-[27px] font-semibold !text-black-900 lg:text-[22px] md:text-[21px]"
                    >
                      Nivo Car\\&#96;s
                    </Heading>
                    <Heading
                      size="heading5xl"
                      as="h3"
                      className="mt-1.5 text-[24px] font-bold !text-black-900 lg:text-[20px]"
                    >
                      <span>lbl_lbl_nivo_car_s</span>
                      <span>lbl_lbl_gmail_com</span>
                    </Heading>
                    <div className="mt-2.5 flex flex-col items-end self-stretch">
                      <Heading
                        size="heading9xl"
                        as="h4"
                        className="relative z-[1] text-[30px] font-semibold !text-red-a700_03 lg:text-[25px] md:text-[24px] sm:text-[22px]"
                      >
                        054-8000093
                      </Heading>
                      <div className="relative mt-[-4px] flex flex-wrap items-start justify-end gap-[31px] self-stretch">
                        <Text
                          size="text5xl"
                          as="p"
                          className="mb-2 !font-montserrat text-[24px] font-normal !text-black-900 lg:text-[20px]"
                        >
                          ירושלים
                        </Text>
                        <Heading
                          size="heading5xl"
                          as="h5"
                          className="self-end !font-montserrat text-[24px] font-bold !text-black-900 lg:text-[20px]"
                        >
                          יישוב
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_artboard_1_copy.png"
                    alt="Artboard1copy"
                    className="h-[132px] w-[32%] rounded-[50%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
