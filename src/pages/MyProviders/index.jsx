import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text } from "../../components";
import MyProvidersRowsix from "../../components/MyProvidersRowsix";
import MyProvidersStacktwenty from "../../components/MyProvidersStacktwenty";
import React, { Suspense } from "react";

const data = [
  { twenty: "20", prop: "ספקים" },
  { twenty: "20", prop: "ספקים חדשים" },
  { twenty: "20", prop: "ספקים" },
];

export default function MyProvidersPage() {
  return (
    <>
      <Helmet>
        <title>Rivky miler&#39;s Application15</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-100">
        <div className="relative h-[1124px]">
          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[1080px] flex-1 bg-gray-100 shadow-xs" />
          <div className="container-12xl absolute bottom-0 left-0 right-0 top-0 my-auto flex h-max justify-center lg:px-5 md:px-5">
            <div className="w-full overflow-x-scroll">
              <div className="mb-11 flex w-[1880px] items-center gap-10 md:flex-col">
                <div className="w-[10%] md:w-full">
                  <div className="flex flex-col gap-1.5 rounded-[20px] bg-secondary-primary_white py-[18px] shadow-xs">
                    <div className="relative h-[58px] content-end lg:h-auto md:h-auto">
                      <div className="mx-auto mb-2.5 h-[24px] w-[88%] border-b border-solid border-gray-200" />
                      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 px-[52px] py-3.5 md:px-5 sm:px-4">
                        <Text as="p" className="!font-heebo text-[18px] font-medium lg:text-[15px]">
                          ספקים ו
                        </Text>
                      </div>
                    </div>
                    <div className="mx-11 mb-[678px] flex flex-col gap-2 md:mx-0 md:flex-row sm:flex-col">
                      <Suspense fallback={<div>Loading feed...</div>}>
                        {data.map((d, index) => (
                          <MyProvidersStacktwenty {...d} key={"listtwenty" + index} />
                        ))}
                      </Suspense>
                    </div>
                  </div>
                </div>
                <div className="relative h-[1052px] flex-1 content-center lg:h-auto md:h-auto md:w-full md:flex-none md:self-stretch">
                  <div className="flex flex-1 items-start md:flex-col">
                    <div className="flex flex-1 items-center md:self-stretch">
                      <div className="flex flex-1 items-start justify-end gap-[22px] rounded-[20px] bg-secondary-primary_white py-11 pl-14 pr-[60px] shadow-xs md:p-5 sm:p-4">
                        <Heading
                          size="h3_assistant_25px_m"
                          as="h1"
                          className="mt-1.5 text-[25px] font-medium lg:text-[21px]"
                        >
                          הספקים שלי
                        </Heading>
                        <Img
                          src="images/img_contrast_red_a700_03_1.png"
                          alt="Contrastoneone"
                          className="mb-[926px] h-[36px] object-cover"
                        />
                      </div>
                      <div className="relative ml-[-82px] flex w-[12%] items-start justify-center">
                        <div className="flex flex-1 items-start">
                          <div className="relative z-[7] mt-10 flex flex-1 flex-col items-end gap-[30px]">
                            <Button size="6xl" className="mt-[76px] w-[52px] rounded-lg px-4">
                              <Img src="images/img_search_secondary__primary_white.svg" />
                            </Button>
                            <div className="flex flex-col gap-1 self-stretch">
                              <div className="flex justify-end px-3.5 py-4">
                                <Img
                                  src="images/img__secondary__primary_white.svg"
                                  alt="Imageone"
                                  className="h-[20px]"
                                />
                              </div>
                              <div className="flex justify-end px-3.5 py-4">
                                <Img src="images/img__20x20.svg" alt="Imageoneone" className="h-[20px]" />
                              </div>
                              <div className="flex justify-end px-3.5 py-4">
                                <Img src="images/img__6.svg" alt="Imagetwoone" className="h-[20px]" />
                              </div>
                              <div className="flex justify-end px-3.5 py-4">
                                <Img src="images/img__7.svg" alt="Imagethreeone" className="h-[20px]" />
                              </div>
                              <div className="flex justify-end px-3.5 py-4">
                                <Img src="images/img__4.svg" alt="Imagefourone" className="h-[20px]" />
                              </div>
                              <div className="flex justify-end px-3.5 py-4">
                                <Img src="images/img_layers.png" alt="Layersoneone" className="h-[18px] object-cover" />
                              </div>
                            </div>
                          </div>
                          <div className="relative ml-[-70px] w-[30%] self-center rounded-[16px] bg-black-900_03 px-3.5 py-9 sm:py-4">
                            <div className="mt-[894px] flex flex-col items-center">
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
                                className="!font-inter text-[12px] font-semibold !text-light_green-800"
                              >
                                מנהל
                              </Heading>
                              <Heading
                                size="textxs"
                                as="h4"
                                className="mt-1.5 !font-inter text-[12px] font-medium !text-white-a700_7f underline"
                              >
                                התנתקות
                              </Heading>
                            </div>
                          </div>
                        </div>
                        <div className="relative z-[8] ml-[-88px] mt-[18px] flex w-[30%] justify-center">
                          <div className="flex w-full flex-col gap-1.5">
                            <Img
                              src="images/img_uuid_8da7836a_2_red_700.png"
                              alt="Uuid8da7836atwo"
                              className="mx-3 h-[28px] object-cover md:mx-0"
                            />
                            <div className="flex justify-center px-2.5">
                              <Heading
                                size="heading6xl"
                                as="h5"
                                className="!font-montserrat text-[25.98px] font-extrabold !text-red-a700_01 lg:text-[21px]"
                              >
                                <span className="text-secondary-primary_white">lbl_lbl_b</span>
                                <span className="text-red-a700_03">lbl_lbl_m</span>
                                <span className="text-secondary-primary_white">lbl_lbl_c</span>
                              </Heading>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_tablist.png"
                      alt="Tablistthree"
                      className="relative z-[9] ml-[-88px] h-[40px] w-[6%] object-contain md:ml-0 md:w-full"
                    />
                  </div>
                  <MyProvidersRowsix />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
