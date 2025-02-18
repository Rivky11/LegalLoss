import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text } from "../../components";
import AllAddsDealerCubesRow from "../../components/AllAddsDealerCubesRow";
import AllAddsDealerLinesRownineteen from "../../components/AllAddsDealerLinesRownineteen";
import AllAddsDealerLinesRowone from "../../components/AllAddsDealerLinesRowone";
import AllAddsProviderCubesColumnclose from "../../components/AllAddsProviderCubesColumnclose";
import Header from "../../components/Header";
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
    prop: "ממתין להצעה",
    prop1: "פירוק",
    prop2: "₪",
    plumbingrepair: "0",
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
    prop: "ממתין להצעה",
    prop1: "פירוק",
    prop2: "₪",
    plumbingrepair: "0",
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
    plumbingrepair: "0",
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

export default function AllAddsDealerLinesPage() {
  return (
    <>
      <Helmet>
        <title>Rivky miler&#39;s Application15</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-100">
        <div className="flex justify-center bg-gray-100 py-7 shadow-xs sm:py-4">
          <div className="container-12xl flex justify-center lg:px-5 md:px-5">
            <div className="w-full overflow-x-scroll">
              <div className="flex w-[1880px] items-start gap-10 md:flex-col">
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
                          <AllAddsDealerCubesRow {...d} key={"listtwenty" + index} />
                        ))}
                      </Suspense>
                    </div>
                  </div>
                </div>
                <div className="relative h-[1110px] flex-1 self-center md:w-full md:flex-none md:self-stretch">
                  <div className="absolute left-0 top-0 my-auto ml-auto mr-[170px] flex-1 rounded-[20px] bg-secondary-primary_white shadow-xs lg:mr-0 md:mr-0">
                    <Header className="mr-[60px] md:mr-0" />
                    <AllAddsProviderCubesColumnclose className="ml-8 mr-11 mt-[30px] md:mx-0" />
                    <AllAddsDealerLinesRownineteen className="ml-[62px] mr-[72px] mt-[18px] md:mx-0" />
                    <div className="mt-3 flex flex-col gap-1.5 px-[42px] md:px-5 sm:px-4">
                      <div className="mt-2.5 flex flex-col gap-1.5">
                        <Suspense fallback={<div>Loading feed...</div>}>
                          {data1.map((d, index) => (
                            <AllAddsDealerLinesRowone
                              {...d}
                              key={"list" + index}
                              className="border-b border-solid border-gray-200"
                            />
                          ))}
                        </Suspense>
                      </div>
                      <div>
                        <div className="h-[14px] border-b border-solid border-gray-200" />
                        <div className="relative mx-1 mt-[-2px] flex items-start justify-center md:mx-0 md:flex-col">
                          <div className="flex w-[8%] justify-center md:w-full">
                            <div className="flex w-full">
                              <Img
                                src="images/img_vector_black_900_1x14.png"
                                alt="Vectorthreeone"
                                className="h-px self-end object-cover"
                              />
                              <Heading size="headingxl" as="h1" className="text-[15px] font-semibold">
                                הגש הצעה
                              </Heading>
                            </div>
                          </div>
                          <div className="flex w-[8%] items-center justify-center self-end px-2.5 md:w-full">
                            <Img src="images/img_settings_black_900.svg" alt="Settingsoneone" className="h-[14px]" />
                            <div className="relative h-[28px] w-[70%] content-center lg:h-auto md:h-auto">
                              <Heading size="headingxl" as="h2" className="ml-auto text-[15px] font-semibold">
                                לצפיה
                              </Heading>
                              <Img
                                src="images/img_vector_deep_orange_500.svg"
                                alt="Vectorfiveone"
                                className="absolute right-2 top-1.5 m-auto h-[12px]"
                              />
                            </div>
                          </div>
                          <div className="flex flex-1 items-center justify-center md:flex-col md:self-stretch">
                            <Heading
                              size="textmd"
                              as="h3"
                              className="flex items-center justify-center rounded-[1px] border border-solid border-gray-700_04 bg-secondary-primary_white pl-3.5 pr-[22px] !font-dmsans text-[14px] font-medium capitalize !text-gray-700_04 sm:pr-4"
                            >
                              ארכיון
                            </Heading>
                            <div className="ml-10 flex gap-4 rounded-[1px] bg-secondary-primary_white px-1.5 md:ml-0">
                              <Heading
                                size="textmd"
                                as="h4"
                                className="!font-dmsans text-[14px] font-medium capitalize !text-black-900"
                              >
                                פירוק
                              </Heading>
                              <Img
                                src="images/img_vector_red_a700_03_4.png"
                                alt="Vectorsevenone"
                                className="h-px self-end object-cover"
                              />
                            </div>
                            <div className="flex flex-1 justify-end self-end md:self-stretch">
                              <Img
                                src="images/img_group_1261154309_secondary__primary_white.png"
                                alt="Imagethirteen"
                                className="h-px object-cover"
                              />
                              <Heading
                                size="headinglg"
                                as="h5"
                                className="relative z-[3] ml-1 !font-heebo text-[14px] font-bold !text-red-a700_03"
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
                                src="images/img_group_1261154308_secondary__primary_white.png"
                                alt="Imagefourteen"
                                className="h-px object-cover"
                              />
                            </div>
                            <Heading as="h6" className="ml-7 text-[18px] font-semibold lg:text-[15px] md:ml-0">
                              8.9.23
                            </Heading>
                            <Heading as="h6" className="ml-10 text-[18px] font-semibold lg:text-[15px] md:ml-0">
                              4
                            </Heading>
                            <Heading as="h6" className="ml-10 text-[18px] font-semibold lg:text-[15px] md:ml-0">
                              80,000
                            </Heading>
                            <Heading as="h6" className="ml-10 text-[18px] font-semibold lg:text-[15px] md:ml-0">
                              אוטומטי
                            </Heading>
                            <Heading as="h6" className="ml-10 text-[18px] font-semibold lg:text-[15px] md:ml-0">
                              2022
                            </Heading>
                            <Heading as="h6" className="ml-10 text-[18px] font-semibold lg:text-[15px] md:ml-0">
                              במוו
                            </Heading>
                            <Heading as="h6" className="ml-10 text-[18px] font-semibold lg:text-[15px] md:ml-0">
                              X8 – 5.0 במוו
                            </Heading>
                          </div>
                          <Img
                            src="images/img_icon_secondary__primary_white_1x14.png"
                            alt="Icononeone"
                            className="ml-1 mt-1.5 h-px object-cover md:ml-0 md:w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 z-[4] mx-auto flex flex-1 items-start md:relative md:flex-col">
                    <div className="relative z-[5] flex-1 self-center md:self-stretch">
                      <div className="relative z-[7]">
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
                        <div className="relative z-[6] mt-10 flex flex-1 flex-col items-end gap-[30px] py-1.5 md:self-stretch">
                          <Button size="6xl" className="w-[52px] rounded-lg px-4">
                            <Img src="images/img_search_secondary__primary_white.svg" />
                          </Button>
                          <div className="mb-[78px] flex flex-col gap-1 self-stretch">
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
                        <div className="relative mb-[86px] ml-[-70px] w-[5%] self-center rounded-[16px] bg-black-900_03 px-3.5 py-9 md:ml-0 md:w-full sm:py-4">
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
                      className="relative ml-[-88px] mt-[404px] h-[40px] w-[6%] object-contain md:ml-0 md:w-full"
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
