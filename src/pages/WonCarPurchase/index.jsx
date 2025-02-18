import { Helmet } from "react-helmet";
import { Heading, Img, Button } from "../../components";
import MazalTovOfferSentColumncar10660x from "../../components/MazalTovOfferSentColumncar10660x";
import React from "react";

export default function WonCarPurchasePage() {
  return (
    <>
      <Helmet>
        <title>Rivky miler&#39;s Application15</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="relative h-[1080px] w-full px-[306px] py-[124px] lg:p-8 md:p-5 sm:p-4">
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-[732px] w-full max-w-[1246px] items-start justify-center bg-[url(/public/images/img_group_1261154329_secondary__primary_white.svg)] bg-cover bg-no-repeat py-9 lg:h-auto lg:px-5 md:h-auto md:px-5 sm:py-4">
          <Heading
            size="heading11xl"
            as="h1"
            className="mb-[550px] flex-1 text-center !font-heebo text-[40px] font-bold leading-[65px] !text-secondary-primary_white lg:text-[34px] md:text-[34px] sm:text-[32px]"
          >
            <span className="text-red-a700_03">lbl_lbl87</span>
            <span className="text-secondary-primary_white">
              <>
                <br />
              </>
            </span>
            <span className="text-black-900_03">lbl_lbl129</span>
          </Heading>
        </div>
        <div className="absolute bottom-[12%] left-0 right-0 mx-auto flex w-[80%] items-start justify-end md:relative md:flex-col">
          <MazalTovOfferSentColumncar10660x className="relative z-[2] mt-[142px] w-[24%] md:w-full" />
          <div className="relative ml-[-318px] flex w-[64%] items-center justify-end self-center md:ml-0 md:w-full sm:flex-col">
            <Button
              size="2xl"
              shape="circle"
              leftIcon={
                <div className="flex h-[10px] w-[6px] items-center justify-center">
                  <Img
                    src="images/img_arrowleft_secondary__primary_white.svg"
                    alt="Arrow Left"
                    className="my-2 h-[10px] w-[6px] object-contain"
                  />
                </div>
              }
              className="relative z-[1] mb-[146px] min-w-[308px] gap-2 self-end rounded-[20px] px-5 font-heebo font-medium tracking-[-0.40px] shadow-sm"
            >
              לפרטי התקשרות עם בעל הרכב
            </Button>
            <div className="relative ml-[-78px] h-[720px] flex-1 rotate-[27deg] content-center lg:h-auto md:h-auto sm:ml-0 sm:w-full sm:flex-none sm:self-stretch">
              <Img
                src="images/img_1_1390807166_2.png"
                alt="Imageone"
                className="h-[720px] w-full flex-1 object-cover"
              />
              <div className="absolute left-0 right-0 top-[28%] mx-auto flex flex-1 rotate-[-6deg] flex-col items-end pl-14 pr-52 lg:pr-8 md:px-5 sm:px-4">
                <Img
                  src="images/img_uuid_8da7836a_2_amber_100.svg"
                  alt="Uuid8da7836atwo"
                  className="mr-3 mt-1 h-[102px] w-[42%] object-contain md:mr-0"
                />
                <Heading
                  size="heading13xl"
                  as="h2"
                  className="relative mt-[-32px] text-center !font-montserrat text-[60.94px] font-extrabold leading-[74px] !text-amber-100 lg:text-[51px] md:text-[40px] sm:text-[34px]"
                >
                  <span>lbl_lbl_b</span>
                  <span>lbl_lbl_m</span>
                  <span>lbl_lbl_c</span>
                </Heading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
