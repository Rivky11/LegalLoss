import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text, Switch, Slider } from "../../components";
import NewAddsDealerCubesColumncar10660x from "../../components/NewAddsDealerCubesColumncar10660x";
import Carprofil2Column from "./Carprofil2Column";
import React from "react";

export default function CarProfil2Page() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  const [sliderState1, setSliderState1] = React.useState(0);
  const sliderRef1 = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>Rivky miler&#39;s Application15</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-100">
        <div className="relative h-[1116px] content-center lg:h-auto md:h-auto">
          <div className="flex w-full items-start px-[38px] md:flex-col sm:px-4">
            <div className="flex w-[90%] items-start gap-10 md:w-full md:flex-col">
              <div className="w-[24%] md:w-full">
                <Carprofil2Column />
              </div>
              <div className="relative mb-9 h-[1052px] w-[75%] self-center rounded-[20px] bg-secondary-primary_white shadow-xs md:w-full">
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-full overflow-x-scroll">
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
                          <div className="flex items-center md:flex-col">
                            <div className="mb-[382px] flex w-[20%] flex-col items-start self-end md:w-full">
                              <div className="relative h-[512px] w-[88%] rounded-[20px] bg-secondary-primary_white p-2.5 shadow-xs lg:h-auto md:h-auto">
                                <div className="mt-7 flex flex-1 flex-col gap-52 lg:gap-[156px] md:gap-[156px] sm:gap-[104px]">
                                  <div className="mx-3.5 h-[20px] border-b border-solid border-gray-200 md:mx-0" />
                                  <div className="flex justify-between gap-5">
                                    <Button
                                      onClick={() => {
                                        sliderRef?.current?.slidePrev();
                                      }}
                                      size="3xl"
                                      shape="circle"
                                      className="w-[40px] rounded-[20px] px-3"
                                    >
                                      <Img src="images/img_arrow_left_secondary__primary_white_1.svg" />
                                    </Button>
                                    <Button
                                      onClick={() => {
                                        sliderRef?.current?.slideNext();
                                      }}
                                      size="3xl"
                                      shape="circle"
                                      className="w-[40px] rounded-[20px] px-3"
                                    >
                                      <Img src="images/img_arrow_right_secondary__primary_white_1.svg" />
                                    </Button>
                                  </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-[95%] flex-col items-center gap-3.5 px-[22px] sm:px-4">
                                  <Heading
                                    size="h2_assistant_30px"
                                    as="h2"
                                    className="text-[30px] font-medium !text-black-900 lg:text-[25px] md:text-[24px] sm:text-[22px]"
                                  >
                                    הצעות נוספות לרכבים
                                  </Heading>
                                  <div className="relative h-[432px] content-center self-stretch lg:h-auto md:h-auto">
                                    <div className="mx-auto flex w-full flex-col">
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
                                            <NewAddsDealerCubesColumncar10660x
                                              p2287="2287 נפח מנוע"
                                              four="יד 4"
                                              prop1="אוטומטי"
                                              settingsoneone="images/img_settings_black_900.svg"
                                              prop2="הגש הצעה"
                                              prop3="שיקום"
                                              vectoroneone="images/img_vector_red_a700_03_22x34.svg"
                                              className="flex flex-col self-stretch"
                                            />
                                          </React.Fragment>
                                        ))}
                                      />
                                    </div>
                                    <div className="absolute right-[5px] top-[21%] m-auto flex w-[18%] justify-center rounded-[20px] bg-white-a700_33 p-3">
                                      <Img src="images/img_arrow_right.svg" alt="Arrowrightone" className="h-[12px]" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="relative h-[1390px] flex-1 content-center px-14 lg:h-auto md:h-auto md:w-full md:flex-none md:self-stretch md:px-5 sm:px-4">
                              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 items-center md:relative md:flex-col">
                                <div className="flex flex-1 flex-col gap-[22px] md:self-stretch">
                                  <div className="flex flex-col gap-0.5">
                                    <div className="mx-1.5 flex items-start md:mx-0 md:flex-col">
                                      <div className="mt-3.5 flex w-full justify-center gap-1.5">
                                        <div className="flex items-center gap-2">
                                          <Text
                                            size="h4_assistant16px_r"
                                            as="p"
                                            className="mb-1 self-end text-[16px] font-normal !text-black-900 lg:text-[13px]"
                                          >
                                            עריכה
                                          </Text>
                                          <Button
                                            size="xl"
                                            shape="circle"
                                            className="w-[36px] rounded-[18px] border border-solid border-gray-200 px-2.5"
                                          >
                                            <Img src="images/img_edit.svg" />
                                          </Button>
                                        </div>
                                        <div className="flex flex-1 items-center gap-3 px-4">
                                          <Text
                                            size="h4_assistant16px_r"
                                            as="p"
                                            className="self-end text-[16px] font-normal !text-black-900 lg:text-[13px]"
                                          >
                                            שתף
                                          </Text>
                                          <Button
                                            size="xl"
                                            shape="circle"
                                            className="w-[36px] rounded-[18px] border border-solid border-gray-200 px-2.5"
                                          >
                                            <Img src="images/img_twitter_black_900.svg" />
                                          </Button>
                                        </div>
                                      </div>
                                      <div className="flex w-full items-center justify-center">
                                        <div className="flex flex-1 justify-end">
                                          <Heading
                                            size="textlg"
                                            as="h3"
                                            className="!font-dmsans text-[15px] font-normal !text-black-900"
                                          >
                                            אוודי 5455
                                          </Heading>
                                        </div>
                                        <div className="flex w-[12%] items-center justify-center gap-1">
                                          <Heading
                                            size="textmd"
                                            as="h4"
                                            className="!font-dmsans text-[14px] font-normal !text-black-900"
                                          >
                                            /
                                          </Heading>
                                          <div className="flex flex-1 justify-center">
                                            <Text
                                              size="h4_assistant16px_r"
                                              as="p"
                                              className="self-end text-[16px] font-normal !text-black-900_7f lg:text-[13px]"
                                            >
                                              סוחרים
                                            </Text>
                                          </div>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-1 py-0.5">
                                          <Heading
                                            size="textmd"
                                            as="h5"
                                            className="!font-dmsans text-[14px] font-normal !text-black-900"
                                          >
                                            /
                                          </Heading>
                                          <Heading
                                            size="textlg"
                                            as="h6"
                                            className="!font-dmsans text-[15px] font-normal !text-black-900_7f"
                                          >
                                            ראשי
                                          </Heading>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="ml-3 flex items-center justify-center md:ml-0 md:flex-col">
                                      <div className="mb-1.5 flex flex-1 items-center justify-center md:flex-col md:self-stretch">
                                        <Button
                                          size="lg"
                                          shape="round"
                                          leftIcon={
                                            <div className="flex h-[10px] w-[6px] items-center justify-center">
                                              <Img
                                                src="images/img_arrowleft_secondary__primary_white.svg"
                                                alt="Arrow Left"
                                                className="mb-1.5 mt-0.5 h-[10px] w-[6px] object-contain"
                                              />
                                            </div>
                                          }
                                          className="min-w-[128px] gap-2 rounded-[16px] px-3 font-semibold"
                                        >
                                          אישור המודעה
                                        </Button>
                                        <div className="flex flex-1 items-center justify-center px-3.5 md:self-stretch">
                                          <Switch
                                            size="sm"
                                            value={true}
                                            className="border border-solid border-gray-200"
                                          />
                                          <div className="flex flex-1 self-end px-[26px] sm:px-4">
                                            <Text
                                              size="textxl"
                                              as="p"
                                              className="text-[16px] font-normal lg:text-[13px]"
                                            >
                                              שיריון הרכב
                                            </Text>
                                          </div>
                                        </div>
                                      </div>
                                      <Heading
                                        size="h1_assistant_45px_m"
                                        as="p"
                                        className="text-[45px] font-medium !text-black-900 lg:text-[38px] md:text-[29px] sm:text-[23px]"
                                      >
                                        אוודי 5455
                                      </Heading>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-5 md:flex-col">
                                    <div className="flex w-[32%] flex-col gap-[18px] md:w-full">
                                      <Img
                                        src="images/img_car11_qgcqjcnfp_204x354.png"
                                        alt="Car11qgcqjcnfp"
                                        className="h-[204px] rounded-[16px] object-cover"
                                      />
                                      <Img
                                        src="images/img_car11_qgcqjcnfp_1.png"
                                        alt="Car11qgcqjcnfp"
                                        className="h-[204px] rounded-[16px] object-cover"
                                      />
                                    </div>
                                    <div className="relative h-[428px] flex-1 md:w-full md:flex-none md:self-stretch">
                                      <Img
                                        src="images/defaultNoData.png"
                                        alt="Imageone"
                                        className="absolute m-auto h-px object-cover"
                                      />
                                      <div className="absolute left-0 right-0 top-[24.36px] mx-auto flex flex-1 flex-col items-start gap-[124px] px-3.5 lg:gap-[93px] md:gap-[93px] sm:gap-[62px]">
                                        <Button
                                          size="lg"
                                          shape="round"
                                          className="ml-2.5 min-w-[126px] rounded-[16px] px-[18px] font-dmsans font-medium capitalize md:ml-0"
                                        >
                                          ממתין לאישור
                                        </Button>
                                        <div className="mr-1 flex justify-between gap-5 self-stretch md:mr-0">
                                          <div className="flex w-[8%] justify-center rounded-[22px] bg-white-a700_7f p-3.5">
                                            <Img
                                              src="images/img_arrow_left_secondary__primary_white_3.svg"
                                              alt="Arrowleftfour"
                                              className="h-[12px]"
                                            />
                                          </div>
                                          <div className="flex w-[8%] justify-center rounded-[22px] bg-white-a700_7f p-3.5">
                                            <Img
                                              src="images/img_arrow_right_secondary__primary_white_2.svg"
                                              alt="Arrowrightfive"
                                              className="h-[12px]"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mb-[156px]">
                                    <div className="mb-[46px]">
                                      <div className="flex flex-col gap-1.5 rounded-md bg-secondary-primary_white">
                                        <div className="flex items-center justify-center rounded-md border-b border-solid border-gray-400_08 bg-gray-100_01 p-3.5">
                                          <Img
                                            src="images/img_checkmark_black_900_03_1.svg"
                                            alt="Checkmarkone"
                                            className="h-[22px] self-end"
                                          />
                                          <div className="flex flex-1 justify-end">
                                            <Heading
                                              size="ass_20"
                                              as="h5"
                                              className="text-[20px] font-semibold lg:text-[17px]"
                                            >
                                              פרטי הרכב
                                            </Heading>
                                          </div>
                                        </div>
                                        <div className="mx-[34px] mb-3 flex items-start md:mx-0 md:flex-col">
                                          <div className="mt-2 flex flex-1 flex-col items-center gap-[22px] px-14 md:self-stretch md:px-5 sm:px-4">
                                            <div className="flex w-[92%] items-center justify-end gap-[99px] lg:w-full md:w-full">
                                              <Text
                                                size="textxl"
                                                as="p"
                                                className="!font-heebo text-[16px] font-normal lg:text-[13px]"
                                              >
                                                2002
                                              </Text>
                                              <div className="flex w-[24%] items-center justify-end gap-2 border-l border-solid border-gray-200">
                                                <Text
                                                  size="h4_assistant16px_r"
                                                  as="p"
                                                  className="self-end text-[16px] font-normal lg:text-[13px]"
                                                >
                                                  שנת יצור
                                                </Text>
                                                <Img
                                                  src="images/img_calendar.svg"
                                                  alt="Calendaroneone"
                                                  className="h-[18px]"
                                                />
                                              </div>
                                            </div>
                                            <div className="flex w-[92%] items-center justify-end gap-[41px] lg:w-full md:w-full">
                                              <Text
                                                size="textxl"
                                                as="p"
                                                className="self-end text-[16px] font-normal lg:text-[13px]"
                                              >
                                                1329 ליטר בנזין
                                              </Text>
                                              <div className="flex w-[22%] items-center justify-end gap-2 border-l border-solid border-gray-200">
                                                <Text
                                                  size="textxl"
                                                  as="p"
                                                  className="self-end text-[16px] font-normal lg:text-[13px]"
                                                >
                                                  מנוע
                                                </Text>
                                                <Img
                                                  src="images/img_artboard_2_copy_11.svg"
                                                  alt="Artboard2copy"
                                                  className="h-[22px]"
                                                />
                                              </div>
                                            </div>
                                            <div className="flex w-[92%] items-center justify-end gap-[98px] lg:w-full md:w-full">
                                              <Text
                                                size="textxl"
                                                as="p"
                                                className="self-end text-[16px] font-normal lg:text-[13px]"
                                              >
                                                2283
                                              </Text>
                                              <div className="flex w-[24%] items-center justify-end gap-[9px] border-l border-solid border-gray-200">
                                                <Text
                                                  size="textxl"
                                                  as="p"
                                                  className="self-end text-[16px] font-normal lg:text-[13px]"
                                                >
                                                  גיר
                                                </Text>
                                                <Img
                                                  src="images/img_vector_black_900_03_1.svg"
                                                  alt="Vectoroneone"
                                                  className="h-[14px]"
                                                />
                                              </div>
                                            </div>
                                            <div className="flex w-[92%] items-center justify-end gap-24 lg:w-full md:w-full">
                                              <Text
                                                size="textxl"
                                                as="p"
                                                className="self-end text-[16px] font-normal lg:text-[13px]"
                                              >
                                                2283
                                              </Text>
                                              <div className="flex w-[26%] justify-center gap-2 border-l border-solid border-gray-200">
                                                <Text
                                                  size="textxl"
                                                  as="p"
                                                  className="text-[16px] font-normal lg:text-[13px]"
                                                >
                                                  תיבת הילוכים
                                                </Text>
                                                <Img
                                                  src="images/img_artboard_2.svg"
                                                  alt="Artboardtwoone"
                                                  className="h-[20px]"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                          <div className="mt-2 flex w-[30%] flex-col gap-[22px] self-end md:w-full">
                                            <div className="flex gap-2">
                                              <div className="flex flex-1 justify-end">
                                                <Text
                                                  size="textxl"
                                                  as="p"
                                                  className="!font-heebo text-[16px] font-normal lg:text-[13px]"
                                                >
                                                  5211154444
                                                </Text>
                                              </div>
                                              <div className="flex w-[42%] justify-center border-l border-solid border-gray-200">
                                                <div className="flex w-full items-center justify-end gap-1.5">
                                                  <Text
                                                    size="h4_assistant16px_r"
                                                    as="p"
                                                    className="text-[16px] font-normal lg:text-[13px]"
                                                  >
                                                    מס’ רישוי
                                                  </Text>
                                                  <Img
                                                    src="images/img_icon_black_900_01_22x22.svg"
                                                    alt="Icononeone"
                                                    className="h-[22px]"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                            <div className="flex items-center justify-end gap-7">
                                              <Text
                                                size="textxl"
                                                as="p"
                                                className="!font-heebo text-[16px] font-normal lg:text-[13px]"
                                              >
                                                רובר אנגליה
                                              </Text>
                                              <div className="flex w-[38%] items-center justify-end gap-[18px] border-l border-solid border-gray-200">
                                                <Text
                                                  size="h4_assistant16px_r"
                                                  as="p"
                                                  className="mt-1.5 self-end text-[16px] font-normal lg:text-[13px]"
                                                >
                                                  יצרן
                                                </Text>
                                                <Img
                                                  src="images/img_signal_black_900_03_1.svg"
                                                  alt="Signaloneone"
                                                  className="h-[18px]"
                                                />
                                              </div>
                                            </div>
                                            <div className="flex justify-end gap-2.5">
                                              <Text
                                                size="textxl"
                                                as="p"
                                                className="w-[32%] text-right !font-heebo text-[16px] font-normal leading-[27px] lg:text-[13px]"
                                              >
                                                MPD SERENA
                                              </Text>
                                              <div className="flex w-[36%] justify-end border-l border-solid border-gray-200">
                                                <div className="flex w-full items-center justify-end gap-[15px]">
                                                  <Text
                                                    size="h4_assistant16px_r"
                                                    as="p"
                                                    className="self-end text-[16px] font-normal lg:text-[13px]"
                                                  >
                                                    דגם
                                                  </Text>
                                                  <Img
                                                    src="images/img_icon_black_900_01_22x22.svg"
                                                    alt="Iconthreeone"
                                                    className="h-[22px]"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                            <div className="flex gap-2">
                                              <div className="flex flex-1 justify-end">
                                                <Text
                                                  size="textxl"
                                                  as="p"
                                                  className="text-[16px] font-normal lg:text-[13px]"
                                                >
                                                  MPD SERENA
                                                </Text>
                                              </div>
                                              <div className="flex w-[36%] justify-center border-l border-solid border-gray-200">
                                                <div className="flex w-full items-center justify-end gap-3.5">
                                                  <Text
                                                    size="h4_assistant16px_r"
                                                    as="p"
                                                    className="self-end text-[16px] font-normal lg:text-[13px]"
                                                  >
                                                    תת דגם
                                                  </Text>
                                                  <Img
                                                    src="images/img_icon_black_900_01_22x22.svg"
                                                    alt="Iconfiveone"
                                                    className="h-[22px]"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                            <div className="flex gap-2">
                                              <div className="flex flex-1 justify-end">
                                                <Text
                                                  size="textxl"
                                                  as="p"
                                                  className="self-end text-[16px] font-normal lg:text-[13px]"
                                                >
                                                  178,000
                                                </Text>
                                              </div>
                                              <div className="flex w-[36%] justify-center gap-3.5 border-l border-solid border-gray-200">
                                                <Text
                                                  size="h4_assistant16px_r"
                                                  as="p"
                                                  className="self-end text-[16px] font-normal lg:text-[13px]"
                                                >
                                                  ק”ש נוכחי
                                                </Text>
                                                <Img
                                                  src="images/img_artboard_2_copy_6.svg"
                                                  alt="Artboard2copy"
                                                  className="h-[20px]"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex items-center justify-center gap-[50px] rounded-md border border-solid border-blue_gray-100 bg-secondary-primary_white p-5">
                                        <Img
                                          src="images/img_arrow_left_secondary__primary_white_2.svg"
                                          alt="Arrowleftsix"
                                          className="h-[22px] self-start"
                                        />
                                        <div className="flex flex-1 justify-end">
                                          <Heading
                                            size="ass_20"
                                            as="h5"
                                            className="text-[20px] font-semibold lg:text-[17px]"
                                          >
                                            מידע על העיסקה
                                          </Heading>
                                        </div>
                                      </div>
                                      <div className="mb-[136px] flex items-center justify-center gap-[50px] rounded-md border border-solid border-blue_gray-100 bg-secondary-primary_white p-5 sm:flex-col">
                                        <Img
                                          src="images/img_arrow_left_secondary__primary_white_2.svg"
                                          alt="Arrowlefteight"
                                          className="h-[22px] self-start sm:w-full"
                                        />
                                        <div className="flex flex-1 justify-end sm:self-stretch">
                                          <Heading
                                            size="ass_20"
                                            as="h5"
                                            className="text-[20px] font-semibold lg:text-[17px]"
                                          >
                                            מפרט טכני
                                          </Heading>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="relative z-[1] ml-[-6px] flex w-[30%] justify-center p-4 md:ml-0 md:w-full">
                                  <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                    <div className="flex flex-col items-start">
                                      <Img src="images/img_search.svg" alt="Searchoneone" className="h-[20px]" />
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="ml-9 flex w-[14%] flex-col gap-[22px] lg:ml-0 md:ml-0">
                                <div className="flex items-center justify-end gap-[34px]">
                                  <Text
                                    size="textxl"
                                    as="p"
                                    className="self-end !font-heebo text-[16px] font-normal lg:text-[13px]"
                                  >
                                    שחור
                                  </Text>
                                  <div className="flex w-[56%] items-center justify-end gap-[19px] border-l border-solid border-gray-200">
                                    <Text
                                      size="textxl"
                                      as="p"
                                      className="self-end text-[16px] font-normal lg:text-[13px]"
                                    >
                                      צבע
                                    </Text>
                                    <Img
                                      src="images/img_artboard_2_copy.svg"
                                      alt="Artboard2copy"
                                      className="h-[22px]"
                                    />
                                  </div>
                                </div>
                                <div className="flex items-center justify-end gap-[33px]">
                                  <Text
                                    size="textxl"
                                    as="p"
                                    className="!font-heebo text-[16px] font-normal lg:text-[13px]"
                                  >
                                    4
                                  </Text>
                                  <div className="flex w-[58%] items-center justify-end gap-[17px] border-l border-solid border-gray-200">
                                    <Text
                                      size="h4_assistant16px_r"
                                      as="p"
                                      className="self-end text-[16px] font-normal lg:text-[13px]"
                                    >
                                      יד
                                    </Text>
                                    <Img
                                      src="images/img_artboard_2_copy_3.svg"
                                      alt="Artboard2copy"
                                      className="h-[24px]"
                                    />
                                  </div>
                                </div>
                                <div className="flex items-center justify-end gap-7">
                                  <Heading size="heading2xl" as="h6" className="text-[16px] font-bold lg:text-[13px]">
                                    ?
                                  </Heading>
                                  <div className="flex items-center gap-2 border-l border-solid border-gray-200">
                                    <Text
                                      size="h4_assistant16px_r"
                                      as="p"
                                      className="self-end text-[16px] font-normal lg:text-[13px]"
                                    >
                                      בעלות מקורית
                                    </Text>
                                    <Img
                                      src="images/img_artboard_2_copy_3.svg"
                                      alt="Artboard2copy"
                                      className="h-[24px]"
                                    />
                                  </div>
                                </div>
                                <div className="flex items-center justify-center gap-[26px]">
                                  <Text
                                    size="textxl"
                                    as="p"
                                    className="!font-heebo text-[16px] font-normal lg:text-[13px]"
                                  >
                                    1,205 ש”ח
                                  </Text>
                                  <div className="flex flex-1 items-center justify-center">
                                    <Text
                                      size="h4_assistant16px_r"
                                      as="p"
                                      className="self-end text-[16px] font-normal lg:text-[13px]"
                                    >
                                      אגרת ריוי שנתיתי
                                    </Text>
                                    <div className="flex w-[20%] justify-end border-l border-solid border-gray-200 py-1">
                                      <div className="h-[18px] w-[18px] border border-solid border-black-900_03" />
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
                </div>
                <div className="absolute left-0 top-0 m-auto flex w-[16%] justify-center gap-1 rounded-br-lg bg-gray-100">
                  <div className="w-full">
                    <div className="flex items-center justify-center gap-1">
                      <Heading size="headingmd" as="p" className="text-[12px] font-bold !text-gray-900_04">
                        <span className="text-gray-900_04">&nbsp;</span>
                        <span className="font-heebo font-medium text-gray-600">lbl_lbl23</span>
                      </Heading>
                      <Img
                        src="images/img_signal_red_a700_03_10x10.png"
                        alt="Signaloneone"
                        className="h-[10px] object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex items-center justify-center gap-0.5">
                      <Heading size="textxs" as="p" className="!font-heebo text-[12px] font-medium !text-gray-600">
                        מודעות במכרז
                      </Heading>
                      <Img src="images/img_vector_deep_orange_500.svg" alt="Vectorthreeone" className="h-[12px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative z-[2] ml-[-82px] flex w-[10%] items-start justify-center md:ml-0 md:w-full">
              <div className="flex flex-1 items-start">
                <div className="relative z-[3] mt-10 flex flex-1 flex-col items-end gap-[30px]">
                  <Button size="6xl" className="mt-[92px] w-[52px] rounded-lg px-4">
                    <Img src="images/img_search_secondary__primary_white.svg" />
                  </Button>
                  <div className="flex flex-col gap-1 self-stretch">
                    <div className="px-3.5 py-4">
                      <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                        <div className="flex flex-col items-end">
                          <Img src="images/img__secondary__primary_white.svg" alt="Imageone" className="h-[20px]" />
                        </div>
                      </a>
                    </div>
                    <div className="flex justify-end">
                      <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                        <Button size="6xl" className="w-[50px] rounded-lg px-3.5">
                          <Img src="images/img__20x20.svg" />
                        </Button>
                      </a>
                    </div>
                    <div className="px-3.5 py-4">
                      <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                        <div className="flex flex-col items-end">
                          <Img src="images/img__2.svg" alt="Imageoneone" className="h-[20px]" />
                        </div>
                      </a>
                    </div>
                    <div className="px-3.5 py-4">
                      <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                        <div className="flex flex-col items-end">
                          <Img src="images/img__red_a700_01.svg" alt="Imagetwoone" className="h-[20px]" />
                        </div>
                      </a>
                    </div>
                    <div className="px-3.5 py-4">
                      <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                        <div className="flex flex-col items-end">
                          <Img src="images/img__4.svg" alt="Imagethreeone" className="h-[20px]" />
                        </div>
                      </a>
                    </div>
                    <div className="flex justify-end p-3.5">
                      <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                        <div className="flex h-[20px] w-[12%] flex-col items-start bg-[url(/public/images/img_bell.svg)] bg-cover bg-no-repeat p-0.5 lg:h-auto lg:w-full md:h-auto md:w-full">
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
                    <div className="mb-[58px] px-3.5 py-4">
                      <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                        <div className="flex flex-col items-end">
                          <Img src="images/img__5.svg" alt="Imagefourone" className="h-[20px]" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="relative ml-[-70px] w-[30%] self-center rounded-[16px] bg-black-900_03 px-3.5 py-9 sm:py-4">
                  <div className="mt-[896px] flex flex-col items-center">
                    <Heading
                      size="headinglg"
                      as="p"
                      className="!font-inter text-[14px] font-semibold !text-secondary-primary_white"
                    >
                      גילי עטיה
                    </Heading>
                    <Heading size="headingmd" as="p" className="!font-inter text-[12px] font-semibold !text-yellow-800">
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
              <div className="relative z-[4] ml-[-88px] mt-[18px] flex w-[30%] justify-center">
                <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                  <div className="flex w-full flex-col gap-1.5">
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
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[1080px] flex-1 bg-gray-100 shadow-xs" />
          <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
            <div className="absolute bottom-px left-0 right-0 z-[5] mx-auto h-[236px] w-full max-w-[1446px] lg:px-5 md:px-5">
              <Img
                src="images/img_rectangle_1528.png"
                alt="Imagefiveone"
                className="absolute right-px top-0 m-auto h-[150px] w-[78%] rounded-[20px] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-[76%] items-center justify-center gap-1 sm:relative sm:flex-col">
                <div className="flex flex-1 flex-wrap justify-end gap-2 px-1.5 sm:self-stretch">
                  <Text as="p" className="text-[18px] font-normal !text-secondary-primary_white lg:text-[15px]">
                    8.9.24
                  </Text>
                  <Heading
                    size="h4_assistant_18px_b"
                    as="h2"
                    className="text-[18px] font-bold !text-secondary-primary_white lg:text-[15px]"
                  >
                    סיום תשלום:
                  </Heading>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Text as="p" className="text-[18px] font-normal !text-secondary-primary_white lg:text-[15px]">
                    8.2.24
                  </Text>
                  <Heading
                    size="heading2xl"
                    as="h3"
                    className="self-end text-[16px] font-bold !text-secondary-primary_white lg:text-[13px]"
                  >
                    איסוף:
                  </Heading>
                </div>
                <div className="flex flex-wrap items-end gap-2.5">
                  <Text as="p" className="text-[18px] font-normal !text-secondary-primary_white lg:text-[15px]">
                    חדרה
                  </Text>
                  <Heading
                    size="h4_assistant_18px_b"
                    as="h4"
                    className="text-[18px] font-bold !text-secondary-primary_white lg:text-[15px]"
                  >
                    מיקום ההצעה:
                  </Heading>
                </div>
                <div className="flex flex-wrap">
                  <Text as="p" className="text-[18px] font-normal !text-secondary-primary_white lg:text-[15px]">
                    8.2.24
                  </Text>
                  <Heading
                    size="h4_assistant_18px_b"
                    as="h5"
                    className="text-[18px] font-bold !text-secondary-primary_white lg:text-[15px]"
                  >
                    מועד ההצעה:
                  </Heading>
                </div>
              </div>
              <div className="absolute left-0 right-0 top-[15.08px] mx-5 flex flex-1 justify-center p-2 lg:mx-0 md:mx-0">
                <div className="flex w-[80%] items-start justify-center lg:w-full md:w-full md:flex-col">
                  <div className="flex flex-1 items-start justify-end self-center pl-14 pr-[74px] lg:pr-8 md:flex-col md:self-stretch md:px-5 sm:px-4">
                    <Img
                      src="images/img_icon_secondary__primary_white_24x24.svg"
                      alt="Icononeone"
                      className="mt-3 h-[24px] md:w-full"
                    />
                    <div className="flex w-[80%] items-start justify-center gap-[42px] self-center px-2.5 md:w-full sm:flex-col">
                      <div className="flex w-[46%] items-start justify-center gap-1.5 sm:w-full">
                        <Heading
                          size="heading3xl"
                          as="h6"
                          className="self-end !font-heebo text-[17.83px] font-bold !text-secondary-primary_white lg:text-[14px]"
                        >
                          ₪
                        </Heading>
                        <div className="mb-1.5 flex flex-1 justify-center border-b border-solid border-blue_gray-400 px-11 md:px-5 sm:px-4">
                          <Heading
                            size="heading8xl"
                            as="h3"
                            className="self-end !font-dmsans text-[29.72px] font-bold !text-secondary-primary_white lg:text-[24px] md:text-[23px] sm:text-[21px]"
                          >
                            165,000
                          </Heading>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Heading
                    size="text6xl"
                    as="p"
                    className="!font-heebo text-[35px] font-medium !text-secondary-primary_white lg:text-[29px] md:text-[29px] sm:text-[27px]"
                  >
                    הצעת מחיר לרכב
                  </Heading>
                </div>
              </div>
              <Img
                src="images/img_car11_qgcqjcnfp_124x130.png"
                alt="Car11qgcqjcnfp"
                className="absolute right-[22px] top-[15px] m-auto h-[124px] w-[8%] rounded-md object-contain"
              />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
