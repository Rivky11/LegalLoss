import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text } from "../../components";
import AllAddsDealerCubesRow from "../../components/AllAddsDealerCubesRow";
import AllAddsDealerLinesRownineteen from "../../components/AllAddsDealerLinesRownineteen";
import AllAddsProviderCubesColumnclose from "../../components/AllAddsProviderCubesColumnclose";
import ApprovedAdsDealerLinesVariant4 from "../../components/ApprovedAdsDealerLinesVariant4";
import SettingsAndUserProfile from "../../components/SettingsAndUserProfile";
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

export default function ApprovedAdsDealerLinesPage() {
  return (
    <>
      <Helmet>
        <title>Rivky miler&#39;s Application15</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-100">
        <div className="flex justify-center bg-gray-100 py-5 shadow-xs">
          <div className="container-12xl mt-1.5 flex justify-center lg:px-5 md:px-5">
            <div className="w-full overflow-x-scroll">
              <div className="flex w-[1880px] items-center gap-10 md:flex-col">
                <div className="w-[10%] md:w-full">
                  <div className="flex flex-col gap-[26px] rounded-[20px] bg-secondary-primary_white px-3 py-5 shadow-xs">
                    <div>
                      <div className="relative z-[1] ml-[22px] mr-4 flex justify-center md:mx-0">
                        <Text as="p" className="mt-1.5 !font-heebo text-[18px] font-medium lg:text-[15px]">
                          המודעות שלי
                        </Text>
                      </div>
                      <div className="relative mt-[-20px] h-[24px] border-b border-solid border-gray-200" />
                    </div>
                    <div className="mx-8 mb-[338px] flex flex-col gap-3 md:mx-0">
                      <Suspense fallback={<div>Loading feed...</div>}>
                        {data.map((d, index) => (
                          <AllAddsDealerCubesRow {...d} key={"one" + index} />
                        ))}
                      </Suspense>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 items-center md:flex-col md:self-stretch">
                  <div className="flex flex-1 items-center md:flex-col md:self-stretch">
                    <Tabs
                      className="relative h-[1030px] flex-1 md:w-full md:flex-none md:self-stretch"
                      selectedTabClassName="text-black-900 font-semibold text-[16px]"
                      selectedTabPanelClassName="px-8 mx-auto sm:px-4 !relative tab-panel--selected"
                    >
                      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1">
                        <div className="relative z-[3] mr-11 flex flex-col items-start gap-2 md:mr-0">
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
                          <div className="relative ml-6 h-[54px] self-stretch md:ml-0">
                            <div className="absolute bottom-0 left-0 right-0 top-0 mx-4 my-auto flex h-max flex-1 items-center justify-end gap-[22px] py-1.5 lg:mx-0 md:mx-0">
                              <Heading
                                size="h3_assistant_25px_m"
                                as="h3"
                                className="text-[25px] font-medium lg:text-[21px]"
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
                              <div className="relative mt-[-28px] flex h-[42px] items-center justify-center bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat px-14 lg:h-auto md:h-auto md:px-5 sm:px-4">
                                <ApprovedAdsDealerLinesVariant4 />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative mt-[-88px] h-[1024px] rounded-[20px] bg-secondary-primary_white shadow-xs" />
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
                                <AllAddsDealerLinesRownineteen className="relative mb-[682px] mt-[-772px] p-2" />
                                <div className="relative z-[5] flex flex-col gap-1.5">
                                  <SettingsAndUserProfile />
                                  <div className="flex items-center justify-center border-b border-solid border-gray-200 px-1 py-3 md:flex-col">
                                    <div className="flex w-[16%] justify-center self-end md:w-full">
                                      <div className="flex w-full items-center">
                                        <Img
                                          src="images/img_settings_black_900.svg"
                                          alt="Settingsfive"
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
                                      <div className="flex w-full items-center justify-center">
                                        <Img
                                          src="images/img_settings_black_900.svg"
                                          alt="Settingsseven"
                                          className="h-[14px]"
                                        />
                                        <Heading size="headingxl" as="h5" className="text-[15px] font-semibold">
                                          לצפיה
                                        </Heading>
                                        <Img
                                          src="images/img_vector_deep_orange_500.svg"
                                          alt="Vectorfiveone"
                                          className="ml-2 h-[12px] self-start"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex flex-1 items-center justify-center md:flex-col md:self-stretch">
                                      <Button
                                        shape="round"
                                        className="min-w-[112px] rounded-[14px] border border-solid border-light_green-800 px-[31px] font-dmsans font-medium capitalize !text-light_green-800 sm:px-4"
                                      >
                                        מאושר
                                      </Button>
                                      <div className="ml-10 flex w-[16%] items-center justify-center gap-[18px] rounded-[14px] bg-secondary-primary_white md:ml-0 md:w-full">
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
                                      <div className="flex flex-1 items-start justify-end md:self-stretch">
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
                                          className="ml-2.5 self-center !font-heebo text-[18px] font-bold !text-red-a700_03 lg:text-[15px]"
                                        >
                                          40,000
                                        </Heading>
                                        <Img
                                          src="images/img_user_secondary__primary_white.svg"
                                          alt="Userthreeone"
                                          className="ml-2.5 h-[18px]"
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
                                      <div className="flex items-start gap-2 self-end">
                                        <div className="flex items-start self-center">
                                          <Img
                                            src="images/img_settings_black_900.svg"
                                            alt="Settingseleven"
                                            className="h-[14px]"
                                          />
                                          <Heading
                                            size="headingxl"
                                            as="p"
                                            className="self-center text-[15px] font-semibold"
                                          >
                                            לצפיה
                                          </Heading>
                                        </div>
                                        <Img
                                          src="images/img_vector_deep_orange_500.svg"
                                          alt="Vectorsevenone"
                                          className="h-[12px]"
                                        />
                                      </div>
                                      <div className="flex flex-1 items-center justify-center md:flex-col md:self-stretch">
                                        <Button
                                          shape="round"
                                          className="min-w-[112px] rounded-[14px] border border-solid border-light_green-800 px-[31px] font-dmsans font-medium capitalize !text-light_green-800 sm:px-4"
                                        >
                                          מאושר
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
                                            alt="Televisionfive"
                                            className="h-[22px]"
                                          />
                                        </div>
                                        <div className="flex flex-1 items-start justify-end md:self-stretch">
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
                                            className="ml-2.5 self-center !font-heebo text-[18px] font-bold !text-red-a700_03 lg:text-[15px]"
                                          >
                                            40,000
                                          </Heading>
                                          <Img
                                            src="images/img_user_secondary__primary_white.svg"
                                            alt="Userfiveone"
                                            className="ml-2.5 h-[18px]"
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
                                          className="min-w-[112px] rounded-[14px] border border-solid border-light_green-800 px-[31px] font-dmsans font-medium capitalize !text-light_green-800 sm:px-4"
                                        >
                                          מאושר
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
                                        <div className="flex flex-1 items-start justify-center gap-2.5 md:self-stretch">
                                          <div className="flex flex-1 items-start justify-end self-center">
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
                                              className="ml-2.5 self-center !font-heebo text-[18px] font-bold !text-red-a700_03 lg:text-[15px]"
                                            >
                                              40,000
                                            </Heading>
                                          </div>
                                          <Img
                                            src="images/img_user_secondary__primary_white.svg"
                                            alt="Usersevenone"
                                            className="h-[18px]"
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
                                        <div className="flex flex-1 justify-between gap-5 px-1 md:self-stretch">
                                          <Button
                                            shape="round"
                                            className="ml-1 min-w-[112px] rounded-[14px] border border-solid border-light_green-800 px-[31px] font-dmsans font-medium capitalize !text-light_green-800 lg:ml-0 md:ml-0 sm:px-4"
                                          >
                                            מאושר
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
                                        <div className="ml-3.5 flex w-[20%] items-start justify-center gap-2.5 md:ml-0 md:w-full">
                                          <div className="flex flex-1 items-start justify-end self-center">
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
                                              className="ml-2.5 self-center !font-heebo text-[18px] font-bold !text-red-a700_03 lg:text-[15px]"
                                            >
                                              40,000
                                            </Heading>
                                          </div>
                                          <Img
                                            src="images/img_user_secondary__primary_white.svg"
                                            alt="Usernineone"
                                            className="h-[18px]"
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
                                        <Button
                                          shape="round"
                                          className="min-w-[112px] rounded-[14px] border border-solid border-light_green-800 px-[31px] font-dmsans font-medium capitalize !text-light_green-800 sm:px-4"
                                        >
                                          מאושר
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
                                            alt="Televisionfive"
                                            className="h-[22px]"
                                          />
                                        </div>
                                        <div className="flex flex-1 items-start justify-end md:self-stretch">
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
                                            className="ml-2.5 self-center !font-heebo text-[18px] font-bold !text-red-a700_03 lg:text-[15px]"
                                          >
                                            40,000
                                          </Heading>
                                          <Img
                                            src="images/img_user_secondary__primary_white.svg"
                                            alt="Userelevenone"
                                            className="ml-2.5 h-[18px]"
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
                                        <Button
                                          shape="round"
                                          className="min-w-[112px] rounded-[14px] border border-solid border-light_green-800 px-[31px] font-dmsans font-medium capitalize !text-light_green-800 sm:px-4"
                                        >
                                          מאושר
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
                                        <div className="flex flex-1 items-start justify-end md:self-stretch">
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
                                            className="ml-2.5 self-center !font-heebo text-[18px] font-bold !text-red-a700_03 lg:text-[15px]"
                                          >
                                            40,000
                                          </Heading>
                                          <Img
                                            src="images/img_user_secondary__primary_white.svg"
                                            alt="Userthirteen"
                                            className="ml-2.5 h-[18px]"
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
                                        <Button
                                          shape="round"
                                          className="min-w-[112px] rounded-[14px] border border-solid border-light_green-800 px-[31px] font-dmsans font-medium capitalize !text-light_green-800 sm:px-4"
                                        >
                                          מאושר
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
                                        <div className="flex flex-1 items-start justify-end md:self-stretch">
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
                                            className="ml-2.5 self-center !font-heebo text-[18px] font-bold !text-red-a700_03 lg:text-[15px]"
                                          >
                                            40,000
                                          </Heading>
                                          <Img
                                            src="images/img_user_secondary__primary_white.svg"
                                            alt="Userfifteenone"
                                            className="ml-2.5 h-[18px]"
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
                                        <Button
                                          shape="round"
                                          className="min-w-[112px] rounded-[14px] border border-solid border-light_green-800 px-[31px] font-dmsans font-medium capitalize !text-light_green-800 sm:px-4"
                                        >
                                          מאושר
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
                                        <div className="flex flex-1 items-start justify-end md:self-stretch">
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
                                            className="ml-2.5 self-center !font-heebo text-[18px] font-bold !text-red-a700_03 lg:text-[15px]"
                                          >
                                            40,000
                                          </Heading>
                                          <Img
                                            src="images/img_user_secondary__primary_white.svg"
                                            alt="Userseventeen"
                                            className="ml-2.5 h-[18px]"
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
                                          className="min-w-[112px] rounded-[14px] border border-solid border-light_green-800 px-[31px] font-dmsans font-medium capitalize !text-light_green-800 sm:px-4"
                                        >
                                          מאושר
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
                                        <div className="flex flex-1 items-start justify-end md:self-stretch">
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
                                            className="ml-2.5 self-center !font-heebo text-[18px] font-bold !text-red-a700_03 lg:text-[15px]"
                                          >
                                            40,000
                                          </Heading>
                                          <Img
                                            src="images/img_user_secondary__primary_white.svg"
                                            alt="Usernineteen"
                                            className="ml-2.5 h-[18px]"
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
                                          alt="Vectorfive"
                                          className="ml-2 h-[12px] self-start"
                                        />
                                      </div>
                                      <div className="flex flex-1 items-center justify-center md:flex-col md:self-stretch">
                                        <Button
                                          shape="round"
                                          className="min-w-[112px] rounded-[14px] border border-solid border-light_green-800 px-[31px] font-dmsans font-medium capitalize !text-light_green-800 sm:px-4"
                                        >
                                          מאושר
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
                                        <div className="flex flex-1 items-start justify-end md:self-stretch">
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
                                            className="ml-2.5 self-center !font-heebo text-[18px] font-bold !text-red-a700_03 lg:text-[15px]"
                                          >
                                            40,000
                                          </Heading>
                                          <Img
                                            src="images/img_user_secondary__primary_white.svg"
                                            alt="Usertwentyone"
                                            className="ml-2.5 h-[18px]"
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
                                    <div className="h-[26px] border-b border-solid border-gray-200" />
                                    <div className="relative mx-1 mt-[-16px] flex items-start justify-center md:mx-0 md:flex-col">
                                      <div className="mt-1 flex items-center">
                                        <Img
                                          src="images/img_vector_4x14.png"
                                          alt="Vectorseven"
                                          className="h-[4px] self-end object-cover"
                                        />
                                        <Heading size="headingxl" as="p" className="text-[15px] font-semibold">
                                          הגש הצעה
                                        </Heading>
                                      </div>
                                      <div className="mt-1 flex flex-wrap items-start self-end">
                                        <Img
                                          src="images/img_settings_black_900.svg"
                                          alt="Settings"
                                          className="h-[14px] self-center"
                                        />
                                        <Heading size="headingxl" as="p" className="mb-1.5 text-[15px] font-semibold">
                                          לצפיה
                                        </Heading>
                                        <Img
                                          src="images/img_vector_deep_orange_500.svg"
                                          alt="Vectornine"
                                          className="ml-2 mt-1 h-[12px]"
                                        />
                                      </div>
                                      <div className="flex flex-1 items-center justify-center md:flex-col md:self-stretch">
                                        <Heading
                                          size="textmd"
                                          as="p"
                                          className="flex justify-center self-end rounded-md border border-solid border-light_green-800 bg-secondary-primary_white px-8 !font-dmsans text-[14px] font-medium capitalize !text-light_green-800 sm:px-4"
                                        >
                                          מאושר
                                        </Heading>
                                        <div className="ml-10 flex w-[16%] justify-center gap-[18px] self-end rounded-md bg-secondary-primary_white px-1.5 md:ml-0 md:w-full">
                                          <Heading
                                            size="textmd"
                                            as="p"
                                            className="self-end !font-dmsans text-[14px] font-medium capitalize !text-black-900"
                                          >
                                            פירוק
                                          </Heading>
                                          <Img
                                            src="images/img_television_red_a700_03_5.png"
                                            alt="Television"
                                            className="h-[10px] self-end object-cover"
                                          />
                                        </div>
                                        <div className="flex flex-1 items-end justify-end md:self-stretch">
                                          <Img
                                            src="images/img_plus_8x18.png"
                                            alt="Plusone"
                                            className="h-[8px] object-cover"
                                          />
                                          <Heading
                                            size="headinglg"
                                            as="p"
                                            className="ml-1.5 !font-heebo text-[14px] font-bold !text-red-a700_03"
                                          >
                                            ₪
                                          </Heading>
                                          <Heading
                                            as="h6"
                                            className="ml-2.5 self-center !font-heebo text-[18px] font-bold !text-red-a700_03 lg:text-[15px]"
                                          >
                                            40,000
                                          </Heading>
                                          <Img
                                            src="images/img_user_8x18.png"
                                            alt="Userone"
                                            className="ml-2.5 h-[8px] object-cover"
                                          />
                                        </div>
                                        <Heading
                                          as="h6"
                                          className="ml-7 self-end text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                        >
                                          8.9.23
                                        </Heading>
                                        <Heading
                                          as="h6"
                                          className="ml-[42px] self-end text-[18px] font-semibold lg:text-[15px] md:ml-0"
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
                                          className="ml-[52px] self-end text-[18px] font-semibold lg:text-[15px] md:ml-0"
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
                                          className="ml-[46px] self-end text-[18px] font-semibold lg:text-[15px] md:ml-0"
                                        >
                                          X8 – 5.0 במוו
                                        </Heading>
                                      </div>
                                      <Img
                                        src="images/img_signal_secondary__primary_white_4.png"
                                        alt="Signalseven"
                                        className="ml-1 mt-2 h-[6px] object-cover md:ml-0 md:w-full"
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
                    <div className="relative z-[6] ml-[-82px] flex w-[12%] items-start justify-center md:ml-0 md:w-full">
                      <div className="flex flex-1 items-start">
                        <div className="relative z-[7] mt-10 flex flex-1 flex-col items-end gap-[30px]">
                          <Button size="6xl" className="mt-[92px] w-[52px] rounded-lg px-4">
                            <Img src="images/img_search_secondary__primary_white.svg" />
                          </Button>
                          <div className="flex flex-col gap-1 self-stretch">
                            <div className="px-3.5 py-4">
                              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                <div className="flex flex-col items-end">
                                  <Img
                                    src="images/img__secondary__primary_white.svg"
                                    alt="Imagethirteen"
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
                                  <Img src="images/img__2.svg" alt="Imagefourteen" className="h-[20px]" />
                                </div>
                              </a>
                            </div>
                            <div className="px-3.5 py-4">
                              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                <div className="flex flex-col items-end">
                                  <Img src="images/img__red_a700_01.svg" alt="Imagefifteen" className="h-[20px]" />
                                </div>
                              </a>
                            </div>
                            <div className="px-3.5 py-4">
                              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                <div className="flex flex-col items-end">
                                  <Img src="images/img__4.svg" alt="Imagesixteen" className="h-[20px]" />
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
                                  <Img src="images/img__5.svg" alt="Imageseventeen" className="h-[20px]" />
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
                      <div className="relative z-[8] ml-[-88px] mt-[18px] flex w-[30%] justify-center">
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
                    className="relative z-[9] ml-[-88px] h-[40px] w-[6%] object-contain md:ml-0 md:w-full"
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
