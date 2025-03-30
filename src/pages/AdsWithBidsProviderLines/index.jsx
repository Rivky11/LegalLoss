import { Helmet } from "react-helmet";
import { Heading, Img, Button } from "../../components";
import AdsWithBidsProviderLinesRowone from "../../components/AdsWithBidsProviderLinesRowone";
import AdsWithBidsProviderLinesRowten from "../../components/AdsWithBidsProviderLinesRowten";
import AllAddsProviderCubesColumnclose from "../../components/AllAddsProviderCubesColumnclose";
import AllAddsProviderCubesRow from "../../components/AllAddsProviderCubesRow";
import Header from "../../components/Header";
import TenderAdsProviderLinesRowten from "../../components/TenderAdsProviderLinesRowten";
import React, { Suspense } from "react";

const data = [
  { image: "images/img_car_black_900_03.svg", twenty: "20", prop: "מודעות" },
  { image: "images/img_car_red_a700_03_1.svg", twenty: "20", prop: "מודעות בהמתנה לאישור" },
  { image: "images/img_car_light_green_800_1.svg", twenty: "20", prop: "מודעות מאושרות" },
  { image: "images/img_thumbs_up.svg", twenty: "20", prop: "מודעות למכרז" },
  { image: "images/img_television_yellow_800.svg", twenty: "20", prop: "חבילת מודעות במכרז" },
  { image: "images/img_car_gray_700_04.svg", twenty: "20", prop: "מודעות בארכיון" },
];
const data1 = [
  {
    prop: "לצפיה באישור",
    prop1: "מאושר",
    prop2: "פירוק",
    prop3: "₪",
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
    prop: "לצפיה באישור",
    prop1: "מאושר",
    prop2: "פירוק",
    prop3: "₪",
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
    prop: "לצפיה באישור",
    prop1: "מאושר",
    prop2: "פירוק",
    prop3: "₪",
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
    prop: "לצפיה באישור",
    prop1: "מאושר",
    prop2: "פירוק",
    prop3: "₪",
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
    prop: "לצפיה באישור",
    prop1: "מאושר",
    prop2: "פירוק",
    prop3: "₪",
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
    prop: "לצפיה באישור",
    prop1: "מאושר",
    prop2: "פירוק",
    prop3: "₪",
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
    prop: "לצפיה באישור",
    prop1: "מאושר",
    prop2: "פירוק",
    prop3: "₪",
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
    prop: "לצפיה באישור",
    prop1: "מאושר",
    prop2: "פירוק",
    prop3: "₪",
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
    prop: "לצפיה באישור",
    prop1: "מאושר",
    prop2: "פירוק",
    prop3: "₪",
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
    prop: "לצפיה באישור",
    prop1: "מאושר",
    prop2: "פירוק",
    prop3: "₪",
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
    prop: "לצפיה באישור",
    prop1: "מאושר",
    prop2: "פירוק",
    prop3: "₪",
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
    prop: "לצפיה באישור",
    prop1: "מאושר",
    prop2: "פירוק",
    prop3: "₪",
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

export default function AdsWithBidsProviderLinesPage() {
  return (
    <>
      <Helmet>
        <title>Rivky miler&#39;s Application15</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-100">
        <div className="relative h-[1108px]">
          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[1080px] flex-1 bg-gray-100 shadow-xs" />
          <div className="container-12xl absolute bottom-0 left-0 right-0 top-0 my-auto flex h-max justify-center lg:px-5 md:px-5">
            <div className="w-full overflow-x-scroll">
              <div className="flex w-[1880px] items-start gap-10 md:flex-col">
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
                <div className="relative h-[1116px] flex-1 self-center md:w-full md:flex-none md:self-stretch">
                  <div className="absolute left-0 top-0 my-auto ml-auto mr-[170px] flex-1 rounded-[20px] bg-secondary-primary_white shadow-xs lg:mr-0 md:mr-0">
                    <div className="flex flex-col gap-[18px]">
                      <Header className="mr-12 md:mr-0" />
                      <div className="ml-8 mr-11 md:mx-0">
                        <TenderAdsProviderLinesRowten />
                        <AllAddsProviderCubesColumnclose className="relative mt-[-42px]" />
                      </div>
                      <div className="ml-10 mr-8 py-11 md:mx-0 md:py-5 sm:py-4">
                        <AdsWithBidsProviderLinesRowten className="relative mb-[706px] mt-[-796px] p-2" />
                        <div>
                          <div className="mt-3 flex flex-col gap-2.5">
                            <Suspense fallback={<div>Loading feed...</div>}>
                              {data1.map((d, index) => (
                                <AdsWithBidsProviderLinesRowone {...d} key={"list" + index} />
                              ))}
                            </Suspense>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_tablist.png"
                    alt="Tablistthree"
                    className="absolute right-px top-0 m-auto h-[40px] w-[8%] object-contain"
                  />
                  <div className="absolute bottom-[-1.96px] left-0 right-0 z-[14] mx-10 flex flex-1 flex-col gap-1.5 lg:mx-0 md:mx-0">
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
                            as="h2"
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
                      <div className="relative z-[15] mt-10 flex flex-1 flex-col items-end gap-[30px] md:self-stretch">
                        <Button size="6xl" className="w-[52px] rounded-lg px-4">
                          <Img src="images/img_search_secondary__primary_white.svg" />
                        </Button>
                        <div className="mb-[92px] flex flex-col gap-1 self-stretch">
                          <div className="flex justify-end px-3.5 py-4">
                            <Img src="images/img__secondary__primary_white.svg" alt="Imagefive" className="h-[20px]" />
                          </div>
                          <div className="flex justify-end px-3.5 py-4">
                            <Img
                              src="images/img__secondary__primary_white_20x20.svg"
                              alt="Imageseven"
                              className="h-[20px]"
                            />
                          </div>
                          <div className="flex justify-end px-3.5 py-4">
                            <Img src="images/img__20x20.svg" alt="Imagetwentysix" className="h-[20px]" />
                          </div>
                          <div className="flex justify-end px-3.5 py-4">
                            <Img src="images/img__1.svg" alt="Imagenine" className="h-[20px]" />
                          </div>
                          <div className="flex justify-end px-3.5 py-4">
                            <Img src="images/img__2.svg" alt="Imageeleven" className="h-[20px]" />
                          </div>
                          <div className="flex justify-end px-3.5 py-4">
                            <Img src="images/img__3.svg" alt="Imagethirteen" className="h-[20px]" />
                          </div>
                          <div className="flex justify-end px-3.5 py-4">
                            <Img src="images/img__4.svg" alt="Imagethirtyone" className="h-[20px]" />
                          </div>
                          <div className="flex justify-end p-3.5">
                            <div className="flex h-[20px] w-[20px] flex-col items-start bg-[url(/public/images/img_bell.svg)] bg-cover bg-no-repeat p-0.5 lg:h-auto md:h-auto">
                              <div className="mb-2 h-[6px] w-[6px] rounded-[3px] bg-red-a700" />
                            </div>
                          </div>
                          <div className="px-3.5 py-4">
                            <div className="flex flex-col items-end justify-center">
                              <Img src="images/img_layers.png" alt="Layersoneone" className="h-[18px] object-cover" />
                            </div>
                          </div>
                          <div className="flex justify-end px-3.5 py-4">
                            <Img src="images/img__5.svg" alt="Imagethirtyone" className="h-[20px]" />
                          </div>
                          <div className="flex justify-end px-3.5 py-4">
                            <Img src="images/img_search.svg" alt="Searchthreeone" className="h-[20px]" />
                          </div>
                        </div>
                      </div>
                      <div className="relative mb-[92px] ml-[-70px] w-[5%] self-center rounded-[16px] bg-black-900_03 px-3.5 py-9 md:ml-0 md:w-full sm:py-4">
                        <div className="mt-[896px] flex flex-col items-center gap-0.5">
                          <Heading
                            size="headinglg"
                            as="h3"
                            className="!font-inter text-[14px] font-semibold !text-secondary-primary_white"
                          >
                            גילי עטיה
                          </Heading>
                          <Heading
                            size="headingmd"
                            as="h4"
                            className="!font-inter text-[12px] font-semibold !text-red-a700_03"
                          >
                            ספק
                          </Heading>
                          <Heading
                            size="textxs"
                            as="h5"
                            className="!font-inter text-[12px] font-medium !text-white-a700_7f underline"
                          >
                            התנתקות
                          </Heading>
                        </div>
                      </div>
                    </div>
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
