import { Helmet } from "react-helmet";
import { Heading, Img, Button, Slider } from "../../components";
import AllAddsProviderCubesColumnclose from "../../components/AllAddsProviderCubesColumnclose";
import AllAddsProviderCubesRow from "../../components/AllAddsProviderCubesRow";
import AwaitingAddsProviderCubesTwo from "../../components/AwaitingAddsProviderCubesTwo";
import React, { Suspense } from "react";
import { TabPanel, Tabs } from "react-tabs";

const data = [
  { image: "images/img_car_black_900_03.svg", twenty: "20", prop: "מודעות" },
  { image: "images/img_car_red_a700_03_1.svg", twenty: "20", prop: "מודעות בהמתנה לאישור" },
  { image: "images/img_car_light_green_800_1.svg", twenty: "20", prop: "מודעות מאושרות" },
  { image: "images/img_thumbs_up.svg", twenty: "20", prop: "מודעות למכרז" },
  { image: "images/img_television_yellow_800.svg", twenty: "20", prop: "חבילת מודעות במכרז" },
  { image: "images/img_car_gray_700_04.svg", twenty: "20", prop: "מודעות בארכיון" },
];

export default function AwaitingAddsProviderCubesPage() {
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
  const [sliderState5, setSliderState5] = React.useState(0);
  const sliderRef5 = React.useRef(null);
  const [sliderState6, setSliderState6] = React.useState(0);
  const sliderRef6 = React.useRef(null);
  const [sliderState7, setSliderState7] = React.useState(0);
  const sliderRef7 = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>Rivky miler&#39;s Application15</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full justify-center bg-gray-100 shadow-xs">
        <div className="container-12xl mt-7 flex items-start justify-center gap-10 self-end lg:px-5 md:flex-col md:px-5">
          <div className="w-[10%] md:w-full">
            <div className="rounded-[20px] bg-secondary-primary_white px-2.5 py-5 shadow-xs">
              <div className="mb-[420px] flex flex-col gap-3">
                <div className="relative h-[58px] content-end lg:h-auto md:h-auto">
                  <div className="mx-auto mb-2.5 h-[24px] flex-1 border-b border-solid border-gray-200" />
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 justify-center p-4">
                    <Heading as="h1" className="text-[18px] font-bold lg:text-[15px]">
                      המודעות שלי
                    </Heading>
                  </div>
                </div>
                <div className="mx-8 flex flex-col gap-2.5 md:mx-0 md:flex-row sm:flex-col">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {data.map((d, index) => (
                      <AllAddsProviderCubesRow {...d} key={"listtwenty" + index} />
                    ))}
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[1150px] w-[88%] self-center md:w-full">
            <div className="absolute left-0 right-0 top-0 mx-auto flex w-full items-center md:relative md:flex-col">
              <div className="flex w-[98%] items-start md:w-full md:flex-col">
                <div className="flex w-[99%] items-start md:w-full md:flex-col">
                  <Tabs
                    className="flex w-[94%] flex-col gap-[22px] self-center rounded-[20px] bg-secondary-primary_white shadow-xs md:w-full"
                    selectedTabClassName="text-black-900_03 font-semibold text-[16px]"
                    selectedTabPanelClassName="mb-[362px] ml-8 mr-[34px] md:mx-0 !relative tab-panel--selected"
                  >
                    <div className="mr-12 flex flex-col items-start gap-2 md:mr-0">
                      <div className="flex w-[14%] justify-center gap-1 rounded-br-lg bg-gray-100 lg:w-full md:w-full">
                        <div className="w-full">
                          <div className="flex items-center justify-center gap-1">
                            <Heading size="headingmd" as="h2" className="text-[12px] font-bold !text-gray-900_04">
                              <span className="text-gray-900_04">&nbsp;</span>
                              <span className="font-heebo font-medium text-gray-600">lbl_lbl23</span>
                            </Heading>
                            <Img src="images/img_signal.svg" alt="Signaloneone" className="h-[10px]" />
                          </div>
                        </div>
                        <div className="w-full">
                          <div className="flex items-center justify-center gap-0.5">
                            <Heading
                              size="textxs"
                              as="h3"
                              className="!font-heebo text-[12px] font-medium !text-gray-600"
                            >
                              מודעות במכרז
                            </Heading>
                            <Img src="images/img_vector_deep_orange_500.svg" alt="Vectoroneone" className="h-[12px]" />
                          </div>
                        </div>
                      </div>
                      <div className="relative ml-6 h-[56px] self-stretch md:ml-0">
                        <div className="absolute bottom-0 left-0 right-0 top-0 mx-2.5 my-auto flex h-max flex-1 items-start justify-end gap-[22px] py-1.5 lg:mx-0 md:mx-0">
                          <Heading
                            size="h3_assistant_25px_m"
                            as="h4"
                            className="text-[25px] font-medium lg:text-[21px]"
                          >
                            מודעות רכבים שלי
                          </Heading>
                          <Img
                            src="images/img_car_red_a700_03_3.png"
                            alt="Caroneone"
                            className="mb-1.5 h-[36px] object-cover"
                          />
                        </div>
                        <div className="absolute left-0 right-0 top-[3.05px] mx-auto flex-1">
                          <div className="relative z-[1] flex gap-[15px]">
                            <Img
                              src="images/img_button1_gray_100_01.svg"
                              alt="Buttononeone"
                              className="h-[32px] rounded-[10px]"
                            />
                            <Button size="md" className="w-[32px] rounded-[10px] px-1.5">
                              <Img src="images/img_megaphone_gray_600_1.svg" />
                            </Button>
                          </div>
                          <div className="relative mt-[-28px] flex justify-center border-b border-solid border-gray-200 px-14 md:px-5 sm:px-4">
                            <AwaitingAddsProviderCubesTwo />
                          </div>
                        </div>
                      </div>
                    </div>
                    {[...Array(7)].map((_, index) => (
                      <TabPanel
                        key={`tab-panel${index}`}
                        className="absolute mb-[362px] ml-8 mr-[34px] items-center md:mx-0"
                      >
                        <div className="w-full">
                          <div className="flex flex-col gap-4">
                            <AllAddsProviderCubesColumnclose className="mr-2 md:mr-0" />
                            <div className="flex gap-7 md:flex-col">
                              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                <div className="w-full rounded-[16px] bg-secondary-primary_white">
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
                                        activeIndex={sliderState7}
                                        onSlideChanged={(e) => {
                                          setSliderState7(e?.item);
                                        }}
                                        ref={sliderRef7}
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
                                          sliderRef7?.current?.slidePrev();
                                        }}
                                        className="w-[60px] rounded-[20px] px-3"
                                      >
                                        <Img src="images/img_icon_secondary__primary_white.svg" />
                                      </Button>
                                      <Button
                                        size="3xl"
                                        shape="circle"
                                        onClick={() => {
                                          sliderRef7?.current?.slideNext();
                                        }}
                                        className="w-[60px] rounded-[20px] px-3"
                                      >
                                        <Img src="images/img_arrow_right.svg" />
                                      </Button>
                                    </div>
                                  </div>
                                  <div className="rounded-bl-[16px] rounded-br-[16px] border-b border-l border-r border-solid border-gray-200">
                                    <div className="mt-2">
                                      <div className="flex flex-col items-center gap-0.5">
                                        <Heading
                                          as="h5"
                                          className="!font-heebo text-[18px] font-bold !text-black-900 lg:text-[15px]"
                                        >
                                          X8 – 5.0 במוו
                                        </Heading>
                                        <div className="flex justify-center self-stretch px-14 md:px-5 sm:px-4">
                                          <div className="mb-1.5 flex w-[40%] items-center justify-center lg:w-full md:w-full">
                                            <Heading
                                              size="textmd"
                                              as="h6"
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
                                      </div>
                                      <div className="mx-[30px] mt-1 flex items-center justify-between gap-5 md:mx-0">
                                        <div className="flex flex-1 items-center justify-between gap-5">
                                          <div className="flex flex-col items-start gap-0.5">
                                            <Img
                                              src="images/img_icon_black_900_01.svg"
                                              alt="Iconthreeone"
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
                                            alt="Iconfiveone"
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
                                      <div className="mx-[30px] flex flex-col gap-0.5 md:mx-0">
                                        <div className="h-px bg-gray-200" />
                                        <div className="mx-[38px] flex items-center justify-center gap-2 md:mx-0">
                                          <Heading size="textlg" as="p" className="!font-heebo text-[15px] font-medium">
                                            לבחירת חבילת רכבים
                                          </Heading>
                                          <Img
                                            src="images/img_checkmark_yellow_800_1.svg"
                                            alt="Checkmarkfive"
                                            className="h-[16px]"
                                          />
                                          <div className="flex flex-col items-center justify-center rounded-lg bg-black-900_03 p-1">
                                            <Img
                                              src="images/img_car_secondary__primary_white_1.svg"
                                              alt="Carthreeone"
                                              className="h-[6px]"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="mx-[30px] mt-1 border-t border-solid border-gray-200 py-1.5 md:mx-0">
                                        <div className="relative mb-1 h-[30px]">
                                          <div className="absolute bottom-[-1px] left-0 right-0 mx-auto flex flex-1 items-center">
                                            <Img
                                              src="images/img_settings_black_900.svg"
                                              alt="Settingsoneone"
                                              className="h-[14px]"
                                            />
                                            <Heading
                                              size="h4_assistant_16px_b"
                                              as="h6"
                                              className="text-[16px] font-semibold lg:text-[13px]"
                                            >
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
                                            <Img
                                              src="images/img_vector_red_a700_03_22x34.svg"
                                              alt="Vectorthreeone"
                                              className="h-[22px]"
                                            />
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
                                        responsive={{
                                          0: { items: 1 },
                                          551: { items: 1 },
                                          1051: { items: 1 },
                                          1441: { items: 1 },
                                        }}
                                        disableDotsControls
                                        activeIndex={sliderState6}
                                        onSlideChanged={(e) => {
                                          setSliderState6(e?.item);
                                        }}
                                        ref={sliderRef6}
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
                                          sliderRef6?.current?.slidePrev();
                                        }}
                                        className="w-[60px] rounded-[20px] px-3"
                                      >
                                        <Img src="images/img_icon_secondary__primary_white.svg" />
                                      </Button>
                                      <Button
                                        size="3xl"
                                        shape="circle"
                                        onClick={() => {
                                          sliderRef6?.current?.slideNext();
                                        }}
                                        className="w-[60px] rounded-[20px] px-3"
                                      >
                                        <Img src="images/img_arrow_right.svg" />
                                      </Button>
                                    </div>
                                  </div>
                                  <div className="rounded-bl-[16px] rounded-br-[16px] border-b border-l border-r border-solid border-gray-200">
                                    <div className="mt-2">
                                      <div className="flex flex-col items-center gap-0.5">
                                        <Heading
                                          as="h6"
                                          className="!font-heebo text-[18px] font-bold !text-black-900 lg:text-[15px]"
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
                                      </div>
                                      <div className="mx-[30px] mt-1 flex items-center justify-between gap-5 md:mx-0">
                                        <div className="flex flex-1 items-center justify-between gap-5">
                                          <div className="flex flex-col items-start gap-0.5">
                                            <Img
                                              src="images/img_icon_black_900_01.svg"
                                              alt="Iconnineone"
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
                                            alt="Iconelevenone"
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
                                      <div className="mx-[30px] flex flex-col gap-0.5 md:mx-0">
                                        <div className="h-px bg-gray-200" />
                                        <div className="mx-[38px] flex items-center justify-center gap-2 md:mx-0">
                                          <Heading size="textlg" as="p" className="!font-heebo text-[15px] font-medium">
                                            לבחירת חבילת רכבים
                                          </Heading>
                                          <Img
                                            src="images/img_checkmark_yellow_800_1.svg"
                                            alt="Checkmarkseven"
                                            className="h-[16px]"
                                          />
                                          <div className="flex flex-col items-center justify-center rounded-lg bg-black-900_03 p-1">
                                            <Img
                                              src="images/img_car_secondary__primary_white_1.svg"
                                              alt="Carfiveone"
                                              className="h-[6px]"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="mx-[30px] mt-1 border-t border-solid border-gray-200 py-1.5 md:mx-0">
                                        <div className="mb-1 flex items-end justify-center">
                                          <Img
                                            src="images/img_settings_black_900.svg"
                                            alt="Settingsthree"
                                            className="mb-1.5 h-[14px]"
                                          />
                                          <Heading
                                            size="h4_assistant_16px_b"
                                            as="h6"
                                            className="text-[16px] font-semibold lg:text-[13px]"
                                          >
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
                                            <Img
                                              src="images/img_vector_red_a700_03_22x34.svg"
                                              alt="Vectorfiveone"
                                              className="h-[22px]"
                                            />
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
                                        responsive={{
                                          0: { items: 1 },
                                          551: { items: 1 },
                                          1051: { items: 1 },
                                          1441: { items: 1 },
                                        }}
                                        disableDotsControls
                                        activeIndex={sliderState5}
                                        onSlideChanged={(e) => {
                                          setSliderState5(e?.item);
                                        }}
                                        ref={sliderRef5}
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
                                          sliderRef5?.current?.slidePrev();
                                        }}
                                        className="w-[60px] rounded-[20px] px-3"
                                      >
                                        <Img src="images/img_icon_secondary__primary_white.svg" />
                                      </Button>
                                      <Button
                                        size="3xl"
                                        shape="circle"
                                        onClick={() => {
                                          sliderRef5?.current?.slideNext();
                                        }}
                                        className="w-[60px] rounded-[20px] px-3"
                                      >
                                        <Img src="images/img_arrow_right.svg" />
                                      </Button>
                                    </div>
                                  </div>
                                  <div className="rounded-bl-[16px] rounded-br-[16px] border-b border-l border-r border-solid border-gray-200">
                                    <div className="mt-2 flex flex-col items-center gap-0.5">
                                      <Heading
                                        as="h6"
                                        className="!font-heebo text-[18px] font-bold !text-black-900 lg:text-[15px]"
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
                                    </div>
                                    <div className="mx-[30px] mt-1 flex items-center justify-between gap-5 md:mx-0">
                                      <div className="flex flex-1 items-center justify-between gap-5">
                                        <div className="flex flex-col items-start gap-0.5">
                                          <Img
                                            src="images/img_icon_black_900_01.svg"
                                            alt="Iconfifteenone"
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
                                          alt="Iconseventeen"
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
                                    <div className="mx-[30px] flex flex-col gap-0.5 md:mx-0">
                                      <div className="h-px bg-gray-200" />
                                      <div className="mx-[38px] flex items-center justify-center gap-2 md:mx-0">
                                        <Heading size="textlg" as="p" className="!font-heebo text-[15px] font-medium">
                                          לבחירת חבילת רכבים
                                        </Heading>
                                        <Img
                                          src="images/img_checkmark_yellow_800_1.svg"
                                          alt="Checkmarknine"
                                          className="h-[16px]"
                                        />
                                        <div className="flex flex-col items-center justify-center rounded-lg bg-black-900_03 p-1">
                                          <Img
                                            src="images/img_car_secondary__primary_white_1.svg"
                                            alt="Carsevenone"
                                            className="h-[6px]"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="mx-[30px] mt-1 border-t border-solid border-gray-200 py-1.5 md:mx-0">
                                      <div className="mb-1 flex items-end justify-center">
                                        <Img
                                          src="images/img_settings_black_900.svg"
                                          alt="Settingsfive"
                                          className="mb-1.5 h-[14px]"
                                        />
                                        <Heading
                                          size="h4_assistant_16px_b"
                                          as="h6"
                                          className="text-[16px] font-semibold lg:text-[13px]"
                                        >
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
                                          <Img
                                            src="images/img_vector_red_a700_03_22x34.svg"
                                            alt="Vectorsevenone"
                                            className="h-[22px]"
                                          />
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
                                  </div>
                                  <div className="rounded-bl-[16px] rounded-br-[16px] border-b border-l border-r border-solid border-gray-200">
                                    <div className="mt-2">
                                      <div className="flex flex-col items-center gap-0.5">
                                        <Heading
                                          as="h6"
                                          className="!font-heebo text-[18px] font-bold !text-black-900 lg:text-[15px]"
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
                                      </div>
                                      <div className="mx-[30px] mt-1 flex items-center justify-center md:mx-0">
                                        <div className="flex flex-1 items-center justify-between gap-5">
                                          <div className="flex flex-col items-start gap-0.5">
                                            <Img
                                              src="images/img_icon_black_900_01.svg"
                                              alt="Icontwentyone"
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
                                            alt="Iconone"
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
                                      <div className="mx-[30px] flex flex-col gap-0.5 md:mx-0">
                                        <div className="h-px bg-gray-200" />
                                        <div className="mx-[38px] flex items-center justify-center gap-2 md:mx-0">
                                          <Heading size="textlg" as="p" className="!font-heebo text-[15px] font-medium">
                                            לבחירת חבילת רכבים
                                          </Heading>
                                          <Img
                                            src="images/img_checkmark_yellow_800_1.svg"
                                            alt="Checkmarkone"
                                            className="h-[16px]"
                                          />
                                          <div className="flex flex-col items-center justify-center rounded-lg bg-black-900_03 p-1">
                                            <Img
                                              src="images/img_car_secondary__primary_white_1.svg"
                                              alt="Carnineone"
                                              className="h-[6px]"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="mx-[30px] mt-1 border-t border-solid border-gray-200 py-1.5 md:mx-0">
                                        <div className="mb-1 flex items-end justify-center">
                                          <Img
                                            src="images/img_settings_black_900.svg"
                                            alt="Settingsseven"
                                            className="mb-1.5 h-[14px]"
                                          />
                                          <Heading
                                            size="h4_assistant_16px_b"
                                            as="h6"
                                            className="text-[16px] font-semibold lg:text-[13px]"
                                          >
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
                                            <Img
                                              src="images/img_vector_red_a700_03_22x34.svg"
                                              alt="Vectornineone"
                                              className="h-[22px]"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                    ))}
                  </Tabs>
                  <div className="relative z-[2] ml-[-82px] mt-10 flex w-[12%] flex-col items-end gap-[30px] md:ml-0 md:w-full">
                    <Button size="6xl" className="mt-[60px] w-[52px] rounded-lg px-4">
                      <Img src="images/img_search_secondary__primary_white.svg" />
                    </Button>
                    <div className="flex flex-col gap-1 self-stretch">
                      <div className="flex justify-end px-3.5 py-4">
                        <Img src="images/img__secondary__primary_white.svg" alt="Imageoneone" className="h-[20px]" />
                      </div>
                      <div className="flex justify-end px-3.5 py-4">
                        <Img
                          src="images/img__secondary__primary_white_20x20.svg"
                          alt="Imagetwoone"
                          className="h-[20px]"
                        />
                      </div>
                      <div className="flex justify-end">
                        <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                          <Button size="6xl" className="w-[50px] rounded-lg px-3.5">
                            <Img src="images/img__20x20.svg" />
                          </Button>
                        </a>
                      </div>
                      <div className="flex justify-end px-3.5 py-4">
                        <Img src="images/img__1.svg" alt="Imagethreeone" className="h-[20px]" />
                      </div>
                      <div className="flex justify-end px-3.5 py-4">
                        <Img src="images/img__2.svg" alt="Imagefourone" className="h-[20px]" />
                      </div>
                      <div className="flex justify-end px-3.5 py-4">
                        <Img src="images/img__3.svg" alt="Imagefiveone" className="h-[20px]" />
                      </div>
                      <div className="flex justify-end px-3.5 py-4">
                        <Img src="images/img__4.svg" alt="Imagesixone" className="h-[20px]" />
                      </div>
                      <div className="relative h-[50px] content-center p-3.5 lg:h-auto md:h-auto">
                        <Img src="images/img_bell.svg" alt="Belloneone" className="ml-auto h-[20px]" />
                        <div className="absolute right-[26px] top-[17px] m-auto h-[6px] w-[6px] rounded-[3px] bg-red-a700" />
                      </div>
                      <div className="flex justify-end px-3.5 py-4">
                        <Img src="images/img_layers.png" alt="Layersoneone" className="h-[18px] object-cover" />
                      </div>
                      <div className="flex justify-end px-3.5 py-4">
                        <Img src="images/img__5.svg" alt="Imagesevenone" className="h-[20px]" />
                      </div>
                      <div className="flex justify-end px-3.5 py-4">
                        <Img src="images/img_search.svg" alt="Searchthreeone" className="h-[20px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative z-[3] ml-[-70px] mt-[18px] flex w-[5%] flex-col gap-1.5 md:ml-0 md:w-full">
                  <Img
                    src="images/img_uuid_8da7836a_2_red_700.png"
                    alt="Uuid8da7836atwo"
                    className="mx-3 h-[28px] object-cover md:mx-0"
                  />
                  <div className="flex justify-center px-2.5">
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
              <div className="relative z-[4] ml-[-88px] flex w-[8%] items-start justify-center md:ml-0 md:w-full">
                <div className="relative z-[5] w-[40%] self-center rounded-[16px] bg-black-900_03 px-3.5 py-9 sm:py-4">
                  <div className="mt-[896px] flex flex-col items-center gap-0.5">
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
                      className="!font-inter text-[12px] font-semibold !text-red-a700_03"
                    >
                      ספק
                    </Heading>
                    <Heading
                      size="textxs"
                      as="p"
                      className="!font-inter text-[12px] font-medium !text-white-a700_7f underline"
                    >
                      התנתקות
                    </Heading>
                  </div>
                </div>
                <Img
                  src="images/img_tablist.png"
                  alt="Tablistthree"
                  className="relative ml-[-88px] h-[40px] w-[58%] object-contain"
                />
              </div>
            </div>
            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
              <div className="absolute bottom-0 left-[2%] m-auto w-[20%] rounded-[16px] bg-secondary-primary_white">
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
                <div className="rounded-bl-[16px] rounded-br-[16px] border-b border-l border-r border-solid border-gray-200">
                  <div className="mt-2 flex flex-col gap-1">
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
                    <div className="mx-[30px] mb-[86px] flex items-center justify-between gap-5 md:mx-0">
                      <div className="flex flex-1 items-center justify-between gap-5">
                        <div className="flex flex-col items-start">
                          <Img
                            src="images/img_icon_black_900_01.svg"
                            alt="Iconthree"
                            className="ml-[26px] h-[26px] md:ml-0"
                          />
                          <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                            2287 נפח מנוע
                          </Heading>
                        </div>
                        <div className="flex w-[28%] flex-col items-start">
                          <Img src="images/img_artboard_2_copy_3.svg" alt="Artboard2copy" className="h-[24px]" />
                          <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                            יד 4
                          </Heading>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1.5 self-end">
                        <Img
                          src="images/img_icon_black_900.svg"
                          alt="Icontwentynine"
                          className="mr-3 h-[18px] md:mr-0"
                        />
                        <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                          אוטומטי
                        </Heading>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
              <div className="absolute bottom-0 left-[24%] m-auto w-[26%] rounded-[16px] bg-secondary-primary_white">
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
                        sliderRef2?.current?.slidePrev();
                      }}
                      className="w-[60px] rounded-[20px] px-3"
                    >
                      <Img src="images/img_icon_secondary__primary_white.svg" />
                    </Button>
                    <Button
                      size="3xl"
                      shape="circle"
                      onClick={() => {
                        sliderRef2?.current?.slideNext();
                      }}
                      className="w-[60px] rounded-[20px] px-3"
                    >
                      <Img src="images/img_arrow_right.svg" />
                    </Button>
                  </div>
                </div>
                <div className="rounded-bl-[16px] rounded-br-[16px] border-b border-l border-r border-solid border-gray-200">
                  <div className="mt-2 flex flex-col gap-1">
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
                    <div className="mx-[30px] mb-[86px] flex items-center justify-between gap-5 md:mx-0">
                      <div className="flex flex-1 items-center justify-between gap-5">
                        <div className="flex flex-col items-start">
                          <Img
                            src="images/img_icon_black_900_01.svg"
                            alt="Iconfive"
                            className="ml-[26px] h-[26px] md:ml-0"
                          />
                          <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                            2287 נפח מנוע
                          </Heading>
                        </div>
                        <div className="flex w-[28%] flex-col items-start">
                          <Img src="images/img_artboard_2_copy_3.svg" alt="Artboard2copy" className="h-[24px]" />
                          <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                            יד 4
                          </Heading>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1.5 self-end">
                        <Img
                          src="images/img_icon_black_900.svg"
                          alt="Iconthirtyfive"
                          className="mr-3 h-[18px] md:mr-0"
                        />
                        <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                          אוטומטי
                        </Heading>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
              <div className="absolute bottom-0 right-[34%] m-auto w-[30%] rounded-[16px] bg-secondary-primary_white">
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
                  <div className="mt-2 flex flex-col gap-1">
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
                    <div className="mx-[30px] mb-[86px] flex items-center justify-between gap-5 md:mx-0">
                      <div className="flex flex-1 items-center justify-between gap-5">
                        <div className="flex flex-col items-start">
                          <Img
                            src="images/img_icon_black_900_01.svg"
                            alt="Iconthirtynine"
                            className="ml-[26px] h-[26px] md:ml-0"
                          />
                          <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                            2287 נפח מנוע
                          </Heading>
                        </div>
                        <div className="flex w-[28%] flex-col items-start">
                          <Img src="images/img_artboard_2_copy_3.svg" alt="Artboard2copy" className="h-[24px]" />
                          <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                            יד 4
                          </Heading>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1.5 self-end">
                        <Img src="images/img_icon_black_900.svg" alt="Iconfortyone" className="mr-3 h-[18px] md:mr-0" />
                        <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                          אוטומטי
                        </Heading>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
              <div className="absolute bottom-0 right-[13%] z-[6] m-auto w-[22%] rounded-[16px] bg-secondary-primary_white">
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
                  <div className="mt-2 flex flex-col gap-1">
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
                    <div className="mx-[30px] mb-[86px] flex items-center justify-center md:mx-0">
                      <div className="flex flex-1 items-center justify-between gap-5">
                        <div className="flex flex-col items-start">
                          <Img
                            src="images/img_icon_black_900_01.svg"
                            alt="Iconfortyfive"
                            className="ml-[26px] h-[26px] md:ml-0"
                          />
                          <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                            2287 נפח מנוע
                          </Heading>
                        </div>
                        <div className="flex w-[28%] flex-col items-start">
                          <Img src="images/img_artboard_2_copy_3.svg" alt="Artboard2copy" className="h-[24px]" />
                          <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                            יד 4
                          </Heading>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1.5 self-end">
                        <Img
                          src="images/img_icon_black_900.svg"
                          alt="Iconfortyseven"
                          className="mr-3 h-[18px] md:mr-0"
                        />
                        <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                          אוטומטי
                        </Heading>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
