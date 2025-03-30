import { Helmet } from "react-helmet";
import { Button, Img, Heading } from "../../components";
import MazalTovYouGetNewOfferColumncar20660x from "../../components/MazalTovYouGetNewOfferColumncar20660x";
import React from "react";

export default function MazalTovYouGetNewOfferPage() {
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
        <div className="container-md absolute left-0 right-0 top-[14%] flex flex-1 flex-col items-center">
          <div className="ml-4 flex flex-col self-stretch md:ml-0">
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
              <span className="text-black-900_03">lbl_msg12</span>
            </Heading>
            <Img
              src="images/img_stock_photo_onl_294x290.png"
              alt="Stockphotoonl"
              className="relative ml-14 mt-[-18px] h-[294px] w-[26%] object-contain md:ml-0"
            />
          </div>
          <div className="relative mt-[-226px] flex w-[28%] flex-col gap-4 lg:w-full md:w-full">
            <MazalTovYouGetNewOfferColumncar20660x />
            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
              <Button
                size="2xl"
                shape="circle"
                leftIcon={
                  <div className="flex h-[10px] w-[6px] items-center justify-center">
                    <Img
                      src="images/img_arrowleft_secondary__primary_white.svg"
                      alt="Arrow Left"
                      className="mb-1.5 mt-2.5 h-[10px] w-[6px] object-contain"
                    />
                  </div>
                }
                className="ml-[60px] mr-16 gap-2 self-stretch rounded-[20px] px-5 font-heebo font-medium tracking-[-0.40px] shadow-sm md:mx-0"
              >
                לכל ההצעות מחיר
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
