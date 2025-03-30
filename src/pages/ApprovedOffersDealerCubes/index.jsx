import { Helmet } from "react-helmet";
import { Img, Heading, Button } from "../../components";
import AllAddsProviderCubesColumnclose from "../../components/AllAddsProviderCubesColumnclose";
import ApprovedOffersDealerCubesColumncarx from "../../components/ApprovedOffersDealerCubesColumncarx";
import Sidebar2 from "../../components/Sidebar2";
import Sidebar4 from "../../components/Sidebar4";
import React, { Suspense } from "react";

const data = [
  {
    prop: "מאושר",
    prop1: "₪",
    fortythousand: "40,000",
    prop2: "מחיר ההצעה:",
    x85zero: "X8 – 5.0 במוו",
    zipcode: "2022",
    prop3: "במוו",
    p2287: "2287 נפח מנוע",
    four: "יד 4",
    two: "אוטומטי",
    two1: "לצפיה בזכיה",
    prop4: "פירוק",
  },
  {
    prop: "מאושר",
    prop1: "₪",
    fortythousand: "40,000",
    prop2: "מחיר ההצעה:",
    x85zero: "X8 – 5.0 במוו",
    zipcode: "2022",
    prop3: "במוו",
    p2287: "2287 נפח מנוע",
    four: "יד 4",
    two: "אוטומטי",
    two1: "לצפיה בזכיה",
    prop4: "פירוק",
  },
  {
    prop: "מאושר",
    prop1: "₪",
    fortythousand: "40,000",
    prop2: "מחיר ההצעה:",
    x85zero: "X8 – 5.0 במוו",
    zipcode: "2022",
    prop3: "במוו",
    p2287: "2287 נפח מנוע",
    four: "יד 4",
    two: "אוטומטי",
    two1: "לצפיה בזכיה",
    prop4: "פירוק",
  },
  {
    prop: "מאושר",
    prop1: "₪",
    fortythousand: "40,000",
    prop2: "מחיר ההצעה:",
    x85zero: "X8 – 5.0 במוו",
    zipcode: "2022",
    prop3: "במוו",
    p2287: "2287 נפח מנוע",
    four: "יד 4",
    two: "אוטומטי",
    two1: "לצפיה בזכיה",
    prop4: "פירוק",
  },
  {
    prop: "מאושר",
    prop1: "₪",
    fortythousand: "40,000",
    prop2: "מחיר ההצעה:",
    x85zero: "X8 – 5.0 במוו",
    zipcode: "2022",
    prop3: "במוו",
    p2287: "2287 נפח מנוע",
    four: "יד 4",
    two: "אוטומטי",
    two1: "לצפיה בזכיה",
    prop4: "פירוק",
  },
  {
    prop: "מאושר",
    prop1: "₪",
    fortythousand: "40,000",
    prop2: "מחיר ההצעה:",
    x85zero: "X8 – 5.0 במוו",
    zipcode: "2022",
    prop3: "במוו",
    p2287: "2287 נפח מנוע",
    four: "יד 4",
    two: "אוטומטי",
    two1: "לצפיה בזכיה",
    prop4: "פירוק",
  },
  {
    prop: "מאושר",
    prop1: "₪",
    fortythousand: "40,000",
    prop2: "מחיר ההצעה:",
    x85zero: "X8 – 5.0 במוו",
    zipcode: "2022",
    prop3: "במוו",
    p2287: "2287 נפח מנוע",
    four: "יד 4",
    two: "אוטומטי",
    two1: "לצפיה בזכיה",
    prop4: "פירוק",
  },
  {
    prop: "מאושר",
    prop1: "₪",
    fortythousand: "40,000",
    prop2: "מחיר ההצעה:",
    x85zero: "X8 – 5.0 במוו",
    zipcode: "2022",
    prop3: "במוו",
    p2287: "2287 נפח מנוע",
    four: "יד 4",
    two: "אוטומטי",
    two1: "לצפיה בזכיה",
    prop4: "פירוק",
  },
];

