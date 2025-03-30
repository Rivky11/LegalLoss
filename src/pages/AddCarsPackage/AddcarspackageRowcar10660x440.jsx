import { Img, Heading, Button, Slider, CheckBox } from "../../components";
import React from "react";

export default function AddcarspackageRowcar10660x440() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  const [sliderState1, setSliderState1] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [sliderState2, setSliderState2] = React.useState(0);
  const sliderRef2 = React.useRef(null);
  const [sliderState3, setSliderState3] = React.useState(0);
  const sliderRef3 = React.useRef(null);

  return (
    <div className="mr-3 flex gap-7 md:mr-0 md:flex-col">
      <div className="w-full rounded-[16px] bg-secondary-primary_white">
        <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
          <div>
            <div className="relative h-[218px] content-center lg:h-auto md:h-auto">
              <div className="mx-auto flex w-full">
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 1 }, 1441: { items: 1 } }}
                  disableDotsControls
                  activeIndex={sliderState3}
                  onSlideChanged={(e) => {
                    setSliderState3(e?.item);
                  }}
                  ref={sliderRef3}
                  items={[...Array(3)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <div className="relative h-[218px] content-center lg:h-auto md:h-auto">
                        <Img
                          src="images/img_car10_660x440_jpg.png"
                          alt="Car10660x440"
                          className="h-[218px] w-full flex-1 object-cover"
                        />
                        <div className="absolute left-0 right-0 top-[22px] mx-auto flex flex-1 flex-col items-start gap-[38px] px-1.5">
                          <Button
                            shape="round"
                            className="ml-3.5 min-w-[116px] rounded-[14px] px-4 font-dmsans font-medium capitalize md:ml-0"
                          >
                            ממתין להצעה
                          </Button>
                          <div className="h-[40px] self-stretch" />
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                />
              </div>
              <Button
                size="3xl"
                shape="circle"
                onClick={() => {
                  sliderRef3?.current?.slideNext();
                }}
                className="absolute bottom-0 right-1.5 top-0 my-auto w-[60px] rounded-[20px] px-3"
              >
                <Img src="images/img_arrow_right.svg" />
              </Button>
            </div>
            <div className="rounded-bl-[16px] rounded-br-[16px] border-b border-l border-r border-solid border-gray-200">
              <div className="mt-2">
                <div className="flex flex-col items-center gap-0.5">
                  <Heading as="h2" className="!font-heebo text-[18px] font-bold !text-black-900 lg:text-[15px]">
                    X8 – 5.0 במוו
                  </Heading>
                  <div className="flex justify-center self-stretch px-14 md:px-5 sm:px-4">
                    <div className="mb-1.5 flex w-[40%] items-center justify-center lg:w-full md:w-full">
                      <Heading size="textmd" as="h3" className="!font-heebo text-[14px] font-normal !text-black-900">
                        2022
                      </Heading>
                      <div className="ml-1.5 h-[6px] w-[6px] rounded-[3px] bg-red-a700_03" />
                      <Heading
                        size="textmd"
                        as="h4"
                        className="ml-2.5 !font-heebo text-[14px] font-normal !text-black-900"
                      >
                        במוו
                      </Heading>
                    </div>
                  </div>
                </div>
                <div className="mx-[30px] mt-1 flex items-center justify-between gap-5 md:mx-0">
                  <div className="flex flex-1 items-center justify-between gap-5">
                    <div className="flex flex-col items-start gap-0.5">
                      <Img
                        src="images/img_icon_black_900_01.svg"
                        alt="Icononeone"
                        className="ml-[26px] h-[26px] md:ml-0"
                      />
                      <Heading size="textmd" as="h5" className="!font-heebo text-[14px] font-normal !text-black-900">
                        2287 נפח מנוע
                      </Heading>
                    </div>
                    <div className="flex w-[28%] flex-col items-start gap-0.5">
                      <Img src="images/img_artboard_2_copy_3.svg" alt="Artboard2copy" className="h-[24px]" />
                      <Heading size="textmd" as="h6" className="!font-heebo text-[14px] font-normal !text-black-900">
                        יד 4
                      </Heading>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 self-end">
                    <Img src="images/img_icon_black_900.svg" alt="Iconthreeone" className="mr-3 h-[18px] md:mr-0" />
                    <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                      אוטומטי
                    </Heading>
                  </div>
                </div>
                <div className="mx-[30px] flex flex-col gap-0.5 md:mx-0">
                  <div className="h-px bg-gray-200" />
                  <div className="mx-[38px] flex items-center justify-between gap-5 md:mx-0">
                    <CheckBox
                      name="לבחירתחבילתרכבי"
                      label="לבחירת חבילת רכבים"
                      id="Data"
                      className="flex-1 gap-2 pr-6 font-heebo text-[15px] font-medium text-black-900_03 sm:pr-4"
                    />
                    <div className="flex flex-col items-center justify-center rounded-lg bg-black-900_03 p-1">
                      <Img src="images/img_car_secondary__primary_white_1.svg" alt="Caroneone" className="h-[6px]" />
                    </div>
                  </div>
                </div>
                <div className="mx-[30px] mt-1 border-t border-solid border-gray-200 py-1.5 md:mx-0">
                  <div className="mb-1 flex items-end justify-center">
                    <Img src="images/img_settings_black_900.svg" alt="Settingsoneone" className="mb-1.5 h-[14px]" />
                    <Heading size="h4_assistant_16px_b" as="h6" className="text-[16px] font-semibold lg:text-[13px]">
                      לצפיה במודעה
                    </Heading>
                    <div className="ml-[18px] flex flex-1 items-center justify-center gap-[18px] self-center rounded-[14px] bg-secondary-primary_white">
                      <Heading
                        size="textmd"
                        as="p"
                        className="self-end !font-dmsans text-[14px] font-medium capitalize !text-black-900"
                      >
                        שיקום
                      </Heading>
                      <Img src="images/img_vector_red_a700_03_22x34.svg" alt="Vectoroneone" className="h-[22px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="w-full rounded-[16px] bg-secondary-primary_white">
        <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
          <div>
            <div className="relative h-[218px] content-center lg:h-auto md:h-auto">
              <div className="mx-auto flex w-full">
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 1 }, 1441: { items: 1 } }}
                  disableDotsControls
                  activeIndex={sliderState2}
                  onSlideChanged={(e) => {
                    setSliderState2(e?.item);
                  }}
                  ref={sliderRef2}
                  items={[...Array(3)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <div className="relative h-[218px] content-center lg:h-auto md:h-auto">
                        <Img
                          src="images/img_car10_660x440_jpg.png"
                          alt="Car10660x440"
                          className="h-[218px] w-full flex-1 object-cover"
                        />
                        <div className="absolute left-0 right-0 top-[22px] mx-auto flex flex-1 flex-col items-start gap-[38px] px-1.5">
                          <Button
                            shape="round"
                            className="ml-3.5 min-w-[116px] rounded-[14px] px-4 font-dmsans font-medium capitalize md:ml-0"
                          >
                            ממתין להצעה
                          </Button>
                          <div className="h-[40px] self-stretch" />
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                />
              </div>
              <Button
                size="3xl"
                shape="circle"
                onClick={() => {
                  sliderRef2?.current?.slideNext();
                }}
                className="absolute bottom-0 right-1.5 top-0 my-auto w-[60px] rounded-[20px] px-3"
              >
                <Img src="images/img_arrow_right.svg" />
              </Button>
            </div>
            <div className="rounded-bl-[16px] rounded-br-[16px] border-b border-l border-r border-solid border-gray-200">
              <div className="mt-2">
                <div className="flex flex-col items-center gap-0.5">
                  <Heading as="h6" className="!font-heebo text-[18px] font-bold !text-black-900 lg:text-[15px]">
                    X8 – 5.0 במוו
                  </Heading>
                  <div className="flex justify-center self-stretch px-14 md:px-5 sm:px-4">
                    <div className="mb-1.5 flex w-[40%] items-center justify-center lg:w-full md:w-full">
                      <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                        2022
                      </Heading>
                      <div className="ml-1.5 h-[6px] w-[6px] rounded-[3px] bg-red-a700_03" />
                      <Heading
                        size="textmd"
                        as="p"
                        className="ml-2.5 !font-heebo text-[14px] font-normal !text-black-900"
                      >
                        במוו
                      </Heading>
                    </div>
                  </div>
                </div>
                <div className="mx-[30px] mt-1 flex items-center justify-between gap-5 md:mx-0">
                  <div className="flex flex-1 items-center justify-between gap-5">
                    <div className="flex flex-col items-start gap-0.5">
                      <Img
                        src="images/img_icon_black_900_01.svg"
                        alt="Iconfiveone"
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
                    <Img src="images/img_icon_black_900.svg" alt="Iconsevenone" className="mr-3 h-[18px] md:mr-0" />
                    <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                      אוטומטי
                    </Heading>
                  </div>
                </div>
                <div className="mx-[30px] flex flex-col gap-0.5 md:mx-0">
                  <div className="h-px bg-gray-200" />
                  <div className="mx-[38px] flex items-center justify-between gap-5 md:mx-0">
                    <div className="flex flex-1 items-center justify-center gap-2">
                      <Heading size="textlg" as="p" className="!font-heebo text-[15px] font-medium">
                        לבחירת חבילת רכבים
                      </Heading>
                      <Img src="images/img_checkmark_yellow_800_1.svg" alt="Checkmarkfive" className="h-[16px]" />
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-lg bg-black-900_03 p-1">
                      <Img src="images/img_car_secondary__primary_white_1.svg" alt="Carthreeone" className="h-[6px]" />
                    </div>
                  </div>
                </div>
                <div className="mx-[30px] mt-1 border-t border-solid border-gray-200 py-1.5 md:mx-0">
                  <div className="mb-1 flex items-end justify-center">
                    <Img src="images/img_settings_black_900.svg" alt="Settingsthree" className="mb-1.5 h-[14px]" />
                    <Heading size="h4_assistant_16px_b" as="h6" className="text-[16px] font-semibold lg:text-[13px]">
                      לצפיה במודעה
                    </Heading>
                    <div className="ml-[18px] flex flex-1 items-center justify-center gap-[18px] self-center rounded-[14px] bg-secondary-primary_white">
                      <Heading
                        size="textmd"
                        as="p"
                        className="self-end !font-dmsans text-[14px] font-medium capitalize !text-black-900"
                      >
                        שיקום
                      </Heading>
                      <Img src="images/img_vector_red_a700_03_22x34.svg" alt="Vectorthreeone" className="h-[22px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
        <div className="w-full rounded-[16px] bg-secondary-primary_white">
          <div className="relative h-[218px] content-center lg:h-auto md:h-auto">
            <div className="mx-auto flex w-full">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 1 }, 1441: { items: 1 } }}
                disableDotsControls
                activeIndex={sliderState1}
                onSlideChanged={(e) => {
                  setSliderState1(e?.item);
                }}
                ref={sliderRef1}
                items={[...Array(3)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="relative h-[218px] content-center lg:h-auto md:h-auto">
                      <Img
                        src="images/img_car10_660x440_jpg.png"
                        alt="Car10660x440"
                        className="h-[218px] w-full flex-1 object-cover"
                      />
                      <Button
                        shape="round"
                        className="absolute left-[21px] top-[22px] m-auto min-w-[116px] rounded-[14px] px-4 font-dmsans font-medium capitalize"
                      >
                        ממתין להצעה
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
                  sliderRef1?.current?.slidePrev();
                }}
                className="w-[60px] rounded-[20px] px-3"
              >
                <Img src="images/img_icon_secondary__primary_white.svg" />
              </Button>
              <Button
                size="3xl"
                shape="circle"
                onClick={() => {
                  sliderRef1?.current?.slideNext();
                }}
                className="w-[60px] rounded-[20px] px-3"
              >
                <Img src="images/img_arrow_right.svg" />
              </Button>
            </div>
          </div>
          <div className="rounded-bl-[16px] rounded-br-[16px] border-b border-l border-r border-solid border-gray-200">
            <div className="mt-2 flex flex-col items-center px-[30px] sm:px-4">
              <div className="flex w-[40%] flex-col items-center gap-0.5 lg:w-full md:w-full">
                <Heading as="h6" className="!font-heebo text-[18px] font-bold !text-black-900 lg:text-[15px]">
                  X8 – 5.0 במוו
                </Heading>
                <div className="ml-3.5 mr-2.5 flex items-center justify-center self-stretch md:mx-0">
                  <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                    2022
                  </Heading>
                  <div className="ml-1.5 h-[6px] w-[6px] rounded-[3px] bg-red-a700_03" />
                  <Heading size="textmd" as="p" className="ml-2.5 !font-heebo text-[14px] font-normal !text-black-900">
                    במוו
                  </Heading>
                </div>
              </div>
              <div className="mt-2.5 flex items-center justify-between gap-5 self-stretch">
                <div className="flex flex-1 items-center justify-between gap-5">
                  <div className="flex flex-col items-start gap-0.5">
                    <Img
                      src="images/img_icon_black_900_01.svg"
                      alt="Iconelevenone"
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
                  <Img src="images/img_icon_black_900.svg" alt="Iconthirteen" className="mr-3 h-[18px] md:mr-0" />
                  <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                    אוטומטי
                  </Heading>
                </div>
              </div>
              <div className="flex flex-col gap-0.5 self-stretch">
                <div className="h-px bg-gray-200" />
                <div className="mx-[38px] flex items-center justify-between gap-5 md:mx-0">
                  <div className="flex flex-1 items-center justify-center gap-2">
                    <Heading size="textlg" as="p" className="!font-heebo text-[15px] font-medium">
                      לבחירת חבילת רכבים
                    </Heading>
                    <Img src="images/img_checkmark_yellow_800_1.svg" alt="Checkmarkseven" className="h-[16px]" />
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg bg-black-900_03 p-1">
                    <Img src="images/img_car_secondary__primary_white_1.svg" alt="Carfiveone" className="h-[6px]" />
                  </div>
                </div>
              </div>
              <div className="mt-1 self-stretch border-t border-solid border-gray-200 py-1.5">
                <div className="mb-1 flex items-end justify-center">
                  <Img src="images/img_settings_black_900.svg" alt="Settingsfive" className="mb-1.5 h-[14px]" />
                  <Heading size="h4_assistant_16px_b" as="h6" className="text-[16px] font-semibold lg:text-[13px]">
                    לצפיה במודעה
                  </Heading>
                  <div className="ml-[18px] flex flex-1 items-center justify-center gap-[18px] self-center rounded-[14px] bg-secondary-primary_white">
                    <Heading
                      size="textmd"
                      as="p"
                      className="self-end !font-dmsans text-[14px] font-medium capitalize !text-black-900"
                    >
                      שיקום
                    </Heading>
                    <Img src="images/img_vector_red_a700_03_22x34.svg" alt="Vectorfiveone" className="h-[22px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
      <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
        <div className="w-full rounded-[16px] bg-secondary-primary_white">
          <div className="relative h-[218px] content-center lg:h-auto md:h-auto">
            <div className="mx-auto flex w-full">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 1 }, 1441: { items: 1 } }}
                disableDotsControls
                activeIndex={sliderState}
                onSlideChanged={(e) => {
                  setSliderState(e?.item);
                }}
                ref={sliderRef}
                items={[...Array(3)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="relative h-[218px] content-center lg:h-auto md:h-auto">
                      <Img
                        src="images/img_car10_660x440_jpg.png"
                        alt="Car10660x440"
                        className="h-[218px] w-full flex-1 object-cover"
                      />
                      <Button
                        shape="round"
                        className="absolute left-[21px] top-[22px] m-auto min-w-[116px] rounded-[14px] px-4 font-dmsans font-medium capitalize"
                      >
                        ממתין להצעה
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
          <div className="rounded-bl-[16px] rounded-br-[16px] border-b border-l border-r border-solid border-gray-200">
            <div className="mt-2 flex flex-col items-center px-[30px] sm:px-4">
              <div className="flex w-[40%] flex-col items-center gap-0.5 lg:w-full md:w-full">
                <Heading as="h6" className="!font-heebo text-[18px] font-bold !text-black-900 lg:text-[15px]">
                  X8 – 5.0 במוו
                </Heading>
                <div className="ml-3.5 mr-2.5 flex items-center justify-center self-stretch md:mx-0">
                  <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                    2022
                  </Heading>
                  <div className="ml-1.5 h-[6px] w-[6px] rounded-[3px] bg-red-a700_03" />
                  <Heading size="textmd" as="p" className="ml-2.5 !font-heebo text-[14px] font-normal !text-black-900">
                    במוו
                  </Heading>
                </div>
              </div>
              <div className="mt-2.5 flex items-center justify-center self-stretch">
                <div className="flex flex-1 items-center justify-between gap-5">
                  <div className="flex flex-col items-start gap-0.5">
                    <Img
                      src="images/img_icon_black_900_01.svg"
                      alt="Iconseventeen"
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
                  <Img src="images/img_icon_black_900.svg" alt="Iconnineteen" className="mr-3 h-[18px] md:mr-0" />
                  <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                    אוטומטי
                  </Heading>
                </div>
              </div>
              <div className="flex flex-col gap-0.5 self-stretch">
                <div className="h-px bg-gray-200" />
                <div className="mx-[38px] flex items-center justify-between gap-5 md:mx-0">
                  <div className="flex flex-1 items-center justify-center gap-2">
                    <Heading size="textlg" as="p" className="!font-heebo text-[15px] font-medium">
                      לבחירת חבילת רכבים
                    </Heading>
                    <Img src="images/img_checkmark_yellow_800_1.svg" alt="Checkmarknine" className="h-[16px]" />
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg bg-black-900_03 p-1">
                    <Img src="images/img_car_secondary__primary_white_1.svg" alt="Carsevenone" className="h-[6px]" />
                  </div>
                </div>
              </div>
              <div className="mt-1 self-stretch border-t border-solid border-gray-200 py-1.5">
                <div className="relative mb-1 h-[30px]">
                  <div className="absolute bottom-[-1px] left-0 right-0 mx-auto flex flex-1 items-center">
                    <Img src="images/img_settings_black_900.svg" alt="Settingsseven" className="h-[14px]" />
                    <Heading size="h4_assistant_16px_b" as="h6" className="text-[16px] font-semibold lg:text-[13px]">
                      לצפיה במודעה
                    </Heading>
                  </div>
                  <div className="absolute bottom-0 right-[22px] top-0 my-auto flex h-max w-[48%] items-center justify-center gap-[18px] rounded-[14px] bg-secondary-primary_white">
                    <Heading
                      size="textmd"
                      as="p"
                      className="self-end !font-dmsans text-[14px] font-medium capitalize !text-black-900"
                    >
                      שיקום
                    </Heading>
                    <Img src="images/img_vector_red_a700_03_22x34.svg" alt="Vectorsevenone" className="h-[22px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
