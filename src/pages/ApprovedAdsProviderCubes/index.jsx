import { Helmet } from "react-helmet";
import { Img, Heading, Button } from "../../components";
import AllAddsProviderCubesColumnclose from "../../components/AllAddsProviderCubesColumnclose";
import AllAddsProviderCubesRow from "../../components/AllAddsProviderCubesRow";
import CarDetailsComponent from "../../components/CarDetailsComponent";
import Header from "../../components/Header";
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
    approvalButtonText: "מאושר",
    currencySymbol: "₪",
    priceText: "40,000",
    priceLabelText: "מחיר שאישרת:",
    carModelText: "X8 – 5.0 במוו",
    yearText: "2022",
    brandText: "במוו",
    engineVolumeText: "2287 נפח מנוע",
    handText: "יד 4",
    transmissionText: "אוטומטי",
    approvalViewText: "לצפיה באישור",
    dismantlingText: "פירוק",
  },
  {
    approvalButtonText: "מאושר",
    currencySymbol: "₪",
    priceText: "40,000",
    priceLabelText: "מחיר שאישרת:",
    carModelText: "X8 – 5.0 במוו",
    yearText: "2022",
    brandText: "במוו",
    engineVolumeText: "2287 נפח מנוע",
    handText: "יד 4",
    transmissionText: "אוטומטי",
    approvalViewText: "לצפיה באישור",
    dismantlingText: "פירוק",
  },
  {
    approvalButtonText: "מאושר",
    currencySymbol: "₪",
    priceText: "40,000",
    priceLabelText: "מחיר שאישרת:",
    carModelText: "X8 – 5.0 במוו",
    yearText: "2022",
    brandText: "במוו",
    engineVolumeText: "2287 נפח מנוע",
    handText: "יד 4",
    transmissionText: "אוטומטי",
    approvalViewText: "לצפיה באישור",
    dismantlingText: "פירוק",
  },
  {
    approvalButtonText: "מאושר",
    currencySymbol: "₪",
    priceText: "40,000",
    priceLabelText: "מחיר שאישרת:",
    carModelText: "X8 – 5.0 במוו",
    yearText: "2022",
    brandText: "במוו",
    engineVolumeText: "2287 נפח מנוע",
    handText: "יד 4",
    transmissionText: "אוטומטי",
    approvalViewText: "לצפיה באישור",
    dismantlingText: "פירוק",
  },
  {
    approvalButtonText: "מאושר",
    currencySymbol: "₪",
    priceText: "40,000",
    priceLabelText: "מחיר שאישרת:",
    carModelText: "X8 – 5.0 במוו",
    yearText: "2022",
    brandText: "במוו",
    engineVolumeText: "2287 נפח מנוע",
    handText: "יד 4",
    transmissionText: "אוטומטי",
    approvalViewText: "לצפיה באישור",
    dismantlingText: "פירוק",
  },
  {
    approvalButtonText: "מאושר",
    currencySymbol: "₪",
    priceText: "40,000",
    priceLabelText: "מחיר שאישרת:",
    carModelText: "X8 – 5.0 במוו",
    yearText: "2022",
    brandText: "במוו",
    engineVolumeText: "2287 נפח מנוע",
    handText: "יד 4",
    transmissionText: "אוטומטי",
    approvalViewText: "לצפיה באישור",
    dismantlingText: "פירוק",
  },
  {
    approvalButtonText: "מאושר",
    currencySymbol: "₪",
    priceText: "40,000",
    priceLabelText: "מחיר שאישרת:",
    carModelText: "X8 – 5.0 במוו",
    yearText: "2022",
    brandText: "במוו",
    engineVolumeText: "2287 נפח מנוע",
    handText: "יד 4",
    transmissionText: "אוטומטי",
    approvalViewText: "לצפיה באישור",
    dismantlingText: "פירוק",
  },
  {
    approvalButtonText: "מאושר",
    currencySymbol: "₪",
    priceText: "40,000",
    priceLabelText: "מחיר שאישרת:",
    carModelText: "X8 – 5.0 במוו",
    yearText: "2022",
    brandText: "במוו",
    engineVolumeText: "2287 נפח מנוע",
    handText: "יד 4",
    transmissionText: "אוטומטי",
    approvalViewText: "לצפיה באישור",
    dismantlingText: "פירוק",
  },
];

