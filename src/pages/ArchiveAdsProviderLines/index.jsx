import { Helmet } from "react-helmet";
import { Heading, Img, Button } from "../../components";
import AllAddsProviderCubesColumnclose from "../../components/AllAddsProviderCubesColumnclose";
import AllAddsProviderCubesRow from "../../components/AllAddsProviderCubesRow";
import { ReactTable } from "../../components/ReactTable";
import TenderAdsProviderLinesRowten from "../../components/TenderAdsProviderLinesRowten";
import { createColumnHelper } from "@tanstack/react-table";
import React, { Suspense } from "react";

const data = [
  { image: "images/img_car_black_900_03.svg", twenty: "20", prop: "מודעות" },
  { image: "images/img_car_red_a700_03_1.svg", twenty: "20", prop: "מודעות בהמתנה לאישור" },
  { image: "images/img_car_light_green_800_1.svg", twenty: "20", prop: "מודעות מאושרות" },
  { image: "images/img_thumbs_up.svg", twenty: "20", prop: "מודעות למכרז" },
  { image: "images/img_television_yellow_800.svg", twenty: "20", prop: "חבילת מודעות במכרז" },
  { image: "images/img_car_gray_700_04.svg", twenty: "20", prop: "מודעות בארכיון" },
];
const table10Data = [
  {
    rowrow: "הצעה חדשה",
    rowplumbingrepa: "פירוק",
    rowplumbingrepa1: "₪",
    rowplumbingrepa2: "8.9.23",
    rowplumbingrepa3: "4",
    rowplumbingrepa4: "80,000",
    rowplumbingrepa5: "אוטומטי",
    rowplumbingrepa6: "2022",
    rowplumbingrepa7: " במוו",
    rowplumbingrepa8: "X8 – 5.0 במוו",
    settingsoneone: "images/img_settings_black_900.svg",
    Data: "ארכיון",
    televisionone: "images/img_television_red_a700_03_1.svg",
  },
  {
    settingsoneone: "images/img_settings_black_900.svg",
    rowrow: "הצעה חדשה",
    Data: "ארכיון",
    rowplumbingrepa: "פירוק",
    televisionone: "images/img_television_red_a700_03_1.svg",
    rowplumbingrepa1: "₪",
    rowplumbingrepa2: "8.9.23",
    rowplumbingrepa3: "4",
    rowplumbingrepa4: "80,000",
    rowplumbingrepa5: "אוטומטי",
    rowplumbingrepa6: "2022",
    rowplumbingrepa7: " במוו",
    rowplumbingrepa8: "X8 – 5.0 במוו",
  },
  {
    settingsoneone: "images/img_settings_black_900.svg",
    rowrow: "הצעה חדשה",
    Data: "ארכיון",
    rowplumbingrepa: "פירוק",
    televisionone: "images/img_television_red_a700_03_1.svg",
    rowplumbingrepa1: "₪",
    rowplumbingrepa2: "8.9.23",
    rowplumbingrepa3: "4",
    rowplumbingrepa4: "80,000",
    rowplumbingrepa5: "אוטומטי",
    rowplumbingrepa6: "2022",
    rowplumbingrepa7: " במוו",
    rowplumbingrepa8: "X8 – 5.0 במוו",
  },
  {
    settingsoneone: "images/img_settings_black_900.svg",
    rowrow: "הצעה חדשה",
    Data: "ארכיון",
    rowplumbingrepa: "פירוק",
    televisionone: "images/img_television_red_a700_03_1.svg",
    rowplumbingrepa1: "₪",
    rowplumbingrepa2: "8.9.23",
    rowplumbingrepa3: "4",
    rowplumbingrepa4: "80,000",
    rowplumbingrepa5: "אוטומטי",
    rowplumbingrepa6: "2022",
    rowplumbingrepa7: " במוו",
    rowplumbingrepa8: "X8 – 5.0 במוו",
  },
  {
    settingsoneone: "images/img_settings_black_900.svg",
    rowrow: "הצעה חדשה",
    Data: "ארכיון",
    rowplumbingrepa: "פירוק",
    televisionone: "images/img_television_red_a700_03_1.svg",
    rowplumbingrepa1: "₪",
    rowplumbingrepa2: "8.9.23",
    rowplumbingrepa3: "4",
    rowplumbingrepa4: "80,000",
    rowplumbingrepa5: "אוטומטי",
    rowplumbingrepa6: "2022",
    rowplumbingrepa7: " במוו",
    rowplumbingrepa8: "X8 – 5.0 במוו",
  },
  {
    settingsoneone: "images/img_settings_black_900.svg",
    rowrow: "הצעה חדשה",
    Data: "ארכיון",
    rowplumbingrepa: "פירוק",
    televisionone: "images/img_television_red_a700_03_1.svg",
    rowplumbingrepa1: "₪",
    rowplumbingrepa2: "8.9.23",
    rowplumbingrepa3: "4",
    rowplumbingrepa4: "80,000",
    rowplumbingrepa5: "אוטומטי",
    rowplumbingrepa6: "2022",
    rowplumbingrepa7: " במוו",
    rowplumbingrepa8: "X8 – 5.0 במוו",
  },
  {
    settingsoneone: "images/img_settings_black_900.svg",
    rowrow: "הצעה חדשה",
    Data: "ארכיון",
    rowplumbingrepa: "פירוק",
    televisionone: "images/img_television_red_a700_03_1.svg",
    rowplumbingrepa1: "₪",
    rowplumbingrepa2: "8.9.23",
    rowplumbingrepa3: "4",
    rowplumbingrepa4: "80,000",
    rowplumbingrepa5: "אוטומטי",
    rowplumbingrepa6: "2022",
    rowplumbingrepa7: " במוו",
    rowplumbingrepa8: "X8 – 5.0 במוו",
  },
  {
    settingsoneone: "images/img_settings_black_900.svg",
    rowrow: "הצעה חדשה",
    Data: "ארכיון",
    rowplumbingrepa: "פירוק",
    televisionone: "images/img_television_red_a700_03_1.svg",
    rowplumbingrepa1: "₪",
    rowplumbingrepa2: "8.9.23",
    rowplumbingrepa3: "4",
    rowplumbingrepa4: "80,000",
    rowplumbingrepa5: "אוטומטי",
    rowplumbingrepa6: "2022",
    rowplumbingrepa7: " במוו",
    rowplumbingrepa8: "X8 – 5.0 במוו",
  },
  {
    settingsoneone: "images/img_settings_black_900.svg",
    rowrow: "הצעה חדשה",
    Data: "ארכיון",
    rowplumbingrepa: "פירוק",
    televisionone: "images/img_television_red_a700_03_1.svg",
    rowplumbingrepa1: "₪",
    rowplumbingrepa2: "8.9.23",
    rowplumbingrepa3: "4",
    rowplumbingrepa4: "80,000",
    rowplumbingrepa5: "אוטומטי",
    rowplumbingrepa6: "2022",
    rowplumbingrepa7: " במוו",
    rowplumbingrepa8: "X8 – 5.0 במוו",
  },
  {
    settingsoneone: "images/img_settings_black_900.svg",
    rowrow: "הצעה חדשה",
    Data: "ארכיון",
    rowplumbingrepa: "פירוק",
    televisionone: "images/img_television_red_a700_03_1.svg",
    rowplumbingrepa1: "₪",
    rowplumbingrepa2: "8.9.23",
    rowplumbingrepa3: "4",
    rowplumbingrepa4: "80,000",
    rowplumbingrepa5: "אוטומטי",
    rowplumbingrepa6: "2022",
    rowplumbingrepa7: " במוו",
    rowplumbingrepa8: "X8 – 5.0 במוו",
  },
  {
    settingsoneone: "images/img_settings_black_900.svg",
    rowrow: "הצעה חדשה",
    Data: "ארכיון",
    rowplumbingrepa: "פירוק",
    televisionone: "images/img_television_red_a700_03_1.svg",
    rowplumbingrepa1: "₪",
    rowplumbingrepa2: "8.9.23",
    rowplumbingrepa3: "4",
    rowplumbingrepa4: "80,000",
    rowplumbingrepa5: "אוטומטי",
    rowplumbingrepa6: "2022",
    rowplumbingrepa7: " במוו",
    rowplumbingrepa8: "X8 – 5.0 במוו",
  },
  {
    rowrow: "ארכיון",
    vectorthreeone: "images/img_vector_1.png",
    oneOne: "הצעה חדשה",
    rowplumbingrepa: "פירוק",
    televisionone: "images/img_vector_red_a700_03_7.png",
    rowplumbingrepa1: "₪",
    rowplumbingrepa2: "8.9.23",
    rowplumbingrepa3: "4",
    rowplumbingrepa4: "80,000",
    rowplumbingrepa5: "אוטומטי",
    rowplumbingrepa6: "2022",
    rowplumbingrepa7: " במוו",
    rowplumbingrepa8: "X8 – 5.0 במוו",
  },
];

