import { Heading, Img, Button } from "./..";
import React from "react";

export default function AwaitingAdsDealerCubesStackcreatefrom({
  bmc,
  prop = "גילי עטיה",
  prop1 = "שוכר",
  prop2 = "התנתקות",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} h-[1024px] w-[12%] md:w-full ml-[-82px] md:ml-0 z-[7] relative`}>
      <div className="absolute bottom-0 right-[1.50px] top-0 my-auto h-[1024px] w-[40%] border border-solid border-black-900_03 bg-secondary-primary_white" />
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1">
        <div>
          <div className="flex flex-col items-end gap-1.5">
            <Img
              src="images/img_uuid_8da7836a_2_red_700.png"
              alt="Uuid8da7836atwo"
              className="mr-3 h-[28px] w-[30%] object-contain"
            />
            <div className="flex justify-end self-stretch px-2.5">
              <Heading
                size="heading9xl"
                as="h4"
                className="!font-montserrat text-[25.98px] font-extrabold !text-red-a700_01"
              >
                <span className="text-secondary-primary_white">lbl_lbl_b</span>
                <span className="text-red-a700_03">lbl_lbl_m</span>
                <span className="text-secondary-primary_white">lbl_lbl_c</span>
              </Heading>
            </div>
          </div>
        </div>
        <div className="flex items-start">
          <div className="relative z-[8] mt-10 flex flex-1 flex-col items-end gap-[30px]">
            <Button size="6xl" className="w-[52px] rounded-lg px-4">
              <Img src="images/img_search_secondary__primary_white.svg" />
            </Button>
            <div className="mb-[84px] flex flex-col gap-1 self-stretch">
              <div className="px-3.5 py-4">
                <div className="flex flex-col items-end">
                  <Img src="images/img__secondary__primary_white.svg" alt="Imagetwoone" className="h-[20px]" />
                </div>
              </div>
              <div className="flex justify-end">
                <Button size="6xl" className="w-[50px] rounded-lg px-3.5">
                  <Img src="images/img__20x20.svg" />
                </Button>
              </div>
              <div className="px-3.5 py-4">
                <div className="flex flex-col items-end">
                  <Img src="images/img__2.svg" alt="Imagethreeone" className="h-[20px]" />
                </div>
              </div>
              <div className="px-3.5 py-4">
                <div className="flex flex-col items-end">
                  <Img src="images/img__red_a700_01.svg" alt="Imagefourone" className="h-[20px]" />
                </div>
              </div>
              <div className="px-3.5 py-4">
                <div className="flex flex-col items-end">
                  <Img src="images/img__4.svg" alt="Imagefiveone" className="h-[20px]" />
                </div>
              </div>
              <div className="flex justify-end p-3.5">
                <div className="flex h-[20px] w-[12%] flex-col items-start bg-[url(/public/images/img_bell.svg)] bg-cover bg-no-repeat p-0.5">
                  <div className="mb-2 h-[6px] w-[6px] rounded-[3px] bg-red-a700" />
                </div>
              </div>
              <div className="px-3.5 py-4">
                <div className="flex flex-col items-end">
                  <Img src="images/img_layers.png" alt="Layersoneone" className="h-[18px] object-cover" />
                </div>
              </div>
              <div className="px-3.5 py-4">
                <div className="flex flex-col items-end">
                  <Img src="images/img__5.svg" alt="Imagesixone" className="h-[20px]" />
                </div>
              </div>
              <div className="px-3.5 py-4">
                <div className="flex flex-col items-end">
                  <Img src="images/img_search.svg" alt="Searchthreeone" className="h-[20px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative mb-[88px] ml-[-70px] w-[30%] self-center rounded-[16px] bg-black-900_03 px-3.5 py-9 sm:py-5">
            <div className="mt-[896px] flex flex-col items-center">
              <Heading
                size="headingxl"
                as="p"
                className="!font-inter text-[14px] font-semibold !text-secondary-primary_white"
              >
                {prop}
              </Heading>
              <Heading size="headinglg" as="p" className="!font-inter text-[12px] font-semibold !text-yellow-800">
                {prop1}
              </Heading>
              <Heading
                size="textxs"
                as="p"
                className="mt-1.5 !font-inter text-[12px] font-medium !text-white-a700_7f underline"
              >
                {prop2}
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