export default function ApprovedAdsProviderCubesPage() {
  return (
    <>
      <Helmet>
        <title>Rivky miler&#39;s Application15</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-100">
        <div className="relative h-full">
          <div className="absolute left-0 right-0 top-0 mx-auto h-[1080px] flex-1 bg-gray-100 shadow-xs" />
          <div className="container-12xl absolute bottom-0 left-0 right-0 top-0 my-auto flex h-full items-center justify-center lg:px-5 md:px-5">
            <div className="h-full w-full overflow-x-scroll">
              <div className="flex h-full w-[1880px] items-start gap-10 md:flex-col">
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
                <div className="flex h-full flex-1 items-start md:flex-col md:self-stretch">
                  <div className="flex h-full flex-1 items-center md:flex-col md:self-stretch">
                    <div className="relative h-full flex-1 md:w-full md:flex-none md:self-stretch">
                      <div className="absolute left-0 right-0 top-0 mx-auto flex-1">
                        <Header className="relative z-[1] mr-12 md:mr-0" />
                        <div className="relative mt-[-92px] h-[1052px] rounded-[20px] bg-secondary-primary_white shadow-xs" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 mx-auto h-full flex-1 px-8 sm:px-4">
                        <div className="flex flex-1 flex-col gap-4">
                          <AllAddsProviderCubesColumnclose className="mr-3 md:mr-0" />
                          <div className="grid grid-cols-4 justify-center gap-7 overflow-x-scroll lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                            <Suspense fallback={<div>Loading feed...</div>}>
                              {data1.map((d, index) => (
                                <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                  <CarDetailsComponent {...d} key={"gridcar9660X440" + index} />
                                </a>
                              ))}
                            </Suspense>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative z-[8] mb-8 ml-[-82px] flex w-[12%] flex-col gap-1.5 self-end md:ml-0 md:w-full">
                      <div>
                        <div className="flex flex-col items-end gap-1.5">
                          <Img
                            src="images/img_uuid_8da7836a_2_red_700.png"
                            alt="Uuid8da7836atwo"
                            className="mr-3 h-[28px] w-[30%] object-contain md:mr-0"
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
                      <div className="flex items-start">
                        <div className="relative z-[9] mt-10 flex flex-1 flex-col items-end gap-[30px]">
                          <Button size="6xl" className="w-[52px] rounded-lg px-4">
                            <Img src="images/img_search_secondary__primary_white.svg" />
                          </Button>
                          <div className="mb-[92px] flex flex-col gap-1 self-stretch">
                            <div className="flex justify-end px-3.5 py-4">
                              <Img
                                src="images/img__secondary__primary_white.svg"
                                alt="Imageoneone"
                                className="h-[20px]"
                              />
                            </div>
                            <div className="flex justify-end px-3.5 py-4">
                              <Img
                                src="images/img__secondary__primary_white_20x20.svg"
                                alt="Imagetwoone"
                                className="h-[20px]"
                              />
                            </div>
                            <div className="flex justify-end px-3.5 py-4">
                              <Img src="images/img__20x20.svg" alt="Imagethreeone" className="h-[20px]" />
                            </div>
                            <div className="flex justify-end px-3.5 py-4">
                              <Img src="images/img__1.svg" alt="Imagefourone" className="h-[20px]" />
                            </div>
                            <div className="flex justify-end px-3.5 py-4">
                              <Img src="images/img__2.svg" alt="Imagefiveone" className="h-[20px]" />
                            </div>
                            <div className="flex justify-end px-3.5 py-4">
                              <Img src="images/img__3.svg" alt="Imagesixone" className="h-[20px]" />
                            </div>
                            <div className="flex justify-end px-3.5 py-4">
                              <Img src="images/img__4.svg" alt="Imagesevenone" className="h-[20px]" />
                            </div>
                            <div className="flex justify-end p-3.5">
                              <div className="flex h-[20px] w-[12%] flex-col items-start bg-[url(/public/images/img_bell.svg)] bg-cover bg-no-repeat p-0.5 lg:h-auto lg:w-full md:h-auto md:w-full">
                                <div className="mb-2 h-[6px] w-[6px] rounded-[3px] bg-red-a700" />
                              </div>
                            </div>
                            <div className="px-3.5 py-4">
                              <div className="flex flex-col items-end justify-center">
                                <Img src="images/img_layers.png" alt="Layersoneone" className="h-[18px] object-cover" />
                              </div>
                            </div>
                            <div className="flex justify-end px-3.5 py-4">
                              <Img src="images/img__5.svg" alt="Imageeightone" className="h-[20px]" />
                            </div>
                            <div className="flex justify-end px-3.5 py-4">
                              <Img src="images/img_search.svg" alt="Searchthreeone" className="h-[20px]" />
                            </div>
                          </div>
                        </div>
                        <div className="relative mb-[92px] ml-[-70px] w-[30%] self-center rounded-[16px] bg-black-900_03 px-3.5 py-9 sm:py-4">
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
