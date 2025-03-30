import { Heading, Img, Button } from "./..";
import React from "react";

export default function Header({ ...props }) {
  return (
    <header {...props} className={`${props.className} flex flex-col items-start gap-3`}>
      <div className="flex w-[14%] justify-center gap-1 rounded-br-lg bg-gray-100">
        <div className="w-full">
          <div className="flex items-center justify-center gap-1">
            <Heading size="headinglg" as="p" className="text-[12px] font-bold !text-gray-900_04">
              <span className="text-gray-900_04">&nbsp;</span>
              <span className="font-heebo font-medium text-gray-600">lbl_lbl23</span>
            </Heading>
            <Img src="images/img_signal.svg" alt="Signaloneone" className="h-[10px]" />
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center justify-center gap-0.5">
            <Heading size="textxs" as="p" className="!font-heebo text-[12px] font-medium !text-gray-600">
              מודעות במכרז
            </Heading>
            <Img src="images/img_vector_deep_orange_500.svg" alt="Vectoroneone" className="h-[12px]" />
          </div>
        </div>
      </div>
      <div className="relative mb-1.5 ml-6 h-[46px] content-center self-stretch md:ml-0 md:h-auto">
        <div className="ml-auto mr-2.5 flex items-center gap-5 md:mr-0">
          <Heading size="h3_assistant_25px_m" as="p" className="text-[25px] font-medium md:text-[23px] sm:text-[21px]">
            מודעות רכבים שלי
          </Heading>
          <a href="#">
            <Img src="images/img_car_red_a700_03_3.png" alt="Caroneone" className="h-[36px] object-cover" />
          </a>
        </div>
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-start">
          <a href="#">
            <Button size="md" className="relative z-[2] ml-[50px] w-[32px] rounded-[10px] px-1.5 md:ml-0">
              <Img src="images/img_megaphone_gray_600_1.svg" />
            </Button>
          </a>
          <div className="relative mt-[-32px] flex flex-col items-start self-stretch">
            <a href="#">
              <Img
                src="images/img_button1_gray_100_01.svg"
                alt="Buttononeone"
                className="relative z-[1] h-[32px] rounded-[10px]"
              />
            </a>
            <div className="relative mt-[-28px] flex self-stretch border-b border-solid border-gray-200 pl-[142px] pr-14 md:px-5">
              <div className="flex w-[76%] flex-col items-end justify-center gap-2.5 md:w-full">
                <ul className="!ml-1.5 !mr-2 !mt-1 flex flex-wrap gap-[26px] md:mx-0">
                  <li>
                    <a href="#" className="cursor-pointer">
                      <Heading
                        size="h4_assistant_16px_b"
                        as="h6"
                        className="text-[16px] font-semibold !text-gray-500_02 hover:!text-black-900"
                      >
                        מודעות בארכיון
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="cursor-pointer">
                      <Heading
                        size="h4_assistant_16px_b"
                        as="h6"
                        className="text-[16px] font-semibold !text-gray-500_02 hover:!text-black-900"
                      >
                        מודעות מאושרות
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="cursor-pointer">
                      <Heading
                        size="h4_assistant_16px_b"
                        as="h6"
                        className="text-[16px] font-semibold !text-gray-500_02 hover:!text-black-900"
                      >
                        חבילת רכבים
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="cursor-pointer">
                      <Heading
                        size="h4_assistant_16px_b"
                        as="h6"
                        className="text-[16px] font-semibold !text-gray-500_02 hover:!text-black-900"
                      >
                        מודעות במכרז
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="cursor-pointer">
                      <Heading
                        size="h4_assistant_16px_b"
                        as="h6"
                        className="text-[16px] font-semibold !text-gray-500_02 hover:!text-black-900"
                      >
                        מודעות עם הצעות מחיר
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="cursor-pointer">
                      <Heading
                        size="h4_assistant_16px_b"
                        as="h6"
                        className="text-[16px] font-semibold !text-gray-500_02 hover:!text-black-900"
                      >
                        מודעות שממתינות להצעה
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Heading size="h4_assistant_16px_b" as="h6" className="text-[16px] font-semibold !text-black-900">
                        כל המודעות
                      </Heading>
                    </a>
                  </li>
                </ul>
                <div className="h-[2px] w-[10%] bg-red-a700_03" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
