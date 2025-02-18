import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text } from "../../components";
import AllAddsDealerCubesColumncarx from "../../components/AllAddsDealerCubesColumncarx";
import AllAddsDealerCubesRow from "../../components/AllAddsDealerCubesRow";
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

export default function AllAddsDealerCubesPage() {
  return (
    <>
      <Helmet>
        <title>Rivky miler&#39;s Application15</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-100">
        <div className="relative h-[1158px]">
          <div className="absolute left-0 right-0 top-0 mx-auto h-[1080px] w-[68%] bg-gray-100 shadow-xs" />
          <div className="absolute bottom-0 left-[17%] top-0 my-auto flex h-max w-full overflow-x-scroll">
            <div className="container-12xl flex items-start gap-10 lg:px-5 md:flex-col md:px-5">
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
              <div className="relative h-[1158px] flex-1 content-center self-center lg:h-auto md:h-auto md:w-full md:flex-none md:self-stretch">
                <div className="relative h-[1158px] w-full">
                  <div className="absolute left-0 right-0 top-0 mx-auto flex flex-1 flex-col items-start">
                    <div className="relative z-[3] flex flex-col gap-[26px] self-stretch">
                      <Header />
                      <AllAddsProviderCubesColumnclose className="mx-8 md:mx-0" />
                    </div>
                    <div className="relative mt-[-240px] h-[1024px] w-[68%] rounded-[20px] bg-secondary-primary_white shadow-xs" />
                  </div>
                  <div className="absolute bottom-px left-0 right-0 ml-[34px] mr-auto grid flex-1 grid-cols-4 justify-center gap-7 lg:ml-0 lg:grid-cols-3 md:ml-0 md:grid-cols-2 sm:grid-cols-1">
                    <Suspense fallback={<div>Loading feed...</div>}>
                      {[...Array(10)].map((d, index) => (
                        <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                          <AllAddsDealerCubesColumncarx key={"Data2" + index} />
                        </a>
                      ))}
                    </Suspense>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 top-0 z-[18] m-auto flex h-max flex-1 items-start md:relative md:flex-col">
                  <div className="relative z-[19] flex-1 self-center md:self-stretch">
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
                            as="h1"
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
                      <div className="relative z-20 mt-10 flex flex-1 flex-col items-end gap-[30px] md:self-stretch">
                        <Button size="6xl" className="w-[52px] rounded-lg px-4">
                          <Img src="images/img_search_secondary__primary_white.svg" />
                        </Button>
                        <div className="mb-[84px] flex flex-col gap-1 self-stretch">
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
                          <div className="flex justify-end">
                            <Button size="6xl" className="w-[50px] rounded-lg px-3.5">
                              <Img src="images/img__20x20.svg" />
                            </Button>
                          </div>
                          <div className="px-3.5 py-4">
                            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                              <div className="flex flex-col items-end">
                                <Img src="images/img__2.svg" alt="Imagetwoone" className="h-[20px]" />
                              </div>
                            </a>
                          </div>
                          <div className="px-3.5 py-4">
                            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                              <div className="flex flex-col items-end">
                                <Img src="images/img__red_a700_01.svg" alt="Imagethreeone" className="h-[20px]" />
                              </div>
                            </a>
                          </div>
                          <div className="px-3.5 py-4">
                            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                              <div className="flex flex-col items-end">
                                <Img src="images/img__4.svg" alt="Imagefourone" className="h-[20px]" />
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
                                <Img src="images/img_layers.png" alt="Layersoneone" className="h-[18px] object-cover" />
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
                      <div className="relative mb-[88px] ml-[-70px] w-[5%] self-center rounded-[16px] bg-black-900_03 px-3.5 py-9 md:ml-0 md:w-full sm:py-4">
                        <div className="mt-[896px] flex flex-col items-center">
                          <Heading
                            size="headinglg"
                            as="h2"
                            className="!font-inter text-[14px] font-semibold !text-secondary-primary_white"
                          >
                            גילי עטיה
                          </Heading>
                          <Heading
                            size="headingmd"
                            as="h3"
                            className="!font-inter text-[12px] font-semibold !text-yellow-800"
                          >
                            שוכר
                          </Heading>
                          <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                            <Heading
                              size="textxs"
                              as="h4"
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
    </>
  );
}
