import { Helmet } from "react-helmet";
import { Heading, Img, Button } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import DashboreddealerColumnone from "./DashboreddealerColumnone";
import DashboreddealerColumnsix from "./DashboreddealerColumnsix";
import DashboreddealerRowtwentytwo from "./DashboreddealerRowtwentytwo";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";

const table4Data = [
  {
    rowplumbingrepa: "לצפיה בהצעה",
    rowrow: "לצפיה",
    rowrowthree: "₪",
    rowplumbingrepa1: "4",
    rowplumbingrepa2: "80,000",
    rowplumbingrepa3: "אוטומטי",
    rowplumbingrepa4: "2022",
    rowplumbingrepa5: " במוו",
    rowplumbingrepa6: "X8 – 5.0 במוו",
    Data: "ממתין לאישור",
    televisionone: "images/img_television_red_a700_03_1.svg",
  },
  {
    rowplumbingrepa: "הצעה חדשה",
    rowrow: "לצפיה",
    Data: "ארכיון",
    televisionone: "images/img_vector_red_a700_03_22x34.svg",
    rowrowthree: "₪",
    rowplumbingrepa1: "4",
    rowplumbingrepa2: "80,000",
    rowplumbingrepa3: "אוטומטי",
    rowplumbingrepa4: "2022",
    rowplumbingrepa5: " במוו",
    rowplumbingrepa6: "X8 – 5.0 במוו",
  },
  {
    rowplumbingrepa: "לצפיה בזכיה",
    rowrow: "לצפיה",
    televisionone: "images/img_television_red_a700_03_1.svg",
    rowrowthree: "₪",
    rowplumbingrepa1: "4",
    rowplumbingrepa2: "80,000",
    rowplumbingrepa3: "אוטומטי",
    rowplumbingrepa4: "2022",
    rowplumbingrepa5: " במוו",
    rowplumbingrepa6: "X8 – 5.0 במוו",
  },
  {
    rowplumbingrepa: "לצפיה בהצעה",
    rowrow: "לצפיה",
    televisionone: "images/img_vector_red_a700_03_22x34.svg",
    rowrowthree: "₪",
    rowplumbingrepa1: "4",
    rowplumbingrepa2: "80,000",
    rowplumbingrepa3: "אוטומטי",
    rowplumbingrepa4: "2022",
    rowplumbingrepa5: " במוו",
    rowplumbingrepa6: "X8 – 5.0 במוו",
  },
  {
    rowplumbingrepa: "לצפיה בהצעה",
    rowrow: "לצפיה",
    one: "ממתין לאישור",
    televisionone: "images/img_vector_red_a700_03_22x34.svg",
    rowrowthree: "₪",
    rowplumbingrepa1: "4",
    rowplumbingrepa2: "80,000",
    rowplumbingrepa3: "אוטומטי",
    rowplumbingrepa4: "2022",
    rowplumbingrepa5: " במוו",
    rowplumbingrepa6: "X8 – 5.0 במוו",
  },
  {
    rowplumbingrepa: "לצפיה בהצעה",
    rowrow: "לצפיה",
    two: "ממתין לאישור",
    televisionone: "images/img_vector_red_a700_03_22x34.svg",
    rowrowthree: "₪",
    rowplumbingrepa1: "4",
    rowplumbingrepa2: "80,000",
    rowplumbingrepa3: "אוטומטי",
    rowplumbingrepa4: "2022",
    rowplumbingrepa5: " במוו",
    rowplumbingrepa6: "X8 – 5.0 במוו",
  },
];

