import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text } from "../../components";
import AllAddsDealerCubesRow from "../../components/AllAddsDealerCubesRow";
import AllAddsProviderCubesColumnclose from "../../components/AllAddsProviderCubesColumnclose";
import ArchiveAddsDealerCubesVariant7 from "../../components/ArchiveAddsDealerCubesVariant7";
import CarOfferDetails from "../../components/CarOfferDetails";
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

export default function ArchiveAddsDealerCubesPage() {
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
                          <AllAddsDealerCubesRow {...d} key={"Data1" + index} />
                        ))}
                      </Suspense>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 items-start md:flex-col md:self-stretch">
                  <div className="flex flex-1 items-start md:flex-col md:self-stretch">
                    <div className="flex-1 self-center rounded-[20px] bg-secondary-primary_white shadow-xs md:self-stretch">
                      <Tabs
                        className="flex w-full flex-col gap-[22px]"
                        selectedTabClassName="text-black-900_03 font-semibold text-[16px]"
                        selectedTabPanelClassName="!relative tab-panel--selected"
                      >
                        <div className="flex justify-center">
                          <div className="flex w-[96%] flex-col gap-[26px] lg:w-full md:w-full">
                            <div className="flex flex-col items-start gap-2">
                              <div className="flex w-[14%] justify-center gap-1 rounded-br-lg bg-gray-100 lg:w-full md:w-full">
                                <div className="w-full">
                                  <div className="flex items-center justify-center gap-1">
                                    <Heading
                                      size="headingmd"
                                      as="h1"
                                      className="text-[12px] font-bold !text-gray-900_04"
                                    >
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
                                  <div className="relative z-[3] flex gap-[15px]">
                                    <Img
                                      src="images/img_button1_gray_100_01.svg"
                                      alt="Buttononeone"
                                      className="h-[32px] rounded-[10px]"
                                    />
                                    <Button size="md" className="w-[32px] rounded-[10px] px-1.5">
                                      <Img src="images/img_megaphone_gray_600_1.svg" />
                                    </Button>
                                  </div>
                                  <div className="relative mt-[-28px] flex h-[42px] items-center justify-center bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat px-14 lg:h-auto md:h-auto md:px-5 sm:px-4">
                                    <ArchiveAddsDealerCubesVariant7 />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <AllAddsProviderCubesColumnclose className="ml-8 md:ml-0" />
                          </div>
                        </div>
                        <div className="flex flex-col gap-7 px-8 sm:px-4">
                          {[...Array(7)].map((_, index) => (
                            <TabPanel key={`tab-panel${index}`} className="absolute justify-center">
                              <div className="w-full">
                                <div className="flex gap-7 md:flex-col">
                                  <CarOfferDetails className="w-full" />
                                  <CarOfferDetails soldText="בעיסקה בוטלה" className="w-full" />
                                  <CarOfferDetails className="w-full" />
                                  <CarOfferDetails className="w-full" />
                                </div>
                              </div>
                            </TabPanel>
                          ))}
                          <div className="flex gap-7 md:flex-col">
                            <CarOfferDetails className="w-full" />
                            <CarOfferDetails className="w-full" />
                            <CarOfferDetails className="w-full" />
                            <CarOfferDetails className="w-full" />
                          </div>
                        </div>
                      </Tabs>
                    </div>
                    <div className="relative z-[4] ml-[-82px] flex w-[12%] items-start justify-center md:ml-0 md:w-full">
                      <div className="flex flex-1 items-start">
                        <div className="relative z-[5] mt-10 flex flex-1 flex-col items-end gap-[30px]">
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
                            <div className="px-3.5 py-4">
                              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                <div className="flex flex-col items-end">
                                  <Img src="images/img__4.svg" alt="Imagefiveone" className="h-[20px]" />
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
                            <div className="flex justify-end">
                              <Button size="6xl" className="w-[50px] rounded-lg px-3.5">
                                <Img src="images/img_layers_secondary__primary_white.svg" />
                              </Button>
                            </div>
                            <div className="px-3.5 py-4">
                              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                <div className="flex flex-col items-end">
                                  <Img src="images/img__5.svg" alt="Imagesixone" className="h-[20px]" />
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
                      <div className="relative z-[6] ml-[-88px] mt-[18px] flex w-[30%] justify-center">
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
                    className="relative z-[7] ml-[-88px] mt-[490px] h-[40px] w-[6%] object-contain md:ml-0 md:w-full"
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
