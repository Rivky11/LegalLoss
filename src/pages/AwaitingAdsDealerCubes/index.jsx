import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text } from "../../components";
import AllAddsDealerCubesRow from "../../components/AllAddsDealerCubesRow";
import AllAddsProviderCubesColumnclose from "../../components/AllAddsProviderCubesColumnclose";
import AwaitingAdsDealerCubesColumncarx from "../../components/AwaitingAdsDealerCubesColumncarx";
import AwaitingAdsDealerCubesStackcreatefrom from "../../components/AwaitingAdsDealerCubesStackcreatefrom";
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
    prop: "ממתין לאישור",
    prop1: "₪",
    fortythousand: "40,000",
    prop2: "מחיר ההצעה:",
    x85zero: "X8 – 5.0 במוו",
    zipcode: "2022",
    prop3: "במוו",
    p2287: "2287 נפח מנוע",
    four: "יד 4",
    two: "אוטומטי",
    two1: "לצפיה בהצעה",
    prop4: "שיקום",
  },
  {
    prop: "ממתין לאישור",
    prop1: "₪",
    fortythousand: "40,000",
    prop2: "מחיר ההצעה:",
    x85zero: "X8 – 5.0 במוו",
    zipcode: "2022",
    prop3: "במוו",
    p2287: "2287 נפח מנוע",
    four: "יד 4",
    two: "אוטומטי",
    two1: "לצפיה בהצעה",
    prop4: "שיקום",
  },
  {
    prop: "ממתין לאישור",
    prop1: "₪",
    fortythousand: "40,000",
    prop2: "מחיר ההצעה:",
    x85zero: "X8 – 5.0 במוו",
    zipcode: "2022",
    prop3: "במוו",
    p2287: "2287 נפח מנוע",
    four: "יד 4",
    two: "אוטומטי",
    two1: "לצפיה בהצעה",
    prop4: "שיקום",
  },
  {
    prop: "ממתין לאישור",
    prop1: "₪",
    fortythousand: "40,000",
    prop2: "מחיר ההצעה:",
    x85zero: "X8 – 5.0 במוו",
    zipcode: "2022",
    prop3: "במוו",
    p2287: "2287 נפח מנוע",
    four: "יד 4",
    two: "אוטומטי",
    two1: "לצפיה בהצעה",
    prop4: "שיקום",
  },
  {
    prop: "ממתין לאישור",
    prop1: "₪",
    fortythousand: "40,000",
    prop2: "מחיר ההצעה:",
    x85zero: "X8 – 5.0 במוו",
    zipcode: "2022",
    prop3: "במוו",
    p2287: "2287 נפח מנוע",
    four: "יד 4",
    two: "אוטומטי",
    two1: "לצפיה בהצעה",
    prop4: "שיקום",
  },
  {
    prop: "ממתין לאישור",
    prop1: "₪",
    fortythousand: "40,000",
    prop2: "מחיר ההצעה:",
    x85zero: "X8 – 5.0 במוו",
    zipcode: "2022",
    prop3: "במוו",
    p2287: "2287 נפח מנוע",
    four: "יד 4",
    two: "אוטומטי",
    two1: "לצפיה בהצעה",
    prop4: "שיקום",
  },
  {
    prop: "ממתין לאישור",
    prop1: "₪",
    fortythousand: "40,000",
    prop2: "מחיר ההצעה:",
    x85zero: "X8 – 5.0 במוו",
    zipcode: "2022",
    prop3: "במוו",
    p2287: "2287 נפח מנוע",
    four: "יד 4",
    two: "אוטומטי",
    two1: "לצפיה בהצעה",
    prop4: "שיקום",
  },
  {
    prop: "ממתין לאישור",
    prop1: "₪",
    fortythousand: "40,000",
    prop2: "מחיר ההצעה:",
    x85zero: "X8 – 5.0 במוו",
    zipcode: "2022",
    prop3: "במוו",
    p2287: "2287 נפח מנוע",
    four: "יד 4",
    two: "אוטומטי",
    two1: "לצפיה בהצעה",
    prop4: "שיקום",
  },
];

