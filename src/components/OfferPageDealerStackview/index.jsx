import { ReactTable } from "../../components/ReactTable";
import { Img, Heading, Text, Switch, Button } from "./..";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";

const tableData = [];
const table1Data = [];
const table2Data = [
  {
    undefined: "Nivo Car\\`s",
    artboard1Copy: "images/img_artboard_1_copy_38x54.png",
  },
  {
    undefined: "8.2.24",
    imagesixtysix: "images/img_star_1_124.svg",
    imagefortyone: "images/img_star_1_125.svg",
    imageSeventeen: "images/img_star_1_126.svg",
    imagesixtynine: "images/img_star_1_127.svg",
  },
];

export default function OfferPageDealerStackview({
  prop = "הצעות מחיר שהתקבלו",
  vectoroneone = "images/img_vector_red_a700_03_2.png",
  iconbuttonone,
  belloneoneOne,
  prop1 = "גילי עטיה",
  prop2 = "ספק",
  prop3 = "התנתקות",
  bmc,
  ...props
}) {
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("rowplumbingrepa", {
        cell: (info) => <></>,
        header: (info) => (
          <div className="flex flex-1 items-center justify-center gap-2.5">
            <Img src="images/img_group_758531290.svg" alt="Imagenine" className="h-[12px]" />
            <Heading size="heading3xl" as="h6" className="text-[16px] font-bold lg:text-[13px]">
              אישור ההצעה
            </Heading>
          </div>
        ),
        meta: { width: "110px" },
      }),
      tableColumnHelper.accessor("rowplumbingrepa1", {
        cell: (info) => <></>,
        header: (info) => (
          <div className="ml-[108px] flex items-center gap-2">
            <Img src="images/img_group_758531290.svg" alt="Imageeleven" className="h-[12px]" />
            <Heading size="heading3xl" as="h6" className="text-[16px] font-bold lg:text-[13px]">
              מחיר
            </Heading>
          </div>
        ),
        meta: { width: "58px" },
      }),
      tableColumnHelper.accessor("rowplumbingrepa2", {
        cell: (info) => <></>,
        header: (info) => (
          <div className="ml-[62px] flex items-center gap-0.5">
            <Img src="images/img_group_758531290.svg" alt="Imagethirteen" className="h-[12px]" />
            <Heading size="h4_assistant_18px_b" as="h6" className="text-[18px] font-bold lg:text-[15px]">
              סיום תשלום
            </Heading>
          </div>
        ),
        meta: { width: "94px" },
      }),
      tableColumnHelper.accessor("rowplumbingrepa3", {
        cell: (info) => <></>,
        header: (info) => (
          <div className="ml-12 flex items-center">
            <Img src="images/img_group_758531290.svg" alt="Imagethirtyone" className="h-[12px]" />
            <Heading size="heading3xl" as="h6" className="self-end text-[16px] font-bold lg:text-[13px]">
              איסוף
            </Heading>
          </div>
        ),
        meta: { width: "54px" },
      }),
      tableColumnHelper.accessor("rowplumbingrepa4", {
        cell: (info) => <></>,
        header: (info) => (
          <div className="ml-[38px] flex flex-1 items-center justify-center gap-1.5">
            <Img src="images/img_group_758531290.svg" alt="Imagethirtyone" className="h-[12px]" />
            <Heading size="heading3xl" as="h6" className="text-[16px] font-bold lg:text-[13px]">
              שוריין/לא שוריין
            </Heading>
          </div>
        ),
        meta: { width: "122px" },
      }),
      tableColumnHelper.accessor("rowplumbingrepa5", {
        cell: (info) => <></>,
        header: (info) => (
          <div className="ml-3.5 flex items-center gap-1.5">
            <Img src="images/img_group_758531290.svg" alt="Imagethirtytwo" className="h-[12px]" />
            <Heading size="heading3xl" as="h6" className="self-end text-[16px] font-bold lg:text-[13px]">
              מיקום
            </Heading>
          </div>
        ),
        meta: { width: "60px" },
      }),
      tableColumnHelper.accessor("rowplumbingrepa6", {
        cell: (info) => <></>,
        header: (info) => (
          <div className="ml-9 flex flex-1 items-center gap-1.5">
            <Img src="images/img_group_758531290.svg" alt="Imagefifteen" className="h-[12px]" />
            <Heading size="heading3xl" as="h6" className="text-[16px] font-bold lg:text-[13px]">
              מועד ההצעה
            </Heading>
          </div>
        ),
        meta: { width: "96px" },
      }),
      tableColumnHelper.accessor("rowplumbingrepa7", {
        cell: (info) => <></>,
        header: (info) => (
          <div className="ml-14 flex items-center gap-1.5">
            <Img src="images/img_group_758531290.svg" alt="Imageseventeen" className="h-[12px]" />
            <Heading size="heading3xl" as="h6" className="text-[16px] font-bold lg:text-[13px]">
              דירוג
            </Heading>
          </div>
        ),
        meta: { width: "54px" },
      }),
      tableColumnHelper.accessor("rowplumbingrepa8", {
        cell: (info) => <></>,
        header: (info) => (
          <div className="ml-[104px] flex items-center gap-2">
            <Img src="images/img_group_758531290.svg" alt="Imagenineteen" className="h-[12px]" />
            <Heading size="heading3xl" as="h6" className="mt-1 self-end text-[16px] font-bold lg:text-[13px]">
              שם הקונה
            </Heading>
          </div>
        ),
        meta: { width: "86px" },
      }),
    ];
  }, []);
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper();
    return [
      table1ColumnHelper.accessor("rowplumbingrepa9", {
        cell: (info) => <></>,
        header: (info) => (
          <div className="flex flex-1 items-center justify-center gap-2.5">
            <Img src="images/img_group_758531290.svg" alt="Imagefiftysix" className="h-[12px]" />
            <Heading size="heading3xl" as="h6" className="text-[16px] font-bold lg:text-[13px]">
              אישור ההצעה
            </Heading>
          </div>
        ),
        meta: { width: "110px" },
      }),
      table1ColumnHelper.accessor("rowplumbingrepa10", {
        cell: (info) => <></>,
        header: (info) => (
          <div className="ml-[108px] flex items-center gap-2">
            <Img src="images/img_group_758531290.svg" alt="Image Eleven" className="h-[12px]" />
            <Heading size="heading3xl" as="h6" className="text-[16px] font-bold lg:text-[13px]">
              מחיר
            </Heading>
          </div>
        ),
        meta: { width: "58px" },
      }),
      table1ColumnHelper.accessor("rowplumbingrepa11", {
        cell: (info) => <></>,
        header: (info) => (
          <div className="ml-[62px] flex items-center gap-0.5">
            <Img src="images/img_group_758531290.svg" alt="Image Thirteen" className="h-[12px]" />
            <Heading size="h4_assistant_18px_b" as="h6" className="text-[18px] font-bold lg:text-[15px]">
              סיום תשלום
            </Heading>
          </div>
        ),
        meta: { width: "94px" },
      }),
      table1ColumnHelper.accessor("rowplumbingrepa12", {
        cell: (info) => <></>,
        header: (info) => (
          <div className="ml-12 flex items-center">
            <Img src="images/img_group_758531290.svg" alt="Imagefiftynine" className="h-[12px]" />
            <Heading size="heading3xl" as="h6" className="self-end text-[16px] font-bold lg:text-[13px]">
              איסוף
            </Heading>
          </div>
        ),
        meta: { width: "54px" },
      }),
      table1ColumnHelper.accessor("rowplumbingrepa13", {
        cell: (info) => <></>,
        header: (info) => (
          <div className="ml-[38px] flex flex-1 items-center gap-1">
            <Img src="images/img_group_758531290.svg" alt="Imagesixtyone" className="h-[12px]" />
            <Heading size="heading3xl" as="h6" className="text-[16px] font-bold lg:text-[13px]">
              שוריין/לא שוריין
            </Heading>
          </div>
        ),
        meta: { width: "112px" },
      }),
      table1ColumnHelper.accessor("rowplumbingrepa14", {
        cell: (info) => <></>,
        header: (info) => (
          <div className="ml-6 flex items-center gap-1.5">
            <Img src="images/img_group_758531290.svg" alt="Imagesixtyone" className="h-[12px]" />
            <Heading size="heading3xl" as="h6" className="self-end text-[16px] font-bold lg:text-[13px]">
              מיקום
            </Heading>
          </div>
        ),
        meta: { width: "60px" },
      }),
      table1ColumnHelper.accessor("rowplumbingrepa15", {
        cell: (info) => <></>,
        header: (info) => (
          <div className="ml-9 flex flex-1 items-center gap-1.5">
            <Img src="images/img_group_758531290.svg" alt="Imagesixtytwo" className="h-[12px]" />
            <Heading size="heading3xl" as="h6" className="text-[16px] font-bold lg:text-[13px]">
              מועד ההצעה
            </Heading>
          </div>
        ),
        meta: { width: "96px" },
      }),
      table1ColumnHelper.accessor("rowplumbingrepa16", {
        cell: (info) => <></>,
        header: (info) => (
          <div className="ml-14 flex items-center gap-1.5">
            <Img src="images/img_group_758531290.svg" alt="Image Fifteen" className="h-[12px]" />
            <Heading size="heading3xl" as="h6" className="text-[16px] font-bold lg:text-[13px]">
              דירוג
            </Heading>
          </div>
        ),
        meta: { width: "54px" },
      }),
      table1ColumnHelper.accessor("rowplumbingrepa17", {
        cell: (info) => <></>,
        header: (info) => (
          <div className="ml-[104px] flex items-center gap-2">
            <Img src="images/img_group_758531290.svg" alt="Imagesixtyfour" className="h-[12px]" />
            <Heading size="heading3xl" as="h6" className="mt-1 self-end text-[16px] font-bold lg:text-[13px]">
              שם הקונה
            </Heading>
          </div>
        ),
        meta: { width: "86px" },
      }),
    ];
  }, []);
  const table2Columns = React.useMemo(() => {
    const table2ColumnHelper = createColumnHelper();
    return [
      table2ColumnHelper.accessor("rowplumbingrepa18", {
        cell: (info) => (
          <div className="flex flex-1 items-center justify-end gap-2">
            <div className="h-[16px] w-px bg-gray-400_07" />
            <Heading size="heading5xl" as="h6" className="mt-1 self-start text-[18px] font-semibold lg:text-[15px]">
              {info.getValue()}
            </Heading>
            <Img
              src={info.row.original.artboard1Copy}
              alt="Artboard1copy"
              className="h-[38px] w-[40%] rounded-md object-contain"
            />
          </div>
        ),
        header: (info) => (
          <div className="flex flex-1 items-center justify-center gap-2.5">
            <Img src="images/img_group_758531290.svg" alt="Imageseventy" className="h-[12px]" />
            <Heading size="heading3xl" as="h6" className="text-[16px] font-bold lg:text-[13px]">
              אישור ההצעה
            </Heading>
          </div>
        ),
        meta: { width: "110px" },
      }),
      table2ColumnHelper.accessor("rowplumbingrepa19", {
        cell: (info) => <Img src={info.getValue()} alt="Signalfifteen" className="h-[16px]" />,
        header: (info) => (
          <div className="ml-[108px] flex items-center gap-2">
            <Img src="images/img_group_758531290.svg" alt="Imagefortyfive" className="h-[12px]" />
            <Heading size="heading3xl" as="h6" className="text-[16px] font-bold lg:text-[13px]">
              מחיר
            </Heading>
          </div>
        ),
        meta: { width: "58px" },
      }),
      table2ColumnHelper.accessor("rowplumbingrepa20", {
        cell: (info) => <></>,
        header: (info) => (
          <div className="ml-[62px] flex items-center gap-0.5">
            <Img src="images/img_group_758531290.svg" alt="Imageteen" className="h-[12px]" />
            <Heading size="h4_assistant_18px_b" as="h6" className="text-[18px] font-bold lg:text-[15px]">
              סיום תשלום
            </Heading>
          </div>
        ),
        meta: { width: "94px" },
      }),
      table2ColumnHelper.accessor("rowplumbingrepa21", {
        cell: (info) => <></>,
        header: (info) => (
          <div className="ml-12 flex items-center">
            <Img src="images/img_group_758531290.svg" alt="Imagefortynine" className="h-[12px]" />
            <Heading size="heading3xl" as="h6" className="self-end text-[16px] font-bold lg:text-[13px]">
              איסוף
            </Heading>
          </div>
        ),
        meta: { width: "54px" },
      }),
      table2ColumnHelper.accessor("rowplumbingrepa22", {
        cell: (info) => <></>,
        header: (info) => (
          <div className="ml-[38px] flex flex-1 items-center justify-center gap-1.5">
            <Img src="images/img_group_758531290.svg" alt="Imagefiftyone" className="h-[12px]" />
            <Heading size="heading3xl" as="h6" className="text-[16px] font-bold lg:text-[13px]">
              שוריין/לא שוריין
            </Heading>
          </div>
        ),
        meta: { width: "122px" },
      }),
      table2ColumnHelper.accessor("rowplumbingrepa23", {
        cell: (info) => <></>,
        header: (info) => (
          <div className="ml-3.5 flex items-center gap-1.5">
            <Img src="images/img_group_758531290.svg" alt="Image Twentyone" className="h-[12px]" />
            <Heading size="heading3xl" as="h6" className="self-end text-[16px] font-bold lg:text-[13px]">
              מיקום
            </Heading>
          </div>
        ),
        meta: { width: "60px" },
      }),
      table2ColumnHelper.accessor("rowplumbingrepa24", {
        cell: (info) => <></>,
        header: (info) => (
          <div className="ml-9 flex flex-1 items-center gap-1.5">
            <Img src="images/img_group_758531290.svg" alt="Imagefiftyfive" className="h-[12px]" />
            <Heading size="heading3xl" as="h6" className="text-[16px] font-bold lg:text-[13px]">
              מועד ההצעה
            </Heading>
          </div>
        ),
        meta: { width: "96px" },
      }),
      table2ColumnHelper.accessor("rowplumbingrepa25", {
        cell: (info) => <></>,
        header: (info) => (
          <div className="ml-14 flex items-center gap-1.5">
            <Img src="images/img_group_758531290.svg" alt="Image" className="h-[12px]" />
            <Heading size="heading3xl" as="h6" className="text-[16px] font-bold lg:text-[13px]">
              דירוג
            </Heading>
          </div>
        ),
        meta: { width: "54px" },
      }),
      table2ColumnHelper.accessor("rowplumbingrepa26", {
        cell: (info) => <></>,
        header: (info) => (
          <div className="ml-[104px] flex items-center gap-2">
            <Img src="images/img_group_758531290.svg" alt="Imagefiftynine" className="h-[12px]" />
            <Heading size="heading3xl" as="h6" className="mt-1 self-end text-[16px] font-bold lg:text-[13px]">
              שם הקונה
            </Heading>
          </div>
        ),
        meta: { width: "86px" },
      }),
    ];
  }, []);

  return (
    <div {...props} className={`${props.className} h-[1094px] lg:h-auto md:h-auto relative`}>
      <div className="h-[1080px] flex-1 bg-gray-100 shadow-xs" />
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 items-center px-[38px] sm:relative sm:flex-col sm:px-4">
        <div className="flex flex-1 items-start justify-end gap-[22px] rounded-[20px] bg-secondary-primary_white py-[42px] pl-14 pr-[62px] shadow-xs lg:pr-8 md:p-5 sm:self-stretch sm:p-4">
          <Heading size="h3_assistant_25px_m" as="p" className="mt-1.5 text-[25px] font-medium lg:text-[21px]">
            {prop}
          </Heading>
          <Img src={vectoroneone} alt="Vectoroneone" className="mb-[928px] h-[36px] object-cover" />
        </div>
        <div className="relative ml-[-82px] flex w-[10%] items-start justify-center sm:ml-0 sm:w-full">
          <div className="flex flex-1 items-start">
            <div className="relative z-[1] mt-10 flex flex-1 flex-col items-end gap-[30px]">
              <Button size="6xl" className="mt-[60px] w-[52px] rounded-lg px-4">
                <Img src="images/img_search_secondary__primary_white.svg" />
              </Button>
              <div className="flex flex-col gap-1 self-stretch">
                <div className="flex justify-end px-3.5 py-4">
                  <Img src="images/img__secondary__primary_white.svg" alt="Imageone" className="h-[20px]" />
                </div>
                <div className="flex justify-end px-3.5 py-4">
                  <Img src="images/img__secondary__primary_white_20x20.svg" alt="Imageoneone" className="h-[20px]" />
                </div>
                <div className="flex justify-end px-3.5 py-4">
                  <Img src="images/img__20x20.svg" alt="Imagetwoone" className="h-[20px]" />
                </div>
                <div className="flex justify-end px-3.5 py-4">
                  <Img src="images/img__1.svg" alt="Imagethreeone" className="h-[20px]" />
                </div>
                <div className="flex justify-end px-3.5 py-4">
                  <Img src="images/img__2.svg" alt="Imagefourone" className="h-[20px]" />
                </div>
                <div className="flex justify-end px-3.5 py-4">
                  <Img src="images/img__3.svg" alt="Imagefiveone" className="h-[20px]" />
                </div>
                <div className="flex justify-end">
                  {!!iconbuttonone ? (
                    <Button size="6xl" className="w-[50px] rounded-lg px-3.5">
                      <Img src="images/img__4.svg" />
                    </Button>
                  ) : null}
                </div>
                <div className="relative h-[50px] content-center p-3.5 lg:h-auto md:h-auto">
                  {!!belloneoneOne ? <Img src={belloneoneOne} alt="Belloneone" className="ml-auto h-[20px]" /> : null}
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
                  size="headingxl"
                  as="p"
                  className="!font-inter text-[14px] font-semibold !text-secondary-primary_white"
                >
                  {prop1}
                </Heading>
                <Heading size="headinglg" as="p" className="!font-inter text-[12px] font-semibold !text-red-a700_03">
                  {prop2}
                </Heading>
                <Heading
                  size="textxs"
                  as="p"
                  className="!font-inter text-[12px] font-medium !text-white-a700_7f underline"
                >
                  {prop3}
                </Heading>
              </div>
            </div>
          </div>
          <div className="relative z-[2] ml-[-88px] mt-[18px] flex w-[30%] justify-center">
            <div className="flex w-full flex-col gap-1.5">
              <Img
                src="images/img_uuid_8da7836a_2_red_700.png"
                alt="Uuid8da7836atwo"
                className="mx-3 h-[28px] object-cover md:mx-0"
              />
              <div className="flex justify-center px-2.5">
                <Heading
                  size="heading9xl"
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
      <div className="absolute bottom-0 left-0 right-0 top-0 z-[3] mx-[60px] my-auto flex h-max w-full max-w-[1798px] flex-1 flex-col lg:mx-0 lg:px-5 md:mx-0 md:px-5">
        <Img
          src="images/img_stock_vector_re.png"
          alt="Stockvectorre"
          className="ml-9 h-[124px] w-[12%] object-contain md:ml-0"
        />
        <div className="relative mt-[-14px]">
          <div className="flex flex-col items-start gap-8">
            <div className="flex w-[92%] justify-center border-t border-solid border-gray-400_11 lg:w-full md:w-full">
              <div className="mt-2 flex w-full flex-col gap-[30px] self-end">
                <div className="mr-1.5 flex items-end md:mr-0 md:flex-col">
                  <div className="flex w-[12%] items-center justify-center gap-[18px] rounded-[16px] bg-secondary-primary_white p-1.5 md:w-full">
                    <Img src="images/img_arrow_left.svg" alt="Arrowleftone" className="h-[10px]" />
                    <Heading
                      size="h4_assistant_16px_b"
                      as="h6"
                      className="text-[16px] font-semibold !text-gray-600 lg:text-[13px]"
                    >
                      כל ההצעות למודעה
                    </Heading>
                  </div>
                  <div className="mt-3.5 flex flex-1 items-center justify-center gap-3.5 px-2 md:self-stretch">
                    <div className="flex flex-1 items-center justify-end">
                      <Text
                        size="text4xl"
                        as="p"
                        className="!font-heebo text-[22px] font-normal !text-black-900 lg:text-[18px]"
                      >
                        2022
                      </Text>
                      <div className="ml-5 h-[8px] w-[10px] rounded bg-red-a700_03" />
                      <Text
                        size="text4xl"
                        as="p"
                        className="ml-[18px] !font-heebo text-[22px] font-normal !text-black-900 lg:text-[18px]"
                      >
                        במוו
                      </Text>
                    </div>
                    <Heading
                      size="heading12xl"
                      as="h3"
                      className="!font-heebo text-[30px] font-bold !text-black-900 lg:text-[25px] md:text-[24px] sm:text-[22px]"
                    >
                      X8 – 5.0 במוו
                    </Heading>
                  </div>
                </div>
                <div className="flex items-start gap-[38px] md:flex-col">
                  <ReactTable
                    variant="simple"
                    className="flex-1 self-center md:block md:overflow-x-auto md:whitespace-nowrap"
                    columns={tableColumns}
                    data={tableData}
                  />
                  <Img
                    src="images/img_car11_qgcqjcnfp_144x236.png"
                    alt="Car11qgcqjcnfp"
                    className="h-[184px] w-[20%] rounded-[10px] object-contain md:w-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex self-stretch">
              <div className="flex w-[92%] justify-center border-t border-solid border-gray-400_11 lg:w-full md:w-full">
                <div className="mt-2 flex w-full flex-col gap-2.5 self-end">
                  <div className="mr-4 mt-3.5 flex items-center md:mr-0 md:flex-col">
                    <div className="flex w-[12%] items-center justify-center gap-[18px] self-end rounded-[16px] bg-secondary-primary_white p-1.5 md:w-full">
                      <Img src="images/img_arrow_left.svg" alt="Arrowleftthree" className="h-[10px]" />
                      <Heading
                        size="h4_assistant_16px_b"
                        as="h6"
                        className="text-[16px] font-semibold !text-gray-600 lg:text-[13px]"
                      >
                        כל ההצעות למודעה
                      </Heading>
                    </div>
                    <div className="flex flex-1 items-center justify-center gap-3.5 md:self-stretch">
                      <div className="flex flex-1 items-center justify-end">
                        <Text
                          size="text4xl"
                          as="p"
                          className="!font-heebo text-[22px] font-normal !text-black-900 lg:text-[18px]"
                        >
                          2022
                        </Text>
                        <div className="ml-5 h-[8px] w-[10px] rounded bg-red-a700_03" />
                        <Text
                          size="text4xl"
                          as="p"
                          className="ml-[18px] !font-heebo text-[22px] font-normal !text-black-900 lg:text-[18px]"
                        >
                          במוו
                        </Text>
                      </div>
                      <Heading
                        size="heading12xl"
                        as="h3"
                        className="!font-heebo text-[30px] font-bold !text-black-900 lg:text-[25px] md:text-[24px] sm:text-[22px]"
                      >
                        X8 – 5.0 במוו
                      </Heading>
                    </div>
                  </div>
                  <div className="flex items-start gap-[38px] md:flex-col">
                    <ReactTable
                      variant="simple"
                      className="mt-5 flex-1 self-end md:block md:overflow-x-auto md:whitespace-nowrap"
                      columns={table1Columns}
                      data={table1Data}
                    />
                    <Img
                      src="images/img_car11_qgcqjcnfp_144x236.png"
                      alt="Car11qgcqjcnfp"
                      className="mt-6 h-[184px] w-[20%] rounded-[10px] object-contain md:w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex self-stretch">
              <div className="flex w-[92%] justify-center border-t border-solid border-gray-400_11 lg:w-full md:w-full">
                <div className="mt-2 flex w-full flex-col gap-2.5">
                  <div className="mr-4 mt-3.5 flex items-center md:mr-0 md:flex-col">
                    <div className="flex w-[12%] justify-center self-end rounded-[16px] bg-secondary-primary_white p-1.5 md:w-full">
                      <div className="flex w-full items-center justify-center gap-[18px]">
                        <Img src="images/img_arrow_left.svg" alt="Arrowleftfive" className="h-[10px]" />
                        <Heading
                          size="h4_assistant_16px_b"
                          as="h6"
                          className="text-[16px] font-semibold !text-gray-600 lg:text-[13px]"
                        >
                          כל ההצעות למודעה
                        </Heading>
                      </div>
                    </div>
                    <div className="flex flex-1 items-center justify-center gap-3.5 md:self-stretch">
                      <div className="flex flex-1 items-center justify-end">
                        <Text
                          size="text4xl"
                          as="p"
                          className="!font-heebo text-[22px] font-normal !text-black-900 lg:text-[18px]"
                        >
                          2022
                        </Text>
                        <div className="ml-5 h-[8px] w-[10px] rounded bg-red-a700_03" />
                        <Text
                          size="text4xl"
                          as="p"
                          className="ml-[18px] !font-heebo text-[22px] font-normal !text-black-900 lg:text-[18px]"
                        >
                          במוו
                        </Text>
                      </div>
                      <Heading
                        size="heading12xl"
                        as="h3"
                        className="!font-heebo text-[30px] font-bold !text-black-900 lg:text-[25px] md:text-[24px] sm:text-[22px]"
                      >
                        X8 – 5.0 במוו
                      </Heading>
                    </div>
                  </div>
                  <div className="flex items-end gap-[38px] md:flex-col">
                    <ReactTable
                      className="tablelinetwenty mt-5 flex-1 md:block md:overflow-x-auto md:whitespace-nowrap"
                      bodyProps={{ className: "border-gray-200 border-b border-solid bg-gray-50" }}
                      columns={table2Columns}
                      data={table2Data}
                    />
                    <Img
                      src="images/img_car11_qgcqjcnfp_90x314.png"
                      alt="Car11qgcqjcnfp"
                      className="h-[90px] w-[20%] rounded-[10px] object-contain md:w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
