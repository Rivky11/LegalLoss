import { Img, Heading } from "../../components";
import React from "react";

export default function DashboreddealeremptyStackarrowleft() {
  return (
    <div className="relative h-[450px] w-[92%] bg-[url(/public/images/img_group_811.svg)] bg-cover bg-no-repeat py-2.5">
      <div className="absolute left-0 right-0 top-4 mx-auto flex flex-1 items-center justify-center px-[18px]">
        <div className="flex items-start gap-4 rounded-[20px] border border-solid border-gray-400_07 bg-secondary-primary_white px-1 py-2">
          <Img src="images/img_arrow_left_black_900_03_1.svg" alt="Arrowleftthree" className="h-[10px]" />
          <Heading size="h4_assistant_16px_b" as="h5" className="self-center text-[16px] font-semibold lg:text-[13px]">
            לכל ההצעות
          </Heading>
        </div>
        <div className="flex flex-1 items-center justify-end gap-[22px] self-end">
          <Heading size="h3_assistant_25px_m" as="h6" className="self-end text-[25px] font-medium lg:text-[21px]">
            הצעות מחיר
          </Heading>
          <Img src="images/img_vector_red_a700_01_36x40.svg" alt="Vectorfiveone" className="h-[36px]" />
        </div>
      </div>
      <div className="absolute bottom-3 left-0 right-0 mx-auto h-[214px] flex-1 rounded-[20px] bg-gradient1" />
      <Img
        src="images/img_group_1261154366.svg"
        alt="Imageoneone"
        className="absolute bottom-0 right-[13px] top-0 my-auto h-[402px] w-px"
      />
    </div>
  );
}
