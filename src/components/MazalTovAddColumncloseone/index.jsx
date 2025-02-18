import { Button, Img, Heading } from "./..";
import React from "react";

export default function MazalTovAddColumncloseone({ ...props }) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start gap-[212px] px-7 py-[22px] lg:gap-[159px] lg:px-5 md:gap-[159px] md:px-5 sm:gap-[106px] sm:py-4 bg-secondary-primary_white rounded-[20px] container-8xl`}
    >
      <Img src="images/img_close_black_900_03.svg" alt="Closeoneone" className="h-[44px]" />
      <div className="mb-1 flex w-[28%] flex-col gap-[26px] self-center">
        <div className="flex flex-col items-center gap-[18px]">
          <Heading
            size="h1_assistant_45px_m"
            as="p"
            className="text-[45px] font-medium !text-red-a700_03 lg:text-[38px] md:text-[29px] sm:text-[23px]"
          >
            מזל טוב
          </Heading>
          <Heading size="text6xl" as="p" className="!font-heebo text-[25px] font-normal lg:text-[21px]">
            מזל טוב השיתוף של המודעה התבצע בהצלחה
          </Heading>
        </div>
        <div className="mx-[52px] flex justify-between gap-5 md:mx-0">
          <Button
            size="4xl"
            shape="circle"
            leftIcon={
              <div className="flex h-[10px] w-[6px] items-center justify-center">
                <Img
                  src="images/img_arrowleft_secondary__primary_white.svg"
                  alt="Arrow Left"
                  className="mb-1 mt-0.5 h-[10px] w-[6px] object-contain"
                />
              </div>
            }
            className="min-w-[130px] gap-2 rounded-[20px] px-2.5 font-semibold"
          >
            לצפיה במודעה
          </Button>
          <Button
            size="4xl"
            leftIcon={
              <div className="flex h-[10px] w-[6px] items-center justify-center">
                <Img
                  src="images/img_arrowleft_secondary__primary_white.svg"
                  alt="Arrow Left"
                  className="mb-1 mt-0.5 h-[10px] w-[6px] object-contain"
                />
              </div>
            }
            className="min-w-[180px] gap-2 rounded-[20px] px-2.5 font-semibold"
          >
            לצפיה למודעות חדשות
          </Button>
        </div>
      </div>
    </div>
  );
}
