import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text } from "../../components";
import AllAddsDealerCubesRow from "../../components/AllAddsDealerCubesRow";
import AllAddsProviderCubesColumnclose from "../../components/AllAddsProviderCubesColumnclose";
import CarPackageDealerCubesVariant5 from "../../components/CarPackageDealerCubesVariant5";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import React, { Suspense } from "react";
import { TabPanel, Tabs } from "react-tabs";

const data = [
  { twenty: "20", prop: "מודעות חדשות" },
  { twenty: "20", prop: "מודעות" },
  { twenty: "20", prop: "מודעות בהמתנה לאישור" },
  { twenty: "20", prop: "מודעות מאושרות" },
  { twenty: "20", prop: "מודעות למכרז" },
  { twenty: "20", prop: "חבילת מודעות במכרז" },
  { twenty: "20", prop: "מודעות בארכיון" },
];
const table9Data = [
  {
    rowplumbingrepa: "הגש הצעה",
    rowplumbingrepa1: "לצפיה",
    rowplumbingrepa2: "ארכיון",
    rowplumbingrepa3: "פירוק",
    rowrow: "₪",
    rowplumbingrepa4: "4",
    rowplumbingrepa5: "80,000",
    rowplumbingrepa6: "אוטומטי",
    rowplumbingrepa7: "2022",
    rowplumbingrepa8: " במוו",
    rowplumbingrepa9: "X8 – 5.0 במוו",
    settingsoneone: "images/img_settings_black_900.svg",
    televisionone: "images/img_television_red_a700_03_1.svg",
    plusoneoneOne: "images/img_plus.svg",
    plumbingrepair: "8.9.23",
    useroneoneOne: "images/img_user_secondary__primary_white.svg",
    signalthreeone: "images/img_signal_secondary__primary_white_1.svg",
  },
  {
    settingsoneone: "images/img_settings_black_900.svg",
    rowplumbingrepa: "הגש הצעה",
    rowplumbingrepa1: "לצפיה",
    rowplumbingrepa2: "ארכיון",
    rowplumbingrepa3: "פירוק",
    televisionone: "images/img_television_red_a700_03_1.svg",
    plusoneoneOne: "images/img_plus.svg",
    rowrow: "₪",
    plumbingrepair: "8.9.23",
    useroneoneOne: "images/img_user_secondary__primary_white.svg",
    rowplumbingrepa4: "4",
    rowplumbingrepa5: "80,000",
    rowplumbingrepa6: "אוטומטי",
    rowplumbingrepa7: "2022",
    rowplumbingrepa8: " במוו",
    rowplumbingrepa9: "X8 – 5.0 במוו",
    signalthreeone: "images/img_signal_secondary__primary_white_1.svg",
  },
  {
    settingsoneone: "images/img_settings_black_900.svg",
    rowplumbingrepa: "הגש הצעה",
    rowplumbingrepa1: "לצפיה",
    rowplumbingrepa2: "ארכיון",
    rowplumbingrepa3: "פירוק",
    televisionone: "images/img_television_red_a700_03_1.svg",
    plusoneoneOne: "images/img_plus.svg",
    rowrow: "₪",
    plumbingrepair: "8.9.23",
    useroneoneOne: "images/img_user_secondary__primary_white.svg",
    rowplumbingrepa4: "4",
    rowplumbingrepa5: "80,000",
    rowplumbingrepa6: "אוטומטי",
    rowplumbingrepa7: "2022",
    rowplumbingrepa8: " במוו",
    rowplumbingrepa9: "X8 – 5.0 במוו",
    signalthreeone: "images/img_signal_secondary__primary_white_1.svg",
  },
  {
    settingsoneone: "images/img_settings_black_900.svg",
    rowplumbingrepa: "הגש הצעה",
    rowplumbingrepa1: "לצפיה",
    rowplumbingrepa2: "ארכיון",
    rowplumbingrepa3: "פירוק",
    televisionone: "images/img_television_red_a700_03_1.svg",
    plusoneoneOne: "images/img_plus.svg",
    rowrow: "₪",
    plumbingrepair: "8.9.23",
    useroneoneOne: "images/img_user_secondary__primary_white.svg",
    rowplumbingrepa4: "4",
    rowplumbingrepa5: "80,000",
    rowplumbingrepa6: "אוטומטי",
    rowplumbingrepa7: "2022",
    rowplumbingrepa8: " במוו",
    rowplumbingrepa9: "X8 – 5.0 במוו",
    signalthreeone: "images/img_signal_secondary__primary_white_1.svg",
  },
  {
    settingsoneone: "images/img_settings_black_900.svg",
    rowplumbingrepa: "הגש הצעה",
    rowplumbingrepa1: "לצפיה",
    rowplumbingrepa2: "ארכיון",
    rowplumbingrepa3: "פירוק",
    televisionone: "images/img_television_red_a700_03_1.svg",
    plusoneoneOne: "images/img_plus.svg",
    rowrow: "₪",
    plumbingrepair: "8.9.23",
    useroneoneOne: "images/img_user_secondary__primary_white.svg",
    rowplumbingrepa4: "4",
    rowplumbingrepa5: "80,000",
    rowplumbingrepa6: "אוטומטי",
    rowplumbingrepa7: "2022",
    rowplumbingrepa8: " במוו",
    rowplumbingrepa9: "X8 – 5.0 במוו",
    signalthreeone: "images/img_signal_secondary__primary_white_1.svg",
  },
  {
    settingsoneone: "images/img_settings_black_900.svg",
    rowplumbingrepa: "הגש הצעה",
    rowplumbingrepa1: "לצפיה",
    rowplumbingrepa2: "ארכיון",
    rowplumbingrepa3: "פירוק",
    televisionone: "images/img_television_red_a700_03_1.svg",
    plusoneoneOne: "images/img_plus.svg",
    rowrow: "₪",
    plumbingrepair: "8.9.23",
    useroneoneOne: "images/img_user_secondary__primary_white.svg",
    rowplumbingrepa4: "4",
    rowplumbingrepa5: "80,000",
    rowplumbingrepa6: "אוטומטי",
    rowplumbingrepa7: "2022",
    rowplumbingrepa8: " במוו",
    rowplumbingrepa9: "X8 – 5.0 במוו",
    signalthreeone: "images/img_signal_secondary__primary_white_1.svg",
  },
  {
    settingsoneone: "images/img_settings_black_900.svg",
    rowplumbingrepa: "הגש הצעה",
    rowplumbingrepa1: "לצפיה",
    rowplumbingrepa2: "ארכיון",
    rowplumbingrepa3: "פירוק",
    televisionone: "images/img_television_red_a700_03_1.svg",
    plusoneoneOne: "images/img_plus.svg",
    rowrow: "₪",
    plumbingrepair: "8.9.23",
    useroneoneOne: "images/img_user_secondary__primary_white.svg",
    rowplumbingrepa4: "4",
    rowplumbingrepa5: "80,000",
    rowplumbingrepa6: "אוטומטי",
    rowplumbingrepa7: "2022",
    rowplumbingrepa8: " במוו",
    rowplumbingrepa9: "X8 – 5.0 במוו",
    signalthreeone: "images/img_signal_secondary__primary_white_1.svg",
  },
  {
    settingsoneone: "images/img_settings_black_900.svg",
    rowplumbingrepa: "הגש הצעה",
    rowplumbingrepa1: "לצפיה",
    rowplumbingrepa2: "ארכיון",
    rowplumbingrepa3: "פירוק",
    televisionone: "images/img_television_red_a700_03_1.svg",
    plusoneoneOne: "images/img_plus.svg",
    rowrow: "₪",
    plumbingrepair: "8.9.23",
    useroneoneOne: "images/img_user_secondary__primary_white.svg",
    rowplumbingrepa4: "4",
    rowplumbingrepa5: "80,000",
    rowplumbingrepa6: "אוטומטי",
    rowplumbingrepa7: "2022",
    rowplumbingrepa8: " במוו",
    rowplumbingrepa9: "X8 – 5.0 במוו",
    signalthreeone: "images/img_signal_secondary__primary_white_1.svg",
  },
  {
    settingsoneone: "images/img_settings_black_900.svg",
    rowplumbingrepa: "הגש הצעה",
    rowplumbingrepa1: "לצפיה",
    rowplumbingrepa2: "ארכיון",
    rowplumbingrepa3: "פירוק",
    televisionone: "images/img_television_red_a700_03_1.svg",
    plusoneoneOne: "images/img_plus.svg",
    rowrow: "₪",
    plumbingrepair: "8.9.23",
    useroneoneOne: "images/img_user_secondary__primary_white.svg",
    rowplumbingrepa4: "4",
    rowplumbingrepa5: "80,000",
    rowplumbingrepa6: "אוטומטי",
    rowplumbingrepa7: "2022",
    rowplumbingrepa8: " במוו",
    rowplumbingrepa9: "X8 – 5.0 במוו",
    signalthreeone: "images/img_signal_secondary__primary_white_1.svg",
  },
  {
    settingsoneone: "images/img_settings_black_900.svg",
    rowplumbingrepa: "הגש הצעה",
    rowplumbingrepa1: "לצפיה",
    rowplumbingrepa2: "ארכיון",
    rowplumbingrepa3: "פירוק",
    televisionone: "images/img_television_red_a700_03_1.svg",
    plusoneoneOne: "images/img_plus.svg",
    rowrow: "₪",
    plumbingrepair: "8.9.23",
    useroneoneOne: "images/img_user_secondary__primary_white.svg",
    rowplumbingrepa4: "4",
    rowplumbingrepa5: "80,000",
    rowplumbingrepa6: "אוטומטי",
    rowplumbingrepa7: "2022",
    rowplumbingrepa8: " במוו",
    rowplumbingrepa9: "X8 – 5.0 במוו",
    signalthreeone: "images/img_signal_secondary__primary_white_1.svg",
  },
  {
    settingsoneone: "images/img_settings_black_900.svg",
    rowplumbingrepa: "הגש הצעה",
    rowplumbingrepa1: "לצפיה",
    rowplumbingrepa3: "פירוק",
    televisionone: "images/img_television_red_a700_03_1.svg",
    plusoneoneOne: "images/img_plus.svg",
    rowrow: "₪",
    plumbingrepair: "8.9.23",
    useroneoneOne: "images/img_user_secondary__primary_white.svg",
    rowplumbingrepa4: "4",
    rowplumbingrepa5: "80,000",
    rowplumbingrepa6: "אוטומטי",
    rowplumbingrepa7: "2022",
    rowplumbingrepa8: " במוו",
    rowplumbingrepa9: "X8 – 5.0 במוו",
    signalthreeone: "images/img_signal_secondary__primary_white_1.svg",
  },
  {
    settingsoneone: "images/img_vector_1x14.png",
    rowplumbingrepa: "הגש הצעה",
    rowplumbingrepa1: "לצפיה",
    rowplumbingrepa3: "פירוק",
    televisionone: "images/img_vector_red_a700_03_6.png",
    rowrow: "8.9.23",
    imagethirteen: "images/img_group_1261154309_secondary__primary_white_1x18.png",
    plumbingrepair: "0",
    imagefourteen: "images/img_group_1261154308_secondary__primary_white_1x18.png",
    rowplumbingrepa4: "4",
    rowplumbingrepa5: "80,000",
    rowplumbingrepa6: "אוטומטי",
    rowplumbingrepa7: "2022",
    rowplumbingrepa8: " במוו",
    rowplumbingrepa9: "X8 – 5.0 במוו",
    signalthreeone: "images/img_icon_1x14.png",
  },
];

