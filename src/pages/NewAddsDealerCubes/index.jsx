import { Helmet } from "react-helmet";
import { Img, Heading, Button, Slider, Text } from "../../components";
import AllAddsDealerCubesRow from "../../components/AllAddsDealerCubesRow";
import AllAddsProviderCubesColumnclose from "../../components/AllAddsProviderCubesColumnclose";
import Header from "../../components/Header";
import NewAddsDealerCubesColumncar10660x from "../../components/NewAddsDealerCubesColumncar10660x";
import React, { Suspense } from "react";

const data = [
  { twenty: "20", prop: "מודעות חדשות" },
  { twenty: "20", prop: "מודעות" },
  { twenty: "20", prop: "מודעות בהמתנה לאישור" },
  { twenty: "20", prop: "מודעות מאושרות" },
  { twenty: "20", prop: "מודעות למכרז" },
  { twenty: "20", prop: "חבילת מודעות במכרז" },
  { twenty: "20", prop: "מודעות בארכיון" },
];

export default function NewAddsDealerCubesPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  const [sliderState1, setSliderState1] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [sliderState2, setSliderState2] = React.useState(0);
  const sliderRef2 = React.useRef(null);
  const [sliderState3, setSliderState3] = React.useState(0);
  const sliderRef3 = React.useRef(null);
  const [sliderState4, setSliderState4] = React.useState(0);
  const sliderRef4 = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>Rivky miler&#39;s Application15</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-100">
        <div className="relative h-[1158px]">
          <div className="absolute left-0 right-0 top-0 mx-auto h-[1080px] w-[90%] bg-gray-100 shadow-xs" />
          <div className="absolute bottom-0 left-[6%] top-0 my-auto flex h-max w-full overflow-x-scroll">
            <div className="container-12xl flex items-start gap-10 lg:px-5 md:flex-col md:px-5">
              <div className="flex w-[18%] flex-col items-end md:w-full">
                <div className="flex w-[60%] flex-col gap-[26px] rounded-[20px] bg-secondary-primary_white px-3 py-5 shadow-xs lg:w-full md:w-full">
                  <div>
                    <div>
                      <div className="relative z-[1] ml-[22px] mr-4 flex justify-center md:mx-0">
                        <Text as="p" className="mt-1.5 !font-heebo text-[18px] font-medium lg:text-[15px]">
                          המודעות שלי
                        </Text>
                      </div>
                      <div className="relative mt-[-20px] h-[24px] border-b border-solid border-gray-200" />
                    </div>
                  </div>
                  <div className="mx-8 mb-[338px] flex flex-col gap-3 md:mx-0">
                    <Suspense fallback={<div>Loading feed...</div>}>
                      {data.map((d, index) => (
                        <AllAddsDealerCubesRow {...d} key={"Data1" + index} />
                      ))}
                    </Suspense>
                  </div>
                </div>
              </div>
              <div className="relative h-[1158px] w-[96%] content-center self-center lg:h-auto md:h-auto md:w-full">
                <div className="relative h-[1158px] w-full">
                  <div className="absolute left-0 right-0 top-0 mx-auto flex flex-1 flex-col items-start">
                    <div className="relative z-[3] flex flex-col gap-[26px] self-stretch">
                      <Header />
                      <AllAddsProviderCubesColumnclose className="mx-8 md:mx-0" />
                    </div>
                    <div className="relative mt-[-240px] h-[1024px] w-[82%] rounded-[20px] bg-secondary-primary_white shadow-xs" />
                  </div>
                  <div className="absolute bottom-px left-0 right-0 mx-auto flex w-full flex-col gap-7">
                    <div className="ml-[34px] flex md:ml-0 md:flex-col">
                      <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                        <div className="w-full rounded-[16px] bg-secondary-primary_white">
                          <div className="mx-auto flex w-full">
                            <Slider
                              autoPlay
                              autoPlayInterval={2000}
                              responsive={{
                                0: { items: 1 },
                                551: { items: 1 },
                                1051: { items: 1 },
                                1441: { items: 1 },
                              }}
                              disableDotsControls
                              activeIndex={sliderState4}
                              onSlideChanged={(e) => {
                                setSliderState4(e?.item);
                              }}
                              ref={sliderRef4}
                              items={[...Array(3)].map(() => (
                                <React.Fragment key={Math.random()}>
                                  <div className="relative h-[218px] content-center lg:h-auto md:h-auto">
                                    <Img
                                      src="images/img_car20_660x440_jpg.png"
                                      alt="Car20660x440"
                                      className="h-[218px] w-full flex-1 object-cover"
                                    />
                                    <div className="absolute bottom-[1.57px] left-0 right-0 mx-auto flex-1">
                                      <div>
                                        <div className="ml-5 mr-3.5 flex items-center justify-center md:mx-0">
                                          <Button
                                            shape="round"
                                            className="min-w-[104px] rounded-[14px] px-[34px] font-dmsans font-medium capitalize sm:px-4"
                                          >
                                            מכרז
                                          </Button>
                                          <div className="flex flex-1 justify-end gap-3">
                                            <Button size="xl" shape="square" className="w-[36px]">
                                              <Img src="images/defaultNoData.png" />
                                            </Button>
                                            <Button size="xl" shape="circle" className="w-[36px] rounded-[18px] px-2">
                                              <Img src="images/img_vector_deep_orange_500.svg" />
                                            </Button>
                                          </div>
                                        </div>
                                        <div className="mx-1.5 mt-[34px] flex justify-between gap-5 md:mx-0">
                                          <div className="flex w-[18%] justify-center rounded-[20px] bg-white-a700_33 p-3">
                                            <Img
                                              src="images/img_icon_secondary__primary_white.svg"
                                              alt="Icononeone"
                                              className="h-[12px]"
                                            />
                                          </div>
                                          <div className="flex w-[18%] justify-center rounded-[20px] bg-white-a700_33 p-3">
                                            <Img
                                              src="images/img_arrow_right.svg"
                                              alt="Arrowrightone"
                                              className="h-[12px]"
                                            />
                                          </div>
                                        </div>
                                        <div className="mt-[58px] flex justify-center bg-deep_orange-500">
                                          <div className="flex w-[74%] items-center justify-center gap-3 self-end lg:w-full lg:px-5 md:w-full md:px-5">
                                            <div className="flex w-[34%] justify-center">
                                              <div className="flex w-full flex-wrap items-start justify-center gap-0.5">
                                                <Heading
                                                  size="headings"
                                                  as="h1"
                                                  className="flex h-[18px] w-[18px] items-center justify-center rounded-lg bg-secondary-primary_white text-center !font-heebo text-[11px] font-bold !text-deep_orange-500"
                                                >
                                                  1
                                                </Heading>
                                                <Heading
                                                  size="headinglg"
                                                  as="h2"
                                                  className="self-center !font-heebo text-[14px] font-bold !text-secondary-primary_white"
                                                >
                                                  במיקום:
                                                </Heading>
                                              </div>
                                            </div>
                                            <div className="flex flex-1 items-center justify-center gap-1">
                                              <div className="flex w-full flex-wrap items-center justify-center">
                                                <Heading
                                                  size="headingxs"
                                                  as="h3"
                                                  className="!font-heebo text-[9px] font-bold !text-secondary-primary_white"
                                                >
                                                  ₪
                                                </Heading>
                                                <Heading
                                                  size="heading3xl"
                                                  as="h4"
                                                  className="!font-heebo text-[17px] font-bold !text-secondary-primary_white lg:text-[14px]"
                                                >
                                                  40,000
                                                </Heading>
                                              </div>
                                              <Heading
                                                size="headinglg"
                                                as="h5"
                                                className="!font-heebo text-[14px] font-bold !text-secondary-primary_white"
                                              >
                                                ההצעה שלי:
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
                          <div className="rounded-bl-[16px] rounded-br-[16px] border-b border-l border-r border-solid border-gray-200 py-1">
                            <div className="mx-[30px] mt-1.5 flex pl-[78px] pr-14 lg:pl-8 md:mx-0 md:px-5 sm:px-4">
                              <Heading
                                as="h6"
                                className="!font-heebo text-[18px] font-bold !text-black-900 lg:text-[15px]"
                              >
                                X8 – 5.0 במוו
                              </Heading>
                            </div>
                            <div className="flex justify-center px-14 md:px-5 sm:px-4">
                              <div className="mb-1.5 flex w-[40%] items-center justify-center lg:w-full md:w-full">
                                <Heading
                                  size="textmd"
                                  as="p"
                                  className="!font-heebo text-[14px] font-normal !text-black-900"
                                >
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
                            <div className="ml-[30px] mr-[26px] mt-3 flex flex-col gap-4 md:mx-0">
                              <div className="flex items-center justify-between gap-5">
                                <div className="flex flex-1 items-center justify-between gap-5">
                                  <div className="flex flex-col items-start gap-0.5">
                                    <Img
                                      src="images/img_icon_black_900_01.svg"
                                      alt="Icononeone"
                                      className="ml-[26px] h-[26px] md:ml-0"
                                    />
                                    <Heading
                                      size="textmd"
                                      as="p"
                                      className="!font-heebo text-[14px] font-normal !text-black-900"
                                    >
                                      2287 נפח מנוע
                                    </Heading>
                                  </div>
                                  <div className="flex w-[28%] flex-col items-start gap-0.5">
                                    <Img
                                      src="images/img_artboard_2_copy_3.svg"
                                      alt="Artboard2copy"
                                      className="h-[24px]"
                                    />
                                    <Heading
                                      size="textmd"
                                      as="p"
                                      className="!font-heebo text-[14px] font-normal !text-black-900"
                                    >
                                      יד 4
                                    </Heading>
                                  </div>
                                </div>
                                <div className="flex flex-col items-end gap-2 self-end">
                                  <Img
                                    src="images/img_icon_black_900.svg"
                                    alt="Iconthreeone"
                                    className="mr-3 h-[18px] md:mr-0"
                                  />
                                  <Heading
                                    size="textmd"
                                    as="p"
                                    className="!font-heebo text-[14px] font-normal !text-black-900"
                                  >
                                    אוטומטי
                                  </Heading>
                                </div>
                              </div>
                              <div className="relative h-[56px]">
                                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1 border-t border-solid border-gray-200 py-2.5">
                                  <div className="mt-1.5 flex items-center">
                                    <Img
                                      src="images/img_settings_black_900.svg"
                                      alt="Settingsoneone"
                                      className="h-[14px]"
                                    />
                                    <Heading
                                      size="h4_assistant_16px_b"
                                      as="h6"
                                      className="text-[16px] font-semibold !text-deep_orange-500 lg:text-[13px]"
                                    >
                                      לצפיה במכרז
                                    </Heading>
                                  </div>
                                </div>
                                <div className="absolute bottom-0 right-px top-0 my-auto flex h-max w-[42%] items-center justify-center gap-[18px] rounded-[14px] bg-secondary-primary_white">
                                  <Heading
                                    size="textmd"
                                    as="p"
                                    className="self-end !font-dmsans text-[14px] font-medium capitalize !text-black-900"
                                  >
                                    פירוק
                                  </Heading>
                                  <Img
                                    src="images/img_television_red_a700_03_1.svg"
                                    alt="Televisionone"
                                    className="h-[22px]"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <NewAddsDealerCubesColumncar10660x
                        p2287="2287 נפח מנוע"
                        four="יד 4"
                        prop1="אוטומטי"
                        settingsoneone="images/img_settings_black_900.svg"
                        prop2="הגש הצעה"
                        prop3="שיקום"
                        vectoroneone="images/img_vector_red_a700_03_22x34.svg"
                        className="ml-7 w-full md:ml-0"
                      />
                      <div className="ml-7 flex w-full justify-center gap-[18px] rounded-[16px] bg-secondary-primary_white md:ml-0 md:flex-col">
                        <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                          <div className="w-full rounded-[16px] bg-secondary-primary_white md:px-5">
                            <div className="relative h-[220px] content-center lg:h-auto md:h-auto">
                              <div className="mx-auto flex w-full">
                                <Slider
                                  autoPlay
                                  autoPlayInterval={2000}
                                  responsive={{
                                    0: { items: 1 },
                                    551: { items: 1 },
                                    1051: { items: 1 },
                                    1441: { items: 1 },
                                  }}
                                  disableDotsControls
                                  activeIndex={sliderState3}
                                  onSlideChanged={(e) => {
                                    setSliderState3(e?.item);
                                  }}
                                  ref={sliderRef3}
                                  items={[...Array(3)].map(() => (
                                    <React.Fragment key={Math.random()}>
                                      <div className="relative h-[220px]">
                                        <Img
                                          src="images/img_car10_660x440_jpg.png"
                                          alt="Car10660x440"
                                          className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[218px] w-full flex-1 object-cover"
                                        />
                                        <div className="absolute bottom-[1.12px] left-0 right-0 mx-auto flex-1">
                                          <div className="flex flex-col gap-[122px] lg:gap-[91px] md:gap-[91px] sm:gap-[61px]">
                                            <div className="ml-5 mr-3 flex items-center justify-center md:mx-0">
                                              <Button
                                                shape="round"
                                                className="min-w-[104px] rounded-[14px] px-4 font-dmsans font-medium capitalize"
                                              >
                                                חבילת מכרז
                                              </Button>
                                              <div className="flex flex-1 items-center justify-end">
                                                <Button size="xl" shape="square" className="w-[36px]">
                                                  <Img src="images/defaultNoData.png" />
                                                </Button>
                                                <div className="ml-1.5 flex w-[22%] items-start justify-center rounded-[18px] bg-secondary-primary_white">
                                                  <div className="mb-4 flex h-[20px] w-[16px] flex-col items-center justify-center bg-[url(/public/images/img_group_903.svg)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
                                                    <Heading
                                                      size="textmd"
                                                      as="p"
                                                      className="!font-heebo text-[14px] font-medium !text-secondary-primary_white"
                                                    >
                                                      3
                                                    </Heading>
                                                  </div>
                                                  <Img
                                                    src="images/img_television_yellow_800_18x18.svg"
                                                    alt="Televisionone"
                                                    className="relative ml-[-2px] h-[18px] self-center"
                                                  />
                                                </div>
                                                <Button
                                                  size="xl"
                                                  shape="circle"
                                                  className="ml-1.5 w-[40px] rounded-[18px]"
                                                >
                                                  <Img src="images/img_group_903.svg" />
                                                </Button>
                                              </div>
                                            </div>
                                            <div className="bg-black-900">
                                              <div className="flex items-center">
                                                <div className="flex w-[72%] items-start">
                                                  <div className="flex flex-1 items-center justify-between gap-5 self-center">
                                                    <Button
                                                      size="4xl"
                                                      shape="square"
                                                      className="min-w-[164px] px-[34px] font-heebo font-bold sm:px-4"
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
                                                    size="headingmd"
                                                    as="p"
                                                    className="!font-heebo text-[12px] font-bold !text-secondary-primary_white"
                                                  >
                                                    מחיר הרכב:
                                                  </Heading>
                                                </div>
                                                <Heading
                                                  size="heading3xl"
                                                  as="h6"
                                                  className="relative ml-[-54px] self-end !font-heebo text-[17px] font-bold !text-secondary-primary_white lg:text-[14px]"
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
                                <Button
                                  size="3xl"
                                  shape="circle"
                                  onClick={() => {
                                    sliderRef3?.current?.slidePrev();
                                  }}
                                  className="w-[60px] rounded-[20px] px-3"
                                >
                                  <Img src="images/img_icon_secondary__primary_white.svg" />
                                </Button>
                                <Button
                                  size="3xl"
                                  shape="circle"
                                  onClick={() => {
                                    sliderRef3?.current?.slideNext();
                                  }}
                                  className="w-[60px] rounded-[20px] px-3"
                                >
                                  <Img src="images/img_arrow_right.svg" />
                                </Button>
                              </div>
                            </div>
                            <div className="relative z-[4] rounded-bl-[16px] rounded-br-[16px] border-b border-l border-r border-solid border-gray-200 py-1">
                              <div className="mx-[30px] mt-1.5 flex justify-center px-14 md:mx-0 md:px-5 sm:px-4">
                                <Heading
                                  as="h6"
                                  className="!font-heebo text-[18px] font-bold !text-black-900 lg:text-[15px]"
                                >
                                  X8 – 5.0 במוו
                                </Heading>
                              </div>
                              <div className="flex justify-center px-14 md:px-5 sm:px-4">
                                <div className="mb-1.5 flex w-[40%] items-center justify-center lg:w-full md:w-full">
                                  <Heading
                                    size="textmd"
                                    as="p"
                                    className="!font-heebo text-[14px] font-normal !text-black-900"
                                  >
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
                              <div className="mx-[30px] mt-3.5 flex items-center justify-between gap-5 md:mx-0">
                                <div className="flex flex-1 items-center justify-between gap-5">
                                  <div className="flex flex-col items-start gap-0.5">
                                    <Img
                                      src="images/img_icon_black_900_01.svg"
                                      alt="Iconthirteen"
                                      className="ml-[26px] h-[26px] md:ml-0"
                                    />
                                    <Heading
                                      size="textmd"
                                      as="p"
                                      className="!font-heebo text-[14px] font-normal !text-black-900"
                                    >
                                      2287 נפח מנוע
                                    </Heading>
                                  </div>
                                  <div className="flex w-[28%] flex-col items-start gap-0.5">
                                    <Img
                                      src="images/img_artboard_2_copy_3.svg"
                                      alt="Artboard2copy"
                                      className="h-[24px]"
                                    />
                                    <Heading
                                      size="textmd"
                                      as="p"
                                      className="!font-heebo text-[14px] font-normal !text-black-900"
                                    >
                                      יד 4
                                    </Heading>
                                  </div>
                                </div>
                                <div className="flex flex-col items-end gap-2 self-end">
                                  <Img
                                    src="images/img_icon_black_900.svg"
                                    alt="Iconfifteenone"
                                    className="mr-3 h-[18px] md:mr-0"
                                  />
                                  <Heading
                                    size="textmd"
                                    as="p"
                                    className="!font-heebo text-[14px] font-normal !text-black-900"
                                  >
                                    אוטומטי
                                  </Heading>
                                </div>
                              </div>
                              <div className="relative mx-2.5 mt-4 h-[56px] md:mx-0">
                                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[56px] flex-1 border-t border-solid border-gray-200" />
                                <div className="absolute bottom-[11.14px] left-0 right-0 mx-auto flex flex-1 justify-end">
                                  <div className="flex w-[38%] items-center justify-center gap-4 rounded-[14px] bg-secondary-primary_white lg:w-full md:w-full">
                                    <Heading
                                      size="textmd"
                                      as="p"
                                      className="self-end !font-dmsans text-[14px] font-medium capitalize !text-black-900"
                                    >
                                      שיקום
                                    </Heading>
                                    <Img
                                      src="images/img_vector_red_a700_03_22x34.svg"
                                      alt="Vectorfiveone"
                                      className="h-[22px]"
                                    />
                                  </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 top-0 mx-[22px] my-auto flex h-max flex-1 items-center gap-1.5 lg:mx-0 md:mx-0">
                                  <Img
                                    src="images/img_settings_black_900.svg"
                                    alt="Settingsfive"
                                    className="h-[14px]"
                                  />
                                  <Heading
                                    size="h4_assistant_16px_b"
                                    as="h6"
                                    className="text-[16px] font-semibold lg:text-[13px]"
                                  >
                                    לצפיה בחבילת מכרז
                                  </Heading>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                        <div className="w-full rounded-[16px] bg-secondary-primary_white md:px-5">
                          <div>
                            <div className="relative h-[218px]">
                              <Img
                                src="images/img_car9_660x440_jpg_218x328.png"
                                alt="Car9660x440one"
                                className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[218px] w-full flex-1 object-cover"
                              />
                              <div className="absolute bottom-[-1.01px] left-0 right-0 mx-auto flex-1">
                                <div>
                                  <div className="ml-5 mr-3 flex items-center justify-center md:mx-0">
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
                                      <div className="relative h-[36px] w-[24%] content-center lg:h-auto md:h-auto">
                                        <div className="flex flex-1 items-start justify-center">
                                          <Img
                                            src="images/img_group_903.svg"
                                            alt="Closethreeone"
                                            className="relative z-[5] h-[16px]"
                                          />
                                          <div className="relative ml-[-12px] h-[36px] w-[36px] self-center rounded-[18px] bg-secondary-primary_white" />
                                        </div>
                                        <Img
                                          src="images/img_television_yellow_800_18x18.svg"
                                          alt="Televisionone"
                                          className="absolute bottom-0 right-[6.04px] top-0 z-[6] my-auto h-[18px]"
                                        />
                                        <Heading
                                          size="textmd"
                                          as="p"
                                          className="absolute left-[2.96px] top-0 z-[7] m-auto !font-heebo text-[14px] font-medium !text-secondary-primary_white"
                                        >
                                          3
                                        </Heading>
                                      </div>
                                      <div className="relative h-[36px] w-[24%]">
                                        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 items-start justify-center">
                                          <Img
                                            src="images/img_group_903.svg"
                                            alt="Closefiveone"
                                            className="relative z-[8] h-[16px]"
                                          />
                                          <div className="relative ml-[-12px] h-[36px] w-[36px] self-center rounded-[18px] bg-secondary-primary_white" />
                                        </div>
                                        <Heading
                                          size="textmd"
                                          as="p"
                                          className="absolute left-px top-0 z-[9] m-auto !font-heebo text-[14px] font-medium !text-secondary-primary_white"
                                        >
                                          3
                                        </Heading>
                                        <Img
                                          src="images/img_car_yellow_800_1.svg"
                                          alt="Carthreeone"
                                          className="absolute bottom-[9px] right-2 z-10 m-auto h-[14px]"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mx-1.5 mt-[34px] flex justify-between gap-5 md:mx-0">
                                    <Button
                                      size="3xl"
                                      shape="circle"
                                      onClick={() => {
                                        sliderRef4?.current?.slidePrev();
                                      }}
                                      className="w-[60px] rounded-[20px] px-3"
                                    >
                                      <Img src="images/img_icon_secondary__primary_white.svg" />
                                    </Button>
                                    <Button
                                      size="3xl"
                                      shape="circle"
                                      onClick={() => {
                                        sliderRef4?.current?.slideNext();
                                      }}
                                      className="w-[60px] rounded-[20px] px-3"
                                    >
                                      <Img src="images/img_arrow_right.svg" />
                                    </Button>
                                  </div>
                                  <div className="mt-[50px] flex bg-black-900">
                                    <div className="w-full bg-deep_orange-500">
                                      <div className="flex flex-col items-center bg-yellow-800">
                                        <Heading
                                          size="headingmd"
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
                                            size="heading3xl"
                                            as="h6"
                                            className="relative ml-[-2px] !font-heebo text-[17px] font-bold !text-secondary-primary_white lg:text-[14px]"
                                          >
                                            300,000
                                          </Heading>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex w-full flex-col items-center">
                                      <Heading
                                        size="headingmd"
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
                                          size="heading3xl"
                                          as="h6"
                                          className="relative ml-[-4px] !font-heebo text-[17px] font-bold !text-secondary-primary_white lg:text-[14px]"
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
                            <div className="mx-[30px] mt-2.5 flex justify-center md:mx-0">
                              <Heading
                                as="h6"
                                className="!font-heebo text-[18px] font-bold !text-black-900 lg:text-[15px]"
                              >
                                X8 – 5.0 במוו
                              </Heading>
                            </div>
                            <div className="flex justify-center px-14 md:px-5 sm:px-4">
                              <div className="flex w-[40%] items-center justify-center lg:w-full md:w-full">
                                <Heading
                                  size="textmd"
                                  as="p"
                                  className="!font-heebo text-[14px] font-normal !text-black-900"
                                >
                                  2022
                                </Heading>
                                <div className="h-[6px] w-[6px] rounded-[3px] bg-red-a700_03" />
                                <Heading
                                  size="textmd"
                                  as="p"
                                  className="ml-2.5 !font-heebo text-[14px] font-normal !text-black-900"
                                >
                                  במוו
                                </Heading>
                              </div>
                            </div>
                            <div className="mx-[30px] mt-3.5 flex items-center justify-center gap-2 md:mx-0">
                              <div className="flex flex-1 flex-col items-start gap-2">
                                <Img
                                  src="images/img_icon_black_900_01.svg"
                                  alt="Icontwentyone"
                                  className="ml-7 h-[26px] md:ml-0"
                                />
                                <Heading
                                  size="textmd"
                                  as="p"
                                  className="!font-heebo text-[14px] font-normal !text-black-900"
                                >
                                  2287 נפח מנוע
                                </Heading>
                              </div>
                              <div className="flex flex-1 flex-col items-center gap-1.5 px-2">
                                <Img src="images/img_artboard_2_copy_3.svg" alt="Artboard2copy" className="h-[24px]" />
                                <Heading
                                  size="textmd"
                                  as="p"
                                  className="!font-heebo text-[14px] font-normal !text-black-900"
                                >
                                  יד 4
                                </Heading>
                              </div>
                              <div className="flex flex-col items-end gap-3 self-end">
                                <Img
                                  src="images/img_icon_black_900.svg"
                                  alt="Iconone"
                                  className="mr-3.5 h-[18px] md:mr-0"
                                />
                                <Heading
                                  size="textmd"
                                  as="p"
                                  className="!font-heebo text-[14px] font-normal !text-black-900"
                                >
                                  אוטומטי
                                </Heading>
                              </div>
                            </div>
                            <div className="relative mx-2.5 mt-5 h-[56px] md:mx-0">
                              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[56px] flex-1 border-t border-solid border-gray-200" />
                              <div className="absolute bottom-[11.14px] left-0 right-0 mx-auto flex flex-1 justify-end">
                                <div className="flex w-[38%] items-center justify-center gap-4 rounded-[14px] bg-secondary-primary_white lg:w-full md:w-full">
                                  <Heading
                                    size="textmd"
                                    as="p"
                                    className="!font-dmsans text-[14px] font-medium capitalize !text-black-900"
                                  >
                                    שיקום
                                  </Heading>
                                  <Img
                                    src="images/img_vector_red_a700_03_22x34.svg"
                                    alt="Vectorsevenone"
                                    className="h-[22px]"
                                  />
                                </div>
                              </div>
                              <div className="absolute bottom-0 left-0 right-0 top-0 mx-[22px] my-auto h-max flex-1 lg:mx-0 md:mx-0">
                                <div className="flex items-center gap-1.5">
                                  <Img
                                    src="images/img_settings_black_900.svg"
                                    alt="Settingsseven"
                                    className="h-[14px]"
                                  />
                                  <Heading
                                    size="h4_assistant_16px_b"
                                    as="h6"
                                    className="text-[16px] font-semibold lg:text-[13px]"
                                  >
                                    לצפיה בחבילת מכרז
                                  </Heading>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <NewAddsDealerCubesColumncar10660x
                        p2287="2287 נפח מנוע"
                        four="יד 4"
                        prop1="אוטומטי"
                        settingsoneone="images/img_settings_black_900.svg"
                        prop2="הגש הצעה"
                        prop3="שיקום"
                        vectoroneone="images/img_vector_red_a700_03_22x34.svg"
                        className="relative z-[17] ml-7 w-full md:ml-0"
                      />
                      <div className="ml-2 w-full rounded-[16px] bg-secondary-primary_white md:ml-0">
                        <div>
                          <div className="relative h-[218px]">
                            <Img
                              src="images/img_car20_660x440_jpg_218x328.png"
                              alt="Car20660x440"
                              className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[218px] w-full flex-1 object-cover"
                            />
                            <div className="absolute bottom-[-1px] left-0 right-0 mx-auto flex-1">
                              <div>
                                <div className="ml-5 mr-3 flex items-center justify-center md:mx-0">
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
                                      alt="Closesevenone"
                                      className="h-[36px]"
                                    />
                                    <div className="relative h-[36px] w-[24%] content-center lg:h-auto md:h-auto">
                                      <div className="flex flex-1 items-start justify-center">
                                        <Img
                                          src="images/img_group_903.svg"
                                          alt="Closenineone"
                                          className="relative z-[11] h-[16px]"
                                        />
                                        <Img
                                          src="images/img_mobile_secondary__primary_white.svg"
                                          alt="Mobileoneone"
                                          className="relative ml-[-12px] h-[36px] w-[58%] self-center rounded-[50%]"
                                        />
                                      </div>
                                      <Img
                                        src="images/img_television_yellow_800_18x18.svg"
                                        alt="Televisionfive"
                                        className="absolute bottom-0 right-[6.04px] top-0 z-[12] my-auto h-[18px]"
                                      />
                                      <Heading
                                        size="textmd"
                                        as="p"
                                        className="absolute left-[2.96px] top-0 z-[13] m-auto !font-heebo text-[14px] font-medium !text-secondary-primary_white"
                                      >
                                        3
                                      </Heading>
                                    </div>
                                    <div className="relative h-[36px] w-[24%]">
                                      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 items-start justify-center">
                                        <Img
                                          src="images/img_group_903.svg"
                                          alt="Closeelevenone"
                                          className="relative z-[14] h-[16px]"
                                        />
                                        <Img
                                          src="images/img_mobile_secondary__primary_white.svg"
                                          alt="Mobilethreeone"
                                          className="relative ml-[-12px] h-[36px] w-[60%] self-center rounded-[50%]"
                                        />
                                      </div>
                                      <Heading
                                        size="textmd"
                                        as="p"
                                        className="absolute left-px top-0 z-[15] m-auto !font-heebo text-[14px] font-medium !text-secondary-primary_white"
                                      >
                                        3
                                      </Heading>
                                      <Img
                                        src="images/img_car_yellow_800_1.svg"
                                        alt="Carfiveone"
                                        className="absolute bottom-[9px] right-2 z-[16] m-auto h-[14px]"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="mx-1.5 mt-[34px] flex justify-between gap-5 md:mx-0">
                                  <Button size="3xl" shape="circle" className="w-[60px] rounded-[20px] px-3">
                                    <Img src="images/img_icon_secondary__primary_white.svg" />
                                  </Button>
                                  <Button size="3xl" shape="circle" className="w-[60px] rounded-[20px] px-3">
                                    <Img src="images/img_arrow_right.svg" />
                                  </Button>
                                </div>
                                <div className="mt-[50px] flex h-[36px] items-center bg-[url(/public/images/img_group_10118.svg)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
                                  <div className="w-full bg-deep_orange-500">
                                    <div className="flex flex-col items-center bg-yellow-800">
                                      <Heading
                                        size="headingmd"
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
                                          size="heading3xl"
                                          as="h6"
                                          className="relative ml-[-2px] !font-heebo text-[17px] font-bold !text-secondary-primary_white lg:text-[14px]"
                                        >
                                          300,000
                                        </Heading>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex w-full flex-col items-center">
                                    <Heading
                                      size="headingmd"
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
                                        size="heading3xl"
                                        as="h6"
                                        className="relative ml-[-4px] !font-heebo text-[17px] font-bold !text-secondary-primary_white lg:text-[14px]"
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
                          <div className="mx-[30px] mt-2.5 flex justify-center md:mx-0">
                            <Heading
                              as="h6"
                              className="!font-heebo text-[18px] font-bold !text-black-900 lg:text-[15px]"
                            >
                              X8 – 5.0 במוו
                            </Heading>
                          </div>
                          <div className="flex justify-center px-14 md:px-5 sm:px-4">
                            <div className="flex w-[40%] items-center justify-center lg:w-full md:w-full">
                              <Heading
                                size="textmd"
                                as="p"
                                className="!font-heebo text-[14px] font-normal !text-black-900"
                              >
                                2022
                              </Heading>
                              <div className="h-[6px] w-[6px] rounded-[3px] bg-red-a700_03" />
                              <Heading
                                size="textmd"
                                as="p"
                                className="ml-2.5 !font-heebo text-[14px] font-normal !text-black-900"
                              >
                                במוו
                              </Heading>
                            </div>
                          </div>
                          <div className="mx-[30px] mt-3.5 flex items-center justify-center gap-2 md:mx-0">
                            <div className="flex flex-1 flex-col items-start gap-2">
                              <Img
                                src="images/img_icon_black_900_01.svg"
                                alt="Iconthirtyone"
                                className="ml-7 h-[26px] md:ml-0"
                              />
                              <Heading
                                size="textmd"
                                as="p"
                                className="!font-heebo text-[14px] font-normal !text-black-900"
                              >
                                2287 נפח מנוע
                              </Heading>
                            </div>
                            <div className="flex flex-1 flex-col items-center gap-1.5 px-2">
                              <Img src="images/img_artboard_2_copy_3.svg" alt="Artboard2copy" className="h-[24px]" />
                              <Heading
                                size="textmd"
                                as="p"
                                className="!font-heebo text-[14px] font-normal !text-black-900"
                              >
                                יד 4
                              </Heading>
                            </div>
                            <div className="flex flex-col items-end gap-3 self-end">
                              <Img
                                src="images/img_icon_black_900.svg"
                                alt="Iconfive"
                                className="mr-3.5 h-[18px] md:mr-0"
                              />
                              <Heading
                                size="textmd"
                                as="p"
                                className="!font-heebo text-[14px] font-normal !text-black-900"
                              >
                                אוטומטי
                              </Heading>
                            </div>
                          </div>
                          <div className="relative mx-2.5 mt-5 h-[56px] md:mx-0">
                            <Img
                              src="images/defaultNoData.png"
                              alt="Createfromfive"
                              className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[56px] flex-1 object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 items-center justify-center">
                              <Img
                                src="images/img_settings_black_900.svg"
                                alt="Settingseleven"
                                className="mt-1.5 h-[14px] self-start"
                              />
                              <Heading
                                size="h4_assistant_16px_b"
                                as="h6"
                                className="ml-1.5 text-[16px] font-semibold lg:text-[13px]"
                              >
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
                                <Img
                                  src="images/img_vector_red_a700_03_22x34.svg"
                                  alt="Vectoreleven"
                                  className="h-[22px]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mx-[34px] flex gap-[29px] md:mx-0 md:flex-col">
                      <div className="w-[20%] rounded-[16px] bg-secondary-primary_white md:w-full">
                        <div className="relative h-[218px] content-center lg:h-auto md:h-auto">
                          <div className="mx-auto flex w-full">
                            <Slider
                              autoPlay
                              autoPlayInterval={2000}
                              responsive={{
                                0: { items: 1 },
                                551: { items: 1 },
                                1051: { items: 1 },
                                1441: { items: 1 },
                              }}
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
                                    <div className="absolute left-0 right-0 top-[19.72px] mx-auto flex flex-1 flex-col gap-[34px] px-1.5">
                                      <div className="mx-3.5 flex items-start justify-between gap-5 md:mx-0">
                                        <Button
                                          shape="round"
                                          className="min-w-[116px] rounded-[14px] px-4 font-dmsans font-medium capitalize"
                                        >
                                          ממתין להצעה
                                        </Button>
                                        <Button size="xl" shape="square" className="w-[36px] self-center">
                                          <Img src="images/defaultNoData.png" />
                                        </Button>
                                      </div>
                                      <div className="h-[40px]" />
                                    </div>
                                  </div>
                                </React.Fragment>
                              ))}
                            />
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 justify-between gap-5 px-1.5">
                            <div className="flex w-[18%] justify-center rounded-[20px] bg-white-a700_33 p-3">
                              <Img
                                src="images/img_icon_secondary__primary_white.svg"
                                alt="Iconthirtyfive"
                                className="h-[12px]"
                              />
                            </div>
                            <div className="flex w-[18%] justify-center rounded-[20px] bg-white-a700_33 p-3">
                              <Img src="images/img_arrow_right.svg" alt="Arrowrightnine" className="h-[12px]" />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center rounded-bl-[16px] rounded-br-[16px] border-b border-l border-r border-solid border-gray-200 py-3">
                          <Heading
                            as="h6"
                            className="ml-[110px] self-start !font-heebo text-[18px] font-bold !text-black-900 lg:text-[15px] md:ml-0"
                          >
                            X8 – 5.0 במוו
                          </Heading>
                          <div className="flex justify-center self-stretch px-14 md:px-5 sm:px-4">
                            <div className="mb-1.5 flex w-[40%] items-center justify-center lg:w-full md:w-full">
                              <Heading
                                size="textmd"
                                as="p"
                                className="!font-heebo text-[14px] font-normal !text-black-900"
                              >
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
                          <div className="mx-[30px] mb-[68px] mt-3.5 flex items-center justify-center gap-2 self-stretch md:mx-0">
                            <div className="flex flex-1 justify-center px-7 sm:px-4">
                              <Img
                                src="images/img_icon_black_900_01.svg"
                                alt="Iconseven"
                                className="mb-[22px] h-[26px]"
                              />
                            </div>
                            <div className="flex flex-1 justify-center px-[30px] sm:px-4">
                              <Img
                                src="images/img_artboard_2_copy_3.svg"
                                alt="Artboard2copy"
                                className="mb-5 h-[24px]"
                              />
                            </div>
                            <div className="flex self-end px-3.5">
                              <Img
                                src="images/img_icon_black_900.svg"
                                alt="Iconthirtynine"
                                className="mb-[26px] h-[18px]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[20%] rounded-[16px] bg-secondary-primary_white md:w-full">
                        <div className="relative h-[218px] content-center lg:h-auto md:h-auto">
                          <div className="mx-auto flex w-full">
                            <Slider
                              autoPlay
                              autoPlayInterval={2000}
                              responsive={{
                                0: { items: 1 },
                                551: { items: 1 },
                                1051: { items: 1 },
                                1441: { items: 1 },
                              }}
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
                                    <div className="absolute left-0 right-0 top-[19.72px] mx-auto flex flex-1 flex-col gap-[34px] px-1.5">
                                      <div className="mx-3.5 flex items-start justify-between gap-5 md:mx-0">
                                        <Button
                                          shape="round"
                                          className="min-w-[116px] rounded-[14px] px-4 font-dmsans font-medium capitalize"
                                        >
                                          ממתין להצעה
                                        </Button>
                                        <Button size="xl" shape="square" className="w-[36px] self-center">
                                          <Img src="images/defaultNoData.png" />
                                        </Button>
                                      </div>
                                      <div className="h-[40px]" />
                                    </div>
                                  </div>
                                </React.Fragment>
                              ))}
                            />
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 justify-between gap-5 px-1.5">
                            <div className="flex w-[18%] justify-center rounded-[20px] bg-white-a700_33 p-3">
                              <Img
                                src="images/img_icon_secondary__primary_white.svg"
                                alt="Iconfortyone"
                                className="h-[12px]"
                              />
                            </div>
                            <div className="flex w-[18%] justify-center rounded-[20px] bg-white-a700_33 p-3">
                              <Img src="images/img_arrow_right.svg" alt="Arrowrightfive" className="h-[12px]" />
                            </div>
                          </div>
                        </div>
                        <div className="rounded-bl-[16px] rounded-br-[16px] border-b border-l border-r border-solid border-gray-200 py-3">
                          <div className="mx-[30px] flex pl-[78px] pr-14 lg:pl-8 md:mx-0 md:px-5 sm:px-4">
                            <Heading
                              as="h6"
                              className="!font-heebo text-[18px] font-bold !text-black-900 lg:text-[15px]"
                            >
                              X8 – 5.0 במוו
                            </Heading>
                          </div>
                          <div className="flex justify-center px-14 md:px-5 sm:px-4">
                            <div className="mb-1.5 flex w-[40%] items-center justify-center lg:w-full md:w-full">
                              <Heading
                                size="textmd"
                                as="p"
                                className="!font-heebo text-[14px] font-normal !text-black-900"
                              >
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
                          <div className="mx-[30px] mb-[68px] mt-3.5 flex items-center justify-center gap-2 md:mx-0">
                            <div className="flex flex-1 justify-center px-7 sm:px-4">
                              <Img
                                src="images/img_icon_black_900_01.svg"
                                alt="Iconfortythree"
                                className="mb-[22px] h-[26px]"
                              />
                            </div>
                            <div className="flex flex-1 justify-center px-[30px] sm:px-4">
                              <Img
                                src="images/img_artboard_2_copy_3.svg"
                                alt="Artboard2copy"
                                className="mb-5 h-[24px]"
                              />
                            </div>
                            <div className="flex self-end px-3.5">
                              <Img
                                src="images/img_icon_black_900.svg"
                                alt="Iconfortyfive"
                                className="mb-[26px] h-[18px]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <NewAddsDealerCubesColumncar10660x className="w-[20%] md:w-full" />
                      <div className="w-[20%] rounded-[16px] bg-secondary-primary_white md:w-full">
                        <div className="relative h-[218px] content-center lg:h-auto md:h-auto">
                          <div className="mx-auto flex w-full">
                            <Slider
                              autoPlay
                              autoPlayInterval={2000}
                              responsive={{
                                0: { items: 1 },
                                551: { items: 1 },
                                1051: { items: 1 },
                                1441: { items: 1 },
                              }}
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
                                    <div className="absolute left-0 right-0 top-[19.72px] mx-auto flex flex-1 flex-col gap-[34px] px-1.5">
                                      <div className="mx-3.5 flex items-start justify-between gap-5 md:mx-0">
                                        <Button
                                          shape="round"
                                          className="min-w-[116px] rounded-[14px] px-4 font-dmsans font-medium capitalize"
                                        >
                                          ממתין להצעה
                                        </Button>
                                        <Button size="xl" shape="square" className="w-[36px] self-center">
                                          <Img src="images/defaultNoData.png" />
                                        </Button>
                                      </div>
                                      <div className="h-[40px]" />
                                    </div>
                                  </div>
                                </React.Fragment>
                              ))}
                            />
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 justify-between gap-5 px-1.5">
                            <div className="flex w-[18%] justify-center rounded-[20px] bg-white-a700_33 p-3">
                              <Img
                                src="images/img_icon_secondary__primary_white.svg"
                                alt="Iconfiftythree"
                                className="h-[12px]"
                              />
                            </div>
                            <div className="flex w-[18%] justify-center rounded-[20px] bg-white-a700_33 p-3">
                              <Img src="images/img_arrow_right.svg" alt="Arrowrightnine" className="h-[12px]" />
                            </div>
                          </div>
                        </div>
                        <div className="rounded-bl-[16px] rounded-br-[16px] border-b border-l border-r border-solid border-gray-200 py-3">
                          <div className="mx-[30px] flex pl-[78px] pr-14 lg:pl-8 md:mx-0 md:px-5 sm:px-4">
                            <Heading
                              as="h6"
                              className="!font-heebo text-[18px] font-bold !text-black-900 lg:text-[15px]"
                            >
                              X8 – 5.0 במוו
                            </Heading>
                          </div>
                          <div className="flex justify-center px-14 md:px-5 sm:px-4">
                            <div className="mb-1.5 flex w-[40%] items-center justify-center lg:w-full md:w-full">
                              <Heading
                                size="textmd"
                                as="p"
                                className="!font-heebo text-[14px] font-normal !text-black-900"
                              >
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
                          <div className="mx-[30px] mb-[68px] mt-3.5 flex items-center justify-center gap-2 md:mx-0">
                            <div className="flex flex-1 justify-center px-7 sm:px-4">
                              <Img
                                src="images/img_icon_black_900_01.svg"
                                alt="Iconfiftyfive"
                                className="mb-[22px] h-[26px]"
                              />
                            </div>
                            <div className="flex flex-1 justify-center px-[30px] sm:px-4">
                              <Img
                                src="images/img_artboard_2_copy_3.svg"
                                alt="Artboard2copy"
                                className="mb-5 h-[24px]"
                              />
                            </div>
                            <div className="flex self-end px-3.5">
                              <Img
                                src="images/img_icon_black_900.svg"
                                alt="Iconfiftyseven"
                                className="mb-[26px] h-[18px]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 top-0 z-[18] mx-[132px] my-auto flex h-max flex-1 items-start lg:mx-0 md:relative md:mx-0 md:flex-col">
                  <div className="relative z-[19] flex-1 self-center md:self-stretch">
                    <div>
                      <div className="flex flex-col items-end gap-1.5">
                        <Img
                          src="images/img_uuid_8da7836a_2_red_700.png"
                          alt="Uuid8da7836atwo"
                          className="mr-3 h-[28px] w-[4%] object-contain md:mr-0"
                        />
                        <div className="flex justify-end self-stretch px-2.5">
                          <Heading
                            size="heading6xl"
                            as="h4"
                            className="!font-montserrat text-[25.98px] font-extrabold !text-red-a700_01 lg:text-[21px]"
                          >
                            <span className="text-secondary-primary_white">lbl_lbl_b</span>
                            <span className="text-red-a700_03">lbl_lbl_m</span>
                            <span className="text-secondary-primary_white">lbl_lbl_c</span>
                          </Heading>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start md:flex-col">
                      <div className="relative z-20 mt-10 flex flex-1 flex-col items-end gap-[30px] md:self-stretch">
                        <Button size="6xl" className="w-[52px] rounded-lg px-4">
                          <Img src="images/img_search_secondary__primary_white.svg" />
                        </Button>
                        <div className="mb-[84px] flex flex-col gap-1 self-stretch">
                          <div className="px-3.5 py-4">
                            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                              <div className="flex flex-col items-end">
                                <Img
                                  src="images/img__secondary__primary_white.svg"
                                  alt="Imageoneone"
                                  className="h-[20px]"
                                />
                              </div>
                            </a>
                          </div>
                          <div className="px-3.5 py-4">
                            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                              <div className="flex flex-col items-end">
                                <Img src="images/img__20x20.svg" alt="Imagetwoone" className="h-[20px]" />
                              </div>
                            </a>
                          </div>
                          <div className="px-3.5 py-4">
                            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                              <div className="flex flex-col items-end">
                                <Img src="images/img__2.svg" alt="Imagethreeone" className="h-[20px]" />
                              </div>
                            </a>
                          </div>
                          <div className="flex justify-end">
                            <Button size="6xl" className="w-[50px] rounded-lg px-3.5">
                              <Img src="images/img__red_a700_01.svg" />
                            </Button>
                          </div>
                          <div className="px-3.5 py-4">
                            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                              <div className="flex flex-col items-end">
                                <Img src="images/img__4.svg" alt="Imagefourone" className="h-[20px]" />
                              </div>
                            </a>
                          </div>
                          <div className="flex justify-end p-3.5">
                            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                              <div className="flex h-[20px] w-[20px] flex-col items-start bg-[url(/public/images/img_bell.svg)] bg-cover bg-no-repeat p-0.5 lg:h-auto md:h-auto">
                                <div className="mb-2 h-[6px] w-[6px] rounded-[3px] bg-red-a700" />
                              </div>
                            </a>
                          </div>
                          <div className="px-3.5 py-4">
                            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                              <div className="flex flex-col items-end">
                                <Img src="images/img_layers.png" alt="Layersoneone" className="h-[18px] object-cover" />
                              </div>
                            </a>
                          </div>
                          <div className="px-3.5 py-4">
                            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                              <div className="flex flex-col items-end">
                                <Img src="images/img__5.svg" alt="Imagefiveone" className="h-[20px]" />
                              </div>
                            </a>
                          </div>
                          <div className="px-3.5 py-4">
                            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                              <div className="flex flex-col items-end">
                                <Img src="images/img_search.svg" alt="Searchthreeone" className="h-[20px]" />
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="relative mb-[88px] ml-[-70px] w-[6%] self-center rounded-[16px] bg-black-900_03 px-3.5 py-9 md:ml-0 md:w-full sm:py-4">
                        <div className="mt-[896px] flex flex-col items-center">
                          <Heading
                            size="headinglg"
                            as="p"
                            className="!font-inter text-[14px] font-semibold !text-secondary-primary_white"
                          >
                            גילי עטיה
                          </Heading>
                          <Heading
                            size="headingmd"
                            as="p"
                            className="!font-inter text-[12px] font-semibold !text-yellow-800"
                          >
                            שוכר
                          </Heading>
                          <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                            <Heading
                              size="textxs"
                              as="p"
                              className="mt-1.5 !font-inter text-[12px] font-medium !text-white-a700_7f underline"
                            >
                              התנתקות
                            </Heading>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_tablist.png"
                    alt="Tablistthree"
                    className="relative ml-[-88px] mt-[402px] h-[40px] w-[8%] object-contain md:ml-0 md:w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
