import { Helmet } from "react-helmet";
import { Heading, Img, Text, Button, Switch } from "../../components";
import AddPageProviderColumn from "../../components/AddPageProviderColumn";
import AddPageProviderColumnarrowrigh from "../../components/AddPageProviderColumnarrowrigh";
import React, { Suspense } from "react";

const data = [
  {
    plumbingrepair: "Nivo Car\\&#96;s",
    plumbingrepair1: "חדרה",
    plumbingrepair2: "מיקום ההצעה:",
    plumbingrepair3: "4",
    plumbingrepair4: "מועד ההצעה:",
    prop: "אישור ההצעה",
    plumbingrepair5: "300,000",
  },
  {
    plumbingrepair: "Nivo Car\\&#96;s",
    plumbingrepair1: "2",
    plumbingrepair2: "מיקום ההצעה:",
    plumbingrepair3: "4",
    plumbingrepair4: "מועד ההצעה:",
    prop: "אישור ההצעה",
    plumbingrepair5: "200,000",
  },
  {
    plumbingrepair: "Nivo Car\\&#96;s",
    plumbingrepair1: "3",
    plumbingrepair2: "מיקום ההצעה:",
    plumbingrepair3: "4",
    plumbingrepair4: "מועד ההצעה:",
    prop: "אישור ההצעה",
    plumbingrepair5: "₪80,000",
  },
  {
    plumbingrepair: "Nivo Car\\&#96;s",
    plumbingrepair1: "חדרה",
    plumbingrepair2: "מיקום ההצעה:",
    plumbingrepair3: "4",
    plumbingrepair4: "מועד ההצעה:",
    prop: "אישור ההצעה",
    plumbingrepair5: "70,000",
  },
  {
    plumbingrepair: "Nivo Car\\&#96;s",
    plumbingrepair1: "חדרה",
    plumbingrepair2: "מיקום ההצעה:",
    plumbingrepair3: "4",
    plumbingrepair4: "מועד ההצעה:",
    prop: "אישור ההצעה",
    plumbingrepair5: "40,000",
  },
  {
    plumbingrepair: "Nivo Car\\&#96;s",
    plumbingrepair1: "חדרה",
    plumbingrepair2: "מיקום ההצעה:",
    plumbingrepair3: "4",
    plumbingrepair4: "מועד ההצעה:",
    prop: "אישור ההצעה",
    plumbingrepair5: "300,000",
  },
];

