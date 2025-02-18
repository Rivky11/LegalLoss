import { Text } from "./..";
import React from "react";

export default function AwaitingAddsProviderCubesTwo({
  prop = "מודעות בארכיון",
  prop1 = "מודעות מאושרות",
  prop2 = "חבילת רכבים",
  one = "מודעות במכרז",
  prop3 = "מודעות עם הצעות מחיר",
  prop4 = "מודעות שממתינות להצעה",
  prop5 = "כל המודעות",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex items-start gap-7 py-1 flex-wrap`}>
      <Text className="mb-2 text-[16px] font-semibold !text-gray-500_02">{prop}</Text>
      <Text className="text-[16px] font-semibold !text-gray-500_02">{prop1}</Text>
      <Text className="text-[16px] font-semibold !text-gray-500_02">{prop2}</Text>
      <Text className="text-[16px] font-semibold !text-gray-500_02">{one}</Text>
      <Text className="text-[16px] font-semibold !text-gray-500_02">{prop3}</Text>
      <Text className="text-[16px] font-semibold !text-gray-500_02">{prop4}</Text>
      <Text className="text-[16px] font-semibold !text-gray-500_02">{prop5}</Text>
    </div>
  );
}
