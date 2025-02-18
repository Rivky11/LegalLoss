import { Helmet } from "react-helmet";
import { Heading, Img, Button } from "../../components";
import DashboreddealeremptyColumnone from "./DashboreddealeremptyColumnone";
import DashboreddealeremptyColumnsix from "./DashboreddealeremptyColumnsix";
import DashboreddealeremptyRowfour from "./DashboreddealeremptyRowfour";
import DashboreddealeremptyStackarrowleft from "./DashboreddealeremptyStackarrowleft";
import React from "react";

export default function DashboredDealerEmptyPage() {
  return (
    <>
      <Helmet>
        <title>Rivky miler&#39;s Application15</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-100">
        <div className="relative h-[1080px] bg-gray-100 px-[38px] shadow-xs sm:px-4">
          <div className="container-10xl absolute bottom-0 left-0 right-0 top-0 my-auto flex h-max flex-1 gap-2 md:relative md:flex-col">
            <div className="flex w-[16%] flex-col gap-5 md:w-full">
              <DashboreddealeremptyColumnone />
              <DashboreddealeremptyColumnsix />
            </div>
            <div className="flex flex-1 flex-col items-start gap-8 px-2 md:self-stretch">
              <header className="flex w-[92%] items-start justify-between gap-5 rounded-[20px] bg-secondary-primary_white px-5 shadow-xs lg:w-full md:w-full sm:flex-col">
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
              <DashboreddealeremptyRowfour />
              <DashboreddealeremptyStackarrowleft />
            </div>
          </div>
          <div className="container-11xl absolute bottom-[-31.18px] left-0 right-0 z-[7] h-[1024px] flex-1">
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 items-start md:relative md:flex-col">
              <div className="relative z-[8] mt-10 flex flex-1 flex-col items-end gap-[30px] py-8 md:self-stretch sm:py-4">
                <Button size="6xl" className="w-[52px] rounded-lg px-4">
                  <Img src="images/img_search_secondary__primary_white.svg" />
                </Button>
                <div className="mb-[26px] flex flex-col gap-1 self-stretch">
                  <div className="flex justify-end px-3.5 py-4">
                    <Img src="images/img__secondary__primary_white.svg" alt="Imagetwoone" className="h-[20px]" />
                  </div>
                  <div className="flex justify-end px-3.5 py-4">
                    <Img src="images/img__20x20.svg" alt="Imagethreeone" className="h-[20px]" />
                  </div>
                  <div className="flex justify-end px-3.5 py-4">
                    <Img src="images/img__2.svg" alt="Imagefourone" className="h-[20px]" />
                  </div>
                  <div className="flex justify-end px-3.5 py-4">
                    <Img src="images/img__red_a700_01.svg" alt="Imagefiveone" className="h-[20px]" />
                  </div>
                  <div className="flex justify-end px-3.5 py-4">
                    <Img src="images/img__4.svg" alt="Imagesixone" className="h-[20px]" />
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
                    <Img src="images/img__5.svg" alt="Imagesevenone" className="h-[20px]" />
                  </div>
                  <div className="flex justify-end px-3.5 py-4">
                    <Img src="images/img_search.svg" alt="Searchthreeone" className="h-[20px]" />
                  </div>
                </div>
              </div>
              <div className="relative mb-[58px] ml-[-70px] w-[5%] self-center rounded-[16px] bg-black-900_03 px-3.5 py-9 md:ml-0 md:w-full sm:py-4">
                <div className="mt-[896px] flex flex-col items-center">
                  <Heading
                    size="headinglg"
                    as="h2"
                    className="!font-inter text-[14px] font-semibold !text-secondary-primary_white"
                  >
                    גילי עטיה
                  </Heading>
                  <Heading size="headingmd" as="h3" className="!font-inter text-[12px] font-semibold !text-yellow-800">
                    שוכר
                  </Heading>
                  <Heading
                    size="textxs"
                    as="h4"
                    className="mt-1.5 !font-inter text-[12px] font-medium !text-white-a700_7f underline"
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
