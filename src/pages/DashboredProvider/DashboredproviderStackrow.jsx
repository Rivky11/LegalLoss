import { Img, Heading, Button } from "../../components";
import DashboredProviderRowtwentyone from "../../components/DashboredProviderRowtwentyone";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";

const table11Data = [
  {
    rowrow: "לצפיה בהצעה",
    rowten: "פירוק",
    roweleven: "₪",
    rowtwelve: "8.9.23",
    rowplumbingrepa: "4",
    rowplumbingrepa1: "80,000",
    rowplumbingrepa2: "אוטומטי",
    rowplumbingrepa3: "2022",
    rowplumbingrepa4: " במוו",
    rowplumbingrepa5: "X8 – 5.0 במוו",
    Data: "ממתין לאישור",
    plumbingrepair: "40,000",
  },
  {
    rowrow: "לצפיה במודעה",
    Data: "ממתין להצעה",
    rowten: "פירוק",
    roweleven: "₪",
    plumbingrepair: "0",
    rowtwelve: "8.9.23",
    rowplumbingrepa: "4",
    rowplumbingrepa1: "80,000",
    rowplumbingrepa2: "אוטומטי",
    rowplumbingrepa3: "2022",
    rowplumbingrepa4: " במוו",
    rowplumbingrepa5: "X8 – 5.0 במוו",
  },
  {
    rowrow: "לצפיה בהצעה",
    rowten: "פירוק",
    roweleven: "₪",
    plumbingrepair: "40,000",
    rowtwelve: "8.9.23",
    rowplumbingrepa: "4",
    rowplumbingrepa1: "80,000",
    rowplumbingrepa2: "אוטומטי",
    rowplumbingrepa3: "2022",
    rowplumbingrepa4: " במוו",
    rowplumbingrepa5: "X8 – 5.0 במוו",
  },
  {
    rowrow: "הצעה חדשה",
    rowten: "פירוק",
    roweleven: "₪",
    plumbingrepair: "40,000",
    rowtwelve: "8.9.23",
    rowplumbingrepa: "4",
    rowplumbingrepa1: "80,000",
    rowplumbingrepa2: "אוטומטי",
    rowplumbingrepa3: "2022",
    rowplumbingrepa4: " במוו",
    rowplumbingrepa5: "X8 – 5.0 במוו",
  },
];

