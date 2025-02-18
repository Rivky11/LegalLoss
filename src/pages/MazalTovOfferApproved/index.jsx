import { Helmet } from "react-helmet";
import { Button, Img, Heading } from "../../components";
import AllAddsProviderCubesColumncar9660x4 from "../../components/AllAddsProviderCubesColumncar9660x4";
import React from "react";

export default function MazalTovOfferApprovedPage() {
  return (
    <>
      <Helmet>
        <title>Rivky miler&#39;s Application15</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="relative h-[1080px] w-full px-[366px] py-[110px] lg:p-8 md:p-5 sm:p-4">
        <Img
          className="container-xs absolute left-0 right-0 top-[10%] h-[732px] flex-1"
          src="images/img_rectangle_1.svg"
          alt="Imageone"
        />
        <div className="container-md absolute left-0 right-0 top-[14%] flex flex-1">
          <div className="flex w-full flex-col items-center">
            <Heading
              size="heading11xl"
              as="h1"
              className="self-stretch text-center !font-heebo text-[40px] font-bold leading-[65px] !text-secondary-primary_white lg:text-[34px] md:text-[34px] sm:text-[32px]"
            >
              <span className="text-red-a700_03">lbl_lbl87</span>
              <span className="text-secondary-primary_white">
                <>
                  <br />
                </>
              </span>
              <span className="text-black-900_03">lbl_msg22</span>
            </Heading>
            <div className="mx-[168px] mt-2 flex items-start self-stretch md:mx-0 md:flex-col">
              <Img
                src="images/img_stock_photo_onl_294x290.png"
                alt="Stockphotoonl"
                className="h-[294px] w-[34%] object-contain md:w-full"
              />
              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                <AllAddsProviderCubesColumncar9660x4 className="mt-[22px] w-[38%] self-end md:w-full" />
              </a>
            </div>
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
              className="mt-7 min-w-[308px] gap-2 rounded-[20px] px-5 font-heebo font-medium tracking-[-0.40px] shadow-sm"
            >
              לפרטי התקשרות עם בעל הרכב
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
