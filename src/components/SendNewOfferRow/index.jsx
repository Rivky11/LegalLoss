import { Text } from "./..";
import React from "react";

export default function SendNewOfferRow({ prop = "__ / __  /__ ", prop1 = "תאריך ההצעה:", ...props }) {
  return (
    <div {...props} className={`${props.className} flex justify-center items-center self-stretch flex-1`}>
      <Text size="textxl" as="p" className="text-[16px] font-normal !text-blue_gray-400">
        {prop}
      </Text>
      <div className="flex flex-1 justify-center">
        <Text size="textxl" as="p" className="text-[16px] font-normal">
          {prop1}
        </Text>
      </div>
    </div>
  );
}
