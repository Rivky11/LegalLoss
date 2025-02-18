import { Img, Heading, Text } from "./..";
import React from "react";

export default function MyProvidersStacktwenty({ twenty = "20", prop = "ספקים", ...props }) {
  return (
    <div
      {...props}
      className={`${props.className} self-stretch h-[72px] lg:h-auto md:h-auto sm:w-full flex-1 relative sm:flex-none`}
    >
      <div className="flex flex-1 flex-col items-center">
        <div className="flex flex-col items-end self-stretch">
          <Text
            size="text12xl"
            as="p"
            className="relative z-[1] mr-3 !font-heebo text-[45.11px] font-normal !text-secondary-primary_white"
          >
            {twenty}
          </Text>
          <div className="relative mt-[-58px] h-[64px] self-stretch rounded bg-black-900_03" />
        </div>
        <Heading
          size="textxs"
          as="p"
          className="relative z-[2] mt-[-18px] !font-heebo text-[12.63px] font-medium !text-secondary-primary_white"
        >
          {prop}
        </Heading>
      </div>
      <Img
        src="images/img_lock_secondary__primary_white.svg"
        alt="Image"
        className="absolute bottom-0 left-[19.85px] top-0 my-auto h-[20px]"
      />
    </div>
  );
}
