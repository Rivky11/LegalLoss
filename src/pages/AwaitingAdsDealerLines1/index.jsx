import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text } from "../../components";
import AllAddsDealerCubesRow from "../../components/AllAddsDealerCubesRow";
import AllAddsDealerLinesRownineteen from "../../components/AllAddsDealerLinesRownineteen";
import AllAddsProviderCubesColumnclose from "../../components/AllAddsProviderCubesColumnclose";
import AwaitingAdsDealerLinesRow from "../../components/AwaitingAdsDealerLinesRow";
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
const data1 = [
  {
    two: "הגש הצעה",
    two1: "לצפיה",
    prop: "ממתין לאישור",
    prop1: "פירוק",
    prop2: "₪",
    plumbingrepair: "40,000",
    plumbingrepair1: "8.9.23",
    plumbingrepair2: "4",
    plumbingrepair3: "80,000",
    plumbingrepair4: "אוטומטי",
    zipcode: "2022",
    plumbingrepair5: " במוו",
    plumbingrepair6: "X8 – 5.0 במוו",
  },
  {
    two: "הגש הצעה",
    two1: "לצפיה",
    prop: "ממתין לאישור",
    prop1: "פירוק",
    prop2: "₪",
    plumbingrepair: "40,000",
    plumbingrepair1: "8.9.23",
    plumbingrepair2: "4",
    plumbingrepair3: "80,000",
    plumbingrepair4: "אוטומטי",
    zipcode: "2022",
    plumbingrepair5: " במוו",
    plumbingrepair6: "X8 – 5.0 במוו",
  },
  {
    two: "הגש הצעה",
    two1: "לצפיה",
    prop: "ממתין לאישור",
    prop1: "פירוק",
    prop2: "₪",
    plumbingrepair: "40,000",
    plumbingrepair1: "8.9.23",
    plumbingrepair2: "4",
    plumbingrepair3: "80,000",
    plumbingrepair4: "אוטומטי",
    zipcode: "2022",
    plumbingrepair5: " במוו",
    plumbingrepair6: "X8 – 5.0 במוו",
  },
  {
    two: "הגש הצעה",
    two1: "לצפיה",
    prop: "ממתין לאישור",
    prop1: "פירוק",
    prop2: "₪",
    plumbingrepair: "40,000",
    plumbingrepair1: "8.9.23",
    plumbingrepair2: "4",
    plumbingrepair3: "80,000",
    plumbingrepair4: "אוטומטי",
    zipcode: "2022",
    plumbingrepair5: " במוו",
    plumbingrepair6: "X8 – 5.0 במוו",
  },
  {
    two: "הגש הצעה",
    two1: "לצפיה",
    prop: "ממתין לאישור",
    prop1: "פירוק",
    prop2: "₪",
    plumbingrepair: "40,000",
    plumbingrepair1: "8.9.23",
    plumbingrepair2: "4",
    plumbingrepair3: "80,000",
    plumbingrepair4: "אוטומטי",
    zipcode: "2022",
    plumbingrepair5: " במוו",
    plumbingrepair6: "X8 – 5.0 במוו",
  },
  {
    two: "הגש הצעה",
    two1: "לצפיה",
    prop: "ממתין לאישור",
    prop1: "פירוק",
    prop2: "₪",
    plumbingrepair: "40,000",
    plumbingrepair1: "8.9.23",
    plumbingrepair2: "4",
    plumbingrepair3: "80,000",
    plumbingrepair4: "אוטומטי",
    zipcode: "2022",
    plumbingrepair5: " במוו",
    plumbingrepair6: "X8 – 5.0 במוו",
  },
  {
    two: "הגש הצעה",
    two1: "לצפיה",
    prop: "ממתין לאישור",
    prop1: "פירוק",
    prop2: "₪",
    plumbingrepair: "40,000",
    plumbingrepair1: "8.9.23",
    plumbingrepair2: "4",
    plumbingrepair3: "80,000",
    plumbingrepair4: "אוטומטי",
    zipcode: "2022",
    plumbingrepair5: " במוו",
    plumbingrepair6: "X8 – 5.0 במוו",
  },
  {
    two: "הגש הצעה",
    two1: "לצפיה",
    prop: "ממתין לאישור",
    prop1: "פירוק",
    prop2: "₪",
    plumbingrepair: "40,000",
    plumbingrepair1: "8.9.23",
    plumbingrepair2: "4",
    plumbingrepair3: "80,000",
    plumbingrepair4: "אוטומטי",
    zipcode: "2022",
    plumbingrepair5: " במוו",
    plumbingrepair6: "X8 – 5.0 במוו",
  },
  {
    two: "הגש הצעה",
    two1: "לצפיה",
    prop: "ממתין לאישור",
    prop1: "פירוק",
    prop2: "₪",
    plumbingrepair: "40,000",
    plumbingrepair1: "8.9.23",
    plumbingrepair2: "4",
    plumbingrepair3: "80,000",
    plumbingrepair4: "אוטומטי",
    zipcode: "2022",
    plumbingrepair5: " במוו",
    plumbingrepair6: "X8 – 5.0 במוו",
  },
  {
    two: "הגש הצעה",
    two1: "לצפיה",
    prop: "ממתין לאישור",
    prop1: "פירוק",
    prop2: "₪",
    plumbingrepair: "40,000",
    plumbingrepair1: "8.9.23",
    plumbingrepair2: "4",
    plumbingrepair3: "80,000",
    plumbingrepair4: "אוטומטי",
    zipcode: "2022",
    plumbingrepair5: " במוו",
    plumbingrepair6: "X8 – 5.0 במוו",
  },
  {
    two: "הגש הצעה",
    two1: "לצפיה",
    prop: "ממתין לאישור",
    prop1: "פירוק",
    prop2: "₪",
    plumbingrepair: "40,000",
    plumbingrepair1: "8.9.23",
    plumbingrepair2: "4",
    plumbingrepair3: "80,000",
    plumbingrepair4: "אוטומטי",
    zipcode: "2022",
    plumbingrepair5: " במוו",
    plumbingrepair6: "X8 – 5.0 במוו",
  },
];