export default function AwaitingAdsDealerCubesPage() {
  return (
    <>
      <Helmet>
        <title>Rivky miler&#39;s Application15</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-100">
        <div className="relative h-[1158px]">
          <div className="absolute left-0 right-0 top-0 mx-auto h-[1080px] flex-1 bg-gray-100 shadow-xs" />
          <div className="container-12xl absolute bottom-0 left-0 right-0 top-0 my-auto flex h-max justify-center lg:px-5 md:px-5">
            <div className="w-full overflow-x-scroll">
              <div className="flex w-[1880px] items-start gap-10 md:flex-col">
                <div className="w-[10%] md:w-full">
                  <div className="flex flex-col gap-[26px] rounded-[20px] bg-secondary-primary_white px-3 py-5 shadow-xs">
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
                          <AllAddsDealerCubesRow {...d} key={"one" + index} />
                        ))}
                      </Suspense>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 items-start md:flex-col md:self-stretch">
                  <div className="flex flex-1 items-center md:flex-col md:self-stretch">
                    <div className="relative h-[1158px] flex-1 md:w-full md:flex-none md:self-stretch">
                      <div className="absolute left-0 right-0 top-0 mx-auto flex-1">
                        <header className="relative z-[3] mr-11 flex flex-col items-start justify-center gap-3 md:mr-0">
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
                            <div className="flex w-full items-start justify-center gap-0.5">
                              <Heading
                                size="textxs"
                                as="p"
                                className="self-center !font-heebo text-[12px] font-medium !text-gray-600"
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
                          <div className="ml-6 flex flex-col items-end self-stretch md:ml-0">
                            <div className="relative z-[4] flex flex-col items-start self-stretch">
                              <a href="#">
                                <Button
                                  size="md"
                                  className="relative z-[6] ml-[50px] w-[32px] rounded-[10px] px-1.5 md:ml-0"
                                >
                                  <Img src="images/img_megaphone_gray_600_1.svg" />
                                </Button>
                              </a>
                              <div className="relative mt-[-32px] flex flex-col items-start self-stretch">
                                <a href="#">
                                  <Img
                                    src="images/img_button1_gray_100_01.svg"
                                    alt="Buttononeone"
                                    className="relative z-[5] h-[32px] rounded-[10px]"
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
                              <ul className="!mt-1.5 flex items-start gap-8 self-end md:flex-col">
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
                                      className="text-[16px] font-semibold !text-gray-600 hover:!text-black-900"
                                    >
                                      חבילת רכבים
                                    </Heading>
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                    <Heading
                                      size="h4_assistant_16px_b"
                                      as="h6"
                                      className="text-[16px] font-semibold !text-gray-600 hover:!text-black-900"
                                    >
                                      מודעות במכרז
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
                                      <Heading
                                        size="h4_assistant_16px_b"
                                        as="h6"
                                        className="text-[16px] font-semibold !text-black-900 lg:text-[13px]"
                                      >
                                        מודעות ממתינות לאישור
                                      </Heading>
                                      <div className="h-[2px] w-full bg-red-a700_03" />
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                    <Heading
                                      size="h4_assistant_16px_b"
                                      as="h6"
                                      className="text-[16px] font-semibold !text-gray-500_02 hover:!text-black-900"
                                    >
                                      מודעות חדשות
                                    </Heading>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="cursor-pointer lg:text-[13px]">
                                    <Heading
                                      size="h4_assistant_16px_b"
                                      as="h6"
                                      className="text-[16px] font-semibold !text-gray-500_02 hover:!text-black-900"
                                    >
                                      כל המודעות
                                    </Heading>
                                  </a>
                                </li>
                              </ul>
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
                        <div className="relative mt-[-88px] h-[1024px] rounded-[20px] bg-secondary-primary_white shadow-xs" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 ml-8 mr-auto flex flex-1 flex-col gap-[22px] lg:ml-0 md:ml-0">
                        <AllAddsProviderCubesColumnclose className="mr-11 md:mr-0" />
                        <div className="mr-8 md:mr-0">
                          <div className="grid grid-cols-4 justify-center gap-7 gap-y-7 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                            <Suspense fallback={<div>Loading feed...</div>}>
                              {data1.map((d, index) => (
                                <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                  <AwaitingAdsDealerCubesColumncarx {...d} key={"one1" + index} />
                                </a>
                              ))}
                            </Suspense>
                          </div>
                        </div>
                      </div>
                    </div>
                    <AwaitingAdsDealerCubesStackcreatefrom />
                  </div>
                  <Img
                    src="images/img_tablist.png"
                    alt="Tablistthree"
                    className="relative z-[9] ml-[-88px] mt-[490px] h-[40px] w-[6%] object-contain md:ml-0 md:w-full"
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
