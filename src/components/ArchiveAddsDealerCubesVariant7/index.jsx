import { Text } from "./..";
import React from "react";

export default function ArchiveAddsDealerCubesVariant7({
  prop = "מודעות בארכיון",
  prop1 = "חבילת רכבים",
  one = "מודעות במכרז",
  prop2 = "מודעות מאושרות",
  prop3 = "מודעות ממתינות לאישור",
  one1 = "מודעות חדשות",
  prop4 = "כל המודעות",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex items-start gap-[34px] p-1 flex-wrap`}>
      <Text className="mb-2 text-[16px] font-semibold !text-gray-600 sm:text-[13px]">{prop}</Text>
      <Text className="text-[16px] font-semibold !text-gray-600 sm:text-[13px]">{prop1}</Text>
      <Text className="text-[16px] font-semibold !text-gray-600 sm:text-[13px]">{one}</Text>
      <Text className="text-[16px] font-semibold !text-gray-600 sm:text-[13px]">{prop2}</Text>
      <Text className="text-[16px] font-semibold !text-gray-600 sm:text-[13px]">{prop3}</Text>
      <Text className="text-[16px] font-semibold !text-gray-600 sm:text-[13px]">{one1}</Text>
      <Text className="text-[16px] font-semibold !text-gray-600 sm:text-[13px]">{prop4}</Text>
    </div>
  );
}