export default function DashboredproviderStackrow() {
  const table11Columns = React.useMemo(() => {
    const table11ColumnHelper = createColumnHelper();
    return [
      table11ColumnHelper.accessor("rowrow", {
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
          <div className="mb-1.5 flex items-center self-end">
            <div className="w-[26%]">
              <div className="flex" />
              <div className="relative mt-[-24px] flex items-center justify-center gap-2">
                <Img src="images/img_group_758531290.svg" alt="Imageoneone" className="h-[12px]" />
                <Heading as="h3" className="text-[18px] font-semibold lg:text-[15px]">
                  ביצוע
                </Heading>
              </div>
            </div>
            <div className="relative h-[30px] w-[32%] content-center lg:h-auto md:h-auto">
              <div className="flex flex-1" />
              <div className="absolute bottom-0 left-0 top-0 my-auto mr-1.5 flex h-max flex-1 items-center gap-2 lg:mr-0 md:mr-0">
                <Img src="images/img_group_758531290.svg" alt="Imagetwoone" className="h-[12px]" />
                <Heading as="h4" className="text-[18px] font-semibold lg:text-[15px]">
                  סטטוס
                </Heading>
              </div>
            </div>
          </div>
        ),
        meta: { width: "220px" },
      }),
      table11ColumnHelper.accessor("rowten", {
        cell: (info) => (
          <div className="flex items-center justify-center gap-[18px] rounded-[14px] bg-secondary-primary_white">
            <Heading
              size="textmd"
              as="p"
              className="self-end !font-dmsans text-[14px] font-medium capitalize !text-black-900"
            >
              {info.getValue()}
            </Heading>
            <Img src="images/img_television_red_a700_03_1.svg" alt="Televisionone" className="h-[22px]" />
          </div>
        ),
        header: (info) => (
          <div className="ml-[74px] flex items-center gap-2.5 p-2.5">
            <Img src="images/img_group_758531290.svg" alt="Imagethreeone" className="h-[12px] self-end" />
            <Heading as="h5" className="text-[18px] font-semibold lg:text-[15px]">
              מיועד ל
            </Heading>
          </div>
        ),
        meta: { width: "156px" },
      }),
      table11ColumnHelper.accessor("roweleven", {
        cell: (info) => (
          <div className="ml-[42px] flex items-start justify-center px-1">
            <div className="flex flex-1 items-center justify-center self-center">
              <Img src="images/img_plus.svg" alt="Plusoneone" className="h-[18px] self-start" />
              <Heading size="headinglg" as="p" className="!font-heebo text-[14px] font-bold !text-red-a700_03">
                {info.getValue()}
              </Heading>
              <Heading as="h6" className="!font-heebo text-[18px] font-bold !text-red-a700_03 lg:text-[15px]">
                {info.row.original.plumbingrepair}
              </Heading>
            </div>
            <Img src="images/img_user_secondary__primary_white.svg" alt="Useroneone" className="h-[18px]" />
          </div>
        ),
        header: (info) => (
          <div className="flex items-center gap-[7px] py-2.5">
            <Img src="images/img_group_758531290.svg" alt="Imagefourone" className="mb-1 h-[12px] self-end" />
            <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
              הצעת מחיר
            </Heading>
          </div>
        ),
        meta: { width: "132px" },
      }),
      table11ColumnHelper.accessor("rowtwelve", {
        cell: (info) => (
          <Heading as="h6" className="pl-[22px] text-[18px] font-semibold lg:text-[15px] sm:pl-4">
            {info.getValue()}
          </Heading>
        ),
        header: (info) => (
          <div className="flex items-end gap-2.5 py-2">
            <Img src="images/img_group_758531290.svg" alt="Imagefiveone" className="mb-1.5 h-[12px]" />
            <Heading as="h6" className="mt-1 text-[18px] font-semibold lg:text-[15px]">
              תאריך
            </Heading>
          </div>
        ),
        meta: { width: "102px" },
      }),
      table11ColumnHelper.accessor("rowplumbingrepa", {
        cell: (info) => (
          <Heading as="h6" className="pl-[18px] pr-[34px] text-[18px] font-semibold lg:text-[15px] sm:pr-4">
            {info.getValue()}
          </Heading>
        ),
        header: (info) => (
          <div className="flex items-center gap-2 py-2.5">
            <Img src="images/img_group_758531290.svg" alt="Imagesixone" className="mb-1 h-[12px] self-end" />
            <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
              יד
            </Heading>
          </div>
        ),
        meta: { width: "66px" },
      }),
      table11ColumnHelper.accessor("rowplumbingrepa1", {
        cell: (info) => (
          <Heading as="h6" className="pl-[22px] text-[18px] font-semibold lg:text-[15px] sm:pl-4">
            {info.getValue()}
          </Heading>
        ),
        header: (info) => (
          <div className="flex items-end gap-2.5 py-2.5">
            <Img src="images/img_group_758531290.svg" alt="Imagesevenone" className="mb-1 h-[12px]" />
            <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
              קילומטר
            </Heading>
          </div>
        ),
        meta: { width: "136px" },
      }),
      table11ColumnHelper.accessor("rowplumbingrepa2", {
        cell: (info) => (
          <Heading as="h6" className="text-[18px] font-semibold lg:text-[15px]">
            {info.getValue()}
          </Heading>
        ),
        header: (info) => (
          <div className="flex items-end py-2">
            <Img src="images/img_group_758531290.svg" alt="Imageeightone" className="mb-1.5 h-[12px]" />
            <Heading as="h6" className="mt-1 text-[18px] font-semibold lg:text-[15px]">
              גיר
            </Heading>
          </div>
        ),
        meta: { width: "94px" },
      }),
      table11ColumnHelper.accessor("rowplumbingrepa3", {
        cell: (info) => (
          <Heading as="h6" className="pl-[22px] text-[18px] font-semibold lg:text-[15px] sm:pl-4">
            {info.getValue()}
          </Heading>
        ),
        header: (info) => (
          <div className="flex items-end py-2">
            <Img src="images/img_group_758531290.svg" alt="Imagenineone" className="mb-1.5 h-[12px]" />
            <Heading as="h6" className="mt-1 text-[18px] font-semibold lg:text-[15px]">
              שנת יצור
            </Heading>
          </div>
        ),
        meta: { width: "102px" },
      }),
      table11ColumnHelper.accessor("rowplumbingrepa4", {
        cell: (info) => (
          <Heading as="h6" className="pl-3 text-[18px] font-semibold lg:text-[15px]">
            <span>&nbsp;</span>
            <span className="font-bold">lbl_lbl20</span>
          </Heading>
        ),
        header: (info) => (
          <div className="flex items-end py-2">
            <Img src="images/img_group_758531290.svg" alt="Imagetenone" className="mb-1.5 h-[12px]" />
            <Heading as="h6" className="mt-1 text-[18px] font-semibold lg:text-[15px]">
              חברה
            </Heading>
          </div>
        ),
        meta: { width: "98px" },
      }),
      table11ColumnHelper.accessor("rowplumbingrepa5", {
        cell: (info) => (
          <Heading as="h6" className="text-[18px] font-bold lg:text-[15px]">
            {info.getValue()}
          </Heading>
        ),
        header: (info) => (
          <div className="flex items-end px-1.5 py-2">
            <Img src="images/img_group_758531290.svg" alt="Imageelevenone" className="mb-1.5 h-[12px]" />
            <Heading as="h6" className="mt-1 text-[18px] font-semibold lg:text-[15px]">
              דגם הרכב
            </Heading>
          </div>
        ),
        meta: { width: "144px" },
      }),
    ];
  }, []);

  return (
    <div className="relative h-[474px]">
      <ReactTable
        size="xs"
        bodyProps={{ className: "" }}
        className="absolute left-0 right-0 top-[13%] mx-auto flex-1 md:block md:overflow-x-auto md:whitespace-nowrap"
        columns={table11Columns}
        data={table11Data}
      />
      <div className="absolute left-0 right-0 top-0 ml-2 mr-auto flex-1 rounded-[20px] bg-secondary-primary_white p-2 shadow-xs lg:ml-0 md:ml-0">
        <div className="mb-[390px] flex items-center justify-center md:flex-col">
          <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
            <div className="flex items-center gap-2 self-end rounded-[14px] border border-solid border-gray-400_07 bg-secondary-primary_white">
              <Img src="images/img_arrow_left.svg" alt="Arrowleftone" className="h-[10px]" />
              <Heading
                size="h4_assistant_16px_b"
                as="h6"
                className="text-[16px] font-semibold !text-gray-600 lg:text-[13px]"
              >
                כל המודעות
              </Heading>
            </div>
          </a>
          <div className="flex-1 px-3.5 md:self-stretch">
            <div className="mt-1.5 flex items-center justify-end gap-[22px]">
              <Heading size="h3_assistant_25px_m" as="p" className="self-end text-[25px] font-medium lg:text-[21px]">
                מודעות רכבים
              </Heading>
              <Img src="images/img_car_red_a700_03_2.png" alt="Caroneone" className="h-[32px] object-cover" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 my-auto ml-auto mr-2.5 flex h-max flex-1 flex-col items-end lg:mr-0 md:mr-0">
        <Img src="images/img_group_1261154366.svg" alt="Imagetwelveone" className="relative z-[1] h-[402px] w-px" />
        <DashboredProviderRowtwentyone className="relative mt-[-50px] self-stretch" />
      </div>
      <DashboredProviderRowtwentyone
        one="לצפיה באישור"
        className="absolute bottom-[-0.41px] left-0 right-0 mx-auto flex-1"
      />
      <Img
        src="images/img_rectangle_1550.png"
        alt="Imagethirteen"
        className="absolute bottom-[23.59px] left-0 right-0 z-[4] mx-auto h-[214px] flex-1 rounded-[20px] object-cover"
      />
    </div>
  );
}
