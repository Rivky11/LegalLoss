import { Img, Heading, Button, Slider } from "./..";
import React from "react";

export default function AllOffersDealerCubesColumn({ ...props }) {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <div {...props} className={`${props.className} flex flex-col w-full bg-secondary-primary_white rounded-[16px]`}>
      <div className="flex w-full flex-col items-start">
        <div className="flex items-center self-stretch">
          <div className="mx-auto flex w-[38%]">
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
                  <div className="relative h-[218px]">
                    <Img
                      src="images/img_car9_660x440_jpg.png"
                      alt="Car9660x440one"
                      className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[218px] w-full flex-1 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 mx-auto flex flex-1 flex-col items-start">
                      <Button
                        shape="round"
                        className="ml-5 min-w-[104px] rounded-[14px] px-8 font-dmsans font-medium capitalize sm:px-5"
                      >
                        מאושר
                      </Button>
                      <div className="mx-1.5 mt-[38px] h-[40px] self-stretch" />
                      <div className="mt-[58px] flex justify-center self-stretch bg-light_green-800_cc">
                        <div className="mt-1 flex items-center self-end">
                          <div className="flex flex-wrap items-center">
                            <Heading
                              size="headingxs"
                              as="p"
                              className="!font-heebo text-[9px] font-bold !text-secondary-primary_white"
                            >
                              ₪
                            </Heading>
                            <Heading
                              as="h6"
                              className="!font-heebo text-[17px] font-bold !text-secondary-primary_white"
                            >
                              40,000
                            </Heading>
                          </div>
                          <Heading
                            size="headingxl"
                            as="p"
                            className="!font-heebo text-[14px] font-bold !text-secondary-primary_white"
                          >
                            מחיר ההצעה:
                          </Heading>
                        </div>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            />
          </div>
          <div className="relative z-[1] ml-[-66px] flex flex-1 justify-between gap-5">
            <div className="flex w-[12%] justify-center rounded-[20px] bg-white-a700_33 p-3">
              <Img src="images/img_arrow_right.svg" alt="Arrowrightone" className="h-[12px]" />
            </div>
            <div className="flex w-[12%] justify-center rounded-[20px] bg-white-a700_33 p-3">
              <Img src="images/img_icon_secondary__primary_white.svg" alt="Icononeone" className="h-[12px]" />
            </div>
          </div>
        </div>
        <div className="w-[42%] rounded-bl-[16px] rounded-br-[16px] border-b border-l border-r border-solid border-gray-200 py-1">
          <div className="mx-[30px] mt-1.5 flex pl-[78px] pr-14 md:px-5">
            <Heading size="heading5xl" as="h6" className="!font-heebo text-[18px] font-bold !text-black-900">
              X8 – 5.0 במוו
            </Heading>
          </div>
          <div className="flex justify-center px-14 md:px-5">
            <div className="mb-1.5 flex w-[40%] items-center justify-center">
              <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                2022
              </Heading>
              <div className="ml-1.5 h-[6px] w-[6px] rounded-[3px] bg-red-a700_03" />
              <Heading size="textmd" as="p" className="ml-2.5 !font-heebo text-[14px] font-normal !text-black-900">
                במוו
              </Heading>
            </div>
          </div>
          <div className="mx-[30px] mt-3 flex items-center justify-between gap-5">
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
          <div className="relative ml-[30px] mr-[18px] mt-4 h-[56px]">
            <div className="absolute bottom-0 left-0 right-0 top-0 my-auto ml-auto mr-3 h-max flex-1 border-t border-solid border-gray-200 py-3">
              <div className="self-end">
                <div className="flex items-center gap-[7px]">
                  <Img src="images/img_settings_black_900.svg" alt="לצפיה בזכיה" className="h-[14px]" />
                  <Heading size="heading2xl" as="p" className="text-[15px] font-semibold">
                    לצפיה בזכיה
                  </Heading>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[11.02px] right-0 m-auto flex w-[42%] items-center justify-center gap-[18px] rounded-[14px] bg-secondary-primary_white">
              <Heading
                size="textmd"
                as="p"
                className="self-end !font-dmsans text-[14px] font-medium capitalize !text-black-900"
              >
                פירוק
              </Heading>
              <Img src="images/img_television_red_a700_03_1.svg" alt="פירוק" className="h-[22px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
