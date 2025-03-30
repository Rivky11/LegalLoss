import { Helmet } from "react-helmet";
import { Img, Text, Switch, Heading, ChipView, Button } from "../../components";
import AllAddsProviderCubesColumnclose from "../../components/AllAddsProviderCubesColumnclose";
import ComplexUIComponent from "../../components/ComplexUIComponent";
import Sidebar1 from "../../components/Sidebar1";
import Sidebar2 from "../../components/Sidebar2";
import React from "react";

export default function AllOffersDealerLinesPage() {
  const [chipOptions, setChipOptions] = React.useState(() => [
    { value: 1, label: `מיקום המודעה: 1` },
    { value: 2, label: `חבילה ממתינה לאישור` },
  ]);
  const [selectedChipOptions, setSelectedChipOptions] = React.useState([]);

  return (
    <>
      <Helmet>
        <title>Rivky miler&#39;s Application15</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-100">
        <div className="relative h-[1080px] bg-gray-100 py-1.5 shadow-xs">
          <div className="container-12xl absolute bottom-0 left-0 right-0 top-0 my-auto h-max lg:px-5 md:px-5">
            <div className="overflow-x-scroll">
              <div className="flex w-[1880px] items-start gap-10">
                <Sidebar2 />
                <div className="relative h-[1108px] flex-1 self-center">
                  <div className="absolute left-0 top-0 my-auto ml-auto mr-[170px] flex flex-1 flex-col gap-[30px] rounded-[20px] bg-secondary-primary_white shadow-xs lg:mr-0 md:mr-0">
                    <header className="mr-[60px] flex flex-col items-start gap-3 md:mr-0">
                      <div className="flex w-[14%] items-center justify-center gap-1 rounded-br-lg bg-gray-100 lg:w-full md:w-full">
                        <div className="flex w-full items-start justify-center gap-1">
                          <Heading
                            size="headingmd"
                            as="p"
                            className="self-center text-[12px] font-bold !text-gray-900_04"
                          >
                            <span className="text-gray-900_04">&nbsp;</span>
                            <span className="font-heebo font-medium text-gray-600">lbl_lbl23</span>
                          </Heading>
                          <Img src="images/img_signal.svg" alt="Signaloneone" className="h-[10px]" />
                        </div>
                        <div className="flex w-full items-center justify-center gap-0.5">
                          <Heading size="textxs" as="p" className="!font-heebo text-[12px] font-medium !text-gray-600">
                            מודעות במכרז
                          </Heading>
                          <Img src="images/img_vector_deep_orange_500.svg" alt="Vectoroneone" className="h-[12px]" />
                        </div>
                      </div>
                      <div className="ml-[38px] self-stretch md:ml-0">
                        <div className="flex flex-col items-end gap-1">
                          <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
                            <div className="flex gap-3.5 self-start">
                              <a href="#">
                                <Img
                                  src="images/img_button1.svg"
                                  alt="Buttononeone"
                                  className="h-[32px] rounded-[10px]"
                                />
                              </a>
                              <a href="#">
                                <Button size="md" className="w-[32px] rounded-[10px] px-1.5">
                                  <Img src="images/img_megaphone_red_a700_03.svg" />
                                </Button>
                              </a>
                            </div>
                            <div className="flex w-[40%] justify-between gap-5 md:w-full sm:flex-col">
                              <ul className="flex flex-wrap gap-[60px] lg:gap-5 md:gap-5">
                                <li>
                                  <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                    <Heading
                                      size="h4_assistant_16px_b"
                                      as="h6"
                                      className="text-[16px] font-semibold !text-gray-500_02"
                                    >
                                      הצעות שנדחו
                                    </Heading>
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                    <Heading
                                      size="h4_assistant_16px_b"
                                      as="h6"
                                      className="text-[16px] font-semibold !text-gray-500_02"
                                    >
                                      הצעות שאושרו
                                    </Heading>
                                  </a>
                                </li>
                              </ul>
                              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                <Heading
                                  size="h4_assistant_16px_b"
                                  as="h6"
                                  className="text-[16px] font-semibold !text-gray-500_02 lg:text-[13px]"
                                >
                                  הצעות ממתינות לאישור
                                </Heading>
                              </a>
                              <Heading
                                size="h4_assistant_16px_b"
                                as="h6"
                                className="text-[16px] font-semibold !text-black-900 lg:text-[13px]"
                              >
                                כל ההצעות
                              </Heading>
                            </div>
                            <div className="flex items-center gap-5">
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
                          <div className="mr-[438px] h-[2px] w-[8%] bg-red-a700_03 md:mr-0" />
                        </div>
                      </div>
                    </header>
                    <AllAddsProviderCubesColumnclose className="mb-[784px] ml-8 mr-11 md:mx-0" />
                  </div>
                  <div className="absolute bottom-[-1px] left-0 right-0 mx-auto flex flex-1 items-start md:relative md:flex-col">
                    <div className="relative z-[4] mt-[172px] flex flex-1 flex-col gap-[18px] md:self-stretch">
                      <ComplexUIComponent className="ml-[42px] md:ml-0" />
                      <ComplexUIComponent className="ml-[42px] md:ml-0" />
                    </div>
                    <div className="relative ml-[-18px] flex w-[14%] items-start justify-center self-center md:ml-0 md:w-full">
                      <div className="relative z-[1] flex-1 self-center">
                        <div className="relative z-[3]">
                          <Sidebar1 />
                        </div>
                        <div className="relative mt-[-2px] flex items-start">
                          <div className="relative z-[2] mt-10 flex flex-1 flex-col items-end gap-[30px] py-1.5">
                            <Button size="6xl" className="w-[52px] rounded-lg px-4">
                              <Img src="images/img_search_secondary__primary_white.svg" />
                            </Button>
                            <div className="mb-[76px] flex flex-col gap-1 self-stretch">
                              <div className="px-3.5 py-4">
                                <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                  <div className="flex flex-col items-end">
                                    <Img
                                      src="images/img__secondary__primary_white.svg"
                                      alt="Imagenine"
                                      className="h-[20px]"
                                    />
                                  </div>
                                </a>
                              </div>
                              <div className="px-3.5 py-4">
                                <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                  <div className="flex flex-col items-end">
                                    <Img src="images/img__20x20.svg" alt="Imageeleven" className="h-[20px]" />
                                  </div>
                                </a>
                              </div>
                              <div className="px-3.5 py-4">
                                <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                  <div className="flex flex-col items-end">
                                    <Img src="images/img__2.svg" alt="Imagethirteen" className="h-[20px]" />
                                  </div>
                                </a>
                              </div>
                              <div className="px-3.5 py-4">
                                <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                  <div className="flex flex-col items-end">
                                    <Img src="images/img__red_a700_01.svg" alt="Imagethirtyone" className="h-[20px]" />
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
                                    <Img src="images/img__5.svg" alt="Imagethirtyone" className="h-[20px]" />
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
                          <div className="relative mb-[84px] ml-[-70px] w-[30%] self-center rounded-[16px] bg-black-900_03 px-3.5 py-9 sm:py-4">
                            <div className="mt-[896px] flex flex-col items-center">
                              <Heading
                                size="headinglg"
                                as="h1"
                                className="!font-inter text-[14px] font-semibold !text-secondary-primary_white"
                              >
                                גילי עטיה
                              </Heading>
                              <Heading
                                size="headingmd"
                                as="h2"
                                className="!font-inter text-[12px] font-semibold !text-yellow-800"
                              >
                                שוכר
                              </Heading>
                              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                <Heading
                                  size="textxs"
                                  as="h3"
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
                        className="relative ml-[-88px] mt-[406px] h-[40px] w-[38%] object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[7px] left-0 right-0 z-[5] mx-auto flex w-[70%] border-t border-solid border-gray-400_11">
            <div className="mt-2 flex w-full flex-col gap-2.5">
              <div className="flex items-center bg-gray-100_02 p-2 md:flex-col">
                <div className="flex flex-1 gap-4 md:self-stretch sm:flex-col">
                  <ChipView
                    options={chipOptions}
                    setOptions={setChipOptions}
                    values={selectedChipOptions}
                    setValues={setSelectedChipOptions}
                    className="flex w-[50%] flex-wrap gap-3.5"
                  >
                    {(option) => (
                      <React.Fragment key={option.index}>
                        {option.isSelected ? (
                          <div
                            onClick={option.toggle}
                            className="flex h-[30px] cursor-pointer flex-row items-center gap-[18px] whitespace-pre-wrap rounded-[14px] bg-yellow-800 px-3.5 text-[16px] text-secondary-primary_white"
                          >
                            <span>{option.label}</span>
                            <Img
                              src="images/img_group_1261154425.svg"
                              alt="Group 1261154425"
                              className="h-[14px] w-[2%]"
                            />
                          </div>
                        ) : (
                          <div
                            onClick={option.toggle}
                            className="flex h-[30px] cursor-pointer flex-row items-center gap-[18px] rounded-[14px] bg-gray-200_01 px-3.5 text-[16px] text-red-a700_03"
                          >
                            <span>{option.label}</span>
                            <Img
                              src="images/img_group_1261154425.svg"
                              alt="Group 1261154425"
                              className="h-[14px] w-[2%]"
                            />
                          </div>
                        )}
                      </React.Fragment>
                    )}
                  </ChipView>
                  <div className="flex w-[16%] items-center justify-center gap-[18px] rounded-[14px] bg-secondary-primary_white sm:w-full">
                    <Heading
                      size="textmd"
                      as="h2"
                      className="self-end !font-dmsans text-[14px] font-medium capitalize !text-black-900"
                    >
                      פירוק
                    </Heading>
                    <Img src="images/img_television_red_a700_03_1.svg" alt="Televisionone" className="h-[22px]" />
                  </div>
                </div>
                <div className="flex w-[44%] items-end justify-center gap-[38px] md:w-full">
                  <div className="flex flex-1 items-center justify-end">
                    <Text size="text4xl" as="p" className="text-[22px] font-normal !text-black-900 lg:text-[18px]">
                      2022
                    </Text>
                    <div className="ml-6 mt-2 h-[8px] w-[10px] self-start rounded bg-red-a700_03" />
                    <Text size="text4xl" as="p" className="ml-5 text-[22px] font-normal !text-black-900 lg:text-[18px]">
                      במוו
                    </Text>
                  </div>
                  <Heading
                    size="heading9xl"
                    as="h3"
                    className="text-[30px] font-bold !text-black-900 lg:text-[25px] md:text-[24px] sm:text-[22px]"
                  >
                    X8 – 5.0 במוו
                  </Heading>
                </div>
              </div>
              <div className="flex items-center py-3.5 md:flex-col">
                <div className="flex flex-1 flex-col gap-[30px] md:self-stretch md:px-5">
                  <div className="ml-[26px] mr-12 flex justify-center md:mx-0 md:flex-col">
                    <div className="flex items-center gap-3">
                      <Img src="images/img_group_758531290.svg" alt="Imagethirtytwo" className="h-[12px]" />
                      <Heading size="heading2xl" as="h4" className="text-[16px] font-bold lg:text-[13px]">
                        אישור ההצעה
                      </Heading>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Img src="images/img_group_758531290.svg" alt="Imagefifteen" className="h-[12px]" />
                      <Heading size="heading2xl" as="h5" className="text-[16px] font-bold lg:text-[13px]">
                        מחיר
                      </Heading>
                    </div>
                    <div className="flex flex-1 justify-between gap-5 px-[34px] md:self-stretch sm:flex-col sm:px-4">
                      <div className="flex items-center gap-2.5">
                        <Img src="images/img_group_758531290.svg" alt="Imageseventeen" className="h-[12px]" />
                        <Heading size="h4_assistant_18px_b" as="h6" className="text-[18px] font-bold lg:text-[15px]">
                          סיום תשלום
                        </Heading>
                      </div>
                      <div className="flex flex-1 justify-center gap-3.5 sm:self-stretch">
                        <div className="flex items-center gap-[7px]">
                          <Img src="images/img_group_758531290.svg" alt="Imagenineteen" className="h-[12px]" />
                          <Heading size="heading2xl" as="h6" className="self-end text-[16px] font-bold lg:text-[13px]">
                            איסוף
                          </Heading>
                        </div>
                        <div className="flex flex-1 items-center justify-center gap-2.5">
                          <Img src="images/img_group_758531290.svg" alt="Imagethirtysix" className="h-[12px]" />
                          <Heading size="heading2xl" as="h6" className="text-[16px] font-bold lg:text-[13px]">
                            שוריין/לא שוריין
                          </Heading>
                        </div>
                        <div className="flex items-center gap-1">
                          <Img src="images/img_group_758531290.svg" alt="Imagetwentyone" className="h-[12px]" />
                          <Heading size="heading2xl" as="h6" className="self-end text-[16px] font-bold lg:text-[13px]">
                            מיקום
                          </Heading>
                        </div>
                        <div className="flex items-center gap-2">
                          <Img src="images/img_group_758531290.svg" alt="Image" className="h-[12px]" />
                          <Heading size="heading2xl" as="h6" className="text-[16px] font-bold lg:text-[13px]">
                            מועד ההצעה
                          </Heading>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 px-1">
                      <Img src="images/img_group_758531290.svg" alt="Image" className="h-[12px]" />
                      <Heading size="heading2xl" as="h6" className="text-[16px] font-bold lg:text-[13px]">
                        דירוג
                      </Heading>
                    </div>
                  </div>
                  <div className="flex items-center justify-center border-b border-solid border-gray-200 px-[18px] py-5 md:flex-col">
                    <div className="flex items-center gap-2 rounded-[16px] border border-solid border-black-900_03 bg-secondary-primary_white p-1">
                      <Img src="images/img_arrow_left_black_900_03_1.svg" alt="Arrowleftfive" className="h-[10px]" />
                      <Heading
                        size="h4_assistant_16px_b"
                        as="h6"
                        className="self-end text-[16px] font-semibold lg:text-[13px]"
                      >
                        לצפיה בעיסקה
                      </Heading>
                    </div>
                    <div className="flex flex-wrap items-start">
                      <Img src="images/img_plus.svg" alt="Plusfiveone" className="h-[18px]" />
                      <Heading
                        size="headinglg"
                        as="p"
                        className="ml-1.5 self-end !font-heebo text-[14px] font-bold !text-red-a700_03"
                      >
                        ₪
                      </Heading>
                      <Heading
                        as="h6"
                        className="ml-2.5 self-center !font-heebo text-[18px] font-bold !text-red-a700_03 lg:text-[15px]"
                      >
                        40,000
                      </Heading>
                      <Img
                        src="images/img_user_secondary__primary_white.svg"
                        alt="Userfiveone"
                        className="ml-2.5 h-[18px]"
                      />
                    </div>
                    <div className="ml-[26px] h-[16px] w-px bg-gray-400_07 md:ml-0 md:h-px md:w-[16px]" />
                    <Text as="p" className="ml-10 text-[18px] font-normal lg:text-[15px] md:ml-0">
                      8.9.24
                    </Text>
                    <div className="ml-[42px] h-[16px] w-px bg-gray-400_07 md:ml-0 md:h-px md:w-[16px]" />
                    <Text as="p" className="ml-10 text-[18px] font-normal lg:text-[15px] md:ml-0">
                      8.2.24
                    </Text>
                    <div className="ml-10 h-[16px] w-px bg-gray-400_07 md:ml-0 md:h-px md:w-[16px]" />
                    <Switch value={true} className="ml-[38px] border border-solid border-gray-200 md:ml-0" />
                    <div className="ml-[38px] h-[16px] w-px bg-gray-400_07 md:ml-0 md:h-px md:w-[16px]" />
                    <Text as="p" className="ml-[38px] self-end text-[18px] font-normal lg:text-[15px] md:ml-0">
                      חדרה
                    </Text>
                    <div className="ml-[38px] h-[16px] w-px bg-gray-400_07 md:ml-0 md:h-px md:w-[16px]" />
                    <div className="flex flex-1 items-center justify-between gap-5 px-[38px] md:self-stretch sm:px-4">
                      <Text as="p" className="text-[18px] font-normal lg:text-[15px]">
                        8.2.24
                      </Text>
                      <div className="h-[16px] w-px bg-gray-400_07" />
                      <div className="flex w-[30%] justify-center">
                        <div className="w-full bg-black-900">
                          <Img src="images/img_star_1_138.svg" alt="Imagefortyone" className="h-[8px] w-full" />
                        </div>
                        <div className="w-full bg-black-900">
                          <Img src="images/img_star_1_139.svg" alt="Imagefortyone" className="h-[8px] w-full" />
                        </div>
                        <div className="w-full bg-black-900">
                          <Img src="images/img_star_1_140.svg" alt="Imagefortytwo" className="h-[8px] w-full" />
                        </div>
                        <div className="w-full bg-black-900">
                          <Img src="images/img_star_1_141.svg" alt="Image" className="h-[8px] w-full" />
                        </div>
                        <div className="w-full bg-black-900">
                          <Img src="images/img_star_1_142.svg" alt="Imagefortyfour" className="h-[8px] w-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_car11_qgcqjcnfp_144x236.png"
                  alt="Car11qgcqjcnfp"
                  className="relative ml-[-8px] h-[144px] w-[16%] rounded-[10px] object-contain md:ml-0 md:w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
