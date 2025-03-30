import { Helmet } from "react-helmet";
import { Img, Heading, Button } from "../../components";
import AllAddsProviderCubesColumnclose from "../../components/AllAddsProviderCubesColumnclose";
import AwaitingApprovalDealerCubesColumncarx from "../../components/AwaitingApprovalDealerCubesColumncarx";
import Sidebar2 from "../../components/Sidebar2";
import Sidebar3 from "../../components/Sidebar3";
import React, { Suspense } from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

const data = [
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

export default function AwaitingApprovalDealerCubesPage() {
  return (
    <>
      <Helmet>
        <title>Rivky miler&#39;s Application15</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-100">
        <div className="bg-gray-100 py-7 shadow-xs sm:py-4">
          <div className="container-12xl lg:px-5 md:px-5">
            <div className="overflow-x-scroll">
              <div className="flex w-[1880px] items-start gap-10">
                <Sidebar2 />
                <div className="flex flex-1 items-center md:flex-col">
                  <div className="flex flex-1 md:flex-col md:self-stretch">
                    <Tabs
                      className="flex flex-1 flex-col gap-6 rounded-[20px] bg-secondary-primary_white shadow-xs md:self-stretch"
                      selectedTabClassName="!text-black-900_03"
                      selectedTabPanelClassName="mb-2 ml-[34px] mr-8 md:mx-0 !relative tab-panel--selected"
                    >
                      <div className="flex flex-col items-center">
                        <div className="flex w-[14%] items-center justify-center gap-1 self-start rounded-br-lg bg-gray-100 lg:w-full md:w-full">
                          <div className="w-full">
                            <div className="flex items-center justify-center gap-1">
                              <Heading size="headingmd" as="h1" className="text-[12px] font-bold !text-gray-900_04">
                                <span className="text-gray-900_04">&nbsp;</span>
                                <span className="font-heebo font-medium text-gray-600">lbl_lbl23</span>
                              </Heading>
                              <Img src="images/img_signal.svg" alt="Signaloneone" className="h-[10px]" />
                            </div>
                          </div>
                          <div className="flex w-full items-center justify-center gap-0.5">
                            <Heading
                              size="textxs"
                              as="h2"
                              className="!font-heebo text-[12px] font-medium !text-gray-600"
                            >
                              מודעות במכרז
                            </Heading>
                            <Img src="images/img_vector_deep_orange_500.svg" alt="Vectoroneone" className="h-[12px]" />
                          </div>
                        </div>
                        <div className="ml-[38px] mr-[60px] mt-3 flex items-start justify-between gap-5 self-stretch md:mx-0 md:flex-col">
                          <div className="flex gap-[15px]">
                            <Img
                              src="images/img_button1_gray_100_01.svg"
                              alt="Buttononeone"
                              className="h-[32px] rounded-[10px]"
                            />
                            <Button size="md" className="w-[32px] rounded-[10px] px-1.5">
                              <Img src="images/img_megaphone_gray_600_1.svg" />
                            </Button>
                          </div>
                          <div className="flex flex-1 items-start justify-center md:flex-col md:self-stretch">
                            <TabList className="flex flex-1 flex-wrap items-start justify-end gap-[54px] self-center px-[46px] py-1 lg:gap-5 md:gap-5 md:self-stretch md:px-5 sm:px-4">
                              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                <Tab className="mb-2 text-[16px] font-semibold text-gray-500_02 lg:text-[13px]">
                                  הצעות שנדחו
                                </Tab>
                              </a>
                              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                <Tab className="text-[16px] font-semibold text-gray-500_02 lg:text-[13px]">
                                  הצעות שאושרו
                                </Tab>
                              </a>
                              <Tab className="text-[16px] font-semibold text-gray-500_02 lg:text-[13px]">
                                הצעות ממתינות לאישור
                              </Tab>
                              <Tab className="text-[16px] font-semibold text-gray-500_02 lg:text-[13px]">כל ההצעות</Tab>
                            </TabList>
                            <div className="flex items-center gap-[22px]">
                              <Heading
                                size="h3_assistant_25px_m"
                                as="h3"
                                className="self-end text-[25px] font-medium lg:text-[21px]"
                              >
                                הצעות מחיר
                              </Heading>
                              <Img
                                src="images/img_vector_red_a700_03_2.png"
                                alt="Vectorthreeone"
                                className="h-[36px] object-cover"
                              />
                            </div>
                          </div>
                        </div>
                        <AllAddsProviderCubesColumnclose className="ml-8 mr-11 mt-[30px] self-stretch md:mx-0" />
                      </div>
                      {[...Array(4)].map((_, index) => (
                        <TabPanel
                          key={`tab-panel${index}`}
                          className="absolute mb-2 ml-[34px] mr-8 justify-center md:mx-0"
                        >
                          <div className="w-full">
                            <div className="grid grid-cols-4 gap-7 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                              <Suspense fallback={<div>Loading feed...</div>}>
                                {data.map((d, index) => (
                                  <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                    <AwaitingApprovalDealerCubesColumncarx {...d} key={"gridcar20660X44" + index} />
                                  </a>
                                ))}
                              </Suspense>
                            </div>
                          </div>
                        </TabPanel>
                      ))}
                    </Tabs>
                    <div className="relative z-[1] ml-[-82px] flex w-[12%] items-start justify-center md:ml-0 md:w-full">
                      <div className="flex flex-1 items-start">
                        <div className="relative z-[2] mt-10 flex flex-1 flex-col items-end gap-[30px]">
                          <Button size="6xl" className="mt-[92px] w-[52px] rounded-lg px-4">
                            <Img src="images/img_search_secondary__primary_white.svg" />
                          </Button>
                          <div className="flex flex-col gap-1 self-stretch">
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
                            <div className="px-3.5 py-4">
                              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                <div className="flex flex-col items-end">
                                  <Img src="images/img__red_a700_01.svg" alt="Imagefourone" className="h-[20px]" />
                                </div>
                              </a>
                            </div>
                            <div className="flex justify-end">
                              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                <Button size="6xl" className="w-[50px] rounded-lg px-3.5">
                                  <Img src="images/img__4.svg" />
                                </Button>
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
                        <div className="relative ml-[-70px] w-[30%] self-center rounded-[16px] bg-black-900_03 px-3.5 py-9 sm:py-4">
                          <div className="mt-[896px] flex flex-col items-center">
                            <Heading
                              size="headinglg"
                              as="h4"
                              className="!font-inter text-[14px] font-semibold !text-secondary-primary_white"
                            >
                              גילי עטיה
                            </Heading>
                            <Heading
                              size="headingmd"
                              as="h5"
                              className="!font-inter text-[12px] font-semibold !text-yellow-800"
                            >
                              שוכר
                            </Heading>
                            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                              <Heading
                                size="textxs"
                                as="h6"
                                className="mt-1.5 !font-inter text-[12px] font-medium !text-white-a700_7f underline"
                              >
                                התנתקות
                              </Heading>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="relative z-[3] ml-[-88px] mt-[18px] flex w-[30%] justify-center">
                        <Sidebar3 />
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_tablist.png"
                    alt="Tablistthree"
                    className="relative z-[4] ml-[-88px] h-[40px] w-[6%] object-contain md:ml-0 md:w-full"
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