export default function AwaitingAdsDealerLines1Page() {
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
              <div className="flex w-[1880px] items-start gap-10 md:flex-col">
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
                          <AllAddsDealerCubesRow {...d} key={"listtwenty" + index} />
                        ))}
                      </Suspense>
                    </div>
                  </div>
                </div>
                <div className="relative h-[1112px] flex-1 self-center md:w-full md:flex-none md:self-stretch">
                  <div className="absolute left-0 right-0 top-0 mx-auto h-[1030px] flex-1">
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-start">
                      <div className="relative z-[3] flex w-[86%] flex-col gap-[26px] lg:w-full md:w-full">
                        <header className="flex flex-col items-start justify-center gap-3">
                          <div className="flex w-[14%] justify-center gap-1 rounded-br-lg bg-gray-100 lg:w-full md:w-full">
                            <div className="w-full">
                              <div className="flex items-center justify-center gap-1">
                                <Heading size="headingmd" as="p" className="text-[12px] font-bold !text-gray-900_04">
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
                                  as="p"
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
                          <div className="ml-6 flex flex-col items-end self-stretch md:ml-0">
                            <div className="relative z-[5] flex flex-col items-start self-stretch">
                              <a href="#">
                                <Button
                                  size="md"
                                  className="relative z-[7] ml-[50px] w-[32px] rounded-[10px] px-1.5 md:ml-0"
                                >
                                  <Img src="images/img_megaphone_red_a700_03.svg" />
                                </Button>
                              </a>
                              <div className="relative mt-[-32px] flex flex-col items-start self-stretch">
                                <a href="#">
                                  <Img
                                    src="images/img_button1.svg"
                                    alt="Buttononeone"
                                    className="relative z-[6] h-[32px] rounded-[10px]"
                                  />
                                </a>
                                <Img
                                  src="images/defaultNoData.png"
                                  alt="Imageone"
                                  className="relative mt-[-28px] h-[40px] w-full object-cover lg:h-auto md:h-auto"
                                />
                              </div>
                            </div>
                            <div className="relative mr-4 mt-[-44px] flex w-[84%] items-start justify-between gap-5 lg:w-full md:mr-0 md:w-full md:flex-col">
                              <div className="flex w-[76%] justify-center self-center px-3.5 md:w-full">
                                <div className="mt-1 flex w-full items-start justify-center gap-6 md:flex-col">
                                  <div className="flex flex-1 flex-col items-start self-center md:self-stretch">
                                    <div className="relative z-[4] ml-[124px] flex flex-wrap gap-7 md:ml-0">
                                      <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                        <Heading
                                          size="h4_assistant_16px_b"
                                          as="h6"
                                          className="text-[16px] font-semibold !text-gray-600 lg:text-[13px]"
                                        >
                                          חבילת רכבים
                                        </Heading>
                                      </a>
                                      <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                        <Heading
                                          size="h4_assistant_16px_b"
                                          as="h6"
                                          className="text-[16px] font-semibold !text-gray-600 lg:text-[13px]"
                                        >
                                          מודעות במכרז
                                        </Heading>
                                      </a>
                                    </div>
                                    <ul className="relative !mt-[-22px] flex items-start gap-[148px] sm:flex-col sm:gap-5">
                                      <li>
                                        <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                          <Heading
                                            size="h4_assistant_16px_b"
                                            as="h6"
                                            className="text-[16px] font-semibold !text-gray-500_02 hover:!text-black-900"
                                          >
                                            מודעות בארכיון
                                          </Heading>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                          <Heading
                                            size="h4_assistant_16px_b"
                                            as="h6"
                                            className="text-[16px] font-semibold !text-gray-500_02 hover:!text-black-900"
                                          >
                                            מודעות מאושרות
                                          </Heading>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <div className="flex flex-col items-start gap-3">
                                            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                              <Heading
                                                size="h4_assistant_16px_b"
                                                as="h6"
                                                className="text-[16px] font-semibold !text-black-900 lg:text-[13px]"
                                              >
                                                מודעות ממתינות לאישור
                                              </Heading>
                                            </a>
                                            <div className="h-[2px] w-full bg-red-a700_03" />
                                          </div>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                    <Heading
                                      size="h4_assistant_16px_b"
                                      as="h6"
                                      className="text-[16px] font-semibold !text-gray-500_02 lg:text-[13px]"
                                    >
                                      מודעות חדשות
                                    </Heading>
                                  </a>
                                  <Heading
                                    size="h4_assistant_16px_b"
                                    as="h6"
                                    className="text-[16px] font-semibold !text-gray-500_02 lg:text-[13px]"
                                  >
                                    כל המודעות
                                  </Heading>
                                </div>
                              </div>
                              <div className="flex items-center gap-5">
                                <Heading
                                  size="h3_assistant_25px_m"
                                  as="p"
                                  className="self-end text-[25px] font-medium lg:text-[21px]"
                                >
                                  מודעות רכבים
                                </Heading>
                                <a href="#">
                                  <Img
                                    src="images/img_car_red_a700_03_3.png"
                                    alt="Caroneone"
                                    className="h-[36px] object-cover"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </header>
                        <AllAddsProviderCubesColumnclose className="ml-8 md:ml-0" />
                      </div>
                      <div className="relative mt-[-240px] h-[1024px] w-[90%] rounded-[20px] bg-secondary-primary_white shadow-xs" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 mx-[54px] flex flex-1 flex-col items-start py-11 lg:mx-0 md:mx-0 md:py-5 sm:py-4">
                      <AllAddsDealerLinesRownineteen className="relative mb-[682px] mt-[-772px] flex w-[88%] items-center py-2 lg:w-full md:w-full" />
                      <div className="relative z-[8] flex flex-col gap-1.5 self-stretch">
                        <div className="mr-[168px] mt-3 flex flex-col gap-1.5 md:mr-0">
                          <Suspense fallback={<div>Loading feed...</div>}>
                            {data1.map((d, index) => (
                              <AwaitingAdsDealerLinesRow {...d} key={"list" + index} />
                            ))}
                          </Suspense>
                        </div>
                        <div className="flex flex-col items-start">
                          <div className="h-[26px] w-[88%] border-b border-solid border-gray-200" />
                          <div className="relative mt-[-16px] flex items-start self-stretch md:flex-col">
                            <div className="mt-1 flex items-center">
                              <Img
                                src="images/img_vector_black_900_4x8.png"
                                alt="Vectorthreeone"
                                className="h-[4px] self-end object-cover"
                              />
                              <Heading size="headingxl" as="h1" className="text-[15px] font-semibold">
                                הגש הצעה
                              </Heading>
                            </div>
                            <div className="mt-1 flex flex-wrap items-start self-end">
                              <Img
                                src="images/img_settings_black_900.svg"
                                alt="Settingsoneone"
                                className="h-[14px] self-center"
                              />
                              <Heading size="headingxl" as="h2" className="mb-1.5 text-[15px] font-semibold">
                                לצפיה
                              </Heading>
                              <Img
                                src="images/img_vector_deep_orange_500.svg"
                                alt="Vectorfiveone"
                                className="ml-2 mt-1 h-[12px]"
                              />
                            </div>
                            <div className="flex w-[74%] items-center justify-center md:w-full md:flex-col">
                              <Heading
                                size="textmd"
                                as="h3"
                                className="flex justify-center self-end rounded-md border border-solid border-red-a700_03 bg-secondary-primary_white px-3.5 !font-dmsans text-[14px] font-medium capitalize !text-red-a700_03"
                              >
                                ממתין לאישור
                              </Heading>
                              <div className="ml-10 flex w-[16%] justify-center gap-[18px] self-end rounded-md bg-secondary-primary_white px-1.5 md:ml-0 md:w-full">
                                <Heading
                                  size="textmd"
                                  as="h4"
                                  className="self-end !font-dmsans text-[14px] font-medium capitalize !text-black-900"
                                >
                                  פירוק
                                </Heading>
                                <Img
                                  src="images/img_television_red_a700_03_4.png"
                                  alt="Televisionone"
                                  className="h-[10px] self-end object-cover"
                                />
                              </div>
                              <div className="flex flex-1 items-end justify-end md:self-stretch">
                                <Img
                                  src="images/img_plus_secondary__primary_white_8x18.png"
                                  alt="Plusoneone"
                                  className="h-[8px] object-cover"
                                />
                                <Heading
                                  size="headinglg"
                                  as="h5"
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
                                  src="images/img_user_secondary__primary_white_8x18.png"
                                  alt="Useroneone"
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
                              src="images/img_signal_secondary__primary_white_3.png"
                              alt="Signalthreeone"
                              className="ml-1 mt-2.5 h-[6px] object-cover md:ml-0 md:w-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[-1px] left-0 right-0 z-[9] mx-auto flex flex-1 items-start md:relative md:flex-col">
                    <div className="relative z-10 flex-1 self-center md:self-stretch">
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
                        <div className="relative z-[11] mt-10 flex flex-1 flex-col items-end gap-[30px] md:self-stretch">
                          <Button size="6xl" className="w-[52px] rounded-lg px-4">
                            <Img src="images/img_search_secondary__primary_white.svg" />
                          </Button>
                          <div className="mb-[84px] flex flex-col gap-1 self-stretch">
                            <div className="px-3.5 py-4">
                              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                <div className="flex flex-col items-end">
                                  <Img
                                    src="images/img__secondary__primary_white.svg"
                                    alt="Imagefourteen"
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
                                  <Img src="images/img__2.svg" alt="Imagefifteen" className="h-[20px]" />
                                </div>
                              </a>
                            </div>
                            <div className="px-3.5 py-4">
                              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                <div className="flex flex-col items-end">
                                  <Img src="images/img__red_a700_01.svg" alt="Imagesixteen" className="h-[20px]" />
                                </div>
                              </a>
                            </div>
                            <div className="px-3.5 py-4">
                              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                <div className="flex flex-col items-end">
                                  <Img src="images/img__4.svg" alt="Imageseventeen" className="h-[20px]" />
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
                                  <Img src="images/img__5.svg" alt="Imageeighteen" className="h-[20px]" />
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
                        <div className="relative mb-[88px] ml-[-70px] w-[5%] self-center rounded-[16px] bg-black-900_03 px-3.5 py-9 md:ml-0 md:w-full sm:py-4">
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
                      className="relative ml-[-88px] mt-[402px] h-[40px] w-[6%] object-contain md:ml-0 md:w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
