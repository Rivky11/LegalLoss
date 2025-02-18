import { Helmet } from "react-helmet";
import { Heading, Img, Button } from "../../components";
import AllAddsProviderCubesColumnclose from "../../components/AllAddsProviderCubesColumnclose";
import AllAddsProviderCubesRow from "../../components/AllAddsProviderCubesRow";
import AwaitingAddsProviderLinesRoweleven from "../../components/AwaitingAddsProviderLinesRoweleven";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
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
const table5Data = [
  {
    rowrow: "לצפיה במודעה",
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
    Data: "ממתין להצעה",
    televisionone: "images/img_television_red_a700_03_1.svg",
    plusoneoneOne: "images/img_plus.svg",
    useroneoneOne: "images/img_user_secondary__primary_white.svg",
  },
  {
    settingsoneone: "images/img_settings_black_900.svg",
    rowrow: "לצפיה במודעה",
    Data: "ממתין להצעה",
    rowplumbingrepa: "פירוק",
    televisionone: "images/img_television_red_a700_03_1.svg",
    plusoneoneOne: "images/img_plus.svg",
    rowplumbingrepa1: "₪",
    useroneoneOne: "images/img_user_secondary__primary_white.svg",
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
    rowrow: "לצפיה במודעה",
    Data: "ממתין להצעה",
    rowplumbingrepa: "פירוק",
    televisionone: "images/img_television_red_a700_03_1.svg",
    plusoneoneOne: "images/img_plus.svg",
    rowplumbingrepa1: "₪",
    useroneoneOne: "images/img_user_secondary__primary_white.svg",
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
    rowrow: "לצפיה במודעה",
    Data: "ממתין להצעה",
    rowplumbingrepa: "פירוק",
    televisionone: "images/img_television_red_a700_03_1.svg",
    plusoneoneOne: "images/img_plus.svg",
    rowplumbingrepa1: "₪",
    useroneoneOne: "images/img_user_secondary__primary_white.svg",
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
    rowrow: "לצפיה במודעה",
    Data: "ממתין להצעה",
    rowplumbingrepa: "פירוק",
    televisionone: "images/img_television_red_a700_03_1.svg",
    plusoneoneOne: "images/img_plus.svg",
    rowplumbingrepa1: "₪",
    useroneoneOne: "images/img_user_secondary__primary_white.svg",
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
    rowrow: "לצפיה במודעה",
    Data: "ממתין להצעה",
    rowplumbingrepa: "פירוק",
    televisionone: "images/img_television_red_a700_03_1.svg",
    plusoneoneOne: "images/img_plus.svg",
    rowplumbingrepa1: "₪",
    useroneoneOne: "images/img_user_secondary__primary_white.svg",
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
    rowrow: "לצפיה במודעה",
    Data: "ממתין להצעה",
    rowplumbingrepa: "פירוק",
    televisionone: "images/img_television_red_a700_03_1.svg",
    plusoneoneOne: "images/img_plus.svg",
    rowplumbingrepa1: "₪",
    useroneoneOne: "images/img_user_secondary__primary_white.svg",
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
    rowrow: "לצפיה במודעה",
    Data: "ממתין להצעה",
    rowplumbingrepa: "פירוק",
    televisionone: "images/img_television_red_a700_03_1.svg",
    plusoneoneOne: "images/img_plus.svg",
    rowplumbingrepa1: "₪",
    useroneoneOne: "images/img_user_secondary__primary_white.svg",
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
    rowrow: "לצפיה במודעה",
    Data: "ממתין להצעה",
    rowplumbingrepa: "פירוק",
    televisionone: "images/img_television_red_a700_03_1.svg",
    plusoneoneOne: "images/img_plus.svg",
    rowplumbingrepa1: "₪",
    useroneoneOne: "images/img_user_secondary__primary_white.svg",
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
    rowrow: "לצפיה במודעה",
    Data: "ממתין להצעה",
    rowplumbingrepa: "פירוק",
    televisionone: "images/img_television_red_a700_03_1.svg",
    plusoneoneOne: "images/img_plus.svg",
    rowplumbingrepa1: "₪",
    useroneoneOne: "images/img_user_secondary__primary_white.svg",
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
    rowrow: "לצפיה במודעה",
    Data: "ממתין להצעה",
    rowplumbingrepa: "פירוק",
    televisionone: "images/img_television_red_a700_03_1.svg",
    plusoneoneOne: "images/img_plus.svg",
    rowplumbingrepa1: "₪",
    useroneoneOne: "images/img_user_secondary__primary_white.svg",
    rowplumbingrepa2: "8.9.23",
    rowplumbingrepa3: "4",
    rowplumbingrepa4: "80,000",
    rowplumbingrepa5: "אוטומטי",
    rowplumbingrepa6: "2022",
    rowplumbingrepa7: " במוו",
    rowplumbingrepa8: "X8 – 5.0 במוו",
  },
  {
    settingsoneone: "images/img_vector_1x14_1.png",
    rowrow: "לצפיה במודעה",
    link: "ממתין להצעה",
    rowplumbingrepa: "פירוק",
    televisionone: "images/img_vector_red_a700_03_4x34.png",
    plusoneoneOne: "images/img_group_1261154309_secondary__primary_white_2x14.png",
    rowplumbingrepa1: "₪",
    useroneoneOne: "images/img_group_1261154308_secondary__primary_white_2x14.png",
    rowplumbingrepa2: "8.9.23",
    rowplumbingrepa3: "4",
    rowplumbingrepa4: "80,000",
    rowplumbingrepa5: "אוטומטי",
    rowplumbingrepa6: "2022",
    rowplumbingrepa7: " במוו",
    rowplumbingrepa8: "X8 – 5.0 במוו",
  },
];

