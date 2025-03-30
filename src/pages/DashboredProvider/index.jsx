import { Helmet } from "react-helmet";
import { Heading, Img, Button, Text } from "../../components";
import DashboredProviderRow from "../../components/DashboredProviderRow";
import DashboredProviderRow1 from "../../components/DashboredProviderRow1";
import DashboredProviderRowtwentyone from "../../components/DashboredProviderRowtwentyone";
import { ReactTable } from "../../components/ReactTable";
import DashboredproviderStackrow from "./DashboredproviderStackrow";
import { createColumnHelper } from "@tanstack/react-table";
import React, { Suspense } from "react";

const data = [
  { twenty: "20", prop: "מודעות חדשות" },
  { twenty: "20", prop: "מודעות" },
  { twenty: "20", prop: "מודעות בהמתנה לאישור" },
  { twenty: "20", prop: "מודעות מאושרות" },
  { twenty: "20", prop: "מודעות למכרז" },
  { twenty: "20", prop: "חבילת מודעות במכרז" },
  { twenty: "20", prop: "מודעות חדשות" },
  { twenty: "20", prop: "מודעות בארכיון" },
  { twenty: "20", prop: "הצעות שאושרו" },
  { twenty: "20", prop: "מודעות חדשות" },
];
const table3Data = [
  {
    rowrowtwo: "לצפיה בהצעה",
    rowplumbingrepa6: "פירוק",
    rowplumbingrepa7: "₪",
    rowplumbingrepa8: "8.9.23",
    rowplumbingrepa9: "4",
    rowplumbingrepa10: "80,000",
    rowplumbingrepa11: "אוטומטי",
    rowplumbingrepa12: "2022",
    rowplumbingrepa13: " במוו",
    rowplumbingrepa14: "X8 – 5.0 במוו",
    Data: "ממתין לאישור",
  },
  {
    rowrowtwo: "לצפיה בהצעה",
    Data: "ממתין לאישור",
    rowplumbingrepa6: "פירוק",
    rowplumbingrepa7: "₪",
    rowplumbingrepa8: "8.9.23",
    rowplumbingrepa9: "4",
    rowplumbingrepa10: "80,000",
    rowplumbingrepa11: "אוטומטי",
    rowplumbingrepa12: "2022",
    rowplumbingrepa13: " במוו",
    rowplumbingrepa14: "X8 – 5.0 במוו",
  },
  {
    rowrowtwo: "לצפיה בהצעה",
    one: "ממתין לאישור",
    rowplumbingrepa6: "פירוק",
    rowplumbingrepa7: "₪",
    rowplumbingrepa8: "8.9.23",
    rowplumbingrepa9: "4",
    rowplumbingrepa10: "80,000",
    rowplumbingrepa11: "אוטומטי",
    rowplumbingrepa12: "2022",
    rowplumbingrepa13: " במוו",
    rowplumbingrepa14: "X8 – 5.0 במוו",
  },
  {
    rowrowtwo: "לצפיה באישור",
    one: "מאושר",
    rowplumbingrepa6: "פירוק",
    rowplumbingrepa7: "₪",
    rowplumbingrepa8: "8.9.23",
    rowplumbingrepa9: "4",
    rowplumbingrepa10: "80,000",
    rowplumbingrepa11: "אוטומטי",
    rowplumbingrepa12: "2022",
    rowplumbingrepa13: " במוו",
    rowplumbingrepa14: "X8 – 5.0 במוו",
  },
  {
    rowrowtwo: "לצפיה באישור",
    two: "מאושר",
    rowplumbingrepa6: "פירוק",
    rowplumbingrepa7: "₪",
    rowplumbingrepa8: "8.9.23",
    rowplumbingrepa9: "4",
    rowplumbingrepa10: "80,000",
    rowplumbingrepa11: "אוטומטי",
    rowplumbingrepa12: "2022",
    rowplumbingrepa13: " במוו",
    rowplumbingrepa14: "X8 – 5.0 במוו",
  },
];