export default function ApprovedOffersDealerCubesPage() {
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
                <div className="relative h-[1108px] flex-1 self-center">
                  <div className="absolute left-0 top-0 my-auto ml-auto mr-[170px] flex flex-1 flex-col gap-6 rounded-[20px] bg-secondary-primary_white shadow-xs lg:mr-0 md:mr-0">
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
                          <Heading size="textxs" as="h2" className="!font-heebo text-[12px] font-medium !text-gray-600">
                            מודעות במכרז
                          </Heading>
                          <Img src="images/img_vector_deep_orange_500.svg" alt="Vectoroneone" className="h-[12px]" />
                        </div>
                      </div>
                      <header className="ml-[38px] mr-[60px] mt-3 flex items-start justify-between gap-5 self-stretch md:mx-0 md:flex-col">
                        <div className="flex gap-3.5">
                          <a href="#">
                            <Img
                              src="images/img_button1_gray_100_01.svg"
                              alt="Buttononeone"
                              className="h-[32px] rounded-[10px]"
                            />
                          </a>
                          <a href="#">
                            <Button size="md" className="w-[32px] rounded-[10px] px-1.5">
                              <Img src="images/img_megaphone_gray_600_1.svg" />
                            </Button>
                          </a>
                        </div>
                        <div className="flex w-[72%] items-start justify-between gap-5 self-center md:w-full md:flex-col">
                          <div className="flex w-[54%] items-start justify-between gap-5 self-end md:w-full sm:flex-col">
                            <ul className="flex items-start gap-14 self-center sm:flex-col">
                              <li>
                                <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                  <Heading
                                    size="h4_assistant_16px_b"
                                    as="h6"
                                    className="text-[16px] font-semibold !text-gray-500_02 hover:!text-black-900_03"
                                  >
                                    הצעות שנדחו
                                  </Heading>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <div className="flex flex-col items-center gap-3">
                                    <Heading
                                      size="h4_assistant_16px_b"
                                      as="h6"
                                      className="text-[16px] font-semibold lg:text-[13px]"
                                    >
                                      הצעות שאושרו
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
                                    className="text-[16px] font-semibold !text-gray-500_02 hover:!text-black-900_03"
                                  >
                                    הצעות ממתינות לאישור
                                  </Heading>
                                </a>
                              </li>
                            </ul>
                            <Heading
                              size="h4_assistant_16px_b"
                              as="h6"
                              className="text-[16px] font-semibold !text-gray-500_02 lg:text-[13px]"
                            >
                              כל ההצעות
                            </Heading>
                          </div>
                          <div className="mb-1.5 flex items-center gap-[22px]">
                            <Heading
                              size="h3_assistant_25px_m"
                              as="p"
                              className="self-end text-[25px] font-medium lg:text-[21px]"
                            >
                              הצעות מחיר
                            </Heading>
                            <a href="#">
                              <Img
                                src="images/img_vector_red_a700_03_2.png"
                                alt="Vectorthreeone"
                                className="h-[36px] object-cover"
                              />
                            </a>
                          </div>
                        </div>
                      </header>
                      <AllAddsProviderCubesColumnclose className="ml-8 mr-11 mt-[30px] self-stretch md:mx-0" />
                    </div>
                    <div className="mb-3 px-8 sm:px-4">
                      <div className="grid grid-cols-4 gap-7 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                        <Suspense fallback={<div>Loading feed...</div>}>
                          {data.map((d, index) => (
                            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                              <ApprovedOffersDealerCubesColumncarx {...d} key={"Data1" + index} />
                            </a>
                          ))}
                        </Suspense>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[-1px] left-0 right-0 mx-auto flex flex-1 items-start md:relative md:flex-col">
                    <div className="relative z-[1] flex-1 self-center md:self-stretch">
                      <div className="relative z-[3]">
                        <Sidebar4 />
                      </div>
                      <div className="relative mt-[-2px] flex items-start md:flex-col">
                        <div className="relative z-[2] mt-10 flex flex-1 flex-col items-end gap-[30px] py-1.5 md:self-stretch">
                          <Button size="6xl" className="w-[52px] rounded-lg px-4">
                            <Img src="images/img_search_secondary__primary_white.svg" />
                          </Button>
                          <div className="mb-[76px] flex flex-col gap-1 self-stretch">
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
                              <div className="flex flex-col items-end">
                                <Img src="images/img__5.svg" alt="Imagefiveone" className="h-[20px]" />
                              </div>
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
                        <div className="relative mb-[84px] ml-[-70px] w-[5%] self-center rounded-[16px] bg-black-900_03 px-3.5 py-9 md:ml-0 md:w-full sm:py-4">
                          <div className="mt-[896px] flex flex-col items-center">
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
                              className="!font-inter text-[12px] font-semibold !text-yellow-800"
                            >
                              שוכר
                            </Heading>
                            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                              <Heading
                                size="textxs"
                                as="h5"
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
                      className="relative ml-[-88px] mt-[406px] h-[40px] w-[6%] object-contain md:ml-0 md:w-full"
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