export default function CarPackageDealerLinesPage() {
  const table9Columns = React.useMemo(() => {
    const table9ColumnHelper = createColumnHelper();
    return [
      table9ColumnHelper.accessor("rowplumbingrepa", {
        cell: (info) => (
          <div className="flex items-end px-1">
            <Img src={info.row.original.settingsoneone} alt="Settingsoneone" className="mb-1 h-[14px]" />
            <Heading size="headingxl" as="p" className="mt-1.5 text-[15px] font-semibold">
              {info.getValue()}
            </Heading>
          </div>
        ),
        header: (info) => (
          <div className="flex items-center gap-2.5 px-3.5 py-2.5">
            <Img src="images/img_group_758531290.svg" alt="Imageoneone" className="h-[12px]" />
            <Heading as="h4" className="text-[18px] font-semibold lg:text-[15px]">
              ביצוע
            </Heading>
          </div>
        ),
        meta: { width: "134px" },
      }),
      table9ColumnHelper.accessor("rowplumbingrepa1", {
        cell: (info) => (
          <div className="flex flex-wrap items-end px-2">
            <Img src="images/img_settings_black_900.svg" alt="Settingsthree" className="h-[14px]" />
            <Heading size="headingxl" as="p" className="text-[15px] font-semibold">
              {info.getValue()}
            </Heading>
            <Img
              src="images/img_vector_deep_orange_500.svg"
              alt="Vectorthreeone"
              className="ml-2 h-[12px] self-center"
            />
          </div>
        ),
        header: (info) => (
          <div className="flex items-center py-2">
            <Img src="images/img_group_758531290.svg" alt="Imagetwoone" className="h-[12px]" />
            <Heading as="h5" className="text-[18px] font-semibold lg:text-[15px]">
              מכרז
            </Heading>
          </div>
        ),
        meta: { width: "120px" },
      }),
      table9ColumnHelper.accessor("rowplumbingrepa2", {
        cell: (info) => (
          <div className="flex">
            <Button
              shape="round"
              className="min-w-[112px] rounded-[14px] border border-solid border-gray-700_04 px-[33px] font-dmsans font-medium capitalize !text-gray-700_04 sm:px-4"
            >
              {info.getValue()}
            </Button>
          </div>
        ),
        header: (info) => (
          <div className="flex items-center gap-2.5 px-1.5 py-2">
            <Img src="images/img_group_758531290.svg" alt="Imagethreeone" className="h-[12px]" />
            <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
              סטטוס
            </Heading>
          </div>
        ),
        meta: { width: "152px" },
      }),
      table9ColumnHelper.accessor("rowplumbingrepa3", {
        cell: (info) => (
          <div className="flex items-center justify-center gap-[18px] rounded-[14px] bg-secondary-primary_white">
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
          <div className="flex items-center gap-3 px-1.5 py-2">
            <Img src="images/img_group_758531290.svg" alt="Imagefourone" className="h-[12px]" />
            <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
              מיועד ל
            </Heading>
          </div>
        ),
        meta: { width: "138px" },
      }),
      table9ColumnHelper.accessor("rowrow", {
        cell: (info) => (
          <div className="ml-6 flex flex-1 items-center justify-center gap-7 px-1.5">
            <div className="flex flex-1 items-center justify-center">
              <Img src={info.row.original.plusoneoneOne} alt="Plusoneone" className="h-[18px]" />
              <Heading
                size="headinglg"
                as="p"
                className="ml-1.5 self-end !font-heebo text-[14px] font-bold !text-red-a700_03"
              >
                {info.getValue()}
              </Heading>
              <Heading as="h6" className="ml-[34px] !font-heebo text-[18px] font-bold !text-red-a700_03 lg:text-[15px]">
                {info.row.original.plumbingrepair}
              </Heading>
              <Img src={info.row.original.useroneoneOne} alt="Useroneone" className="ml-[34px] h-[18px]" />
            </div>
            <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
              {info.row.original.plumbingrepair}
            </Heading>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-1 justify-between gap-5">
            <div className="relative h-[30px] w-[46%] content-center lg:h-auto md:h-auto">
              <div className="flex flex-1" />
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 items-center justify-center gap-2">
                <Img src="images/img_group_758531290.svg" alt="Imagefiveone" className="h-[12px]" />
                <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
                  הצעת מחיר
                </Heading>
              </div>
            </div>
            <div className="relative h-[30px] w-[34%] content-center lg:h-auto md:h-auto">
              <div className="flex flex-1" />
              <div className="absolute bottom-[1.26px] left-0 my-auto ml-auto mr-2 flex flex-1 items-start gap-2.5 lg:mr-0 md:mr-0">
                <Img src="images/img_group_758531290.svg" alt="Imagesixone" className="h-[12px]" />
                <Heading as="h6" className="self-center text-[18px] font-semibold lg:text-[15px]">
                  תאריך
                </Heading>
              </div>
            </div>
          </div>
        ),
        meta: { width: "210px" },
      }),
      table9ColumnHelper.accessor("rowplumbingrepa4", {
        cell: (info) => (
          <Heading as="h6" className="pr-2.5 text-[18px] font-semibold lg:text-[15px]">
            {info.getValue()}
          </Heading>
        ),
        header: (info) => (
          <div className="ml-[22px] flex items-center gap-[9px] py-2">
            <Img src="images/img_group_758531290.svg" alt="Imagesevenone" className="h-[12px]" />
            <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
              יד
            </Heading>
          </div>
        ),
        meta: { width: "58px" },
      }),
      table9ColumnHelper.accessor("rowplumbingrepa5", {
        cell: (info) => (
          <Heading as="h6" className="pl-[34px] text-[18px] font-semibold lg:text-[15px] sm:pl-4">
            {info.getValue()}
          </Heading>
        ),
        header: (info) => (
          <div className="flex items-center gap-3 py-2.5">
            <Img src="images/img_group_758531290.svg" alt="Imageeightone" className="h-[12px]" />
            <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
              קילומטר
            </Heading>
          </div>
        ),
        meta: { width: "132px" },
      }),
      table9ColumnHelper.accessor("rowplumbingrepa6", {
        cell: (info) => (
          <Heading as="h6" className="pl-3 text-[18px] font-semibold lg:text-[15px]">
            {info.getValue()}
          </Heading>
        ),
        header: (info) => (
          <div className="flex items-center py-2">
            <Img src="images/img_group_758531290.svg" alt="Imagenineone" className="h-[12px]" />
            <Heading as="h6" className="self-end text-[18px] font-semibold lg:text-[15px]">
              גיר
            </Heading>
          </div>
        ),
        meta: { width: "76px" },
      }),
      table9ColumnHelper.accessor("rowplumbingrepa7", {
        cell: (info) => (
          <Heading as="h6" className="pl-[34px] text-[18px] font-semibold lg:text-[15px] sm:pl-4">
            {info.getValue()}
          </Heading>
        ),
        header: (info) => (
          <div className="flex items-center py-2">
            <Img src="images/img_group_758531290.svg" alt="Imagetenone" className="h-[12px]" />
            <Heading as="h6" className="self-end text-[18px] font-semibold lg:text-[15px]">
              שנת יצור
            </Heading>
          </div>
        ),
        meta: { width: "94px" },
      }),
      table9ColumnHelper.accessor("rowplumbingrepa8", {
        cell: (info) => (
          <Heading as="h6" className="px-[34px] text-[18px] font-semibold lg:text-[15px] sm:px-4">
            {info.getValue()}
          </Heading>
        ),
        header: (info) => (
          <div className="flex items-center py-2">
            <Img src="images/img_group_758531290.svg" alt="Imageelevenone" className="h-[12px]" />
            <Heading as="h6" className="self-end text-[18px] font-semibold lg:text-[15px]">
              חברה
            </Heading>
          </div>
        ),
        meta: { width: "108px" },
      }),
      table9ColumnHelper.accessor("rowplumbingrepa9", {
        cell: (info) => (
          <div className="flex items-center gap-2">
            <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
              {info.getValue()}
            </Heading>
            <Img src={info.row.original.signalthreeone} alt="Signalthreeone" className="h-[16px]" />
          </div>
        ),
        header: (info) => (
          <div className="flex items-center gap-1.5 py-2">
            <Img src="images/img_group_758531290.svg" alt="Imagetwelveone" className="h-[12px]" />
            <Heading as="h6" className="self-end text-[18px] font-semibold lg:text-[15px]">
              דגם הרכב
            </Heading>
          </div>
        ),
        meta: { width: "124px" },
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
        <div className="flex justify-center bg-gray-100 shadow-xs">
          <div className="container-12xl mt-[26px] flex justify-center lg:px-5 md:px-5">
            <div className="w-full overflow-x-scroll">
              <div className="flex w-[1880px] items-center gap-10 md:flex-col">
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
                          <AllAddsDealerCubesRow {...d} key={"one" + index} />
                        ))}
                      </Suspense>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 items-center md:flex-col md:self-stretch">
                  <div className="flex flex-1 items-center md:flex-col md:self-stretch">
                    <Tabs
                      className="relative h-[1050px] flex-1 md:w-full md:flex-none md:self-stretch"
                      selectedTabClassName="text-black-900_03 font-semibold text-[16px]"
                      selectedTabPanelClassName="px-8 mx-auto sm:px-4 !relative tab-panel--selected"
                    >
                      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1">
                        <div className="relative z-[3] mr-11 flex flex-col items-start gap-2 md:mr-0">
                          <div className="flex w-[14%] justify-center gap-1 rounded-br-lg bg-gray-100 lg:w-full md:w-full">
                            <div className="w-full">
                              <div className="flex items-center justify-center gap-1">
                                <Heading size="headingmd" as="h1" className="text-[12px] font-bold !text-gray-900_04">
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
                                  as="h2"
                                  className="!font-heebo text-[12px] font-medium !text-gray-600"
                                >
                                  מודעות במכרז
                                </Heading>
                                <Img
                                  src="images/img_vector_deep_orange_500.svg"
                                  alt="Vectoroneone"
                                  className="h-[12px]"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="relative ml-6 h-[54px] self-stretch md:ml-0">
                            <div className="absolute bottom-0 left-0 right-0 top-0 mx-4 my-auto flex h-max flex-1 items-center justify-end gap-[22px] py-1.5 lg:mx-0 md:mx-0">
                              <Heading
                                size="h3_assistant_25px_m"
                                as="h3"
                                className="text-[25px] font-medium lg:text-[21px]"
                              >
                                מודעות רכבים
                              </Heading>
                              <Img
                                src="images/img_car_red_a700_03_3.png"
                                alt="Caroneone"
                                className="h-[36px] object-cover"
                              />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1">
                              <div className="relative z-[4] flex gap-[15px]">
                                <Img
                                  src="images/img_button1.svg"
                                  alt="Buttononeone"
                                  className="h-[32px] rounded-[10px]"
                                />
                                <Button size="md" className="w-[32px] rounded-[10px] px-1.5">
                                  <Img src="images/img_megaphone_red_a700_03.svg" />
                                </Button>
                              </div>
                              <div className="relative mt-[-28px] flex h-[42px] items-center justify-center bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat px-14 lg:h-auto md:h-auto md:px-5 sm:px-4">
                                <CarPackageDealerCubesVariant5 />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative mt-[-88px] h-[1024px] rounded-[20px] bg-secondary-primary_white shadow-xs" />
                      </div>
                      {[...Array(7)].map((_, index) => (
                        <TabPanel
                          key={`tab-panel${index}`}
                          className="absolute bottom-0 left-0 right-0 mx-auto flex-1 items-center px-8 sm:px-4"
                        >
                          <div className="absolute bottom-0 left-0 right-0 w-full flex-1">
                            <div className="mr-2.5 flex flex-col gap-[18px] md:mr-0">
                              <AllAddsProviderCubesColumnclose />
                              <ReactTable
                                size="xs"
                                bodyProps={{ className: "" }}
                                headerProps={{ className: "border-gray-200 border-b border-solid" }}
                                className="ml-2.5 md:ml-0 md:block md:overflow-x-auto md:whitespace-nowrap"
                                columns={table9Columns}
                                data={table9Data}
                              />
                            </div>
                          </div>
                        </TabPanel>
                      ))}
                    </Tabs>
                    <div className="relative z-[6] ml-[-82px] flex w-[12%] items-start justify-center md:ml-0 md:w-full">
                      <div className="flex flex-1 items-start">
                        <div className="relative z-[7] mt-10 flex flex-1 flex-col items-end gap-[30px]">
                          <Button size="6xl" className="mt-[92px] w-[52px] rounded-lg px-4">
                            <Img src="images/img_search_secondary__primary_white.svg" />
                          </Button>
                          <div className="flex flex-col gap-1 self-stretch">
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
                        <div className="relative ml-[-70px] w-[30%] self-center rounded-[16px] bg-black-900_03 px-3.5 py-9 sm:py-4">
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
                      <div className="relative z-[8] ml-[-88px] mt-[18px] flex w-[30%] justify-center">
                        <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
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
                        </a>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_tablist.png"
                    alt="Tablistthree"
                    className="relative z-[9] ml-[-88px] h-[40px] w-[6%] object-contain md:ml-0 md:w-full"
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