export default function DashboredProviderPage() {
  const table3Columns = React.useMemo(() => {
    const table3ColumnHelper = createColumnHelper();
    return [
      table3ColumnHelper.accessor("rowrowtwo", {
        cell: (info) => (
          <div className="flex flex-1 items-center justify-center gap-[26px] px-3">
            <div className="flex items-center">
              <Img src="images/img_settings_black_900.svg" alt="Settingsthree" className="h-[14px]" />
              <Heading size="h4_assistant_16px_b" as="h6" className="text-[16px] font-semibold lg:text-[13px]">
                {info.getValue()}
              </Heading>
            </div>
            <Button
              shape="round"
              className="min-w-[112px] rounded-[14px] border border-solid border-red-a700_03 px-[13px] font-dmsans font-medium capitalize !text-red-a700_03"
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
                <Img src="images/img_group_758531290.svg" alt="Imagefourteen" className="h-[12px]" />
                <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
                  ביצוע
                </Heading>
              </div>
            </div>
            <div className="relative h-[30px] w-[32%] content-center lg:h-auto md:h-auto">
              <div className="flex flex-1" />
              <div className="absolute bottom-0 left-0 top-0 my-auto mr-1.5 flex h-max flex-1 items-center gap-2 lg:mr-0 md:mr-0">
                <Img src="images/img_group_758531290.svg" alt="Imagefifteen" className="h-[12px]" />
                <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
                  סטטוס
                </Heading>
              </div>
            </div>
          </div>
        ),
        meta: { width: "220px" },
      }),
      table3ColumnHelper.accessor("rowplumbingrepa6", {
        cell: (info) => (
          <div className="flex items-center justify-center gap-[18px] rounded-[14px] bg-secondary-primary_white">
            <Heading
              size="textmd"
              as="p"
              className="self-end !font-dmsans text-[14px] font-medium capitalize !text-black-900"
            >
              {info.getValue()}
            </Heading>
            <Img src="images/img_television_red_a700_03_1.svg" alt="Television" className="h-[22px]" />
          </div>
        ),
        header: (info) => (
          <div className="ml-[74px] flex items-center gap-2.5 px-2.5 py-2">
            <Img src="images/img_group_758531290.svg" alt="Imagesixteen" className="h-[12px]" />
            <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
              מיועד ל
            </Heading>
          </div>
        ),
        meta: { width: "156px" },
      }),
      table3ColumnHelper.accessor("rowplumbingrepa7", {
        cell: (info) => (
          <div className="ml-[42px] flex items-start justify-center px-1">
            <div className="flex flex-1 items-center justify-center self-center">
              <Img src="images/img_plus.svg" alt="Plusthirteen" className="h-[18px] self-start" />
              <Heading size="headinglg" as="p" className="!font-heebo text-[14px] font-bold !text-red-a700_03">
                {info.getValue()}
              </Heading>
              <Heading as="h6" className="!font-heebo text-[18px] font-bold !text-red-a700_03 lg:text-[15px]">
                40,000
              </Heading>
            </div>
            <Img src="images/img_user_secondary__primary_white.svg" alt="Userthirteen" className="h-[18px]" />
          </div>
        ),
        header: (info) => (
          <div className="flex items-center gap-[7px] py-2.5">
            <Img src="images/img_group_758531290.svg" alt="Imageseventeen" className="h-[12px]" />
            <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
              הצעת מחיר
            </Heading>
          </div>
        ),
        meta: { width: "132px" },
      }),
      table3ColumnHelper.accessor("rowplumbingrepa8", {
        cell: (info) => (
          <Heading as="h6" className="pl-[22px] text-[18px] font-semibold lg:text-[15px] sm:pl-4">
            {info.getValue()}
          </Heading>
        ),
        header: (info) => (
          <div className="flex items-center gap-2.5 py-2">
            <Img src="images/img_group_758531290.svg" alt="Imageeighteen" className="h-[12px]" />
            <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
              תאריך
            </Heading>
          </div>
        ),
        meta: { width: "102px" },
      }),
      table3ColumnHelper.accessor("rowplumbingrepa9", {
        cell: (info) => (
          <Heading as="h6" className="pl-[18px] pr-[34px] text-[18px] font-semibold lg:text-[15px] sm:pr-4">
            {info.getValue()}
          </Heading>
        ),
        header: (info) => (
          <div className="flex items-center gap-2 py-2">
            <Img src="images/img_group_758531290.svg" alt="Imagenineteen" className="h-[12px]" />
            <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
              יד
            </Heading>
          </div>
        ),
        meta: { width: "66px" },
      }),
      table3ColumnHelper.accessor("rowplumbingrepa10", {
        cell: (info) => (
          <Heading as="h6" className="pl-[22px] text-[18px] font-semibold lg:text-[15px] sm:pl-4">
            {info.getValue()}
          </Heading>
        ),
        header: (info) => (
          <div className="flex items-center gap-2.5 py-2.5">
            <Img src="images/img_group_758531290.svg" alt="Imagetwentyone" className="h-[12px]" />
            <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
              קילומטר
            </Heading>
          </div>
        ),
        meta: { width: "136px" },
      }),
      table3ColumnHelper.accessor("rowplumbingrepa11", {
        cell: (info) => (
          <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
            {info.getValue()}
          </Heading>
        ),
        header: (info) => (
          <div className="flex items-center py-2">
            <Img src="images/img_group_758531290.svg" alt="Imagetwentyone" className="h-[12px]" />
            <Heading as="h6" className="self-end text-[18px] font-semibold lg:text-[15px]">
              גיר
            </Heading>
          </div>
        ),
        meta: { width: "94px" },
      }),
      table3ColumnHelper.accessor("rowplumbingrepa12", {
        cell: (info) => (
          <Heading as="h6" className="pl-[22px] text-[18px] font-semibold lg:text-[15px] sm:pl-4">
            {info.getValue()}
          </Heading>
        ),
        header: (info) => (
          <div className="flex items-center py-2">
            <Img src="images/img_group_758531290.svg" alt="Imagetwentytwo" className="h-[12px]" />
            <Heading as="h6" className="self-end text-[18px] font-semibold lg:text-[15px]">
              שנת יצור
            </Heading>
          </div>
        ),
        meta: { width: "102px" },
      }),
      table3ColumnHelper.accessor("rowplumbingrepa13", {
        cell: (info) => (
          <Heading as="h6" className="pl-3 text-[18px] font-semibold lg:text-[15px]">
            <span>&nbsp;</span>
            <span className="font-bold">lbl_lbl20</span>
          </Heading>
        ),
        header: (info) => (
          <div className="flex items-center py-2">
            <Img src="images/img_group_758531290.svg" alt="Imagethree" className="h-[12px]" />
            <Heading as="h6" className="self-end text-[18px] font-semibold lg:text-[15px]">
              חברה
            </Heading>
          </div>
        ),
        meta: { width: "98px" },
      }),
      table3ColumnHelper.accessor("rowplumbingrepa14", {
        cell: (info) => (
          <Heading as="h6" className="text-[18px] font-bold lg:text-[15px]">
            {info.getValue()}
          </Heading>
        ),
        header: (info) => (
          <div className="flex items-center px-1.5 py-2">
            <Img src="images/img_group_758531290.svg" alt="Imagefive" className="h-[12px]" />
            <Heading as="h6" className="self-end text-[18px] font-semibold lg:text-[15px]">
              דגם הרכב
            </Heading>
          </div>
        ),
        meta: { width: "144px" },
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
        <div className="relative h-[1080px] bg-gray-100 px-[38px] shadow-xs sm:px-4">
          <div className="container-10xl absolute bottom-0 left-0 right-0 top-0 my-auto flex h-max flex-1 gap-1.5 md:relative md:flex-col">
            <div className="flex w-[16%] flex-col gap-8 md:w-full">
              <div className="rounded-[20px] bg-secondary-primary_white shadow-xs">
                <div className="mt-3.5 flex flex-col gap-[26px]">
                  <div className="ml-1.5 mr-3.5 flex flex-col gap-2.5 md:mx-0">
                    <div className="mx-[26px] flex items-center justify-end gap-[22px] md:mx-0">
                      <Heading size="h3_assistant_25px_m" as="h1" className="text-[25px] font-medium lg:text-[21px]">
                        גישה מהירה
                      </Heading>
                      <Img src="images/img_settings_red_a700_03.svg" alt="Settingsoneone" className="h-[36px]" />
                    </div>
                    <div className="h-[0.9px] bg-gray-200" />
                  </div>
                  <div className="relative h-[432px]">
                    <div className="absolute bottom-0 left-0 right-0 mx-auto h-[214px] flex-1 rounded-[20px] bg-gradient" />
                    <div className="absolute left-0 right-0 top-0 mx-[22px] grid flex-1 grid-cols-2 justify-center gap-3 lg:mx-0 lg:grid-cols-2 md:mx-0 md:grid-cols-1">
                      <Suspense fallback={<div>Loading feed...</div>}>
                        {data.map((d, index) => (
                          <DashboredProviderRow {...d} key={"Data1" + index} />
                        ))}
                      </Suspense>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-[20px] bg-secondary-primary_white shadow-xs">
                <div className="mt-2.5 flex flex-col gap-1">
                  <div className="ml-3.5 mr-2 flex flex-col gap-5 md:mx-0">
                    <div className="flex items-center justify-end gap-[21px]">
                      <Heading size="h3_assistant_25px_m" as="h2" className="text-[25px] font-medium lg:text-[21px]">
                        התראות
                      </Heading>
                      <Img src="images/img_vector_red_a700_03.svg" alt="Vectoroneone" className="h-[36px]" />
                    </div>
                    <div className="h-[0.9px] bg-gray-200" />
                  </div>
                  <div className="relative h-[392px]">
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1 px-5">
                      <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-6 md:flex-row sm:flex-col">
                          <DashboredProviderRow1 />
                          <DashboredProviderRow1
                            prop="קיבלת הצעת מחיר חדשה"
                            plumbingrepair="X8 – 5.0 במוו"
                            zipcode="2022"
                            prop1="₪"
                            plumbingrepair1="40,000"
                            plumbingrepair2="רכב:"
                            plumbingrepair3="מודל:"
                            plumbingrepair4="מחיר:"
                            twentytwomillio="22.11.2023"
                          />
                        </div>
                        <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                          <div className="h-[5px] rounded-sm bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
                            <div className="mr-1.5 mt-1 flex justify-center gap-3 md:mr-0">
                              <Img
                                src="images/img_button_black_900_01.png"
                                alt="Buttononeone"
                                className="h-px object-cover"
                              />
                              <div className="flex flex-1 justify-center">
                                <Text
                                  size="textxl"
                                  as="p"
                                  className="!font-heebo text-[16px] font-medium lg:text-[13px]"
                                >
                                  קיבלת הצעת מחיר חדשה
                                </Text>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 mx-auto h-[214px] flex-1 rotate-[-180deg] rounded-[20px] bg-gradient1" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-[76%] flex-col gap-8 md:w-full">
              <header className="ml-3 flex items-start justify-between gap-5 rounded-[20px] bg-secondary-primary_white px-5 shadow-xs md:ml-0 sm:flex-col">
                <div className="flex w-[14%] justify-center gap-2 self-center sm:w-full">
                  <div className="flex w-full items-center justify-center gap-1">
                    <Heading size="headingmd" as="p" className="text-[12px] font-bold !text-gray-900_04">
                      <span className="text-gray-900_04">&nbsp;</span>
                      <span className="font-heebo font-medium text-black-900_03">lbl_lbl23</span>
                    </Heading>
                    <Img src="images/img_signal.svg" alt="Signaloneone" className="h-[10px]" />
                  </div>
                  <div className="flex w-full items-center justify-center gap-0.5">
                    <Heading size="textxs" as="p" className="!font-heebo text-[12px] font-medium">
                      מודעות במכרז
                    </Heading>
                    <Img src="images/img_vector_deep_orange_500.svg" alt="Vectorthreeone" className="h-[12px]" />
                  </div>
                </div>
                <div className="mb-2 mr-[18px] flex w-[26%] justify-center lg:mr-0 md:mr-0 sm:w-full">
                  <div className="mt-1.5 flex w-full items-center justify-end gap-[22px]">
                    <Heading
                      size="h3_assistant_25px_m"
                      as="p"
                      className="self-end text-[25px] font-medium lg:text-[21px]"
                    >
                      דשבורד
                    </Heading>
                    <a href="#">
                      <Img src="images/img_.png" alt="Imageone" className="h-[34px] object-cover" />
                    </a>
                  </div>
                </div>
              </header>
              <div className="ml-1 md:ml-0">
                <div className="flex flex-col gap-2">
                  <DashboredproviderStackrow />
                  <div className="relative z-[5] h-[450px] lg:h-auto md:h-auto">
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[450px] flex-1 content-end bg-[url(/public/images/img_group_811.svg)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
                      <div className="absolute left-0 right-0 top-5 mx-auto flex flex-1 items-start justify-center px-[18px]">
                        <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                          <div className="flex items-center gap-2.5 rounded-[14px] border border-solid border-gray-400_07 bg-secondary-primary_white">
                            <Img src="images/img_arrow_left.svg" alt="Arrowleftthree" className="h-[10px]" />
                            <Heading
                              size="h4_assistant_16px_b"
                              as="h6"
                              className="text-[16px] font-semibold !text-gray-600 lg:text-[13px]"
                            >
                              כל ההצעות
                            </Heading>
                          </div>
                        </a>
                        <div className="flex flex-1 items-center justify-end gap-[22px] self-center">
                          <Heading
                            size="h3_assistant_25px_m"
                            as="p"
                            className="self-end text-[25px] font-medium lg:text-[21px]"
                          >
                            הצעות מחיר
                          </Heading>
                          <Img src="images/img_vector_red_a700_01_36x40.svg" alt="Vectorfiveone" className="h-[36px]" />
                        </div>
                      </div>
                      <div className="mx-auto flex flex-1 flex-col gap-2.5">
                        <ReactTable
                          size="xs"
                          bodyProps={{ className: "" }}
                          headerProps={{ className: "border-gray-200 border-b border-solid" }}
                          className="mr-2 md:mr-0 md:block md:overflow-x-auto md:whitespace-nowrap"
                          columns={table3Columns}
                          data={table3Data}
                        />
                        <DashboredProviderRowtwentyone one="לצפיה באישור" className="mr-2 md:mr-0" />
                      </div>
                      <div className="absolute bottom-px left-0 right-0 z-[9] mx-auto h-[214px] flex-1 rounded-[20px] bg-gradient1" />
                      <Img
                        src="images/img_group_1261154366.svg"
                        alt="Imageseven"
                        className="absolute bottom-0 right-[13px] top-0 z-10 my-auto h-[402px] w-px"
                      />
                    </div>
                    <DashboredProviderRowtwentyone one="לצפיה באישור" className="relative z-[11] mt-[26px] flex-1" />
                    <DashboredProviderRowtwentyone
                      settingseleven="images/img_vector_black_900.png"
                      one="לצפיה במודעה"
                      televisionnine="images/img_vector_red_a700_01_1x34.png"
                      plusnineoneOne="images/img_group_1261154309.png"
                      usernineoneOne="images/img_group_1261154308.png"
                      className="absolute left-0 right-0 top-[20%] z-[14] mx-auto flex-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-11xl absolute bottom-[-31.18px] left-0 right-0 z-[16] h-[1024px] flex-1">
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 items-start md:relative md:flex-col">
              <div className="relative z-[17] mt-10 flex flex-1 flex-col items-end gap-[30px] md:self-stretch">
                <Button size="6xl" className="w-[52px] rounded-lg px-4">
                  <Img src="images/img_search_secondary__primary_white.svg" />
                </Button>
                <div className="mb-14 flex flex-col gap-1 self-stretch">
                  <div className="flex justify-end">
                    <Button size="6xl" className="w-[50px] rounded-lg px-3.5">
                      <Img src="images/img__secondary__primary_white.svg" />
                    </Button>
                  </div>
                  <div className="flex justify-end px-3.5 py-4">
                    <Img src="images/img__secondary__primary_white_20x20.svg" alt="Imageeleven" className="h-[20px]" />
                  </div>
                  <div className="flex justify-end px-3.5 py-4">
                    <Img src="images/img__20x20.svg" alt="Imagethirteen" className="h-[20px]" />
                  </div>
                  <div className="flex justify-end px-3.5 py-4">
                    <Img src="images/img__1.svg" alt="Imagethirtyone" className="h-[20px]" />
                  </div>
                  <div className="flex justify-end px-3.5 py-4">
                    <Img src="images/img__2.svg" alt="Imagethirtyone" className="h-[20px]" />
                  </div>
                  <div className="flex justify-end px-3.5 py-4">
                    <Img src="images/img__3.svg" alt="Imagethirtytwo" className="h-[20px]" />
                  </div>
                  <div className="flex justify-end px-3.5 py-4">
                    <Img src="images/img__4.svg" alt="Imagefifteen" className="h-[20px]" />
                  </div>
                  <div className="relative h-[50px] content-center p-3.5 lg:h-auto md:h-auto">
                    <Img src="images/img_bell.svg" alt="Belloneone" className="ml-auto h-[20px]" />
                    <div className="absolute right-[26.50px] top-[17px] m-auto h-[6px] w-[6px] rounded-[3px] bg-red-a700" />
                  </div>
                  <div className="flex justify-end px-3.5 py-4">
                    <Img src="images/img_layers.png" alt="Layersoneone" className="h-[18px] object-cover" />
                  </div>
                  <div className="flex justify-end px-3.5 py-4">
                    <Img src="images/img__5.svg" alt="Imageseventeen" className="h-[20px]" />
                  </div>
                  <div className="flex justify-end px-3.5 py-4">
                    <Img src="images/img_search.svg" alt="Searchthreeone" className="h-[20px]" />
                  </div>
                </div>
              </div>
              <div className="relative mb-[58px] ml-[-70px] w-[5%] self-center rounded-[16px] bg-black-900_03 px-3.5 py-9 md:ml-0 md:w-full sm:py-4">
                <div className="mt-[896px] flex flex-col items-center gap-0.5">
                  <Heading
                    size="headinglg"
                    as="h2"
                    className="!font-inter text-[14px] font-semibold !text-secondary-primary_white"
                  >
                    גילי עטיה
                  </Heading>
                  <Heading size="headingmd" as="h3" className="!font-inter text-[12px] font-semibold !text-red-a700_03">
                    ספק
                  </Heading>
                  <Heading
                    size="textxs"
                    as="h4"
                    className="!font-inter text-[12px] font-medium !text-white-a700_7f underline"
                  >
                    התנתקות
                  </Heading>
                </div>
              </div>
            </div>
            <div className="absolute left-0 right-0 top-[-41.18px] mx-auto flex-1">
              <div className="flex flex-col items-end gap-1.5">
                <Img
                  src="images/img_uuid_8da7836a_2_red_700.png"
                  alt="Uuid8da7836atwo"
                  className="mr-3 h-[28px] w-[3%] object-contain md:mr-0"
                />
                <div className="flex justify-end self-stretch px-2.5">
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
      </div>
    </>
  );
}
