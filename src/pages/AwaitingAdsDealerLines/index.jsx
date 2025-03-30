import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text } from "../../components";
import AllAddsDealerCubesRow from "../../components/AllAddsDealerCubesRow";
import AllAddsDealerLinesRownineteen from "../../components/AllAddsDealerLinesRownineteen";
import AllAddsProviderCubesColumnclose from "../../components/AllAddsProviderCubesColumnclose";
import AwaitingAdsDealerLinesVariant3 from "../../components/AwaitingAdsDealerLinesVariant3";
import React, { Suspense } from "react";
import { TabPanel, Tabs } from "react-tabs";

const data = [
  { twenty: "20", prop: "מודעות חדשות" },
  { twenty: "20", prop: "מודעות" },
  { twenty: "20", prop: "מודעות בהמתנה לאישור" },
  { twenty: "20", prop: "מודעות מאושרות" },
  { twenty: "20", prop: "מודעות למכרז" },
  { twenty: "20", prop: "חבילת מודעות במכרז" },
  { twenty: "20", prop: "מודעות בארכיון" },
];

export default function AwaitingAdsDealerLinesPage() {
  return (
    <>
      <Helmet>
        <title>Rivky miler&#39;s Application15</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-100">
        <div className="flex justify-center bg-gray-100 py-3.5 shadow-xs">
          <div className="container-12xl mt-3 flex justify-center lg:px-5 md:px-5">
            <div className="w-full overflow-x-scroll">
              <div className="flex w-[1880px] items-center gap-10 md:flex-col">
                <div className="w-[10%] md:w-full">
                  <div className="flex flex-col gap-[26px] rounded-[20px] bg-secondary-primary_white px-3 py-7 shadow-xs sm:py-4">
                    <div className="flex flex-col items-center">
                      <Text as="p" className="relative z-[1] !font-heebo text-[18px] font-medium lg:text-[15px]">
                        המודעות שלי
                      </Text>
                      <div className="relative mt-[-18px] h-[24px] self-stretch border-b border-solid border-gray-200" />
                    </div>
                    <div className="mx-8 mb-[328px] flex flex-col gap-3 md:mx-0">
                      <Suspense fallback={<div>Loading feed...</div>}>
                        {data.map((d, index) => (
                          <AllAddsDealerCubesRow {...d} key={"Data1" + index} />
                        ))}
                      </Suspense>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 items-center md:flex-col md:self-stretch">
                  <div className="flex flex-1 items-center md:flex-col md:self-stretch">
                    <Tabs
                      className="relative h-[1036px] flex-1 md:w-full md:flex-none md:self-stretch"
                      selectedTabClassName="text-black-900 font-semibold text-[16px]"
                      selectedTabPanelClassName="px-8 mx-auto sm:px-4 !relative tab-panel--selected"
                    >
                      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1">
                        <div className="relative z-[3] mr-[60px] flex flex-col items-start gap-3 md:mr-0">
                          <div className="flex w-[14%] justify-center gap-1 rounded-br-lg bg-gray-100 lg:w-full md:w-full">
                            <div className="w-full">
                              <div className="flex items-center justify-center gap-1">
                                <Heading size="headingmd" as="h1" className="text-[12px] font-bold !text-gray-900_04">
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
                                  as="h2"
                                  className="!font-heebo text-[12px] font-medium !text-gray-600"
                                >
                                  מודעות במכרז
                                </Heading>
                                <Img
                                  src="images/img_vector_deep_orange_500.svg"
                                  alt="Vectoroneone"
                                  className="h-[12px]"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative ml-6 h-[46px] self-stretch lg:h-auto md:ml-0 md:h-auto">
                            <div className="flex flex-1 items-center justify-end gap-[22px]">
                              <Heading
                                size="h3_assistant_25px_m"
                                as="h3"
                                className="self-end text-[25px] font-medium lg:text-[21px]"
                              >
                                מודעות רכבים
                              </Heading>
                              <Img
                                src="images/img_car_red_a700_03_3.png"
                                alt="Caroneone"
                                className="h-[36px] object-cover"
                              />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1">
                              <div className="relative z-[4] flex gap-[15px]">
                                <Img
                                  src="images/img_button1.svg"
                                  alt="Buttononeone"
                                  className="h-[32px] rounded-[10px]"
                                />
                                <Button size="md" className="w-[32px] rounded-[10px] px-1.5">
                                  <Img src="images/img_megaphone_red_a700_03.svg" />
                                </Button>
                              </div>
                              <div className="relative mr-[52px] mt-[-28px] flex h-[42px] items-center justify-center bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat px-14 lg:h-auto md:mr-0 md:h-auto md:px-5 sm:px-4">
                                <AwaitingAdsDealerLinesVariant3 />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative mt-[-86px] h-[1024px] rounded-[20px] bg-secondary-primary_white shadow-xs" />
                      </div>
                      {[...Array(7)].map((_, index) => (
                        <TabPanel
                          key={`tab-panel${index}`}
                          className="absolute bottom-0 left-0 right-0 mx-auto flex-1 items-center px-8 sm:px-4"
                        >
                          <div className="absolute bottom-0 left-0 right-0 w-full flex-1">
                            <div className="mr-2.5 flex flex-col gap-[18px] md:mr-0">
                              <AllAddsProviderCubesColumnclose />
                              <div className="ml-2.5 py-11 md:ml-0 md:py-5 sm:py-4">
                                <AllAddsDealerLinesRownineteen className="relative mb-[688px] mt-[-778px] p-2" />
                                <div className="relative z-[5] flex flex-col gap-1.5">
                                  <div className="mt-[22px] flex flex-col gap-1.5">
                                    <div className="flex items-center justify-between gap-5 border-b border-solid border-gray-200 px-1 py-3 md:flex-col">
                                      <div className="flex items-center self-end">
                                        <Img
                                          src="images/img_settings_black_900.svg"
                                          alt="Settingsoneone"
                                          className="h-[14px]"
                                        />
                                        <Heading
                                          size="headingxl"
                                          as="h4"
                                          className="self-end text-[15px] font-semibold"
                                        >
                                          הגש הצעה
                                        </Heading>
                                      </div>
                                      <div className="flex flex-1 items-center justify-center md:flex-col md:self-stretch">
                                        <div className="flex flex-wrap items-start self-end px-3.5">
                                          <Img
                                            src="images/img_settings_black_900.svg"
                                            alt="Settingsthree"
                                            className="h-[14px]"
                                          />
                                          <Heading
                                            size="headingxl"
                                            as="h5"
                                            className="self-center text-[15px] font-semibold"
                                          >
                                            לצפיה
                                          </Heading>
                                          <Img
                                            src="images/img_vector_deep_orange_500.svg"
                                            alt="Vectorthreeone"
                                            className="ml-2 h-[12px]"
                                          />
                                        </div>
                                        <div className="flex flex-1 items-center justify-center md:flex-col md:self-stretch">
                                          <Button
                                            shape="round"
                                            className="min-w-[112px] rounded-[14px] border border-solid border-black-900_03 pl-[17px] pr-[11px] font-dmsans font-medium capitalize"
                                          >
                                            ממתין להצעה
                                          </Button>
                                          <div className="ml-10 flex w-[14%] items-center justify-center gap-[18px] rounded-[14px] bg-secondary-primary_white md:ml-0 md:w-full">
                                            <Heading
                                              size="textmd"
                                              as="h6"
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
                                          <div className="flex flex-1 items-center justify-end md:self-stretch">
                                            <Img src="images/img_plus.svg" alt="Plusoneone" className="h-[18px]" />
                                            <Heading
                                              size="headinglg"
                                              as="p"
                                              className="ml-1.5 self-end !font-heebo text-[14px] font-bold !text-red-a700_03"
                                            >
                                              ₪
                                            </Heading>
                                            <Heading
                                              as="h6"
                                              className="ml-[34px] !font-heebo text-[18px] font-bold !text-red-a700_03 lg:text-[15px]"
                                            >
                                              0
                                            </Heading>
                                            <Img
                                              src="images/img_user_secondary__primary_white.svg"
                                              alt="Useroneone"
                                              className="ml-[34px] h-[18px]"
                                            />
                                          </div>
                                          <Heading
                                            as="h6"
                                            className="ml-7 text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            8.9.23
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[42px] text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            4
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[50px] self-end text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            80,000
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[54px] self-end text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            אוטומטי
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[52px] text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            2022
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[46px] self-end text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            במוו
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[46px] text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            X8 – 5.0 במוו
                                          </Heading>
                                        </div>
                                        <Img
                                          src="images/img_signal_secondary__primary_white_1.svg"
                                          alt="Signalthreeone"
                                          className="ml-1 h-[16px] md:ml-0 md:w-full"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex items-center justify-between gap-5 border-b border-solid border-gray-200 px-1 py-3 md:flex-col">
                                      <div className="flex items-center self-end">
                                        <Img
                                          src="images/img_settings_black_900.svg"
                                          alt="Settingsfive"
                                          className="h-[14px]"
                                        />
                                        <Heading size="headingxl" as="p" className="self-end text-[15px] font-semibold">
                                          הגש הצעה
                                        </Heading>
                                      </div>
                                      <div className="flex flex-1 items-center justify-center md:flex-col md:self-stretch">
                                        <div className="flex flex-wrap items-center self-end">
                                          <Img
                                            src="images/img_settings_black_900.svg"
                                            alt="Settingsseven"
                                            className="h-[14px]"
                                          />
                                          <Heading size="headingxl" as="p" className="text-[15px] font-semibold">
                                            לצפיה
                                          </Heading>
                                          <Img
                                            src="images/img_vector_deep_orange_500.svg"
                                            alt="Vectorfiveone"
                                            className="ml-2 h-[12px] self-start"
                                          />
                                        </div>
                                        <div className="flex flex-1 items-center justify-center md:flex-col md:self-stretch">
                                          <Button
                                            shape="round"
                                            className="min-w-[112px] rounded-[14px] border border-solid border-black-900_03 pl-[17px] pr-[11px] font-dmsans font-medium capitalize"
                                          >
                                            ממתין להצעה
                                          </Button>
                                          <div className="ml-10 flex w-[16%] items-center justify-center gap-[18px] rounded-[14px] bg-secondary-primary_white md:ml-0 md:w-full">
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
                                          <div className="flex flex-1 items-center justify-end md:self-stretch">
                                            <Img src="images/img_plus.svg" alt="Plusthreeone" className="h-[18px]" />
                                            <Heading
                                              size="headinglg"
                                              as="p"
                                              className="ml-1.5 self-end !font-heebo text-[14px] font-bold !text-red-a700_03"
                                            >
                                              ₪
                                            </Heading>
                                            <Heading
                                              as="h6"
                                              className="ml-[34px] !font-heebo text-[18px] font-bold !text-red-a700_03 lg:text-[15px]"
                                            >
                                              0
                                            </Heading>
                                            <Img
                                              src="images/img_user_secondary__primary_white.svg"
                                              alt="Userthreeone"
                                              className="ml-[34px] h-[18px]"
                                            />
                                          </div>
                                          <Heading
                                            as="h6"
                                            className="ml-7 text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            8.9.23
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[42px] text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            4
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[50px] self-end text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            80,000
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[54px] self-end text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            אוטומטי
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[52px] text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            2022
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[46px] self-end text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            במוו
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[46px] text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            X8 – 5.0 במוו
                                          </Heading>
                                        </div>
                                        <Img
                                          src="images/img_signal_secondary__primary_white_1.svg"
                                          alt="Signalfiveone"
                                          className="ml-1 h-[16px] md:ml-0 md:w-full"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex items-center justify-between gap-5 border-b border-solid border-gray-200 px-1 py-3 md:flex-col">
                                      <div className="flex items-center self-end">
                                        <Img
                                          src="images/img_settings_black_900.svg"
                                          alt="Settingsnine"
                                          className="h-[14px]"
                                        />
                                        <Heading size="headingxl" as="p" className="self-end text-[15px] font-semibold">
                                          הגש הצעה
                                        </Heading>
                                      </div>
                                      <div className="flex flex-1 items-center justify-center md:flex-col md:self-stretch">
                                        <div className="flex flex-wrap items-center self-end">
                                          <Img
                                            src="images/img_settings_black_900.svg"
                                            alt="Settingseleven"
                                            className="h-[14px]"
                                          />
                                          <Heading size="headingxl" as="p" className="text-[15px] font-semibold">
                                            לצפיה
                                          </Heading>
                                          <Img
                                            src="images/img_vector_deep_orange_500.svg"
                                            alt="Vectorsevenone"
                                            className="ml-2 h-[12px] self-start"
                                          />
                                        </div>
                                        <div className="flex flex-1 items-center justify-center md:flex-col md:self-stretch">
                                          <Button
                                            shape="round"
                                            className="min-w-[112px] rounded-[14px] border border-solid border-black-900_03 pl-[17px] pr-[11px] font-dmsans font-medium capitalize"
                                          >
                                            ממתין להצעה
                                          </Button>
                                          <div className="ml-10 flex w-[14%] items-center justify-center gap-[18px] rounded-[14px] bg-secondary-primary_white md:ml-0 md:w-full">
                                            <Heading
                                              size="textmd"
                                              as="p"
                                              className="self-end !font-dmsans text-[14px] font-medium capitalize !text-black-900"
                                            >
                                              פירוק
                                            </Heading>
                                            <Img
                                              src="images/img_television_red_a700_03_1.svg"
                                              alt="Televisionfive"
                                              className="h-[22px]"
                                            />
                                          </div>
                                          <div className="flex flex-1 items-center justify-center gap-7 md:self-stretch">
                                            <div className="flex flex-1 items-center justify-end">
                                              <Img src="images/img_plus.svg" alt="Plusfiveone" className="h-[18px]" />
                                              <Heading
                                                size="headinglg"
                                                as="p"
                                                className="ml-1.5 self-end !font-heebo text-[14px] font-bold !text-red-a700_03"
                                              >
                                                ₪
                                              </Heading>
                                              <Heading
                                                as="h6"
                                                className="ml-[34px] !font-heebo text-[18px] font-bold !text-red-a700_03 lg:text-[15px]"
                                              >
                                                0
                                              </Heading>
                                              <Img
                                                src="images/img_user_secondary__primary_white.svg"
                                                alt="Userfiveone"
                                                className="ml-[34px] h-[18px]"
                                              />
                                            </div>
                                            <Heading
                                              as="h6"
                                              className="self-end text-[18px] font-semibold lg:text-[15px]"
                                            >
                                              8.9.23
                                            </Heading>
                                          </div>
                                          <Heading
                                            as="h6"
                                            className="ml-10 text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            4
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[50px] self-end text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            80,000
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[54px] self-end text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            אוטומטי
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[52px] text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            2022
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[46px] self-end text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            במוו
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[46px] text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            X8 – 5.0 במוו
                                          </Heading>
                                        </div>
                                        <Img
                                          src="images/img_signal_secondary__primary_white_1.svg"
                                          alt="Signalsevenone"
                                          className="ml-1 h-[16px] md:ml-0 md:w-full"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex items-center justify-between gap-5 border-b border-solid border-gray-200 px-1 py-3 md:flex-col">
                                      <div className="flex items-center self-end">
                                        <Img
                                          src="images/img_settings_black_900.svg"
                                          alt="Settingsone"
                                          className="h-[14px]"
                                        />
                                        <Heading size="headingxl" as="p" className="self-end text-[15px] font-semibold">
                                          הגש הצעה
                                        </Heading>
                                      </div>
                                      <div className="flex flex-1 items-center justify-center md:flex-col md:self-stretch">
                                        <div className="flex flex-wrap items-center self-end">
                                          <Img
                                            src="images/img_settings_black_900.svg"
                                            alt="Settingsthree"
                                            className="h-[14px]"
                                          />
                                          <Heading size="headingxl" as="p" className="text-[15px] font-semibold">
                                            לצפיה
                                          </Heading>
                                          <Img
                                            src="images/img_vector_deep_orange_500.svg"
                                            alt="Vectornineone"
                                            className="ml-2 h-[12px] self-start"
                                          />
                                        </div>
                                        <div className="flex flex-1 items-center justify-center md:flex-col md:self-stretch">
                                          <Button
                                            shape="round"
                                            className="min-w-[112px] rounded-[14px] border border-solid border-black-900_03 pl-[17px] pr-[11px] font-dmsans font-medium capitalize"
                                          >
                                            ממתין להצעה
                                          </Button>
                                          <div className="ml-10 flex w-[16%] items-center justify-center gap-[18px] rounded-[14px] bg-secondary-primary_white md:ml-0 md:w-full">
                                            <Heading
                                              size="textmd"
                                              as="p"
                                              className="self-end !font-dmsans text-[14px] font-medium capitalize !text-black-900"
                                            >
                                              פירוק
                                            </Heading>
                                            <Img
                                              src="images/img_television_red_a700_03_1.svg"
                                              alt="Television"
                                              className="h-[22px]"
                                            />
                                          </div>
                                          <div className="flex flex-1 items-center justify-end md:self-stretch">
                                            <Img src="images/img_plus.svg" alt="Plussevenone" className="h-[18px]" />
                                            <Heading
                                              size="headinglg"
                                              as="p"
                                              className="ml-1.5 self-end !font-heebo text-[14px] font-bold !text-red-a700_03"
                                            >
                                              ₪
                                            </Heading>
                                            <Heading
                                              as="h6"
                                              className="ml-[34px] !font-heebo text-[18px] font-bold !text-red-a700_03 lg:text-[15px]"
                                            >
                                              0
                                            </Heading>
                                            <Img
                                              src="images/img_user_secondary__primary_white.svg"
                                              alt="Usersevenone"
                                              className="ml-[34px] h-[18px]"
                                            />
                                          </div>
                                          <Heading
                                            as="h6"
                                            className="ml-7 text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            8.9.23
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[42px] text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            4
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[50px] self-end text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            80,000
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[54px] self-end text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            אוטומטי
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[52px] text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            2022
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[46px] self-end text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            במוו
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[46px] text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            X8 – 5.0 במוו
                                          </Heading>
                                        </div>
                                        <Img
                                          src="images/img_signal_secondary__primary_white_1.svg"
                                          alt="Signalnineone"
                                          className="ml-1 h-[16px] md:ml-0 md:w-full"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex items-center justify-between gap-5 border-b border-solid border-gray-200 px-1 py-3 md:flex-col">
                                      <div className="flex items-center self-end">
                                        <Img
                                          src="images/img_settings_black_900.svg"
                                          alt="Settingsfive"
                                          className="h-[14px]"
                                        />
                                        <Heading size="headingxl" as="p" className="self-end text-[15px] font-semibold">
                                          הגש הצעה
                                        </Heading>
                                      </div>
                                      <div className="flex flex-1 items-center justify-center md:flex-col md:self-stretch">
                                        <div className="flex flex-wrap items-center self-end">
                                          <Img
                                            src="images/img_settings_black_900.svg"
                                            alt="Settingsseven"
                                            className="h-[14px]"
                                          />
                                          <Heading size="headingxl" as="p" className="text-[15px] font-semibold">
                                            לצפיה
                                          </Heading>
                                          <Img
                                            src="images/img_vector_deep_orange_500.svg"
                                            alt="Vectoreleven"
                                            className="ml-2 h-[12px] self-start"
                                          />
                                        </div>
                                        <div className="flex flex-1 items-center justify-center md:flex-col md:self-stretch">
                                          <Button
                                            shape="round"
                                            className="min-w-[112px] rounded-[14px] border border-solid border-black-900_03 pl-[17px] pr-[11px] font-dmsans font-medium capitalize"
                                          >
                                            ממתין להצעה
                                          </Button>
                                          <div className="ml-10 flex w-[16%] items-center justify-center gap-[18px] rounded-[14px] bg-secondary-primary_white md:ml-0 md:w-full">
                                            <Heading
                                              size="textmd"
                                              as="p"
                                              className="self-end !font-dmsans text-[14px] font-medium capitalize !text-black-900"
                                            >
                                              פירוק
                                            </Heading>
                                            <Img
                                              src="images/img_television_red_a700_03_1.svg"
                                              alt="Televisionnine"
                                              className="h-[22px]"
                                            />
                                          </div>
                                          <div className="flex flex-1 items-center justify-end md:self-stretch">
                                            <Img src="images/img_plus.svg" alt="Plusnineone" className="h-[18px]" />
                                            <Heading
                                              size="headinglg"
                                              as="p"
                                              className="ml-1.5 self-end !font-heebo text-[14px] font-bold !text-red-a700_03"
                                            >
                                              ₪
                                            </Heading>
                                            <Heading
                                              as="h6"
                                              className="ml-[34px] !font-heebo text-[18px] font-bold !text-red-a700_03 lg:text-[15px]"
                                            >
                                              0
                                            </Heading>
                                            <Img
                                              src="images/img_user_secondary__primary_white.svg"
                                              alt="Usernineone"
                                              className="ml-[34px] h-[18px]"
                                            />
                                          </div>
                                          <Heading
                                            as="h6"
                                            className="ml-7 text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            8.9.23
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[42px] text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            4
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[50px] self-end text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            80,000
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[54px] self-end text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            אוטומטי
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[52px] text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            2022
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[46px] self-end text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            במוו
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[46px] text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            X8 – 5.0 במוו
                                          </Heading>
                                        </div>
                                        <Img
                                          src="images/img_signal_secondary__primary_white_1.svg"
                                          alt="Signaleleven"
                                          className="ml-1 h-[16px] md:ml-0 md:w-full"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex items-center justify-between gap-5 border-b border-solid border-gray-200 px-1 py-3 md:flex-col">
                                      <div className="flex items-center self-end">
                                        <Img
                                          src="images/img_settings_black_900.svg"
                                          alt="Settingsnine"
                                          className="h-[14px]"
                                        />
                                        <Heading size="headingxl" as="p" className="self-end text-[15px] font-semibold">
                                          הגש הצעה
                                        </Heading>
                                      </div>
                                      <div className="flex flex-1 items-center justify-center md:flex-col md:self-stretch">
                                        <div className="flex flex-wrap items-center self-end">
                                          <Img
                                            src="images/img_settings_black_900.svg"
                                            alt="Settingseleven"
                                            className="h-[14px]"
                                          />
                                          <Heading size="headingxl" as="p" className="text-[15px] font-semibold">
                                            לצפיה
                                          </Heading>
                                          <Img
                                            src="images/img_vector_deep_orange_500.svg"
                                            alt="Vectorthirteen"
                                            className="ml-2 h-[12px] self-start"
                                          />
                                        </div>
                                        <div className="flex flex-1 items-center justify-center md:flex-col md:self-stretch">
                                          <div className="flex flex-1 justify-between gap-5 md:self-stretch">
                                            <Button
                                              shape="round"
                                              className="ml-2.5 min-w-[112px] rounded-[14px] border border-solid border-black-900_03 pl-[17px] pr-[11px] font-dmsans font-medium capitalize"
                                            >
                                              ממתין להצעה
                                            </Button>
                                            <div className="flex w-[42%] items-center justify-center gap-[18px] rounded-[14px] bg-secondary-primary_white">
                                              <Heading
                                                size="textmd"
                                                as="p"
                                                className="self-end !font-dmsans text-[14px] font-medium capitalize !text-black-900"
                                              >
                                                פירוק
                                              </Heading>
                                              <Img
                                                src="images/img_television_red_a700_03_1.svg"
                                                alt="Televisionfive"
                                                className="h-[22px]"
                                              />
                                            </div>
                                          </div>
                                          <div className="ml-5 flex w-[30%] items-center justify-center gap-7 md:ml-0 md:w-full">
                                            <div className="flex flex-1 items-center justify-center">
                                              <Img src="images/img_plus.svg" alt="Pluselevenone" className="h-[18px]" />
                                              <Heading
                                                size="headinglg"
                                                as="p"
                                                className="ml-1.5 self-end !font-heebo text-[14px] font-bold !text-red-a700_03"
                                              >
                                                ₪
                                              </Heading>
                                              <Heading
                                                as="h6"
                                                className="ml-[34px] !font-heebo text-[18px] font-bold !text-red-a700_03 lg:text-[15px]"
                                              >
                                                0
                                              </Heading>
                                              <Img
                                                src="images/img_user_secondary__primary_white.svg"
                                                alt="Userelevenone"
                                                className="ml-[34px] h-[18px]"
                                              />
                                            </div>
                                            <Heading
                                              as="h6"
                                              className="self-end text-[18px] font-semibold lg:text-[15px]"
                                            >
                                              8.9.23
                                            </Heading>
                                          </div>
                                          <Heading
                                            as="h6"
                                            className="ml-10 text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            4
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[50px] self-end text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            80,000
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[54px] self-end text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            אוטומטי
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[52px] text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            2022
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[46px] self-end text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            במוו
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[46px] text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            X8 – 5.0 במוו
                                          </Heading>
                                        </div>
                                        <Img
                                          src="images/img_signal_secondary__primary_white_1.svg"
                                          alt="Signalthirteen"
                                          className="ml-1 h-[16px] md:ml-0 md:w-full"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex items-center justify-between gap-5 border-b border-solid border-gray-200 px-1 py-3 md:flex-col">
                                      <div className="flex items-center self-end">
                                        <Img
                                          src="images/img_settings_black_900.svg"
                                          alt="Settings"
                                          className="h-[14px]"
                                        />
                                        <Heading size="headingxl" as="p" className="self-end text-[15px] font-semibold">
                                          הגש הצעה
                                        </Heading>
                                      </div>
                                      <div className="flex flex-1 items-center justify-center md:flex-col md:self-stretch">
                                        <div className="flex flex-wrap items-center self-end">
                                          <Img
                                            src="images/img_settings_black_900.svg"
                                            alt="Settings"
                                            className="h-[14px]"
                                          />
                                          <Heading size="headingxl" as="p" className="text-[15px] font-semibold">
                                            לצפיה
                                          </Heading>
                                          <Img
                                            src="images/img_vector_deep_orange_500.svg"
                                            alt="Vectorfifteen"
                                            className="ml-2 h-[12px] self-start"
                                          />
                                        </div>
                                        <div className="flex flex-1 items-center justify-center md:flex-col md:self-stretch">
                                          <div className="flex flex-1 justify-between gap-5 px-1 md:self-stretch">
                                            <Button
                                              shape="round"
                                              className="ml-1 min-w-[112px] rounded-[14px] border border-solid border-black-900_03 pl-[17px] pr-[11px] font-dmsans font-medium capitalize lg:ml-0 md:ml-0"
                                            >
                                              ממתין להצעה
                                            </Button>
                                            <div className="flex w-[42%] items-center justify-center gap-[18px] rounded-[14px] bg-secondary-primary_white">
                                              <Heading
                                                size="textmd"
                                                as="p"
                                                className="self-end !font-dmsans text-[14px] font-medium capitalize !text-black-900"
                                              >
                                                פירוק
                                              </Heading>
                                              <Img
                                                src="images/img_television_red_a700_03_1.svg"
                                                alt="Television"
                                                className="h-[22px]"
                                              />
                                            </div>
                                          </div>
                                          <div className="ml-3.5 flex flex-wrap items-center md:ml-0">
                                            <Img src="images/img_plus.svg" alt="Plusthirteen" className="h-[18px]" />
                                            <Heading
                                              size="headinglg"
                                              as="p"
                                              className="ml-1.5 self-end !font-heebo text-[14px] font-bold !text-red-a700_03"
                                            >
                                              ₪
                                            </Heading>
                                            <Heading
                                              as="h6"
                                              className="ml-[34px] !font-heebo text-[18px] font-bold !text-red-a700_03 lg:text-[15px]"
                                            >
                                              0
                                            </Heading>
                                            <Img
                                              src="images/img_user_secondary__primary_white.svg"
                                              alt="Userthirteen"
                                              className="ml-[34px] h-[18px]"
                                            />
                                          </div>
                                          <Heading
                                            as="h6"
                                            className="ml-7 text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            8.9.23
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[42px] text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            4
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[50px] self-end text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            80,000
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[54px] self-end text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            אוטומטי
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[52px] text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            2022
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[46px] self-end text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            במוו
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[46px] text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            X8 – 5.0 במוו
                                          </Heading>
                                        </div>
                                        <Img
                                          src="images/img_signal_secondary__primary_white_1.svg"
                                          alt="Signalfifteen"
                                          className="ml-1 h-[16px] md:ml-0 md:w-full"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex items-center justify-between gap-5 border-b border-solid border-gray-200 px-1 py-3 md:flex-col">
                                      <div className="flex items-center self-end">
                                        <Img
                                          src="images/img_settings_black_900.svg"
                                          alt="Settings"
                                          className="h-[14px]"
                                        />
                                        <Heading size="headingxl" as="p" className="self-end text-[15px] font-semibold">
                                          הגש הצעה
                                        </Heading>
                                      </div>
                                      <div className="flex flex-1 items-center justify-center md:flex-col md:self-stretch">
                                        <div className="flex flex-wrap items-center self-end">
                                          <Img
                                            src="images/img_settings_black_900.svg"
                                            alt="Settings"
                                            className="h-[14px]"
                                          />
                                          <Heading size="headingxl" as="p" className="text-[15px] font-semibold">
                                            לצפיה
                                          </Heading>
                                          <Img
                                            src="images/img_vector_deep_orange_500.svg"
                                            alt="Vectorone"
                                            className="ml-2 h-[12px] self-start"
                                          />
                                        </div>
                                        <div className="flex flex-1 items-center justify-center md:flex-col md:self-stretch">
                                          <div className="flex flex-1 justify-between gap-5 px-1 md:self-stretch">
                                            <Button
                                              shape="round"
                                              className="ml-1 min-w-[112px] rounded-[14px] border border-solid border-black-900_03 pl-[17px] pr-[11px] font-dmsans font-medium capitalize lg:ml-0 md:ml-0"
                                            >
                                              ממתין להצעה
                                            </Button>
                                            <div className="flex w-[42%] items-center justify-center gap-[18px] rounded-[14px] bg-secondary-primary_white">
                                              <Heading
                                                size="textmd"
                                                as="p"
                                                className="self-end !font-dmsans text-[14px] font-medium capitalize !text-black-900"
                                              >
                                                פירוק
                                              </Heading>
                                              <Img
                                                src="images/img_television_red_a700_03_1.svg"
                                                alt="Televisionnine"
                                                className="h-[22px]"
                                              />
                                            </div>
                                          </div>
                                          <div className="ml-3.5 flex flex-wrap items-center md:ml-0">
                                            <Img src="images/img_plus.svg" alt="Plusfifteenone" className="h-[18px]" />
                                            <Heading
                                              size="headinglg"
                                              as="p"
                                              className="ml-1.5 self-end !font-heebo text-[14px] font-bold !text-red-a700_03"
                                            >
                                              ₪
                                            </Heading>
                                            <Heading
                                              as="h6"
                                              className="ml-[34px] !font-heebo text-[18px] font-bold !text-red-a700_03 lg:text-[15px]"
                                            >
                                              0
                                            </Heading>
                                            <Img
                                              src="images/img_user_secondary__primary_white.svg"
                                              alt="Userfifteenone"
                                              className="ml-[34px] h-[18px]"
                                            />
                                          </div>
                                          <Heading
                                            as="h6"
                                            className="ml-7 text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            8.9.23
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[42px] text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            4
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[50px] self-end text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            80,000
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[54px] self-end text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            אוטומטי
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[52px] text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            2022
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[46px] self-end text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            במוו
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[46px] text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            X8 – 5.0 במוו
                                          </Heading>
                                        </div>
                                        <Img
                                          src="images/img_signal_secondary__primary_white_1.svg"
                                          alt="Signalone"
                                          className="ml-1 h-[16px] md:ml-0 md:w-full"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex items-center justify-between gap-5 border-b border-solid border-gray-200 px-1 py-3 md:flex-col">
                                      <div className="flex items-center self-end">
                                        <Img
                                          src="images/img_settings_black_900.svg"
                                          alt="Settings"
                                          className="h-[14px]"
                                        />
                                        <Heading size="headingxl" as="p" className="self-end text-[15px] font-semibold">
                                          הגש הצעה
                                        </Heading>
                                      </div>
                                      <div className="flex flex-1 items-center justify-center md:flex-col md:self-stretch">
                                        <div className="flex flex-wrap items-center self-end">
                                          <Img
                                            src="images/img_settings_black_900.svg"
                                            alt="Settings Eleven"
                                            className="h-[14px]"
                                          />
                                          <Heading size="headingxl" as="p" className="text-[15px] font-semibold">
                                            לצפיה
                                          </Heading>
                                          <Img
                                            src="images/img_vector_deep_orange_500.svg"
                                            alt="Vectornineteen"
                                            className="ml-2 h-[12px] self-start"
                                          />
                                        </div>
                                        <div className="flex flex-1 items-center justify-center md:flex-col md:self-stretch">
                                          <div className="flex flex-1 justify-between gap-5 px-1 md:self-stretch">
                                            <Button
                                              shape="round"
                                              className="ml-1 min-w-[112px] rounded-[14px] border border-solid border-black-900_03 pl-[17px] pr-[11px] font-dmsans font-medium capitalize lg:ml-0 md:ml-0"
                                            >
                                              ממתין להצעה
                                            </Button>
                                            <div className="flex w-[42%] items-center justify-center gap-[18px] rounded-[14px] bg-secondary-primary_white">
                                              <Heading
                                                size="textmd"
                                                as="p"
                                                className="self-end !font-dmsans text-[14px] font-medium capitalize !text-black-900"
                                              >
                                                פירוק
                                              </Heading>
                                              <Img
                                                src="images/img_television_red_a700_03_1.svg"
                                                alt="Television"
                                                className="h-[22px]"
                                              />
                                            </div>
                                          </div>
                                          <div className="ml-3.5 flex flex-wrap items-center md:ml-0">
                                            <Img src="images/img_plus.svg" alt="Plusseventeen" className="h-[18px]" />
                                            <Heading
                                              size="headinglg"
                                              as="p"
                                              className="ml-1.5 self-end !font-heebo text-[14px] font-bold !text-red-a700_03"
                                            >
                                              ₪
                                            </Heading>
                                            <Heading
                                              as="h6"
                                              className="ml-[34px] !font-heebo text-[18px] font-bold !text-red-a700_03 lg:text-[15px]"
                                            >
                                              0
                                            </Heading>
                                            <Img
                                              src="images/img_user_secondary__primary_white.svg"
                                              alt="Userseventeen"
                                              className="ml-[34px] h-[18px]"
                                            />
                                          </div>
                                          <Heading
                                            as="h6"
                                            className="ml-7 text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            8.9.23
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[42px] text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            4
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[50px] self-end text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            80,000
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[54px] self-end text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            אוטומטי
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[52px] text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            2022
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[46px] self-end text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            במוו
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[46px] text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            X8 – 5.0 במוו
                                          </Heading>
                                        </div>
                                        <Img
                                          src="images/img_signal_secondary__primary_white_1.svg"
                                          alt="Signalnineteen"
                                          className="ml-1 h-[16px] md:ml-0 md:w-full"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex items-center justify-between gap-5 border-b border-solid border-gray-200 px-1 py-3 md:flex-col">
                                      <div className="flex items-center self-end">
                                        <Img
                                          src="images/img_settings_black_900.svg"
                                          alt="Settings"
                                          className="h-[14px]"
                                        />
                                        <Heading size="headingxl" as="p" className="self-end text-[15px] font-semibold">
                                          הגש הצעה
                                        </Heading>
                                      </div>
                                      <div className="flex flex-1 items-center justify-center md:flex-col md:self-stretch">
                                        <div className="flex flex-wrap items-center self-end">
                                          <Img
                                            src="images/img_settings_black_900.svg"
                                            alt="Settings"
                                            className="h-[14px]"
                                          />
                                          <Heading size="headingxl" as="p" className="text-[15px] font-semibold">
                                            לצפיה
                                          </Heading>
                                          <Img
                                            src="images/img_vector_deep_orange_500.svg"
                                            alt="Vectorthree"
                                            className="ml-2 h-[12px] self-start"
                                          />
                                        </div>
                                        <div className="flex flex-1 items-center justify-center md:flex-col md:self-stretch">
                                          <Button
                                            shape="round"
                                            className="min-w-[112px] rounded-[14px] border border-solid border-black-900_03 pl-[17px] pr-[11px] font-dmsans font-medium capitalize"
                                          >
                                            ממתין להצעה
                                          </Button>
                                          <div className="ml-10 flex w-[16%] items-center justify-center gap-[18px] rounded-[14px] bg-secondary-primary_white md:ml-0 md:w-full">
                                            <Heading
                                              size="textmd"
                                              as="p"
                                              className="self-end !font-dmsans text-[14px] font-medium capitalize !text-black-900"
                                            >
                                              פירוק
                                            </Heading>
                                            <Img
                                              src="images/img_television_red_a700_03_1.svg"
                                              alt="Television"
                                              className="h-[22px]"
                                            />
                                          </div>
                                          <div className="flex flex-1 items-center justify-end md:self-stretch">
                                            <Img src="images/img_plus.svg" alt="Plusnineteen" className="h-[18px]" />
                                            <Heading
                                              size="headinglg"
                                              as="p"
                                              className="ml-1.5 self-end !font-heebo text-[14px] font-bold !text-red-a700_03"
                                            >
                                              ₪
                                            </Heading>
                                            <Heading
                                              as="h6"
                                              className="ml-[34px] !font-heebo text-[18px] font-bold !text-red-a700_03 lg:text-[15px]"
                                            >
                                              0
                                            </Heading>
                                            <Img
                                              src="images/img_user_secondary__primary_white.svg"
                                              alt="Usernineteen"
                                              className="ml-[34px] h-[18px]"
                                            />
                                          </div>
                                          <Heading
                                            as="h6"
                                            className="ml-7 text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            8.9.23
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[42px] text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            4
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[50px] self-end text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            80,000
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[54px] self-end text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            אוטומטי
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[52px] text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            2022
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[46px] self-end text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            במוו
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[46px] text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                          >
                                            X8 – 5.0 במוו
                                          </Heading>
                                        </div>
                                        <Img
                                          src="images/img_signal_secondary__primary_white_1.svg"
                                          alt="Signalthree"
                                          className="ml-1 h-[16px] md:ml-0 md:w-full"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex items-center justify-center border-b border-solid border-gray-200 px-1 py-3 md:flex-col">
                                      <div className="flex items-center self-end">
                                        <Img
                                          src="images/img_settings_black_900.svg"
                                          alt="Settings"
                                          className="h-[14px]"
                                        />
                                        <Heading size="headingxl" as="p" className="self-end text-[15px] font-semibold">
                                          הגש הצעה
                                        </Heading>
                                      </div>
                                      <div className="flex flex-wrap items-center self-end">
                                        <Img
                                          src="images/img_settings_black_900.svg"
                                          alt="Settings"
                                          className="h-[14px]"
                                        />
                                        <Heading size="headingxl" as="p" className="text-[15px] font-semibold">
                                          לצפיה
                                        </Heading>
                                        <Img
                                          src="images/img_vector_deep_orange_500.svg"
                                          alt="Vectorfive"
                                          className="ml-2 h-[12px] self-start"
                                        />
                                      </div>
                                      <div className="flex flex-1 items-center justify-center md:flex-col md:self-stretch">
                                        <Button
                                          shape="round"
                                          className="min-w-[112px] rounded-[14px] border border-solid border-black-900_03 pl-[17px] pr-[11px] font-dmsans font-medium capitalize"
                                        >
                                          ממתין להצעה
                                        </Button>
                                        <div className="ml-10 flex w-[16%] items-center justify-center gap-[18px] rounded-[14px] bg-secondary-primary_white md:ml-0 md:w-full">
                                          <Heading
                                            size="textmd"
                                            as="p"
                                            className="self-end !font-dmsans text-[14px] font-medium capitalize !text-black-900"
                                          >
                                            פירוק
                                          </Heading>
                                          <Img
                                            src="images/img_television_red_a700_03_1.svg"
                                            alt="Television"
                                            className="h-[22px]"
                                          />
                                        </div>
                                        <div className="flex flex-1 items-center justify-end md:self-stretch">
                                          <Img src="images/img_plus.svg" alt="Plustwentyone" className="h-[18px]" />
                                          <Heading
                                            size="headinglg"
                                            as="p"
                                            className="ml-1.5 self-end !font-heebo text-[14px] font-bold !text-red-a700_03"
                                          >
                                            ₪
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-[34px] !font-heebo text-[18px] font-bold !text-red-a700_03 lg:text-[15px]"
                                          >
                                            0
                                          </Heading>
                                          <Img
                                            src="images/img_user_secondary__primary_white.svg"
                                            alt="Usertwentyone"
                                            className="ml-[34px] h-[18px]"
                                          />
                                        </div>
                                        <Heading
                                          as="h6"
                                          className="ml-7 text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                        >
                                          8.9.23
                                        </Heading>
                                        <Heading
                                          as="h6"
                                          className="ml-[42px] text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                        >
                                          4
                                        </Heading>
                                        <Heading
                                          as="h6"
                                          className="ml-[50px] self-end text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                        >
                                          80,000
                                        </Heading>
                                        <Heading
                                          as="h6"
                                          className="ml-[54px] self-end text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                        >
                                          אוטומטי
                                        </Heading>
                                        <Heading
                                          as="h6"
                                          className="ml-[52px] text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                        >
                                          2022
                                        </Heading>
                                        <Heading
                                          as="h6"
                                          className="ml-[46px] self-end text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                        >
                                          במוו
                                        </Heading>
                                        <Heading
                                          as="h6"
                                          className="ml-[46px] text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                        >
                                          X8 – 5.0 במוו
                                        </Heading>
                                      </div>
                                      <Img
                                        src="images/img_signal_secondary__primary_white_1.svg"
                                        alt="Signalfive"
                                        className="ml-1 h-[16px] md:ml-0 md:w-full"
                                      />
                                    </div>
                                  </div>
                                  <div>
                                    <div className="h-[16px] border-b border-solid border-gray-200" />
                                    <div className="relative mx-1 mt-[-4px] flex items-start justify-center md:mx-0 md:flex-col">
                                      <div className="flex items-center">
                                        <Img
                                          src="images/img_vector_1x14_2.png"
                                          alt="Vectorseven"
                                          className="h-px self-end object-cover"
                                        />
                                        <Heading size="headingxl" as="p" className="text-[15px] font-semibold">
                                          הגש הצעה
                                        </Heading>
                                      </div>
                                      <div className="flex w-[8%] items-center justify-center self-end px-2.5 md:w-full">
                                        <Img
                                          src="images/img_settings_black_900.svg"
                                          alt="Settings"
                                          className="h-[14px]"
                                        />
                                        <div className="relative h-[28px] w-[70%] content-center lg:h-auto md:h-auto">
                                          <Heading
                                            size="headingxl"
                                            as="p"
                                            className="ml-auto text-[15px] font-semibold"
                                          >
                                            לצפיה
                                          </Heading>
                                          <Img
                                            src="images/img_vector_deep_orange_500.svg"
                                            alt="Vectornine"
                                            className="absolute right-2 top-1.5 m-auto h-[12px]"
                                          />
                                        </div>
                                      </div>
                                      <div className="flex flex-1 items-center justify-center md:flex-col md:self-stretch">
                                        <Heading
                                          size="textmd"
                                          as="p"
                                          className="flex items-center justify-center rounded-sm border border-solid border-black-900_03 bg-secondary-primary_white pl-3.5 pr-2 !font-dmsans text-[14px] font-medium capitalize"
                                        >
                                          ממתין להצעה
                                        </Heading>
                                        <div className="ml-10 flex items-center gap-4 rounded-sm bg-secondary-primary_white px-1.5 md:ml-0">
                                          <Heading
                                            size="textmd"
                                            as="p"
                                            className="!font-dmsans text-[14px] font-medium capitalize !text-black-900"
                                          >
                                            פירוק
                                          </Heading>
                                          <Img
                                            src="images/img_vector_red_a700_03_8.png"
                                            alt="Vectoreleven"
                                            className="h-px self-end object-cover"
                                          />
                                        </div>
                                        <div className="flex flex-1 justify-end self-end md:self-stretch">
                                          <Img
                                            src="images/img_group_1261154309_secondary__primary_white_1x18_1.png"
                                            alt="Imagethirteen"
                                            className="h-px self-end object-cover"
                                          />
                                          <Heading
                                            size="headinglg"
                                            as="p"
                                            className="relative z-[6] ml-1 self-end !font-heebo text-[14px] font-bold !text-red-a700_03"
                                          >
                                            ₪
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="!font-heebo text-[18px] font-bold !text-red-a700_03 lg:text-[15px]"
                                          >
                                            0
                                          </Heading>
                                          <Img
                                            src="images/img_group_1261154308_secondary__primary_white_1x18_1.png"
                                            alt="Imagefourteen"
                                            className="h-px self-end object-cover"
                                          />
                                        </div>
                                        <Heading
                                          as="h6"
                                          className="ml-7 text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                        >
                                          8.9.23
                                        </Heading>
                                        <Heading
                                          as="h6"
                                          className="ml-10 text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                        >
                                          4
                                        </Heading>
                                        <Heading
                                          as="h6"
                                          className="ml-10 text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                        >
                                          80,000
                                        </Heading>
                                        <Heading
                                          as="h6"
                                          className="ml-10 text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                        >
                                          אוטומטי
                                        </Heading>
                                        <Heading
                                          as="h6"
                                          className="ml-10 text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                        >
                                          2022
                                        </Heading>
                                        <Heading
                                          as="h6"
                                          className="ml-10 text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                        >
                                          במוו
                                        </Heading>
                                        <Heading
                                          as="h6"
                                          className="ml-10 text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                        >
                                          X8 – 5.0 במוו
                                        </Heading>
                                      </div>
                                      <Img
                                        src="images/img_icon_1x14_1.png"
                                        alt="Icononeone"
                                        className="ml-1 mt-1.5 h-px object-cover md:ml-0 md:w-full"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </TabPanel>
                      ))}
                    </Tabs>
                    <div className="relative z-[7] ml-[-82px] flex w-[12%] items-start justify-center md:ml-0 md:w-full">
                      <div className="flex flex-1 items-start">
                        <div className="relative z-[8] mt-10 flex flex-1 flex-col items-end gap-[30px]">
                          <Button size="6xl" className="mt-[92px] w-[52px] rounded-lg px-4">
                            <Img src="images/img_search_secondary__primary_white.svg" />
                          </Button>
                          <div className="flex flex-col gap-1 self-stretch">
                            <div className="px-3.5 py-4">
                              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                <div className="flex flex-col items-end">
                                  <Img
                                    src="images/img__secondary__primary_white.svg"
                                    alt="Imagefifteen"
                                    className="h-[20px]"
                                  />
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
                                  <Img src="images/img__2.svg" alt="Imagesixteen" className="h-[20px]" />
                                </div>
                              </a>
                            </div>
                            <div className="px-3.5 py-4">
                              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                <div className="flex flex-col items-end">
                                  <Img src="images/img__red_a700_01.svg" alt="Imageseventeen" className="h-[20px]" />
                                </div>
                              </a>
                            </div>
                            <div className="px-3.5 py-4">
                              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                <div className="flex flex-col items-end">
                                  <Img src="images/img__4.svg" alt="Imageeighteen" className="h-[20px]" />
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
                                  <Img
                                    src="images/img_layers.png"
                                    alt="Layersoneone"
                                    className="h-[18px] object-cover"
                                  />
                                </div>
                              </a>
                            </div>
                            <div className="px-3.5 py-4">
                              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                <div className="flex flex-col items-end">
                                  <Img src="images/img__5.svg" alt="Imagenineteen" className="h-[20px]" />
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
                        <div className="relative ml-[-70px] w-[30%] self-center rounded-[16px] bg-black-900_03 px-3.5 py-9 sm:py-4">
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
                      <div className="relative z-[9] ml-[-88px] mt-[18px] flex w-[30%] justify-center">
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
                  <Img
                    src="images/img_tablist.png"
                    alt="Tablistthree"
                    className="relative z-10 ml-[-88px] h-[40px] w-[6%] object-contain md:ml-0 md:w-full"
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