export default function AddPageProviderPage() {
  return (
    <>
      <Helmet>
        <title>Rivky miler&#39;s Application15</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-100">
        <div className="flex items-center justify-center gap-[38px] bg-gray-100 shadow-xs md:flex-col">
          <div className="relative mt-[26px] h-[1050px] w-[20%] md:w-full md:px-5">
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[1024px] flex-1 rounded-[20px] bg-secondary-primary_white px-6 py-[50px] shadow-xs lg:h-auto md:h-auto md:py-5 sm:p-4">
              <div className="flex flex-1 items-start justify-center">
                <div className="relative z-[2] mt-1.5 flex items-start gap-2.5 rounded-[14px] border border-solid border-gray-400_07 bg-secondary-primary_white">
                  <Img src="images/img_arrow_left.svg" alt="Arrowleftone" className="mt-1 h-[10px]" />
                  <Heading
                    size="h4_assistant_16px_b"
                    as="h1"
                    className="self-center text-[16px] font-semibold !text-gray-600 lg:text-[13px]"
                  >
                    כל ההצאות
                  </Heading>
                </div>
                <div className="relative ml-[-110px] flex flex-1 flex-col items-end self-center">
                  <Button size="xl" shape="circle" className="relative z-[1] w-[36px] rounded-[18px] px-1.5">
                    <Img src="images/img_television_secondary__primary_white_36x36.svg" />
                  </Button>
                  <div className="relative mt-[-24px] h-[46px] self-stretch border-b border-solid border-gray-200" />
                </div>
              </div>
              <Heading
                size="h3_assistant_25px_m"
                as="h2"
                className="absolute right-[17%] top-[6%] m-auto w-[50%] text-right text-[25px] font-medium leading-[27px] !text-black-900 lg:text-[21px]"
              >
                הצעות מחיר על הרכב
              </Heading>
            </div>
            <div className="absolute bottom-[-1px] left-0 right-0 mx-auto flex-1 px-[26px] sm:px-4">
              <div className="flex flex-col gap-[22px]">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {data.map((d, index) => (
                    <AddPageProviderColumnarrowrigh {...d} key={"listarrowrighto" + index} className="bg-gray-50" />
                  ))}
                </Suspense>
              </div>
            </div>
          </div>
          <div className="relative h-[1024px] w-[74%] content-center lg:h-auto md:h-auto md:w-full md:px-5">
            <div className="flex flex-1">
              <div className="flex flex-1 rounded-[20px] bg-secondary-primary_white shadow-xs">
                <div className="mb-[996px] flex w-[16%] justify-center gap-1 rounded-br-lg bg-gray-100 lg:w-full lg:px-5 md:w-full md:px-5">
                  <div className="w-full">
                    <div className="flex items-center justify-center gap-1">
                      <Heading size="headingmd" as="h2" className="text-[12px] font-bold !text-gray-900_04">
                        <span className="text-gray-900_04">&nbsp;</span>
                        <span className="font-heebo font-medium text-gray-600">lbl_lbl23</span>
                      </Heading>
                      <Img
                        src="images/img_signal_red_a700_03_10x10.png"
                        alt="Signaloneone"
                        className="h-[10px] object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex items-center justify-center gap-0.5">
                      <Heading size="textxs" as="h3" className="!font-heebo text-[12px] font-medium !text-gray-600">
                        מודעות במכרז
                      </Heading>
                      <Img src="images/img_vector_deep_orange_500.svg" alt="Vectoroneone" className="h-[12px]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative ml-[-82px] flex w-[14%] items-start justify-center">
                <div className="flex flex-1 items-start">
                  <div className="relative z-[3] mt-10 flex flex-1 flex-col items-end gap-[30px]">
                    <Button size="6xl" className="mt-[60px] w-[52px] rounded-lg px-4">
                      <Img src="images/img_search_secondary__primary_white.svg" />
                    </Button>
                    <div className="flex flex-col gap-1 self-stretch">
                      <div className="flex justify-end px-3.5 py-4">
                        <Img src="images/img__secondary__primary_white.svg" alt="Imageone" className="h-[20px]" />
                      </div>
                      <div className="flex justify-end px-3.5 py-4">
                        <Img
                          src="images/img__secondary__primary_white_20x20.svg"
                          alt="Imageoneone"
                          className="h-[20px]"
                        />
                      </div>
                      <div className="flex justify-end">
                        <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                          <Button size="6xl" className="w-[50px] rounded-lg px-3.5">
                            <Img src="images/img__20x20.svg" />
                          </Button>
                        </a>
                      </div>
                      <div className="flex justify-end px-3.5 py-4">
                        <Img src="images/img__1.svg" alt="Imagetwoone" className="h-[20px]" />
                      </div>
                      <div className="flex justify-end px-3.5 py-4">
                        <Img src="images/img__2.svg" alt="Imagethreeone" className="h-[20px]" />
                      </div>
                      <div className="flex justify-end px-3.5 py-4">
                        <Img src="images/img__3.svg" alt="Imagefourone" className="h-[20px]" />
                      </div>
                      <div className="flex justify-end px-3.5 py-4">
                        <Img src="images/img__4.svg" alt="Imagefiveone" className="h-[20px]" />
                      </div>
                      <div className="relative h-[50px] content-center p-3.5 lg:h-auto md:h-auto">
                        <Img src="images/img_bell.svg" alt="Belloneone" className="ml-auto h-[20px]" />
                        <div className="absolute right-[26px] top-[17px] m-auto h-[6px] w-[6px] rounded-[3px] bg-red-a700" />
                      </div>
                      <div className="flex justify-end px-3.5 py-4">
                        <Img src="images/img_layers.png" alt="Layersoneone" className="h-[18px] object-cover" />
                      </div>
                      <div className="flex justify-end px-3.5 py-4">
                        <Img src="images/img__5.svg" alt="Imagesixone" className="h-[20px]" />
                      </div>
                      <div className="flex justify-end px-3.5 py-4">
                        <Img src="images/img_search.svg" alt="Searchthreeone" className="h-[20px]" />
                      </div>
                    </div>
                  </div>
                  <div className="relative ml-[-70px] w-[30%] self-center rounded-[16px] bg-black-900_03 px-3.5 py-9 sm:py-4">
                    <div className="mt-[896px] flex flex-col items-center gap-0.5">
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
                        className="!font-inter text-[12px] font-semibold !text-red-a700_03"
                      >
                        ספק
                      </Heading>
                      <Heading
                        size="textxs"
                        as="h6"
                        className="!font-inter text-[12px] font-medium !text-white-a700_7f underline"
                      >
                        התנתקות
                      </Heading>
                    </div>
                  </div>
                </div>
                <div className="relative z-[4] ml-[-88px] mt-[18px] flex w-[30%] justify-center">
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
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 z-[5] m-auto h-max w-full overflow-x-scroll px-14 md:px-5 sm:px-4">
              <div className="flex flex-col gap-[22px]">
                <div className="flex flex-col gap-0.5 px-1.5">
                  <div className="flex items-start md:flex-col">
                    <div className="mt-3.5 flex w-[42%] justify-center gap-1.5 self-end md:w-full">
                      <div className="flex items-center gap-2">
                        <Text
                          size="h4_assistant16px_r"
                          as="p"
                          className="mb-1 self-end text-[16px] font-normal !text-black-900 lg:text-[13px]"
                        >
                          עריכה
                        </Text>
                        <Button
                          size="xl"
                          shape="circle"
                          className="w-[36px] rounded-[18px] border border-solid border-gray-200 px-2.5"
                        >
                          <Img src="images/img_edit.svg" />
                        </Button>
                      </div>
                      <div className="flex flex-1 items-center gap-3 px-4">
                        <Text
                          size="h4_assistant16px_r"
                          as="p"
                          className="self-end text-[16px] font-normal !text-black-900 lg:text-[13px]"
                        >
                          שתף
                        </Text>
                        <Button
                          size="xl"
                          shape="circle"
                          className="w-[36px] rounded-[18px] border border-solid border-gray-200 px-2.5"
                        >
                          <Img src="images/img_twitter_black_900.svg" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-1 items-center justify-center px-14 md:self-stretch md:px-5 sm:px-4">
                      <div className="flex">
                        <Heading size="textlg" as="p" className="!font-dmsans text-[15px] font-normal !text-black-900">
                          אוודי 5455
                        </Heading>
                      </div>
                      <div className="flex w-[10%] items-center justify-center gap-1">
                        <Heading size="textmd" as="p" className="!font-dmsans text-[14px] font-normal !text-black-900">
                          /
                        </Heading>
                        <div className="flex flex-1 justify-center">
                          <Text
                            size="h4_assistant16px_r"
                            as="p"
                            className="self-end text-[16px] font-normal !text-black-900_7f lg:text-[13px]"
                          >
                            סוחרים
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-1 py-0.5">
                        <Heading size="textmd" as="p" className="!font-dmsans text-[14px] font-normal !text-black-900">
                          /
                        </Heading>
                        <Heading
                          size="textlg"
                          as="p"
                          className="!font-dmsans text-[15px] font-normal !text-black-900_7f"
                        >
                          ראשי
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center px-1 sm:flex-col">
                    <div className="mb-1.5 flex items-center self-end">
                      <Button
                        size="lg"
                        shape="round"
                        leftIcon={
                          <div className="flex h-[10px] w-[6px] items-center justify-center">
                            <Img
                              src="images/img_arrowleft_secondary__primary_white.svg"
                              alt="Arrow Left"
                              className="mb-1.5 mt-0.5 h-[10px] w-[6px] object-contain"
                            />
                          </div>
                        }
                        className="min-w-[128px] gap-2 rounded-[16px] px-3 font-semibold"
                      >
                        אישור המודעה
                      </Button>
                      <Switch size="sm" value={true} className="ml-3.5 border border-solid border-gray-200" />
                      <Text size="textxl" as="p" className="ml-[26px] self-end text-[16px] font-normal lg:text-[13px]">
                        שיריון הרכב
                      </Text>
                    </div>
                    <Heading
                      size="h1_assistant_45px_m"
                      as="p"
                      className="text-[45px] font-medium !text-black-900 lg:text-[38px] md:text-[29px] sm:text-[23px]"
                    >
                      אוודי 5455
                    </Heading>
                  </div>
                </div>
                <div className="flex items-center gap-[21px] md:flex-col">
                  <div className="flex w-[28%] flex-col gap-[18px] md:w-full">
                    <Img
                      src="images/img_car11_qgcqjcnfp_204x354.png"
                      alt="Car11qgcqjcnfp"
                      className="h-[204px] rounded-[16px] object-cover"
                    />
                    <Img
                      src="images/img_car11_qgcqjcnfp_1.png"
                      alt="Car11qgcqjcnfp"
                      className="h-[204px] rounded-[16px] object-cover"
                    />
                  </div>
                  <div className="flex h-[428px] w-[58%] flex-col items-start gap-[124px] bg-[url(/public/images/img_car11_qgcqjcnfp_428x738.png)] bg-cover bg-no-repeat px-3.5 py-6 lg:h-auto lg:gap-[93px] md:h-auto md:w-full md:gap-[93px] sm:gap-[62px] sm:py-4">
                    <Button
                      size="lg"
                      shape="round"
                      className="ml-2.5 min-w-[126px] rounded-[16px] px-[18px] font-dmsans font-medium capitalize md:ml-0"
                    >
                      ממתין לאישור
                    </Button>
                    <div className="mb-44 flex justify-between gap-5 self-stretch">
                      <div className="flex w-[8%] justify-center rounded-[22px] bg-white-a700_7f p-3.5">
                        <Img
                          src="images/img_arrow_left_secondary__primary_white_3.svg"
                          alt="Arrowleftthree"
                          className="h-[12px]"
                        />
                      </div>
                      <div className="flex w-[8%] justify-center rounded-[22px] bg-white-a700_7f p-3.5">
                        <Img
                          src="images/img_arrow_right_secondary__primary_white_2.svg"
                          alt="Arrowrightone"
                          className="h-[12px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-1">
                  <div className="mb-[46px] flex flex-col items-start">
                    <div className="flex flex-col items-start self-stretch">
                      <div className="flex w-[88%] flex-col gap-1.5 rounded-md bg-secondary-primary_white lg:w-full md:w-full">
                        <div className="flex items-center justify-center rounded-md border-b border-solid border-gray-400_08 bg-gray-100_01 p-3.5">
                          <Img
                            src="images/img_checkmark_black_900_03_1.svg"
                            alt="Checkmarkone"
                            className="h-[22px] self-end"
                          />
                          <div className="flex flex-1 justify-end">
                            <Heading size="ass_20" as="h5" className="text-[20px] font-semibold lg:text-[17px]">
                              פרטי הרכב
                            </Heading>
                          </div>
                        </div>
                        <div className="mx-[34px] mb-3 flex items-start md:mx-0 md:flex-col">
                          <div className="mt-2 flex flex-1 gap-[172px] md:flex-row md:self-stretch sm:flex-col">
                            <AddPageProviderColumn className="w-[46%]" />
                            <AddPageProviderColumn
                              prop="2002"
                              prop1="שנת יצור"
                              two="images/img_calendar.svg"
                              four="1329 ליטר בנזין"
                              prop2="מנוע"
                              two1="images/img_artboard_2_copy_11.svg"
                              prop3="2283"
                              prop4="גיר"
                              prop5="images/img_vector_black_900_03_1.svg"
                              p1205="2283"
                              className="w-[54%]"
                            />
                          </div>
                          <div className="mt-2 flex w-[36%] flex-col gap-[22px] self-end md:w-full">
                            <div className="flex items-center justify-end gap-[9px]">
                              <Text size="textxl" as="p" className="!font-heebo text-[16px] font-normal lg:text-[13px]">
                                5211154444
                              </Text>
                              <div className="flex w-[34%] justify-end border-l border-solid border-gray-200">
                                <div className="flex w-full items-center justify-end gap-1.5">
                                  <Text
                                    size="h4_assistant16px_r"
                                    as="p"
                                    className="text-[16px] font-normal lg:text-[13px]"
                                  >
                                    מס’ רישוי
                                  </Text>
                                  <Img
                                    src="images/img_icon_black_900_01_22x22.svg"
                                    alt="Icononeone"
                                    className="h-[22px]"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[22px]">
                              <div className="flex items-center justify-end gap-7">
                                <Text
                                  size="textxl"
                                  as="p"
                                  className="!font-heebo text-[16px] font-normal lg:text-[13px]"
                                >
                                  רובר אנגליה
                                </Text>
                                <div className="flex w-[30%] items-center justify-end gap-[18px] border-l border-solid border-gray-200">
                                  <Text
                                    size="h4_assistant16px_r"
                                    as="p"
                                    className="mt-1.5 self-end text-[16px] font-normal lg:text-[13px]"
                                  >
                                    יצרן
                                  </Text>
                                  <Img
                                    src="images/img_signal_black_900_03_1.svg"
                                    alt="Signalthreeone"
                                    className="h-[18px]"
                                  />
                                </div>
                              </div>
                              <div className="flex justify-end gap-2.5">
                                <Text
                                  size="textxl"
                                  as="p"
                                  className="w-[24%] text-right !font-heebo text-[16px] font-normal leading-[27px] lg:text-[13px]"
                                >
                                  MPD SERENA
                                </Text>
                                <div className="flex w-[28%] items-center justify-end gap-[15px] border-l border-solid border-gray-200">
                                  <Text
                                    size="h4_assistant16px_r"
                                    as="p"
                                    className="self-end text-[16px] font-normal lg:text-[13px]"
                                  >
                                    דגם
                                  </Text>
                                  <Img
                                    src="images/img_icon_black_900_01_22x22.svg"
                                    alt="Iconthreeone"
                                    className="h-[22px]"
                                  />
                                </div>
                              </div>
                              <div className="flex items-center justify-end gap-[9px]">
                                <Text size="textxl" as="p" className="self-end text-[16px] font-normal lg:text-[13px]">
                                  MPD SERENA
                                </Text>
                                <div className="flex w-[28%] items-center justify-end gap-3.5 border-l border-solid border-gray-200">
                                  <Text
                                    size="h4_assistant16px_r"
                                    as="p"
                                    className="self-end text-[16px] font-normal lg:text-[13px]"
                                  >
                                    תת דגם
                                  </Text>
                                  <Img
                                    src="images/img_icon_black_900_01_22x22.svg"
                                    alt="Iconfiveone"
                                    className="h-[22px]"
                                  />
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <div className="flex flex-1 justify-end">
                                  <Text
                                    size="textxl"
                                    as="p"
                                    className="self-end text-[16px] font-normal lg:text-[13px]"
                                  >
                                    178,000
                                  </Text>
                                </div>
                                <div className="flex w-[28%] justify-center gap-3.5 border-l border-solid border-gray-200">
                                  <Text
                                    size="h4_assistant16px_r"
                                    as="p"
                                    className="self-end text-[16px] font-normal lg:text-[13px]"
                                  >
                                    ק”ש נוכחי
                                  </Text>
                                  <Img
                                    src="images/img_artboard_2_copy_6.svg"
                                    alt="Artboard2copy"
                                    className="h-[20px]"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex w-[88%] items-center justify-between gap-5 rounded-md border border-solid border-blue_gray-100 bg-secondary-primary_white p-5 lg:w-full md:w-full">
                        <Img
                          src="images/img_arrow_left_secondary__primary_white_2.svg"
                          alt="Arrowleftfive"
                          className="h-[22px] self-start"
                        />
                        <Heading size="ass_20" as="h5" className="text-[20px] font-semibold lg:text-[17px]">
                          מידע על העיסקה
                        </Heading>
                      </div>
                    </div>
                    <div className="mb-[136px] flex w-[88%] items-center justify-center gap-[50px] rounded-md border border-solid border-blue_gray-100 bg-secondary-primary_white p-5 lg:w-full md:w-full sm:flex-col">
                      <Img
                        src="images/img_arrow_left_secondary__primary_white_2.svg"
                        alt="Arrowleftseven"
                        className="h-[22px] self-start sm:w-full"
                      />
                      <div className="flex flex-1 justify-end sm:self-stretch">
                        <Heading size="ass_20" as="h5" className="text-[20px] font-semibold lg:text-[17px]">
                          מפרט טכני
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
    </>
  );
}
