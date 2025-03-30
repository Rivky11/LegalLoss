import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button, Input } from "../../components";
import AllOffersDealerCubesColumn from "../../components/AllOffersDealerCubesColumn";
import { CloseSVG } from "../../components/Input/close";
import Sidebar2 from "../../components/Sidebar2";
import Sidebar21 from "../../components/Sidebar21";
import React, { Suspense } from "react";

export default function AllOffersDealerCubesPage() {
  const [searchBarValue6, setSearchBarValue6] = React.useState("");

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
                <div className="relative h-[1112px] flex-1 content-end self-center lg:h-auto md:h-auto">
                  <div className="absolute left-0 top-0 my-auto ml-auto mr-[170px] flex flex-1 flex-col gap-[118px] rounded-[20px] bg-secondary-primary_white shadow-xs lg:mr-0 lg:gap-[118px] md:mr-0 md:gap-[88px] sm:gap-[59px]">
                    <header className="mr-[60px] flex flex-col items-start gap-2 md:mr-0">
                      <div className="flex w-[14%] items-center justify-center gap-1 rounded-br-lg bg-gray-100 lg:w-full md:w-full">
                        <div className="w-full">
                          <div className="flex items-center justify-center gap-1">
                            <Heading size="headingmd" as="p" className="text-[12px] font-bold !text-gray-900_04">
                              <span className="text-gray-900_04">&nbsp;</span>
                              <span className="font-heebo font-medium text-gray-600">lbl_lbl23</span>
                            </Heading>
                            <Img src="images/img_signal.svg" alt="Signaloneone" className="h-[10px]" />
                          </div>
                        </div>
                        <div className="flex w-full items-center justify-center gap-0.5">
                          <Heading size="textxs" as="p" className="!font-heebo text-[12px] font-medium !text-gray-600">
                            מודעות במכרז
                          </Heading>
                          <Img src="images/img_vector_deep_orange_500.svg" alt="Vectoroneone" className="h-[12px]" />
                        </div>
                      </div>
                      <div className="ml-[38px] flex items-start justify-between gap-5 self-stretch md:ml-0 md:flex-col">
                        <div className="mt-1 flex gap-3.5">
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
                        <div className="flex w-[72%] items-center justify-between gap-5 self-center md:w-full md:flex-col">
                          <ul className="flex items-start gap-[54px] self-end sm:flex-col">
                            <li>
                              <a href="#" className="cursor-pointer lg:text-[13px]">
                                <Heading
                                  size="h4_assistant_16px_b"
                                  as="h6"
                                  className="text-[16px] font-semibold !text-gray-500_02 hover:!text-black-900"
                                >
                                  הצעות שנדחו
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
                                  הצעות שאושרו
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
                                  הצעות ממתינות לאישור
                                </Heading>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <div className="flex flex-col items-center gap-3">
                                  <Heading
                                    size="h4_assistant_16px_b"
                                    as="h6"
                                    className="text-[16px] font-semibold !text-black-900 lg:text-[13px]"
                                  >
                                    כל ההצעות
                                  </Heading>
                                  <div className="h-[2px] w-full bg-red-a700_03" />
                                </div>
                              </a>
                            </li>
                          </ul>
                          <div className="flex items-center gap-[22px] py-1.5">
                            <Heading
                              size="h3_assistant_25px_m"
                              as="p"
                              className="text-[25px] font-medium lg:text-[21px]"
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
                      </div>
                    </header>
                    <div className="mb-2 ml-[34px] mr-8 md:mx-0">
                      <div className="flex flex-col gap-6">
                        <div className="ml-4 mr-20 flex md:mx-0 sm:flex-col">
                          <Input
                            shape="round"
                            name="search"
                            placeholder={`חיפוש חופשי`}
                            value={searchBarValue6}
                            onChange={(e) => setSearchBarValue6(e.target.value)}
                            prefix={
                              <Img
                                src="images/img_icon_red_a700_01.svg"
                                alt="Icon"
                                className="h-[22px] w-[22px] object-contain"
                              />
                            }
                            suffix={
                              searchBarValue6?.length > 0 ? (
                                <CloseSVG
                                  onClick={() => setSearchBarValue6("")}
                                  height={22}
                                  width={22}
                                  fillColor="#ce0000ff"
                                />
                              ) : null
                            }
                            className="w-[18%] gap-4 rounded-md !border text-black-900 sm:w-full"
                          />
                          <div className="flex flex-1 items-start justify-end gap-[9px] sm:self-stretch">
                            <Text as="p" className="text-[18px] font-normal lg:text-[15px]">
                              רשומות
                            </Text>
                            <Button
                              variant="outline"
                              shape="square"
                              leftIcon={
                                <Img
                                  src="images/img_group_1261154236.png"
                                  alt="Group 1261154236"
                                  className="my-0.5 h-[14px] w-[8px] object-contain"
                                />
                              }
                              className="min-w-[56px] gap-3.5 self-center !border px-[7px]"
                            >
                              10
                            </Button>
                          </div>
                        </div>
                        <div className="grid grid-cols-4 justify-center gap-7 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                          <Suspense fallback={<div>Loading feed...</div>}>
                            {[...Array(8)].map((d, index) => (
                              <AllOffersDealerCubesColumn key={"Data" + index} />
                            ))}
                          </Suspense>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative z-[5] mx-auto flex flex-1 items-start justify-center md:flex-col">
                    <div className="relative z-[8] mt-[26px] flex w-[82%] items-center justify-center gap-6 rounded-[38px] border border-solid border-blue_gray-100 bg-secondary-primary_white p-2.5 md:w-full md:flex-col">
                      <Img
                        src="images/img_close_red_a700_03_54x54.svg"
                        alt="Closeoneone"
                        className="h-[54px] w-[4%] object-contain md:w-full"
                      />
                      <div className="flex flex-1 items-start gap-1 md:flex-col md:self-stretch">
                        <div className="relative h-[50px] w-[16%] self-center lg:h-auto md:h-auto md:w-full">
                          <div className="mt-1 h-[36px] flex-1 border-l border-solid border-gray-200" />
                          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1 px-[22px] sm:px-4">
                            <div className="flex flex-col items-center">
                              <Text
                                size="h4_assistant16px_r"
                                as="p"
                                className="text-[16px] font-normal !text-black-900 lg:text-[13px]"
                              >
                                מחיר
                              </Text>
                              <div className="relative mt-[-2px] flex flex-col items-center self-stretch">
                                <Img src="images/img_group_758531157.svg" alt="Imageone" className="h-[10px] w-full" />
                                <Text
                                  size="h4_assistant16px_r"
                                  as="p"
                                  className="text-[16px] font-normal lg:text-[13px]"
                                >
                                  ₪1,000 ₪1,000,000
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 items-center justify-center px-1 md:flex-col md:self-stretch">
                          <div className="flex items-center gap-2.5 border-l border-solid border-gray-200 py-2">
                            <Text
                              size="h4_assistant16px_r"
                              as="p"
                              className="text-[16px] font-normal !text-black-900 lg:text-[13px]"
                            >
                              למכרז
                            </Text>
                            <Img src="images/img_checkmark.svg" alt="Checkmarkone" className="h-[16px]" />
                          </div>
                          <div className="ml-2 flex-1 border-l border-solid border-gray-200 p-1 md:ml-0 md:self-stretch">
                            <div className="flex items-center justify-center gap-5">
                              <div className="flex flex-1 items-center justify-center gap-2">
                                <div className="flex-1 px-1">
                                  <div className="flex items-center justify-center gap-1.5">
                                    <Text
                                      size="h4_assistant16px_r"
                                      as="p"
                                      className="text-[16px] font-normal !text-black-900 lg:text-[13px]"
                                    >
                                      לשיקום
                                    </Text>
                                    <Img
                                      src="images/img_contrast_gray_600_07_1.png"
                                      alt="Contrastoneone"
                                      className="h-[16px] rounded object-cover"
                                    />
                                  </div>
                                </div>
                                <div className="flex items-center gap-2.5">
                                  <Text
                                    size="h4_assistant16px_r"
                                    as="p"
                                    className="text-[16px] font-normal !text-black-900 lg:text-[13px]"
                                  >
                                    לפירוק
                                  </Text>
                                  <Img src="images/img_checkmark.svg" alt="Checkmarkthree" className="h-[16px]" />
                                </div>
                              </div>
                              <Heading
                                size="h4_assistant_16px_b"
                                as="h1"
                                className="text-[16px] font-semibold !text-black-900 lg:text-[13px]"
                              >
                                מיועד ל
                              </Heading>
                            </div>
                          </div>
                          <div className="ml-2 flex w-[12%] items-end justify-between gap-5 border-l border-solid border-gray-200 py-1 md:ml-0 md:w-full">
                            <div className="black_900_black_900_00_border mb-2 ml-2 h-[5px] w-[8px] border-l-4 border-r-4 border-t-[5px] border-solid" />
                            <Text
                              size="h4_assistant16px_r"
                              as="p"
                              className="mt-1.5 text-[16px] font-normal !text-black-900 lg:text-[13px]"
                            >
                              סוג התאונה
                            </Text>
                          </div>
                          <div className="ml-2 flex w-[12%] items-end justify-between gap-5 border-l border-solid border-gray-200 py-1 md:ml-0 md:w-full">
                            <div className="black_900_black_900_00_border mb-2 ml-2 h-[5px] w-[8px] border-l-4 border-r-4 border-t-[5px] border-solid" />
                            <Text
                              size="h4_assistant16px_r"
                              as="p"
                              className="mt-1.5 text-[16px] font-normal !text-black-900 lg:text-[13px]"
                            >
                              סוג הרכב
                            </Text>
                          </div>
                          <div className="ml-2 flex w-[12%] items-center justify-between gap-5 border-l border-solid border-gray-200 py-1 md:ml-0 md:w-full">
                            <div className="black_900_black_900_00_border ml-2 h-[5px] w-[8px] border-l-4 border-r-4 border-t-[5px] border-solid" />
                            <Heading
                              size="textlg"
                              as="h2"
                              className="!font-heebo text-[15px] font-normal !text-black-900"
                            >
                              שנת יצור
                            </Heading>
                          </div>
                          <div className="ml-2 flex w-[12%] items-end justify-between gap-5 border-l border-solid border-gray-200 md:ml-0 md:w-full">
                            <div className="black_900_black_900_00_border mb-2 ml-2 h-[5px] w-[8px] border-l-4 border-r-4 border-t-[5px] border-solid" />
                            <Text
                              size="h4_assistant16px_r"
                              as="p"
                              className="mt-2 text-[16px] font-normal !text-black-900 lg:text-[13px]"
                            >
                              דגמים
                            </Text>
                          </div>
                          <div className="ml-2 flex w-[12%] items-end justify-between gap-5 border-l border-solid border-gray-200 md:ml-0 md:w-full">
                            <div className="black_900_black_900_00_border mb-2 ml-2 h-[5px] w-[8px] border-l-4 border-r-4 border-t-[5px] border-solid" />
                            <Text
                              size="h4_assistant16px_r"
                              as="p"
                              className="mt-2 text-[16px] font-normal !text-black-900 lg:text-[13px]"
                            >
                              יצרנים
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative ml-[-38px] flex w-[14%] items-start justify-center self-center md:ml-0 md:w-full">
                      <div className="relative z-[6] flex flex-1 items-start">
                        <div className="relative z-[7] mt-10 flex flex-1 flex-col items-end gap-[30px]">
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
                              <Button size="6xl" className="w-[50px] rounded-lg px-3.5">
                                <Img src="images/img__4.svg" />
                              </Button>
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
                        <div className="relative mb-[88px] ml-[-70px] w-[30%] self-center rounded-[16px] bg-black-900_03 px-3.5 py-9 sm:py-4">
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
                      <Img
                        src="images/img_tablist.png"
                        alt="Tablistthree"
                        className="relative ml-[-88px] mt-[402px] h-[40px] w-[38%] object-contain"
                      />
                    </div>
                  </div>
                  <div className="absolute left-0 right-0 top-[18px] mx-10 flex-1 lg:mx-0 md:mx-0">
                    <Sidebar21 />
                  </div>
                  <Text
                    as="p"
                    className="absolute right-[15%] top-[19%] z-[9] m-auto text-[18px] font-normal lg:text-[15px]"
                  >
                    מציג
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