export default function AwaitingAddsProviderLinesPage() {
  const table5Columns = React.useMemo(() => {
    const table5ColumnHelper = createColumnHelper();
    return [
      table5ColumnHelper.accessor("rowrow", {
        cell: (info) => (
          <div className="flex flex-1 items-center justify-center gap-[26px] px-3">
            <div className="flex items-center">
              <Img src={info.row.original.settingsoneone} alt="Settingsoneone" className="h-[14px]" />
              <Heading size="h4_assistant_16px_b" as="h6" className="text-[16px] font-semibold lg:text-[13px]">
                {info.getValue()}
              </Heading>
            </div>
            <Button
              shape="round"
              className="min-w-[112px] rounded-[14px] border border-solid border-black-900_03 pl-[17px] pr-[11px] font-dmsans font-medium capitalize"
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
                <Img src="images/img_group_758531290.svg" alt="Imagetwelveone" className="h-[12px]" />
                <Heading as="h2" className="text-[18px] font-semibold lg:text-[15px]">
                  ביצוע
                </Heading>
              </div>
            </div>
            <div className="relative h-[30px] w-[32%] content-center lg:h-auto md:h-auto">
              <div className="flex flex-1" />
              <div className="absolute bottom-0 left-0 top-0 my-auto mr-1.5 flex h-max flex-1 items-center gap-2 lg:mr-0 md:mr-0">
                <Img src="images/img_group_758531290.svg" alt="Imagethirteen" className="h-[12px]" />
                <Heading as="h3" className="text-[18px] font-semibold lg:text-[15px]">
                  סטטוס
                </Heading>
              </div>
            </div>
          </div>
        ),
        meta: { width: "220px" },
      }),
      table5ColumnHelper.accessor("rowplumbingrepa", {
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
          <div className="ml-[74px] flex items-center gap-2.5 px-2.5 py-2">
            <Img src="images/img_group_758531290.svg" alt="Imagefourteen" className="h-[12px]" />
            <Heading as="h4" className="text-[18px] font-semibold lg:text-[15px]">
              מיועד ל
            </Heading>
          </div>
        ),
        meta: { width: "156px" },
      }),
      table5ColumnHelper.accessor("rowplumbingrepa1", {
        cell: (info) => (
          <div className="ml-[42px] flex flex-wrap items-start px-1">
            <Img src={info.row.original.plusoneoneOne} alt="Plusoneone" className="mt-1 h-[18px]" />
            <Heading
              size="headinglg"
              as="p"
              className="self-center !font-heebo text-[14px] font-bold !text-red-a700_03"
            >
              {info.getValue()}
            </Heading>
            <Heading
              as="h6"
              className="ml-6 self-center !font-heebo text-[18px] font-bold !text-red-a700_03 lg:text-[15px]"
            >
              0
            </Heading>
            <Img src={info.row.original.useroneoneOne} alt="Useroneone" className="ml-[26px] mt-1 h-[18px]" />
          </div>
        ),
        header: (info) => (
          <div className="flex items-center gap-[7px] py-2.5">
            <Img src="images/img_group_758531290.svg" alt="Imagefifteen" className="h-[12px]" />
            <Heading as="h5" className="text-[18px] font-semibold lg:text-[15px]">
              הצעת מחיר
            </Heading>
          </div>
        ),
        meta: { width: "132px" },
      }),
      table5ColumnHelper.accessor("rowplumbingrepa2", {
        cell: (info) => (
          <Heading as="h6" className="pl-[22px] text-[18px] font-semibold lg:text-[15px] sm:pl-4">
            {info.getValue()}
          </Heading>
        ),
        header: (info) => (
          <div className="flex items-center gap-2.5 py-2">
            <Img src="images/img_group_758531290.svg" alt="Imagesixteen" className="h-[12px]" />
            <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
              תאריך
            </Heading>
          </div>
        ),
        meta: { width: "102px" },
      }),
      table5ColumnHelper.accessor("rowplumbingrepa3", {
        cell: (info) => (
          <Heading as="h6" className="pl-[18px] pr-[34px] text-[18px] font-semibold lg:text-[15px] sm:pr-4">
            {info.getValue()}
          </Heading>
        ),
        header: (info) => (
          <div className="flex items-center gap-2 py-2">
            <Img src="images/img_group_758531290.svg" alt="Imageseventeen" className="h-[12px]" />
            <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
              יד
            </Heading>
          </div>
        ),
        meta: { width: "66px" },
      }),
      table5ColumnHelper.accessor("rowplumbingrepa4", {
        cell: (info) => (
          <Heading as="h6" className="pl-[22px] text-[18px] font-semibold lg:text-[15px] sm:pl-4">
            {info.getValue()}
          </Heading>
        ),
        header: (info) => (
          <div className="flex items-center gap-2.5 py-2.5">
            <Img src="images/img_group_758531290.svg" alt="Imageeighteen" className="h-[12px]" />
            <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
              קילומטר
            </Heading>
          </div>
        ),
        meta: { width: "130px" },
      }),
      table5ColumnHelper.accessor("rowplumbingrepa5", {
        cell: (info) => (
          <Heading as="h6" className="pl-1.5 text-[18px] font-semibold lg:text-[15px]">
            {info.getValue()}
          </Heading>
        ),
        header: (info) => (
          <div className="flex items-center px-1.5 py-2">
            <Img src="images/img_group_758531290.svg" alt="Imagenineteen" className="h-[12px]" />
            <Heading as="h6" className="self-end text-[18px] font-semibold lg:text-[15px]">
              גיר
            </Heading>
          </div>
        ),
        meta: { width: "100px" },
      }),
      table5ColumnHelper.accessor("rowplumbingrepa6", {
        cell: (info) => (
          <Heading as="h6" className="pl-[22px] text-[18px] font-semibold lg:text-[15px] sm:pl-4">
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
      table5ColumnHelper.accessor("rowplumbingrepa7", {
        cell: (info) => (
          <Heading as="h6" className="pl-3 text-[18px] font-semibold lg:text-[15px]">
            <span>&nbsp;</span>
            <span className="font-bold">lbl_lbl20</span>
          </Heading>
        ),
        header: (info) => (
          <div className="flex items-center py-2">
            <Img src="images/img_group_758531290.svg" alt="Imagetwentyone" className="h-[12px]" />
            <Heading as="h6" className="self-end text-[18px] font-semibold lg:text-[15px]">
              חברה
            </Heading>
          </div>
        ),
        meta: { width: "96px" },
      }),
      table5ColumnHelper.accessor("rowplumbingrepa8", {
        cell: (info) => (
          <Heading as="h6" className="text-[18px] font-bold lg:text-[15px]">
            {info.getValue()}
          </Heading>
        ),
        header: (info) => (
          <div className="flex items-center p-2">
            <Img src="images/img_group_758531290.svg" alt="Imagetwentytwo" className="h-[12px]" />
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
                    <div className="flex flex-col gap-4">
                      <div className="mr-11 flex flex-col gap-5 md:mr-0">
                        <Header className="mr-1 md:mr-0" />
                        <div className="ml-8 md:ml-0">
                          <AwaitingAddsProviderLinesRoweleven />
                          <AllAddsProviderCubesColumnclose className="relative mt-[-42px]" />
                        </div>
                      </div>
                      <div className="ml-10 mr-8 md:mx-0">
                        <ReactTable
                          size="xs"
                          bodyProps={{ className: "" }}
                          headerProps={{ className: "border-gray-200 border-b border-solid" }}
                          className="md:block md:overflow-x-auto md:whitespace-nowrap"
                          columns={table5Columns}
                          data={table5Data}
                        />
                      </div>
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
                      <div className="relative z-[3] mt-10 flex flex-1 flex-col items-end gap-[30px] md:self-stretch">
                        <Button size="6xl" className="w-[52px] rounded-lg px-4">
                          <Img src="images/img_search_secondary__primary_white.svg" />
                        </Button>
                        <div className="mb-[92px] flex flex-col gap-1 self-stretch">
                          <div className="flex justify-end px-3.5 py-4">
                            <Img src="images/img__secondary__primary_white.svg" alt="Imageseven" className="h-[20px]" />
                          </div>
                          <div className="flex justify-end px-3.5 py-4">
                            <Img
                              src="images/img__secondary__primary_white_20x20.svg"
                              alt="Imagetwentysix"
                              className="h-[20px]"
                            />
                          </div>
                          <div className="flex justify-end px-3.5 py-4">
                            <Img src="images/img__20x20.svg" alt="Imagenine" className="h-[20px]" />
                          </div>
                          <div className="flex justify-end px-3.5 py-4">
                            <Img src="images/img__1.svg" alt="Imageeleven" className="h-[20px]" />
                          </div>
                          <div className="flex justify-end px-3.5 py-4">
                            <Img src="images/img__2.svg" alt="Imagethirteen" className="h-[20px]" />
                          </div>
                          <div className="flex justify-end px-3.5 py-4">
                            <Img src="images/img__3.svg" alt="Imagethirtyone" className="h-[20px]" />
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
                            <Img src="images/img__5.svg" alt="Imagethirtytwo" className="h-[20px]" />
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
