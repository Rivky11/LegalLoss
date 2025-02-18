import { Heading, Img } from "./..";
import React from "react";

export default function MyProvidersRowsix({
  plumbingrepair = "כמות רכבים",
  plumbingrepair1 = "כתובת",
  plumbingrepair2 = "אימייל",
  plumbingrepair3 = "טלפון",
  plumbingrepair4 = "שם איש קשר",
  plumbingrepair5 = "שם הספק",
  plumbingrepair6 = "תמונה",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} ml-[58px] mr-[200px] left-[4%] top-[11%] my-auto lg:mx-0 md:mx-0 z-10 absolute border-gray-200 border-b border-solid flex-1 container-2xl`}
    >
      <div className="flex w-full justify-center border-b border-solid border-gray-200 p-1.5 md:flex-col">
        <div className="flex w-[12%] justify-center md:w-full">
          <div className="flex w-full justify-center">
            <div className="flex items-center gap-1">
              <Img src="images/img_group_758531290.svg" alt="Imagefiveone" className="h-[12px]" />
              <Heading size="heading5xl" as="h6" className="text-[18px] font-semibold">
                {plumbingrepair}
              </Heading>
            </div>
            <div className="relative ml-[-22px] flex flex-1 items-center gap-4">
              <Img src="images/img_group_758531290.svg" alt="Imagesixone" className="h-[12px]" />
              <Heading size="heading5xl" as="h6" className="text-[18px] font-semibold">
                {plumbingrepair1}
              </Heading>
            </div>
          </div>
        </div>
        <div className="flex w-[40%] justify-center gap-1.5 md:w-full sm:flex-col">
          <div className="flex items-center gap-[11px]">
            <Img src="images/img_group_758531290.svg" alt="Imagesevenone" className="h-[12px]" />
            <Heading size="heading5xl" as="h6" className="text-[18px] font-semibold">
              {plumbingrepair2}
            </Heading>
          </div>
          <div className="flex items-center gap-[26px]">
            <Img src="images/img_group_758531290.svg" alt="Imageeightone" className="h-[12px]" />
            <Heading size="heading5xl" as="h6" className="self-end text-[18px] font-semibold">
              {plumbingrepair3}
            </Heading>
          </div>
          <div className="flex flex-1 items-center justify-center sm:self-stretch">
            <Img src="images/img_group_758531290.svg" alt="Imagenineone" className="h-[12px]" />
            <Heading size="heading5xl" as="h6" className="mt-1.5 self-end text-[18px] font-semibold">
              {plumbingrepair4}
            </Heading>
          </div>
          <div className="flex items-center gap-1.5">
            <Img src="images/img_group_758531290.svg" alt="Imagetenone" className="h-[12px]" />
            <Heading size="heading5xl" as="h6" className="mt-1.5 self-end text-[18px] font-semibold">
              {plumbingrepair5}
            </Heading>
          </div>
          <div className="flex items-center gap-1.5">
            <Img src="images/img_group_758531290.svg" alt="Imageelevenone" className="h-[12px]" />
            <Heading size="heading5xl" as="h6" className="self-end text-[18px] font-semibold">
              {plumbingrepair6}
            </Heading>
          </div>
        </div>
      </div>
    </div>
  );
}