export default function ArchiveAdsProviderLinesPage() {
  const table10Columns = React.useMemo(() => {
    const table10ColumnHelper = createColumnHelper();
    return [
      table10ColumnHelper.accessor("rowrow", {
        cell: (info) => (
          <div className="flex flex-1 items-center justify-between gap-5 self-center px-8 sm:px-4">
            <div className="flex items-center">
              <Img src={info.row.original.settingsoneone} alt="Settingsoneone" className="h-[14px]" />
              <Heading size="h4_assistant_16px_b" as="h6" className="self-end text-[16px] font-semibold lg:text-[13px]">
                {info.getValue()}
              </Heading>
            </div>
            <Button
              shape="round"
              className="mr-4 min-w-[112px] rounded-[14px] border border-solid border-gray-700_04 px-[33px] font-dmsans font-medium capitalize !text-gray-700_04 lg:mr-0 md:mr-0 sm:px-4"
            >
              {info.row.original.Data}
            </Button>
          </div>
        ),
        header: (info) => (
          <div className="flex items-center">
            <div className="w-[26%]">
              <div className="flex" />
              <div className="relative mt-[-24px] flex items-center justify-center gap-2">
                <Img src="images/img_group_758531290.svg" alt="Imagethirteen" className="h-[12px]" />
                <Heading as="h4" className="text-[18px] font-semibold lg:text-[15px]">
                  ביצוע
                </Heading>
              </div>
            </div>
            <div className="relative h-[30px] w-[32%] content-center lg:h-auto md:h-auto">
              <div className="flex flex-1" />
              <div className="absolute bottom-0 left-0 top-0 my-auto mr-1.5 flex h-max flex-1 items-center gap-2 lg:mr-0 md:mr-0">
                <Img src="images/img_group_758531290.svg" alt="Imagefourteen" className="h-[12px]" />
                <Heading as="h5" className="text-[18px] font-semibold lg:text-[15px]">
                  סטטוס
                </Heading>
              </div>
            </div>
          </div>
        ),
        meta: { width: "220px" },
      }),
      table10ColumnHelper.accessor("rowplumbingrepa", {
        cell: (info) => (
          <div className="flex items-center justify-center gap-[18px] self-center rounded-[14px] bg-secondary-primary_white">
            <Heading
              size="textmd"
              as="p"
              className="self-end !font-dmsans text-[14px] font-medium capitalize !text-black-900"
            >
              {info.getValue()}
            </Heading>
            <Img src={info.row.original.televisionone} alt="Televisionone" className="h-[22px]" />
          </div>
        ),
        header: (info) => (
          <div className="ml-[74px] flex items-center gap-2.5 px-2.5 py-2">
            <Img src="images/img_group_758531290.svg" alt="Imagefifteen" className="h-[12px]" />
            <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
              מיועד ל
            </Heading>
          </div>
        ),
        meta: { width: "156px" },
      }),
      table10ColumnHelper.accessor("rowplumbingrepa1", {
        cell: (info) => (
          <div className="ml-[42px] flex flex-wrap items-start self-center px-1">
            <Img src="images/img_plus.svg" alt="Plusoneone" className="h-[18px]" />
            <Heading
              size="headinglg"
              as="p"
              className="self-center !font-heebo text-[14px] font-bold !text-red-a700_03"
            >
              {info.getValue()}
            </Heading>
            <Heading as="h6" className="self-center !font-heebo text-[18px] font-bold !text-red-a700_03 lg:text-[15px]">
              40,000
            </Heading>
            <Img src="images/img_user_secondary__primary_white.svg" alt="Useroneone" className="h-[18px]" />
          </div>
        ),
        header: (info) => (
          <div className="flex items-center gap-[7px] py-2.5">
            <Img src="images/img_group_758531290.svg" alt="Imagesixteen" className="h-[12px]" />
            <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
              הצעת מחיר
            </Heading>
          </div>
        ),
        meta: { width: "132px" },
      }),
      table10ColumnHelper.accessor("rowplumbingrepa2", {
        cell: (info) => (
          <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
            {info.getValue()}
          </Heading>
        ),
        header: (info) => (
          <div className="flex items-center gap-2.5 py-2">
            <Img src="images/img_group_758531290.svg" alt="Imageseventeen" className="h-[12px]" />
            <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
              תאריך
            </Heading>
          </div>
        ),
        meta: { width: "102px" },
      }),
      table10ColumnHelper.accessor("rowplumbingrepa3", {
        cell: (info) => (
          <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
            {info.getValue()}
          </Heading>
        ),
        header: (info) => (
          <div className="flex items-center gap-2 py-2">
            <Img src="images/img_group_758531290.svg" alt="Imageeighteen" className="h-[12px]" />
            <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
              יד
            </Heading>
          </div>
        ),
        meta: { width: "66px" },
      }),
      table10ColumnHelper.accessor("rowplumbingrepa4", {
        cell: (info) => (
          <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
            {info.getValue()}
          </Heading>
        ),
        header: (info) => (
          <div className="flex items-center gap-2.5 py-2.5">
            <Img src="images/img_group_758531290.svg" alt="Imagenineteen" className="h-[12px]" />
            <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
              קילומטר
            </Heading>
          </div>
        ),
        meta: { width: "130px" },
      }),
      table10ColumnHelper.accessor("rowplumbingrepa5", {
        cell: (info) => (
          <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
            {info.getValue()}
          </Heading>
        ),
        header: (info) => (
          <div className="flex items-center px-1.5 py-2">
            <Img src="images/img_group_758531290.svg" alt="Imagetwentyone" className="h-[12px]" />
            <Heading as="h6" className="self-end text-[18px] font-semibold lg:text-[15px]">
              גיר
            </Heading>
          </div>
        ),
        meta: { width: "100px" },
      }),
      table10ColumnHelper.accessor("rowplumbingrepa6", {
        cell: (info) => (
          <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
            {info.getValue()}
          </Heading>
        ),
        header: (info) => (
          <div className="flex items-center py-2">
            <Img src="images/img_group_758531290.svg" alt="Imagetwentyone" className="h-[12px]" />
            <Heading as="h6" className="self-end text-[18px] font-semibold lg:text-[15px]">
              שנת יצור
            </Heading>
          </div>
        ),
        meta: { width: "102px" },
      }),
      table10ColumnHelper.accessor("rowplumbingrepa7", {
        cell: (info) => (
          <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
            <span>&nbsp;</span>
            <span className="font-bold">lbl_lbl20</span>
          </Heading>
        ),
        header: (info) => (
          <div className="flex items-center py-2">
            <Img src="images/img_group_758531290.svg" alt="Imagetwentytwo" className="h-[12px]" />
            <Heading as="h6" className="self-end text-[18px] font-semibold lg:text-[15px]">
              חברה
            </Heading>
          </div>
        ),
        meta: { width: "96px" },
      }),
      table10ColumnHelper.accessor("rowplumbingrepa8", {
        cell: (info) => (
          <Heading as="h6" className="text-[18px] font-bold lg:text-[15px]">
            {info.getValue()}
          </Heading>
        ),
        header: (info) => (
          <div className="flex items-center p-2">
            <Img src="images/img_group_758531290.svg" alt="Imagethree" className="h-[12px]" />
            <Heading as="h6" className="self-end text-[18px] font-semibold lg:text-[15px]">
              דגם הרכב
            </Heading>
          </div>
        ),
        meta: { width: "146px" },
      }),
    ];
  }, []);

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
                    <div className="mb-1 flex flex-col items-center">
                      <div className="flex w-[14%] justify-center gap-1 self-start rounded-br-lg bg-gray-100 lg:w-full md:w-full">
                        <div className="w-full">
                          <div className="flex items-center justify-center gap-1">
                            <Heading size="headingmd" as="h2" className="text-[12px] font-bold !text-gray-900_04">
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
                              as="h3"
                              className="!font-heebo text-[12px] font-medium !text-gray-600"
                            >
                              מודעות במכרז
                            </Heading>
                            <Img src="images/img_vector_deep_orange_500.svg" alt="Vectoroneone" className="h-[12px]" />
                          </div>
                        </div>
                      </div>
                      <header className="ml-6 mr-12 mt-2 self-stretch md:mx-0">
                        <div className="relative h-[56px]">
                          <div className="absolute bottom-0 right-[12.40px] top-0 my-auto flex h-max items-start gap-[22px] py-1.5">
                            <Heading
                              size="h3_assistant_25px_m"
                              as="p"
                              className="text-[25px] font-medium lg:text-[21px]"
                            >
                              מודעות רכבים שלי
                            </Heading>
                            <a href="#">
                              <Img
                                src="images/img_car_red_a700_03_3.png"
                                alt="Caroneone"
                                className="mb-1.5 h-[36px] object-cover"
                              />
                            </a>
                          </div>
                          <div className="absolute left-0 right-0 top-[3.05px] mx-auto flex flex-1 flex-col items-start">
                            <div className="relative z-[1] flex gap-3.5">
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
                            <div className="relative mt-[-28px] flex self-stretch border-b border-solid border-gray-200 pl-[142px] pr-14 lg:pl-8 md:px-5 sm:px-4">
                              <div className="flex w-[76%] flex-col items-start gap-2.5 lg:w-full md:w-full">
                                <div className="flex flex-wrap items-end justify-center self-stretch">
                                  <Heading
                                    size="h4_assistant_16px_b"
                                    as="h6"
                                    className="mt-1.5 text-[16px] font-semibold lg:text-[13px]"
                                  >
                                    מודעות בארכיון
                                  </Heading>
                                  <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                    <Heading
                                      size="h4_assistant_16px_b"
                                      as="h6"
                                      className="ml-[26px] text-[16px] font-semibold !text-gray-600 lg:text-[13px]"
                                    >
                                      מודעות מאושרות
                                    </Heading>
                                  </a>
                                  <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                    <Heading
                                      size="h4_assistant_16px_b"
                                      as="h6"
                                      className="ml-7 self-center text-[16px] font-semibold !text-gray-500_02 lg:text-[13px]"
                                    >
                                      חבילת רכבים
                                    </Heading>
                                  </a>
                                  <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                    <Heading
                                      size="h4_assistant_16px_b"
                                      as="h6"
                                      className="ml-6 text-[16px] font-semibold !text-gray-500_02 lg:text-[13px]"
                                    >
                                      מודעות במכרז
                                    </Heading>
                                  </a>
                                  <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                    <Heading
                                      size="h4_assistant_16px_b"
                                      as="h6"
                                      className="ml-7 text-[16px] font-semibold !text-gray-500_02 lg:text-[13px]"
                                    >
                                      מודעות עם הצעות מחיר
                                    </Heading>
                                  </a>
                                  <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                    <Heading
                                      size="h4_assistant_16px_b"
                                      as="h6"
                                      className="ml-[34px] self-center text-[16px] font-semibold !text-gray-500_02 lg:text-[13px]"
                                    >
                                      מודעות שממתינות להצעה
                                    </Heading>
                                  </a>
                                  <Heading
                                    size="h4_assistant_16px_b"
                                    as="h6"
                                    className="ml-7 self-center text-[16px] font-semibold !text-gray-600 lg:text-[13px]"
                                  >
                                    כל המודעות
                                  </Heading>
                                </div>
                                <div className="h-[2px] w-[12%] bg-red-a700_03" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </header>
                      <div className="ml-8 mr-11 mt-5 self-stretch md:mx-0">
                        <TenderAdsProviderLinesRowten />
                        <AllAddsProviderCubesColumnclose className="relative mt-[-42px]" />
                      </div>
                      <ReactTable
                        size="xs"
                        bodyProps={{ className: "" }}
                        headerProps={{ className: "border-gray-200 border-b border-solid" }}
                        className="ml-10 mr-8 mt-4 self-stretch md:mx-0 md:block md:overflow-x-auto md:whitespace-nowrap"
                        columns={table10Columns}
                        data={table10Data}
                      />
                    </div>
                  </div>
                  <Img
                    src="images/img_tablist.png"
                    alt="Tablistthree"
                    className="absolute right-px top-0 m-auto h-[40px] w-[8%] object-contain"
                  />
                  <div className="absolute bottom-[-1.96px] left-0 right-0 mx-10 flex flex-1 flex-col gap-1.5 lg:mx-0 md:mx-0">
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
                      <div className="relative z-[2] mt-10 flex flex-1 flex-col items-end gap-[30px] md:self-stretch">
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
                            as="p"
                            className="!font-inter text-[14px] font-semibold !text-secondary-primary_white"
                          >
                            גילי עטיה
                          </Heading>
                          <Heading
                            size="headingmd"
                            as="p"
                            className="!font-inter text-[12px] font-semibold !text-red-a700_03"
                          >
                            ספק
                          </Heading>
                          <Heading
                            size="textxs"
                            as="p"
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
