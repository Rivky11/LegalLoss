import { Img, Heading, Button, Slider } from "./..";
import React from "react";

export default function AllAddsDealerCubesColumncarx({ ...props }) {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <div {...props} className={`${props.className} flex flex-col w-full bg-secondary-primary_white rounded-[16px]`}>
      <div className="relative h-[218px] content-center self-stretch">
        <div className="mx-auto flex w-full">
          <Slider
            autoPlay
            autoPlayInterval={2000}
            responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 1 } }}
            disableDotsControls
            activeIndex={sliderState}
            onSlideChanged={(e) => {
              setSliderState(e?.item);
            }}
            ref={sliderRef}
            items={[...Array(3)].map(() => (
              <React.Fragment key={Math.random()}>
                <div className="relative h-[218px] content-center">
                  <Img
                    src="images/img_car10_660x440_jpg_218x328.png"
                    alt="Car10660x440"
                    className="h-[218px] w-full flex-1 object-cover"
                  />
                  <Button
                    shape="round"
                    className="absolute left-[21px] top-[23px] m-auto min-w-[104px] rounded-[14px] px-[34px] font-dmsans font-medium capitalize sm:px-5"
                  >
                    ארכיון
                  </Button>
                </div>
              </React.Fragment>
            ))}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 justify-between gap-5 px-1.5">
          <Button
            size="3xl"
            shape="circle"
            onClick={() => {
              sliderRef?.current?.slidePrev();
            }}
            className="w-[60px] rounded-[20px] px-3"
          >
            <Img src="images/img_icon_secondary__primary_white.svg" />
          </Button>
          <Button
            size="3xl"
            shape="circle"
            onClick={() => {
              sliderRef?.current?.slideNext();
            }}
            className="w-[60px] rounded-[20px] px-3"
          >
            <Img src="images/img_arrow_right.svg" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center self-stretch rounded-bl-[16px] rounded-br-[16px] border-b border-l border-r border-solid border-gray-200 p-1">
        <div className="mx-2 mt-1.5 flex pl-[78px] pr-14 md:px-5">
          <Heading size="heading5xl" as="h6" className="!font-heebo text-[18px] font-bold !text-black-900">
            X8 – 5.0 במוו
          </Heading>
        </div>
        <div className="flex w-[26%] items-center justify-center">
          <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
            2022
          </Heading>
          <div className="ml-1.5 h-[6px] w-[6px] rounded-[3px] bg-red-a700_03" />
          <Heading size="textmd" as="p" className="ml-2.5 !font-heebo text-[14px] font-normal !text-black-900">
            במוו
          </Heading>
        </div>
        <div className="mx-2 mt-5 flex w-[88%] items-center justify-between gap-5">
          <div className="flex flex-1 items-center justify-between gap-5">
            <div className="flex flex-col items-start gap-0.5">
              <Img src="images/img_icon_black_900_01.svg" alt="2287 נפח מנוע" className="ml-[26px] h-[26px]" />
              <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                2287 נפח מנוע
              </Heading>
            </div>
            <div className="flex w-[28%] flex-col items-start gap-0.5">
              <Img src="images/img_artboard_2_copy_3.svg" alt="יד" className="h-[24px]" />
              <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                יד 4
              </Heading>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2 self-end">
            <Img src="images/img_icon_black_900.svg" alt="אוטומטי" className="mr-3 h-[18px]" />
            <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
              אוטומטי
            </Heading>
          </div>
        </div>
        <div className="relative mt-4 h-[56px] w-[88%]">
          <div className="absolute bottom-0 left-0 right-0 top-0 mx-2 my-auto h-max flex-1 border-t border-solid border-gray-200 py-3">
            <div className="self-end">
              <div className="flex items-center">
                <Img src="images/img_settings_black_900.svg" alt="הצעה חדשה" className="h-[14px]" />
                <Heading size="heading2xl" as="p" className="ml-1 self-end text-[15px] font-semibold">
                  הצעה חדשה
                </Heading>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[10.88px] right-0 m-auto flex w-[40%] items-center justify-center gap-4 rounded-[14px] bg-secondary-primary_white">
            <Heading
              size="textmd"
              as="p"
              className="self-end !font-dmsans text-[14px] font-medium capitalize !text-black-900"
            >
              שיקום
            </Heading>
            <Img src="images/img_vector_red_a700_03_22x34.svg" alt="שיקום" className="h-[22px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
