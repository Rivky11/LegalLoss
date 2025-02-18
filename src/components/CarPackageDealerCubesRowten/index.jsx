import { Img, Heading, Button, Slider } from "./..";
import React from "react";

export default function CarPackageDealerCubesRowten({ ...props }) {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  const [sliderState1, setSliderState1] = React.useState(0);
  const sliderRef1 = React.useRef(null);

  return (
    <div
      {...props}
      className={`${props.className} flex md:flex-col items-center w-full bg-secondary-primary_white rounded-[16px]`}
    >
      <div className="flex w-full justify-end gap-[19px] px-6 sm:px-5">
        <div className="flex w-[12%] flex-col items-center justify-center rounded-[16px] bg-secondary-primary_white">
          <div className="container-7xl relative z-[5] flex justify-center">
            <div className="relative h-[218px] w-full content-center">
              <div className="mx-auto flex w-full">
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 1 } }}
                  disableDotsControls
                  activeIndex={sliderState1}
                  onSlideChanged={(e) => {
                    setSliderState1(e?.item);
                  }}
                  ref={sliderRef1}
                  items={[...Array(3)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <div className="relative h-[218px]">
                        <Img
                          src="images/img_car10_660x440_jpg_218x326.png"
                          alt="מחיר לחבילהone"
                          className="absolute bottom-0 left-0 top-0 my-auto h-[218px] w-[38%] object-contain"
                        />
                        <div className="absolute bottom-[-0.52px] left-0 right-0 mx-auto flex-1">
                          <div className="flex flex-col items-start gap-10">
                            <div className="mx-5 flex items-center self-stretch">
                              <Button
                                shape="round"
                                className="min-w-[104px] rounded-[14px] px-4 font-dmsans font-medium capitalize"
                              >
                                חבילת מכרז
                              </Button>
                              <div className="flex flex-1 items-center pl-[58px] pr-14 md:px-5">
                                <Button size="xl" shape="square" className="w-[36px]">
                                  <Img src="images/defaultNoData.png" />
                                </Button>
                                <Button size="xl" shape="circle" className="ml-1.5 w-[40px] rounded-[18px]">
                                  <Img src="images/img_group_903.svg" />
                                </Button>
                                <Button size="xl" shape="circle" className="ml-1.5 w-[40px] rounded-[18px]">
                                  <Img src="images/img_group_903.svg" />
                                </Button>
                              </div>
                            </div>
                            <div className="ml-1.5 h-[40px] w-[36%]" />
                            <div className="flex w-[38%] items-center bg-black-900">
                              <div className="w-full bg-deep_orange-500">
                                <div className="bg-yellow-800 px-[42px] md:px-5">
                                  <div className="flex flex-col items-center">
                                    <Heading
                                      size="headinglg"
                                      as="p"
                                      className="!font-heebo text-[12px] font-bold !text-secondary-primary_white"
                                    >
                                      מחיר לחבילה:
                                    </Heading>
                                    <div className="relative mt-[-2px] flex flex-wrap items-center justify-center self-stretch">
                                      <Heading
                                        size="headingxs"
                                        as="p"
                                        className="self-end !font-heebo text-[9px] font-bold !text-secondary-primary_white"
                                      >
                                        ₪
                                      </Heading>
                                      <Heading
                                        as="h6"
                                        className="!font-heebo text-[17px] font-bold !text-secondary-primary_white"
                                      >
                                        300,000
                                      </Heading>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex w-full flex-col items-center px-[42px] md:px-5">
                                <Heading
                                  size="headinglg"
                                  as="p"
                                  className="!font-heebo text-[12px] font-bold !text-secondary-primary_white"
                                >
                                  מחיר הרכב:
                                </Heading>
                                <div className="relative mt-[-4px] flex flex-wrap items-center justify-center self-stretch">
                                  <Heading
                                    size="headingxs"
                                    as="p"
                                    className="self-end !font-heebo text-[9px] font-bold !text-secondary-primary_white"
                                  >
                                    ₪
                                  </Heading>
                                  <Heading
                                    as="h6"
                                    className="!font-heebo text-[17px] font-bold !text-secondary-primary_white"
                                  >
                                    100,000
                                  </Heading>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                />
              </div>
              <div className="absolute bottom-0 left-[30%] top-0 my-auto flex h-max w-[10%] justify-center rounded-[20px] bg-white-a700_33 p-3">
                <Img src="images/img_arrow_right.svg" alt="Arrowrightone" className="h-[12px]" />
              </div>
            </div>
            <div className="relative h-[218px] w-full">
              <Img
                src="images/img_car20_660x440_jpg_218x328.png"
                alt="חבילת מכרז"
                className="absolute bottom-0 right-[-1.17px] top-0 my-auto h-[218px] w-[38%] object-contain"
              />
              <div className="absolute bottom-[-1px] left-0 right-0 mx-auto flex-1">
                <div className="flex flex-col items-end">
                  <div className="mx-3 flex items-center justify-end self-stretch">
                    <div className="flex rounded-[14px] bg-yellow-800">
                      <Heading
                        size="textmd"
                        as="p"
                        className="!font-dmsans text-[14px] font-medium capitalize !text-secondary-primary_white"
                      >
                        חבילת מכרז
                      </Heading>
                    </div>
                    <div className="flex w-[22%] justify-end">
                      <Img
                        src="images/img_close_secondary__primary_white_36x36.svg"
                        alt="חבילת מכרז"
                        className="h-[36px]"
                      />
                      <div className="relative h-[36px] w-[24%] content-center">
                        <div className="flex flex-1 items-start justify-center">
                          <Img src="images/img_group_903.svg" alt="חבילת מכרז" className="relative z-[6] h-[16px]" />
                          <Img
                            src="images/img_mobile_secondary__primary_white.svg"
                            alt="חבילת מכרז"
                            className="relative ml-[-12px] h-[36px] w-[58%] self-center rounded-[50%]"
                          />
                        </div>
                        <Img
                          src="images/img_television_yellow_800_18x18.svg"
                          alt="Image"
                          className="absolute bottom-0 right-[6.04px] top-0 z-[7] my-auto h-[18px]"
                        />
                        <Heading
                          size="textmd"
                          as="p"
                          className="absolute left-[2.96px] top-0 z-[8] m-auto !font-heebo text-[14px] font-medium !text-secondary-primary_white"
                        >
                          3
                        </Heading>
                      </div>
                      <div className="relative h-[36px] w-[24%]">
                        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 items-start justify-center">
                          <Img src="images/img_group_903.svg" alt="חבילת מכרז" className="relative z-[9] h-[16px]" />
                          <Img
                            src="images/img_mobile_secondary__primary_white.svg"
                            alt="חבילת מכרז"
                            className="relative ml-[-12px] h-[36px] w-[60%] self-center rounded-[50%]"
                          />
                        </div>
                        <Heading
                          size="textmd"
                          as="p"
                          className="absolute left-px top-0 z-10 m-auto !font-heebo text-[14px] font-medium !text-secondary-primary_white"
                        >
                          3
                        </Heading>
                        <Img
                          src="images/img_car_yellow_800_1.svg"
                          alt="Image"
                          className="absolute bottom-[9px] right-2 z-[11] m-auto h-[14px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mx-1.5 mt-[34px] flex justify-end gap-[194px] self-stretch">
                    <div className="flex w-[8%] justify-center rounded-[20px] bg-white-a700_33 p-3">
                      <Img src="images/img_icon_secondary__primary_white.svg" alt="Icononeone" className="h-[12px]" />
                    </div>
                    <div className="flex w-[8%] justify-center rounded-[20px] bg-white-a700_33 p-3">
                      <Img src="images/img_arrow_right.svg" alt="Arrowrightone" className="h-[12px]" />
                    </div>
                  </div>
                  <div className="mt-[50px] flex h-[36px] w-[38%] items-center justify-end bg-[url(/public/images/img_group_10118.svg)] bg-cover bg-no-repeat">
                    <div className="w-full bg-deep_orange-500">
                      <div className="flex flex-col items-center bg-yellow-800">
                        <Heading
                          size="headinglg"
                          as="p"
                          className="!font-heebo text-[12px] font-bold !text-secondary-primary_white"
                        >
                          מחיר לחבילה:
                        </Heading>
                        <div className="flex flex-wrap items-center">
                          <Heading
                            size="headingxs"
                            as="p"
                            className="self-end !font-heebo text-[9px] font-bold !text-secondary-primary_white"
                          >
                            ₪
                          </Heading>
                          <Heading
                            as="h6"
                            className="relative ml-[-2px] !font-heebo text-[17px] font-bold !text-secondary-primary_white"
                          >
                            300,000
                          </Heading>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full flex-col items-center">
                      <Heading
                        size="headinglg"
                        as="p"
                        className="!font-heebo text-[12px] font-bold !text-secondary-primary_white"
                      >
                        מחיר הרכב:
                      </Heading>
                      <div className="flex flex-wrap items-center">
                        <Heading
                          size="headingxs"
                          as="p"
                          className="self-end !font-heebo text-[9px] font-bold !text-secondary-primary_white"
                        >
                          ₪
                        </Heading>
                        <Heading
                          as="h6"
                          className="relative ml-[-4px] !font-heebo text-[17px] font-bold !text-secondary-primary_white"
                        >
                          100,000
                        </Heading>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-7xl flex justify-between gap-5">
            <div className="w-[18%] rounded-bl-[16px] rounded-br-[16px] border-b border-l border-r border-solid border-gray-200 py-1">
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
              <div className="mx-[30px] mt-3.5 flex items-center justify-between gap-5">
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
              <div className="relative mx-3 mt-4 h-[56px]">
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[56px] flex-1 border-t border-solid border-gray-200" />
                <div className="absolute bottom-[11.14px] left-0 right-0 mx-auto flex flex-1 justify-end">
                  <div className="flex w-[38%] items-center justify-center gap-4 rounded-[14px] bg-secondary-primary_white">
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
                <div className="absolute bottom-0 left-0 right-0 top-0 mx-5 my-auto h-max flex-1">
                  <div className="flex items-center gap-1.5">
                    <Img src="images/img_settings_black_900.svg" alt="לצפיה בחבילת" className="h-[14px]" />
                    <Heading size="h4_assistant_16px_b" as="h6" className="text-[16px] font-semibold">
                      לצפיה בחבילת מכרז
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[18%] rounded-bl-[16px] rounded-br-[16px] border-b border-l border-r border-solid border-gray-200 py-1">
              <div className="mx-[30px] mt-2.5 flex justify-center">
                <Heading size="heading5xl" as="h6" className="!font-heebo text-[18px] font-bold !text-black-900">
                  X8 – 5.0 במוו
                </Heading>
              </div>
              <div className="flex justify-center px-14 md:px-5">
                <div className="flex w-[40%] items-center justify-center">
                  <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                    2022
                  </Heading>
                  <div className="h-[6px] w-[6px] rounded-[3px] bg-red-a700_03" />
                  <Heading size="textmd" as="p" className="ml-2.5 !font-heebo text-[14px] font-normal !text-black-900">
                    במוו
                  </Heading>
                </div>
              </div>
              <div className="mx-[30px] mt-3.5 flex items-center justify-center gap-2">
                <div className="flex flex-1 flex-col items-start gap-2">
                  <Img src="images/img_icon_black_900_01.svg" alt="2287 נפח מנוע" className="ml-7 h-[26px]" />
                  <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                    2287 נפח מנוע
                  </Heading>
                </div>
                <div className="flex flex-1 flex-col items-center gap-1.5 px-2">
                  <Img src="images/img_artboard_2_copy_3.svg" alt="יד" className="h-[24px]" />
                  <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                    יד 4
                  </Heading>
                </div>
                <div className="flex flex-col items-end gap-3 self-end">
                  <Img src="images/img_icon_black_900.svg" alt="אוטומטי" className="mr-3.5 h-[18px]" />
                  <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                    אוטומטי
                  </Heading>
                </div>
              </div>
              <div className="relative mx-2.5 mt-5 h-[56px]">
                <Img
                  src="images/defaultNoData.png"
                  alt="שיקום"
                  className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[56px] flex-1 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 items-center justify-center">
                  <Img
                    src="images/img_settings_black_900.svg"
                    alt="לצפיה בחבילת"
                    className="mt-1.5 h-[14px] self-start"
                  />
                  <Heading size="h4_assistant_16px_b" as="h6" className="ml-1.5 text-[16px] font-semibold">
                    לצפיה בחבילת מכרז
                  </Heading>
                  <div className="ml-3.5 flex w-[40%] items-center justify-center gap-4 rounded-[14px] bg-secondary-primary_white">
                    <Heading
                      size="textmd"
                      as="p"
                      className="!font-dmsans text-[14px] font-medium capitalize !text-black-900"
                    >
                      שיקום
                    </Heading>
                    <Img src="images/img_vector_red_a700_03_22x34.svg" alt="שיקום" className="h-[22px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-[12] w-[12%] rounded-[16px] bg-secondary-primary_white">
          <div className="relative h-[218px]">
            <Img
              src="images/img_car9_660x440_jpg_218x326.png"
              alt="חבילת מכרז"
              className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[218px] w-full flex-1 object-cover"
            />
            <div className="absolute bottom-[-1px] left-0 right-0 mx-auto flex-1">
              <div>
                <div className="ml-5 mr-3 flex items-center justify-center">
                  <div className="flex rounded-[14px] bg-yellow-800">
                    <Heading
                      size="textmd"
                      as="p"
                      className="!font-dmsans text-[14px] font-medium capitalize !text-secondary-primary_white"
                    >
                      חבילת מכרז
                    </Heading>
                  </div>
                  <div className="flex flex-1 justify-end">
                    <div className="flex w-[18%] flex-col items-center justify-center rounded-[18px] bg-secondary-primary_white p-2">
                      <div className="h-[16px] w-[16px] rounded-tr-lg border-[0.5px] border-solid border-secondary-primary_white bg-yellow-800" />
                    </div>
                    <div className="relative h-[36px] w-[24%] content-center">
                      <div className="flex flex-1 items-start justify-center">
                        <Img src="images/img_group_903.svg" alt="חבילת מכרז" className="relative z-[13] h-[16px]" />
                        <div className="relative ml-[-12px] h-[36px] w-[36px] self-center rounded-[18px] bg-secondary-primary_white" />
                      </div>
                      <Img
                        src="images/img_television_yellow_800_18x18.svg"
                        alt="Image"
                        className="absolute bottom-0 right-[6.04px] top-0 z-[14] my-auto h-[18px]"
                      />
                      <Heading
                        size="textmd"
                        as="p"
                        className="absolute left-[2.96px] top-0 z-[15] m-auto !font-heebo text-[14px] font-medium !text-secondary-primary_white"
                      >
                        3
                      </Heading>
                    </div>
                    <div className="relative h-[36px] w-[24%]">
                      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 items-start justify-center">
                        <Img src="images/img_group_903.svg" alt="חבילת מכרז" className="relative z-[16] h-[16px]" />
                        <div className="relative ml-[-12px] h-[36px] w-[36px] self-center rounded-[18px] bg-secondary-primary_white" />
                      </div>
                      <Heading
                        size="textmd"
                        as="p"
                        className="absolute left-px top-0 z-[17] m-auto !font-heebo text-[14px] font-medium !text-secondary-primary_white"
                      >
                        3
                      </Heading>
                      <Img
                        src="images/img_car_yellow_800_1.svg"
                        alt="Image"
                        className="absolute bottom-[9px] right-2 z-[18] m-auto h-[14px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="mx-1.5 mt-[34px] flex justify-between gap-5">
                  <div className="flex w-[18%] justify-center rounded-[20px] bg-white-a700_33 p-3">
                    <Img src="images/img_icon_secondary__primary_white.svg" alt="Iconfiveone" className="h-[12px]" />
                  </div>
                  <div className="flex w-[18%] justify-center rounded-[20px] bg-white-a700_33 p-3">
                    <Img src="images/img_arrow_right.svg" alt="Arrowrightfive" className="h-[12px]" />
                  </div>
                </div>
                <div className="mt-[50px] flex bg-black-900">
                  <div className="w-full bg-deep_orange-500">
                    <div className="flex flex-col items-center bg-yellow-800">
                      <Heading
                        size="headinglg"
                        as="p"
                        className="!font-heebo text-[12px] font-bold !text-secondary-primary_white"
                      >
                        מחיר לחבילה:
                      </Heading>
                      <div className="flex flex-wrap items-center">
                        <Heading
                          size="headingxs"
                          as="p"
                          className="self-end !font-heebo text-[9px] font-bold !text-secondary-primary_white"
                        >
                          ₪
                        </Heading>
                        <Heading
                          as="h6"
                          className="relative ml-[-2px] !font-heebo text-[17px] font-bold !text-secondary-primary_white"
                        >
                          300,000
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-center">
                    <Heading
                      size="headinglg"
                      as="p"
                      className="!font-heebo text-[12px] font-bold !text-secondary-primary_white"
                    >
                      מחיר הרכב:
                    </Heading>
                    <div className="flex flex-wrap items-center">
                      <Heading
                        size="headingxs"
                        as="p"
                        className="self-end !font-heebo text-[9px] font-bold !text-secondary-primary_white"
                      >
                        ₪
                      </Heading>
                      <Heading
                        as="h6"
                        className="relative ml-[-4px] !font-heebo text-[17px] font-bold !text-secondary-primary_white"
                      >
                        100,000
                      </Heading>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-bl-[16px] rounded-br-[16px] border-b border-l border-r border-solid border-gray-200 py-1">
            <div className="mx-[30px] mt-2.5 flex pl-[74px] pr-14 md:px-5">
              <Heading size="heading5xl" as="h6" className="!font-heebo text-[18px] font-bold !text-black-900">
                X8 – 5.0 במוו
              </Heading>
            </div>
            <div className="flex justify-center px-14 md:px-5">
              <div className="flex w-[40%] items-center justify-center">
                <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                  2022
                </Heading>
                <div className="h-[6px] w-[6px] rounded-[3px] bg-red-a700_03" />
                <Heading size="textmd" as="p" className="ml-2.5 !font-heebo text-[14px] font-normal !text-black-900">
                  במוו
                </Heading>
              </div>
            </div>
            <div className="mx-[30px] mt-3.5 flex items-center justify-center gap-2">
              <div className="flex flex-1 flex-col items-start gap-2">
                <Img src="images/img_icon_black_900_01.svg" alt="2287 נפח מנוע" className="ml-7 h-[26px]" />
                <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                  2287 נפח מנוע
                </Heading>
              </div>
              <div className="flex flex-1 flex-col items-center gap-1.5 px-2">
                <Img src="images/img_artboard_2_copy_3.svg" alt="יד" className="h-[24px]" />
                <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                  יד 4
                </Heading>
              </div>
              <div className="flex flex-col items-end gap-3 self-end">
                <Img src="images/img_icon_black_900.svg" alt="אוטומטי" className="mr-3.5 h-[18px]" />
                <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                  אוטומטי
                </Heading>
              </div>
            </div>
            <div className="relative mx-3 mt-5 h-[56px]">
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[56px] flex-1 border-t border-solid border-gray-200" />
              <div className="absolute bottom-[11.14px] left-0 right-0 mx-auto flex flex-1 justify-end">
                <div className="flex w-[38%] items-center justify-center gap-4 rounded-[14px] bg-secondary-primary_white">
                  <Heading
                    size="textmd"
                    as="p"
                    className="!font-dmsans text-[14px] font-medium capitalize !text-black-900"
                  >
                    שיקום
                  </Heading>
                  <Img src="images/img_vector_red_a700_03_22x34.svg" alt="שיקום" className="h-[22px]" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 mx-5 my-auto h-max flex-1">
                <div className="flex items-center gap-1.5">
                  <Img src="images/img_settings_black_900.svg" alt="לצפיה בחבילת" className="h-[14px]" />
                  <Heading size="h4_assistant_16px_b" as="h6" className="text-[16px] font-semibold">
                    לצפיה בחבילת מכרז
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-[19] w-[12%] rounded-[16px] bg-secondary-primary_white">
          <div>
            <div className="relative h-[218px]">
              <Img
                src="images/img_car20_660x440_jpg_218x326.png"
                alt="חבילת מכרז"
                className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[218px] w-full flex-1 object-cover"
              />
              <div className="absolute bottom-[-1px] left-0 right-0 mx-auto flex-1">
                <div>
                  <div className="ml-5 mr-3 flex items-center justify-center">
                    <div className="flex rounded-[14px] bg-yellow-800">
                      <Heading
                        size="textmd"
                        as="p"
                        className="!font-dmsans text-[14px] font-medium capitalize !text-secondary-primary_white"
                      >
                        חבילת מכרז
                      </Heading>
                    </div>
                    <div className="flex flex-1 justify-end">
                      <div className="flex w-[18%] flex-col items-center justify-center rounded-[18px] bg-secondary-primary_white p-2">
                        <div className="h-[16px] w-[16px] rounded-tr-lg border-[0.5px] border-solid border-secondary-primary_white bg-yellow-800" />
                      </div>
                      <div className="relative h-[36px] w-[24%] content-center">
                        <div className="flex flex-1 items-start justify-center">
                          <Img src="images/img_group_903.svg" alt="חבילת מכרז" className="relative z-20 h-[16px]" />
                          <div className="relative ml-[-12px] h-[36px] w-[36px] self-center rounded-[18px] bg-secondary-primary_white" />
                        </div>
                        <Img
                          src="images/img_television_yellow_800_18x18.svg"
                          alt="Image"
                          className="absolute bottom-0 right-[6.04px] top-0 z-[21] my-auto h-[18px]"
                        />
                        <Heading
                          size="textmd"
                          as="p"
                          className="absolute left-[2.96px] top-0 z-[22] m-auto !font-heebo text-[14px] font-medium !text-secondary-primary_white"
                        >
                          3
                        </Heading>
                      </div>
                      <div className="relative h-[36px] w-[24%]">
                        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 items-start justify-center">
                          <Img src="images/img_group_903.svg" alt="חבילת מכרז" className="relative z-[23] h-[16px]" />
                          <div className="relative ml-[-12px] h-[36px] w-[36px] self-center rounded-[18px] bg-secondary-primary_white" />
                        </div>
                        <Heading
                          size="textmd"
                          as="p"
                          className="absolute left-px top-0 z-[24] m-auto !font-heebo text-[14px] font-medium !text-secondary-primary_white"
                        >
                          3
                        </Heading>
                        <Img
                          src="images/img_car_yellow_800_1.svg"
                          alt="Image"
                          className="absolute bottom-[9px] right-2 z-[25] m-auto h-[14px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mx-1.5 mt-[34px] flex justify-between gap-5">
                    <div className="flex w-[18%] justify-center rounded-[20px] bg-white-a700_33 p-3">
                      <Img src="images/img_icon_secondary__primary_white.svg" alt="Iconnineone" className="h-[12px]" />
                    </div>
                    <div className="flex w-[18%] justify-center rounded-[20px] bg-white-a700_33 p-3">
                      <Img src="images/img_arrow_right.svg" alt="Arrowright" className="h-[12px]" />
                    </div>
                  </div>
                  <div className="mt-[50px] flex bg-black-900">
                    <div className="w-full bg-deep_orange-500">
                      <div className="flex flex-col items-center bg-yellow-800">
                        <Heading
                          size="headinglg"
                          as="p"
                          className="!font-heebo text-[12px] font-bold !text-secondary-primary_white"
                        >
                          מחיר לחבילה:
                        </Heading>
                        <div className="flex flex-wrap items-center">
                          <Heading
                            size="headingxs"
                            as="p"
                            className="self-end !font-heebo text-[9px] font-bold !text-secondary-primary_white"
                          >
                            ₪
                          </Heading>
                          <Heading
                            as="h6"
                            className="relative ml-[-2px] !font-heebo text-[17px] font-bold !text-secondary-primary_white"
                          >
                            300,000
                          </Heading>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full flex-col items-center">
                      <Heading
                        size="headinglg"
                        as="p"
                        className="!font-heebo text-[12px] font-bold !text-secondary-primary_white"
                      >
                        מחיר הרכב:
                      </Heading>
                      <div className="flex flex-wrap items-center">
                        <Heading
                          size="headingxs"
                          as="p"
                          className="self-end !font-heebo text-[9px] font-bold !text-secondary-primary_white"
                        >
                          ₪
                        </Heading>
                        <Heading
                          as="h6"
                          className="relative ml-[-4px] !font-heebo text-[17px] font-bold !text-secondary-primary_white"
                        >
                          100,000
                        </Heading>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-bl-[16px] rounded-br-[16px] border-b border-l border-r border-solid border-gray-200 py-1">
            <div className="mx-[30px] mt-2.5 flex pl-[74px] pr-14 md:px-5">
              <Heading size="heading5xl" as="h6" className="!font-heebo text-[18px] font-bold !text-black-900">
                X8 – 5.0 במוו
              </Heading>
            </div>
            <div className="flex justify-center px-14 md:px-5">
              <div className="flex w-[40%] items-center justify-center">
                <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                  2022
                </Heading>
                <div className="h-[6px] w-[6px] rounded-[3px] bg-red-a700_03" />
                <Heading size="textmd" as="p" className="ml-2.5 !font-heebo text-[14px] font-normal !text-black-900">
                  במוו
                </Heading>
              </div>
            </div>
            <div className="mx-[30px] mt-3.5 flex items-center justify-center gap-2">
              <div className="flex flex-1 flex-col items-start gap-2">
                <Img src="images/img_icon_black_900_01.svg" alt="2287 נפח מנוע" className="ml-7 h-[26px]" />
                <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                  2287 נפח מנוע
                </Heading>
              </div>
              <div className="flex flex-1 flex-col items-center gap-1.5 px-2">
                <Img src="images/img_artboard_2_copy_3.svg" alt="יד" className="h-[24px]" />
                <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                  יד 4
                </Heading>
              </div>
              <div className="flex flex-col items-end gap-3 self-end">
                <Img src="images/img_icon_black_900.svg" alt="אוטומטי" className="mr-3.5 h-[18px]" />
                <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                  אוטומטי
                </Heading>
              </div>
            </div>
            <div className="relative mx-3 mt-5 h-[56px]">
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[56px] flex-1 border-t border-solid border-gray-200" />
              <div className="absolute bottom-[11.14px] left-0 right-0 mx-auto flex flex-1 justify-end">
                <div className="flex w-[38%] items-center justify-center gap-4 rounded-[14px] bg-secondary-primary_white">
                  <Heading
                    size="textmd"
                    as="p"
                    className="!font-dmsans text-[14px] font-medium capitalize !text-black-900"
                  >
                    שיקום
                  </Heading>
                  <Img src="images/img_vector_red_a700_03_22x34.svg" alt="שיקום Ten" className="h-[22px]" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 mx-5 my-auto h-max flex-1">
                <div className="flex items-center gap-1.5">
                  <Img src="images/img_settings_black_900.svg" alt="לצפיה בחבילת" className="h-[14px]" />
                  <Heading size="h4_assistant_16px_b" as="h6" className="text-[16px] font-semibold">
                    לצפיה בחבילת מכרז
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-[26] flex w-full justify-center gap-[19px]">
        <div className="w-full rounded-[16px] bg-secondary-primary_white">
          <div>
            <div className="relative h-[220px] content-center">
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
                      <div className="relative h-[220px]">
                        <Img
                          src="images/img_car10_660x440_jpg.png"
                          alt="חבילת מכרז"
                          className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[218px] w-full flex-1 object-cover"
                        />
                        <div className="absolute bottom-[1.12px] left-0 right-0 mx-auto flex-1">
                          <div className="flex flex-col gap-10">
                            <div className="ml-5 mr-3 flex items-center">
                              <div className="flex w-[34%] justify-center rounded-[14px] bg-yellow-800">
                                <Heading
                                  size="textmd"
                                  as="p"
                                  className="!font-dmsans text-[14px] font-medium capitalize !text-secondary-primary_white"
                                >
                                  חבילת מכרז
                                </Heading>
                              </div>
                              <div className="flex flex-1 items-center justify-end">
                                <Button size="xl" shape="square" className="w-[36px]">
                                  <Img src="images/defaultNoData.png" />
                                </Button>
                                <Button size="xl" shape="circle" className="ml-1.5 w-[40px] rounded-[18px]">
                                  <Img src="images/img_group_903.svg" />
                                </Button>
                                <Button size="xl" shape="circle" className="ml-1.5 w-[40px] rounded-[18px]">
                                  <Img src="images/img_group_903.svg" />
                                </Button>
                              </div>
                            </div>
                            <div className="mx-1.5 h-[40px]" />
                            <div className="bg-black-900">
                              <div className="flex items-center">
                                <div className="flex w-[72%] items-start">
                                  <div className="flex flex-1 items-center justify-between gap-5 self-center">
                                    <Button
                                      size="4xl"
                                      shape="square"
                                      className="min-w-[164px] px-[34px] font-heebo font-bold sm:px-5"
                                    >
                                      300,000
                                    </Button>
                                    <Heading
                                      size="headingxs"
                                      as="p"
                                      className="self-end !font-heebo text-[9px] font-bold !text-secondary-primary_white"
                                    >
                                      ₪
                                    </Heading>
                                  </div>
                                  <Heading
                                    size="headinglg"
                                    as="p"
                                    className="!font-heebo text-[12px] font-bold !text-secondary-primary_white"
                                  >
                                    מחיר הרכב:
                                  </Heading>
                                </div>
                                <Heading
                                  as="h6"
                                  className="relative ml-[-54px] self-end !font-heebo text-[17px] font-bold !text-secondary-primary_white"
                                >
                                  100,000
                                </Heading>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 justify-between gap-5 px-1.5">
                <div className="flex w-[18%] justify-center rounded-[20px] bg-white-a700_33 p-3">
                  <Img src="images/img_icon_secondary__primary_white.svg" alt="Iconelevenone" className="h-[12px]" />
                </div>
                <div className="flex w-[18%] justify-center rounded-[20px] bg-white-a700_33 p-3">
                  <Img src="images/img_arrow_right.svg" alt="Arrowrightnine" className="h-[12px]" />
                </div>
              </div>
            </div>
            <div className="relative z-[27] rounded-bl-[16px] rounded-br-[16px] border-b border-l border-r border-solid border-gray-200 py-1">
              <div className="mx-[30px] mt-1.5 flex justify-center px-14 md:px-5">
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
              <div className="mx-[30px] mt-3.5 flex items-center justify-between gap-5">
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
              <div className="relative mx-2.5 mt-4 h-[56px]">
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[56px] flex-1 border-t border-solid border-gray-200" />
                <div className="absolute bottom-[11.14px] left-0 right-0 mx-auto flex flex-1 justify-end">
                  <div className="flex w-[38%] items-center justify-center gap-4 rounded-[14px] bg-secondary-primary_white">
                    <Heading
                      size="textmd"
                      as="p"
                      className="self-end !font-dmsans text-[14px] font-medium capitalize !text-black-900"
                    >
                      שיקום
                    </Heading>
                    <Img src="images/img_vector_red_a700_03_22x34.svg" alt="שיקום Twelve" className="h-[22px]" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 top-0 mx-[22px] my-auto h-max flex-1">
                  <div className="flex items-center gap-1.5">
                    <Img src="images/img_settings_black_900.svg" alt="לצפיה בחבילת" className="h-[14px]" />
                    <Heading size="h4_assistant_16px_b" as="h6" className="text-[16px] font-semibold">
                      לצפיה בחבילת מכרז
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full rounded-[16px] bg-secondary-primary_white">
          <div>
            <div className="relative h-[218px]">
              <Img
                src="images/img_car9_660x440_jpg_218x328.png"
                alt="חבילת מכרז"
                className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[218px] w-full flex-1 object-cover"
              />
              <div className="absolute bottom-[-1.01px] left-0 right-0 mx-auto flex-1">
                <div>
                  <div className="ml-5 mr-3 flex items-center justify-center">
                    <div className="flex rounded-[14px] bg-yellow-800">
                      <Heading
                        size="textmd"
                        as="p"
                        className="!font-dmsans text-[14px] font-medium capitalize !text-secondary-primary_white"
                      >
                        חבילת מכרז
                      </Heading>
                    </div>
                    <div className="flex flex-1 justify-end">
                      <Img
                        src="images/img_close_secondary__primary_white_36x36.svg"
                        alt="חבילת מכרז"
                        className="h-[36px]"
                      />
                      <div className="relative h-[36px] w-[24%] content-center">
                        <div className="flex flex-1 items-start justify-center">
                          <Img src="images/img_group_903.svg" alt="חבילת מכרז" className="relative z-[28] h-[16px]" />
                          <Img
                            src="images/img_mobile_secondary__primary_white.svg"
                            alt="חבילת מכרז"
                            className="relative ml-[-12px] h-[36px] w-[58%] self-center rounded-[50%]"
                          />
                        </div>
                        <Img
                          src="images/img_television_yellow_800_18x18.svg"
                          alt="Image"
                          className="absolute bottom-0 right-[6.04px] top-0 z-[29] my-auto h-[18px]"
                        />
                        <Heading
                          size="textmd"
                          as="p"
                          className="absolute left-[2.96px] top-0 z-30 m-auto !font-heebo text-[14px] font-medium !text-secondary-primary_white"
                        >
                          3
                        </Heading>
                      </div>
                      <div className="relative h-[36px] w-[24%]">
                        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 items-start justify-center">
                          <Img src="images/img_group_903.svg" alt="חבילת מכרז" className="relative z-[31] h-[16px]" />
                          <Img
                            src="images/img_mobile_secondary__primary_white.svg"
                            alt="חבילת מכרז"
                            className="relative ml-[-12px] h-[36px] w-[60%] self-center rounded-[50%]"
                          />
                        </div>
                        <Heading
                          size="textmd"
                          as="p"
                          className="absolute left-px top-0 z-[32] m-auto !font-heebo text-[14px] font-medium !text-secondary-primary_white"
                        >
                          3
                        </Heading>
                        <Img
                          src="images/img_car_yellow_800_1.svg"
                          alt="Image"
                          className="absolute bottom-[9px] right-2 z-[33] m-auto h-[14px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mx-1.5 mt-[34px] flex justify-between gap-5">
                    <div className="flex w-[18%] justify-center rounded-[20px] bg-white-a700_33 p-3">
                      <Img src="images/img_icon_secondary__primary_white.svg" alt="Iconthirteen" className="h-[12px]" />
                    </div>
                    <div className="flex w-[18%] justify-center rounded-[20px] bg-white-a700_33 p-3">
                      <Img src="images/img_arrow_right.svg" alt="Arrowrightfive" className="h-[12px]" />
                    </div>
                  </div>
                  <div className="mt-[50px] flex h-[36px] items-center bg-[url(/public/images/img_group_10118.svg)] bg-cover bg-no-repeat">
                    <div className="w-full bg-deep_orange-500">
                      <div className="flex flex-col items-center bg-yellow-800">
                        <Heading
                          size="headinglg"
                          as="p"
                          className="!font-heebo text-[12px] font-bold !text-secondary-primary_white"
                        >
                          מחיר לחבילה:
                        </Heading>
                        <div className="flex flex-wrap items-center">
                          <Heading
                            size="headingxs"
                            as="p"
                            className="self-end !font-heebo text-[9px] font-bold !text-secondary-primary_white"
                          >
                            ₪
                          </Heading>
                          <Heading
                            as="h6"
                            className="relative ml-[-2px] !font-heebo text-[17px] font-bold !text-secondary-primary_white"
                          >
                            300,000
                          </Heading>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full flex-col items-center">
                      <Heading
                        size="headinglg"
                        as="p"
                        className="!font-heebo text-[12px] font-bold !text-secondary-primary_white"
                      >
                        מחיר הרכב:
                      </Heading>
                      <div className="flex flex-wrap items-center">
                        <Heading
                          size="headingxs"
                          as="p"
                          className="self-end !font-heebo text-[9px] font-bold !text-secondary-primary_white"
                        >
                          ₪
                        </Heading>
                        <Heading
                          as="h6"
                          className="relative ml-[-4px] !font-heebo text-[17px] font-bold !text-secondary-primary_white"
                        >
                          100,000
                        </Heading>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-bl-[16px] rounded-br-[16px] border-b border-l border-r border-solid border-gray-200 py-1">
            <div className="mx-[30px] mt-2.5 flex justify-center">
              <Heading size="heading5xl" as="h6" className="!font-heebo text-[18px] font-bold !text-black-900">
                X8 – 5.0 במוו
              </Heading>
            </div>
            <div className="flex justify-center px-14 md:px-5">
              <div className="flex w-[40%] items-center justify-center">
                <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                  2022
                </Heading>
                <div className="h-[6px] w-[6px] rounded-[3px] bg-red-a700_03" />
                <Heading size="textmd" as="p" className="ml-2.5 !font-heebo text-[14px] font-normal !text-black-900">
                  במוו
                </Heading>
              </div>
            </div>
            <div className="mx-[30px] mt-3.5 flex items-center justify-center gap-2">
              <div className="flex flex-1 flex-col items-start gap-2">
                <Img src="images/img_icon_black_900_01.svg" alt="2287 נפח מנוע" className="ml-7 h-[26px]" />
                <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                  2287 נפח מנוע
                </Heading>
              </div>
              <div className="flex flex-1 flex-col items-center gap-1.5 px-2">
                <Img src="images/img_artboard_2_copy_3.svg" alt="יד Eleven" className="h-[24px]" />
                <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                  יד 4
                </Heading>
              </div>
              <div className="flex flex-col items-end gap-3 self-end">
                <Img src="images/img_icon_black_900.svg" alt="אוטומטי Eleven" className="mr-3.5 h-[18px]" />
                <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                  אוטומטי
                </Heading>
              </div>
            </div>
            <div className="relative mx-2.5 mt-5 h-[56px]">
              <Img
                src="images/defaultNoData.png"
                alt="שיקוםteen"
                className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[56px] flex-1 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 items-center justify-center">
                <Img
                  src="images/img_settings_black_900.svg"
                  alt="לצפיה בחבילת"
                  className="mt-1.5 h-[14px] self-start"
                />
                <Heading size="h4_assistant_16px_b" as="h6" className="ml-1.5 text-[16px] font-semibold">
                  לצפיה בחבילת מכרז
                </Heading>
                <div className="ml-3.5 flex w-[40%] items-center justify-center gap-4 rounded-[14px] bg-secondary-primary_white">
                  <Heading
                    size="textmd"
                    as="p"
                    className="!font-dmsans text-[14px] font-medium capitalize !text-black-900"
                  >
                    שיקום
                  </Heading>
                  <Img src="images/img_vector_red_a700_03_22x34.svg" alt="שיקוםteen" className="h-[22px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full rounded-[16px] bg-secondary-primary_white">
          <div>
            <div className="relative h-[218px]">
              <Img
                src="images/img_car20_660x440_jpg_218x328.png"
                alt="חבילת מכרז"
                className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[218px] w-full flex-1 object-cover"
              />
              <div className="absolute bottom-[-1px] left-0 right-0 mx-auto flex-1">
                <div>
                  <div className="ml-5 mr-3 flex items-center justify-center">
                    <Heading
                      size="textmd"
                      as="p"
                      className="flex items-center justify-center rounded-[14px] bg-yellow-800 px-3.5 py-0.5 !font-dmsans text-[14px] font-medium capitalize !text-secondary-primary_white"
                    >
                      חבילת מכרז
                    </Heading>
                    <div className="flex flex-1 justify-end">
                      <Img
                        src="images/img_close_secondary__primary_white_36x36.svg"
                        alt="חבילת מכרז"
                        className="h-[36px]"
                      />
                      <div className="relative h-[36px] w-[24%] content-center">
                        <div className="flex flex-1 items-start justify-center">
                          <Img src="images/img_group_903.svg" alt="חבילת מכרז" className="relative z-[34] h-[16px]" />
                          <Img
                            src="images/img_mobile_secondary__primary_white.svg"
                            alt="חבילת מכרז"
                            className="relative ml-[-12px] h-[36px] w-[58%] self-center rounded-[50%]"
                          />
                        </div>
                        <Img
                          src="images/img_television_yellow_800_18x18.svg"
                          alt="Image"
                          className="absolute bottom-0 right-[6.04px] top-0 z-[35] my-auto h-[18px]"
                        />
                        <Heading
                          size="textmd"
                          as="p"
                          className="absolute left-[2.96px] top-0 z-[36] m-auto !font-heebo text-[14px] font-medium !text-secondary-primary_white"
                        >
                          3
                        </Heading>
                      </div>
                      <div className="relative h-[36px] w-[24%]">
                        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 items-start justify-center">
                          <Img src="images/img_group_903.svg" alt="חבילת מכרז" className="relative z-[37] h-[16px]" />
                          <Img
                            src="images/img_mobile_secondary__primary_white.svg"
                            alt="חבילת מכרז"
                            className="relative ml-[-12px] h-[36px] w-[60%] self-center rounded-[50%]"
                          />
                        </div>
                        <Heading
                          size="textmd"
                          as="p"
                          className="absolute left-px top-0 z-[38] m-auto !font-heebo text-[14px] font-medium !text-secondary-primary_white"
                        >
                          3
                        </Heading>
                        <Img
                          src="images/img_car_yellow_800_1.svg"
                          alt="Image"
                          className="absolute bottom-[9px] right-2 z-[39] m-auto h-[14px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mx-1.5 mt-[34px] flex justify-between gap-5">
                    <div className="flex w-[18%] justify-center rounded-[20px] bg-white-a700_33 p-3">
                      <Img
                        src="images/img_icon_secondary__primary_white.svg"
                        alt="Iconfifteenone"
                        className="h-[12px]"
                      />
                    </div>
                    <div className="flex w-[18%] justify-center rounded-[20px] bg-white-a700_33 p-3">
                      <Img src="images/img_arrow_right.svg" alt="Arrowright" className="h-[12px]" />
                    </div>
                  </div>
                  <div className="mt-[50px] flex h-[36px] items-center bg-[url(/public/images/img_group_10118.svg)] bg-cover bg-no-repeat">
                    <div className="h-[36px] w-full bg-[url(/public/images/img_group_961.svg)] bg-cover bg-no-repeat">
                      <div className="flex flex-col items-center bg-yellow-800">
                        <Heading
                          size="headinglg"
                          as="p"
                          className="!font-heebo text-[12px] font-bold !text-secondary-primary_white"
                        >
                          מחיר לחבילה:
                        </Heading>
                        <div className="flex flex-wrap items-center">
                          <Heading
                            size="headingxs"
                            as="p"
                            className="self-end !font-heebo text-[9px] font-bold !text-secondary-primary_white"
                          >
                            ₪
                          </Heading>
                          <Heading
                            as="h6"
                            className="relative ml-[-2px] !font-heebo text-[17px] font-bold !text-secondary-primary_white"
                          >
                            300,000
                          </Heading>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full flex-col items-center">
                      <Heading
                        size="headinglg"
                        as="p"
                        className="!font-heebo text-[12px] font-bold !text-secondary-primary_white"
                      >
                        מחיר הרכב:
                      </Heading>
                      <div className="flex flex-wrap items-center">
                        <Heading
                          size="headingxs"
                          as="p"
                          className="self-end !font-heebo text-[9px] font-bold !text-secondary-primary_white"
                        >
                          ₪
                        </Heading>
                        <Heading
                          as="h6"
                          className="relative ml-[-4px] !font-heebo text-[17px] font-bold !text-secondary-primary_white"
                        >
                          100,000
                        </Heading>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-bl-[16px] rounded-br-[16px] border-b border-l border-r border-solid border-gray-200 py-1">
            <div className="mx-[30px] mt-2.5 flex justify-center">
              <Heading size="heading5xl" as="h6" className="!font-heebo text-[18px] font-bold !text-black-900">
                X8 – 5.0 במוו
              </Heading>
            </div>
            <div className="flex justify-center px-14 md:px-5">
              <div className="flex flex-wrap items-center">
                <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                  2022
                </Heading>
                <Img src="images/img_play_red_a700_03.svg" alt="Circleimage" className="h-[6px] w-[8%] rounded-[50%]" />
                <Heading size="textmd" as="p" className="ml-2.5 !font-heebo text-[14px] font-normal !text-black-900">
                  במוו
                </Heading>
              </div>
            </div>
            <div className="mx-[30px] mt-3.5 flex items-center justify-center gap-2">
              <div className="flex flex-1 flex-col items-start gap-2">
                <Img src="images/img_icon_black_900_01.svg" alt="2287 נפח מנוע" className="ml-7 h-[26px]" />
                <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                  2287 נפח מנוע
                </Heading>
              </div>
              <div className="flex flex-1 flex-col items-center gap-1.5 px-2">
                <Img src="images/img_artboard_2_copy_3.svg" alt="יד" className="h-[24px]" />
                <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                  יד 4
                </Heading>
              </div>
              <div className="flex flex-col items-end gap-3 self-end">
                <Img src="images/img_icon_black_900.svg" alt="אוטומטי" className="mr-3.5 h-[18px]" />
                <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                  אוטומטי
                </Heading>
              </div>
            </div>
            <div className="relative mx-2.5 mt-5 h-[56px]">
              <Img
                src="images/defaultNoData.png"
                alt="שיקוםeen"
                className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[56px] flex-1 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 items-center justify-center">
                <Img
                  src="images/img_settings_black_900.svg"
                  alt="לצפיה בחבילת"
                  className="mt-1.5 h-[14px] self-start"
                />
                <Heading size="h4_assistant_16px_b" as="h6" className="ml-1.5 text-[16px] font-semibold">
                  לצפיה בחבילת מכרז
                </Heading>
                <div className="ml-3.5 flex w-[40%] items-center justify-center gap-4 rounded-[14px] bg-secondary-primary_white">
                  <Heading
                    size="textmd"
                    as="p"
                    className="!font-dmsans text-[14px] font-medium capitalize !text-black-900"
                  >
                    שיקום
                  </Heading>
                  <Img src="images/img_vector_red_a700_03_22x34.svg" alt="שיקום Twenty" className="h-[22px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
