import { Text, Img, Button, Heading } from "./..";
import React from "react";

export default function AddCarInfo2Row({ viewoneoneOne, fiftyfive, ...props }) {
  return (
    <div
      {...props}
      className={`${props.className} flex md:flex-col justify-center items-center lg:px-5 md:px-5 bg-secondary-primary_white rounded-[20px] container-8xl`}
    >
      <div className="relative h-[914px] w-[28%] content-center lg:h-auto md:h-auto md:w-full">
        <Img
          src="images/img_1_2262370441_1.png"
          alt="Imageone"
          className="h-[914px] w-[90%] rounded-[20px] object-contain"
        />
        <Button size="5xl" shape="circle" className="absolute left-[30px] top-[3%] m-auto w-[44px] rounded-[20px] px-1">
          <Img src="images/img_frame_758531274.svg" />
        </Button>
      </div>
      <div className="mb-4 flex flex-1 flex-col gap-[106px] self-end px-12 lg:gap-[106px] md:gap-[79px] md:self-stretch md:px-5 sm:gap-[53px] sm:px-4">
        <div className="ml-[76px] mr-12 flex flex-col items-center gap-[22px] px-14 md:mx-0 md:px-5 sm:px-4">
          <div className="flex flex-col items-center justify-center">
            <Heading
              size="heading16xl"
              as="h1"
              className="!font-heebo text-[45px] font-bold !text-red-a700_03 lg:text-[38px] md:text-[29px] sm:text-[23px]"
            >
              סיכום מסמך
            </Heading>
            <Heading
              size="text6xl"
              as="p"
              className="relative mt-[-16px] !font-heebo text-[25px] font-normal lg:text-[21px]"
            >
              כל הפרטים על המודעת רכב החדשה
            </Heading>
          </div>
          <div className="w-[36%] rounded-[16px] bg-secondary-primary_white lg:w-full md:w-full">
            <div className="relative h-[218px] content-center lg:h-auto md:h-auto">
              <Img
                src="images/img_car20_660x440_jpg.png"
                alt="Car20660x440"
                className="h-[218px] w-full flex-1 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 justify-between gap-5 px-1.5">
                <div className="flex w-[18%] justify-center rounded-[20px] bg-white-a700_33 p-3">
                  <Img src="images/img_icon_secondary__primary_white.svg" alt="Icononeone" className="h-[12px]" />
                </div>
                <div className="flex w-[18%] justify-center rounded-[20px] bg-white-a700_33 p-3">
                  <Img src="images/img_arrow_right.svg" alt="Arrowrightone" className="h-[12px]" />
                </div>
              </div>
            </div>
            <div className="rounded-bl-[16px] rounded-br-[16px] border-b border-l border-r border-solid border-gray-200 py-1">
              <div className="mx-[30px] mt-1.5 flex pl-[78px] pr-14 lg:pl-8 md:mx-0 md:px-5 sm:px-4">
                <Heading
                  size="heading5xl"
                  as="h6"
                  className="!font-heebo text-[18px] font-bold !text-black-900 lg:text-[15px]"
                >
                  X8 – 5.0 במוו
                </Heading>
              </div>
              <div className="flex justify-center px-14 md:px-5 sm:px-4">
                <div className="mb-1.5 flex w-[40%] items-center justify-center lg:w-full md:w-full">
                  <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                    2022
                  </Heading>
                  <div className="ml-1.5 h-[6px] w-[6px] rounded-[3px] bg-red-a700_03" />
                  <Heading size="textmd" as="p" className="ml-2.5 !font-heebo text-[14px] font-normal !text-black-900">
                    במוו
                  </Heading>
                </div>
              </div>
              <div className="mx-[30px] mt-3 flex items-center justify-between gap-5 md:mx-0">
                <div className="flex flex-1 items-center justify-between gap-5">
                  <div className="flex flex-col items-start gap-0.5">
                    <Img
                      src="images/img_icon_black_900_01.svg"
                      alt="Iconthreeone"
                      className="ml-[26px] h-[26px] md:ml-0"
                    />
                    <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                      2287 נפח מנוע
                    </Heading>
                  </div>
                  <div className="flex w-[28%] flex-col items-start gap-0.5">
                    <Img src="images/img_artboard_2_copy_3.svg" alt="Artboard2copy" className="h-[24px]" />
                    <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                      יד 4
                    </Heading>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 self-end">
                  <Img src="images/img_icon_black_900.svg" alt="Iconfiveone" className="mr-3 h-[18px] md:mr-0" />
                  <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                    אוטומטי
                  </Heading>
                </div>
              </div>
              <div className="mx-[30px] mt-4 flex justify-end border-t border-solid border-gray-200 py-3 md:mx-0">
                <div className="flex w-[42%] items-center justify-center gap-[18px] rounded-[14px] bg-secondary-primary_white lg:w-full md:w-full">
                  <Heading
                    size="textmd"
                    as="p"
                    className="self-end !font-dmsans text-[14px] font-medium capitalize !text-black-900"
                  >
                    פירוק
                  </Heading>
                  <Img src="images/img_television_red_a700_03_1.svg" alt="Televisionone" className="h-[22px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[24%] justify-between gap-5 lg:w-full md:w-full">
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
              className="min-w-[106px] gap-2 rounded-[20px] px-2.5 font-semibold"
            >
              שמור וסיים
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
        </div>
        <div className="flex flex-col">
          <Img
            src="images/img_frame_red_900_01.png"
            alt="Imageoneone"
            className="ml-[68px] h-[58px] w-[12%] object-contain md:ml-0"
          />
          <div className="flex items-start justify-center gap-4 p-1.5 md:flex-col">
            {!!viewoneoneOne ? <div className="mt-1 h-[10px] w-[86%] rounded bg-red-a700_03" /> : null}
            {!!fiftyfive ? (
              <Text
                size="h4_assistant16px_r"
                as="p"
                className="self-center text-[16px] font-normal !text-gray-900 lg:text-[13px]"
              >
                {fiftyfive}
              </Text>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