export default function DashboredDealerPage() {
  const table4Columns = React.useMemo(() => {
    const table4ColumnHelper = createColumnHelper();
    return [
      table4ColumnHelper.accessor("rowplumbingrepa", {
        cell: (info) => (
          <div className="flex items-end px-1">
            <Img src="images/img_settings_black_900.svg" alt="Settingsthree" className="h-[14px]" />
            <Heading size="headingxl" as="p" className="text-[15px] font-semibold">
              {info.getValue()}
            </Heading>
          </div>
        ),
        header: (info) => (
          <div className="flex items-center gap-2.5 px-7 py-2.5 sm:px-4">
            <Img src="images/img_group_758531290.svg" alt="Imagefifteen" className="h-[12px]" />
            <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
              ביצוע
            </Heading>
          </div>
        ),
        meta: { width: "144px" },
      }),
      table4ColumnHelper.accessor("rowrow", {
        cell: (info) => (
          <div className="flex flex-1 items-center justify-center">
            <div className="flex flex-wrap items-center self-end">
              <Img src="images/img_settings_black_900.svg" alt="Settingsfive" className="h-[14px]" />
              <Heading size="headingxl" as="p" className="text-[15px] font-semibold">
                {info.getValue()}
              </Heading>
              <Img
                src="images/img_vector_deep_orange_500.svg"
                alt="Vectorsevenone"
                className="ml-2 h-[12px] self-start"
              />
            </div>
            <Button
              shape="round"
              className="ml-7 min-w-[112px] rounded-[14px] border border-solid border-red-a700_03 px-[13px] font-dmsans font-medium capitalize !text-red-a700_03"
            >
              {info.row.original.Data}
            </Button>
            <div className="ml-10 flex w-[32%] items-center justify-center gap-[18px] rounded-[14px] bg-secondary-primary_white">
              <Heading
                size="textmd"
                as="p"
                className="self-end !font-dmsans text-[14px] font-medium capitalize !text-black-900"
              >
                {info.row.original.Data}
              </Heading>
              <Img src={info.row.original.televisionone} alt="Televisionone" className="h-[22px]" />
            </div>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-1 justify-between gap-5">
            <div className="relative h-[30px] w-[14%] content-center lg:h-auto md:h-auto">
              <div className="flex flex-1" />
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 items-center justify-center gap-0.5">
                <Img src="images/img_group_758531290.svg" alt="Imagesixteen" className="h-[12px]" />
                <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
                  מכרז
                </Heading>
              </div>
            </div>
            <div className="relative h-[30px] w-[20%] content-center lg:h-auto md:h-auto">
              <div className="flex flex-1" />
              <div className="absolute bottom-0 left-0 top-0 my-auto mr-1.5 flex h-max flex-1 items-center gap-2 lg:mr-0 md:mr-0">
                <Img src="images/img_group_758531290.svg" alt="Imageseventeen" className="h-[12px]" />
                <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
                  סטטוס
                </Heading>
              </div>
            </div>
            <div className="relative h-[30px] w-[22%] content-center lg:h-auto md:h-auto">
              <div className="flex flex-1" />
              <div className="absolute left-0 top-[1.84px] my-auto ml-auto mr-1.5 flex flex-1 items-center gap-2.5 lg:mr-0 md:mr-0">
                <Img src="images/img_group_758531290.svg" alt="Imageeighteen" className="h-[12px] self-end" />
                <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
                  מיועד ל
                </Heading>
              </div>
            </div>
          </div>
        ),
        meta: { width: "360px" },
      }),
      table4ColumnHelper.accessor("rowrowthree", {
        cell: (info) => (
          <div className="flex items-center justify-center">
            <div className="flex flex-1 items-start justify-center">
              <Img src="images/img_plus.svg" alt="Plusoneone" className="h-[18px]" />
              <Heading
                size="headinglg"
                as="p"
                className="ml-1.5 self-end !font-heebo text-[14px] font-bold !text-red-a700_03"
              >
                {info.getValue()}
              </Heading>
              <Heading
                as="h6"
                className="ml-2.5 self-center !font-heebo text-[18px] font-bold !text-red-a700_03 lg:text-[15px]"
              >
                40,000
              </Heading>
            </div>
            <Img
              src="images/img_user_secondary__primary_white.svg"
              alt="Useroneone"
              className="ml-2.5 h-[18px] self-start"
            />
            <Heading as="h6" className="ml-7 text-[18px] font-semibold lg:text-[15px]">
              8.9.23
            </Heading>
          </div>
        ),
        header: (info) => (
          <div className="ml-[50px] flex">
            <div className="relative h-[30px] w-[46%] content-center lg:h-auto md:h-auto">
              <div className="flex flex-1" />
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 items-center justify-center gap-2">
                <Img src="images/img_group_758531290.svg" alt="Imagenineteen" className="h-[12px]" />
                <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
                  הצעת מחיר
                </Heading>
              </div>
            </div>
            <div className="relative h-[30px] w-[34%] content-center lg:h-auto md:h-auto">
              <div className="flex flex-1" />
              <div className="absolute bottom-[1.26px] left-0 my-auto ml-auto mr-2 flex flex-1 items-start gap-2.5 lg:mr-0 md:mr-0">
                <Img src="images/img_group_758531290.svg" alt="Imagetwentyone" className="h-[12px]" />
                <Heading as="h6" className="self-center text-[18px] font-semibold lg:text-[15px]">
                  תאריך
                </Heading>
              </div>
            </div>
          </div>
        ),
        meta: { width: "210px" },
      }),
      table4ColumnHelper.accessor("rowplumbingrepa1", {
        cell: (info) => (
          <Heading as="h6" className="px-6 text-[18px] font-semibold lg:text-[15px] sm:px-4">
            {info.getValue()}
          </Heading>
        ),
        header: (info) => (
          <div className="ml-[22px] flex items-center gap-[9px] py-2">
            <Img src="images/img_group_758531290.svg" alt="Imagetwentyone" className="h-[12px]" />
            <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
              יד
            </Heading>
          </div>
        ),
        meta: { width: "58px" },
      }),
      table4ColumnHelper.accessor("rowplumbingrepa2", {
        cell: (info) => (
          <Heading as="h6" className="pl-[26px] text-[18px] font-semibold lg:text-[15px] sm:pl-4">
            {info.getValue()}
          </Heading>
        ),
        header: (info) => (
          <div className="flex items-center gap-3 py-2.5">
            <Img src="images/img_group_758531290.svg" alt="Imagetwentytwo" className="h-[12px]" />
            <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
              קילומטר
            </Heading>
          </div>
        ),
        meta: { width: "132px" },
      }),
      table4ColumnHelper.accessor("rowplumbingrepa3", {
        cell: (info) => (
          <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
            {info.getValue()}
          </Heading>
        ),
        header: (info) => (
          <div className="flex items-center py-2">
            <Img src="images/img_group_758531290.svg" alt="Imagethree" className="h-[12px]" />
            <Heading as="h6" className="self-end text-[18px] font-semibold lg:text-[15px]">
              גיר
            </Heading>
          </div>
        ),
        meta: { width: "76px" },
      }),
      table4ColumnHelper.accessor("rowplumbingrepa4", {
        cell: (info) => (
          <Heading as="h6" className="pl-[30px] text-[18px] font-semibold lg:text-[15px] sm:pl-4">
            {info.getValue()}
          </Heading>
        ),
        header: (info) => (
          <div className="flex items-center py-2">
            <Img src="images/img_group_758531290.svg" alt="Imagefive" className="h-[12px]" />
            <Heading as="h6" className="self-end text-[18px] font-semibold lg:text-[15px]">
              שנת יצור
            </Heading>
          </div>
        ),
        meta: { width: "94px" },
      }),
      table4ColumnHelper.accessor("rowplumbingrepa5", {
        cell: (info) => (
          <Heading as="h6" className="pl-5 pr-[34px] text-[18px] font-semibold lg:text-[15px] sm:pr-4">
            {info.getValue()}
          </Heading>
        ),
        header: (info) => (
          <div className="flex items-center py-2">
            <Img src="images/img_group_758531290.svg" alt="Imageseven" className="h-[12px]" />
            <Heading as="h6" className="self-end text-[18px] font-semibold lg:text-[15px]">
              חברה
            </Heading>
          </div>
        ),
        meta: { width: "98px" },
      }),
      table4ColumnHelper.accessor("rowplumbingrepa6", {
        cell: (info) => (
          <div className="flex items-center gap-2">
            <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
              {info.getValue()}
            </Heading>
            <Img src="images/img_signal_secondary__primary_white_1.svg" alt="Signalthreeone" className="h-[16px]" />
          </div>
        ),
        header: (info) => (
          <div className="flex items-center gap-1.5 p-2">
            <Img src="images/img_group_758531290.svg" alt="Imagetwentysix" className="h-[12px]" />
            <Heading as="h6" className="self-end text-[18px] font-semibold lg:text-[15px]">
              דגם הרכב
            </Heading>
          </div>
        ),
        meta: { width: "120px" },
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
            <div className="flex w-[16%] flex-col gap-5 md:w-full">
              <DashboreddealerColumnone />
              <DashboreddealerColumnsix />
            </div>
            <div className="flex flex-1 flex-col items-start gap-8 px-1.5 md:self-stretch">
              <header className="ml-1 flex w-[92%] items-start justify-between gap-5 rounded-[20px] bg-secondary-primary_white px-5 shadow-xs lg:w-full md:ml-0 md:w-full sm:flex-col">
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
              <DashboreddealerRowtwentytwo />
              <div className="ml-1 flex h-[450px] w-[92%] items-center bg-[url(/public/images/img_group_811.svg)] bg-cover bg-no-repeat lg:h-auto lg:w-full md:ml-0 md:h-auto md:w-full">
                <div className="mt-3.5 w-full">
                  <div className="flex flex-col gap-2.5">
                    <div className="ml-[22px] mr-[18px] flex items-center md:mx-0">
                      <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                        <div className="flex w-[8%] justify-center rounded-[20px] bg-secondary-primary_white px-1 py-2">
                          <div className="flex w-full items-start justify-center gap-4">
                            <Img
                              src="images/img_arrow_left_black_900_03_1.svg"
                              alt="Arrowleftthree"
                              className="h-[10px]"
                            />
                            <Heading
                              size="h4_assistant_16px_b"
                              as="h5"
                              className="self-center text-[16px] font-semibold lg:text-[13px]"
                            >
                              לכל ההצעות
                            </Heading>
                          </div>
                        </div>
                      </a>
                      <div className="flex flex-1 items-center justify-end gap-[22px] self-end">
                        <Heading
                          size="h3_assistant_25px_m"
                          as="h6"
                          className="self-end text-[25px] font-medium lg:text-[21px]"
                        >
                          הצעות מחיר
                        </Heading>
                        <Img src="images/img_vector_red_a700_01_36x40.svg" alt="Vectorfiveone" className="h-[36px]" />
                      </div>
                    </div>
                    <div className="relative h-[380px]">
                      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1 px-1.5">
                        <ReactTable
                          size="xs"
                          bodyProps={{ className: "" }}
                          headerProps={{ className: "border-gray-200 border-b border-solid" }}
                          className="md:block md:overflow-x-auto md:whitespace-nowrap"
                          columns={table4Columns}
                          data={table4Data}
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 mx-auto h-[214px] flex-1 rounded-[20px] bg-gradient1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Img
            src="images/img_group_1261154368.svg"
            alt="Imagenine"
            className="absolute bottom-[5%] right-[8%] m-auto h-[402px] w-px"
          />
          <div className="container-11xl absolute bottom-[-31.18px] left-0 right-0 z-[7] h-[1024px] flex-1">
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 items-start md:relative md:flex-col">
              <div className="relative z-[8] mt-10 flex flex-1 flex-col items-end gap-[30px] py-8 md:self-stretch sm:py-4">
                <Button size="6xl" className="w-[52px] rounded-lg px-4">
                  <Img src="images/img_search_secondary__primary_white.svg" />
                </Button>
                <div className="mb-[26px] flex flex-col gap-1 self-stretch">
                  <div className="flex justify-end">
                    <Button size="6xl" className="w-[50px] rounded-lg px-3.5">
                      <Img src="images/img__secondary__primary_white.svg" />
                    </Button>
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
                  <div className="px-3.5 py-4">
                    <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                      <div className="flex flex-col items-end">
                        <Img src="images/img__4.svg" alt="Imagethirtyone" className="h-[20px]" />
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
                        <Img src="images/img__5.svg" alt="Imagethirtytwo" className="h-[20px]" />
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
              <div className="relative mb-[58px] ml-[-70px] w-[5%] self-center rounded-[16px] bg-black-900_03 px-3.5 py-9 md:ml-0 md:w-full sm:py-4">
                <div className="mt-[896px] flex flex-col items-center gap-1.5">
                  <div className="flex flex-col items-center justify-center self-stretch">
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
                  </div>
                  <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                    <Heading
                      size="textxs"
                      as="h4"
                      className="!font-inter text-[12px] font-medium !text-white-a700_7f underline"
                    >
                      התנתקות
                    </Heading>
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute left-0 right-0 top-[-41.18px] mx-auto flex-1">
              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
