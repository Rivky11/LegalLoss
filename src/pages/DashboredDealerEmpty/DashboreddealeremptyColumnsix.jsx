import { Img, Heading } from "../../components";
import CarAdNotification from "../../components/CarAdNotification";
import React, { Suspense } from "react";

const data = [
  {
    notificationText: "זכית! במודעת רכב",
    carModel: "X8 – 5.0 במוו",
    carYear: "2022",
    prop: "₪",
    carPrice: "40,000",
    plumbingrepair: "רכב:",
    plumbingrepair1: "מודל:",
    plumbingrepair2: "מחיר:",
    notificationDate: "22.11.2023",
  },
  {
    notificationText: "זכית! במודעת רכב",
    carModel: "X8 – 5.0 במוו",
    carYear: "2022",
    prop: "₪",
    carPrice: "40,000",
    plumbingrepair: "רכב:",
    plumbingrepair1: "מודל:",
    plumbingrepair2: "מחיר:",
    notificationDate: "22.11.2023",
  },
  {
    notificationText: "זכית! במודעת רכב",
    carModel: "X8 – 5.0 במוו",
    carYear: "2022",
    prop: "₪",
    carPrice: "40,000",
    plumbingrepair: "רכב:",
    plumbingrepair1: "מודל:",
    plumbingrepair2: "מחיר:",
    notificationDate: "22.11.2023",
  },
];

export default function DashboreddealeremptyColumnsix() {
  return (
    <div>
      <div className="rounded-[20px] bg-secondary-primary_white shadow-xs">
        <div className="mt-6 flex flex-col gap-3">
          <div className="flex flex-col items-center gap-[22px] px-3">
            <div className="flex items-start gap-3">
              <Heading size="h3_assistant_25px_m" as="h2" className="self-end text-[25px] font-medium lg:text-[21px]">
                התראות
              </Heading>
              <Img src="images/img_vector_red_a700_03.svg" alt="Vectoroneone" className="h-[24px]" />
            </div>
            <div className="h-[0.9px] self-stretch bg-gray-200" />
          </div>
          <div className="relative h-[424px] content-center lg:h-auto md:h-auto">
            <div className="flex-1 px-[18px]">
              <div className="flex flex-col">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {data.map((d, index) => (
                    <CarAdNotification
                      {...d}
                      key={"list" + index}
                      className="rounded-md border-b border-solid border-blue_gray-100_01 bg-secondary-primary_white"
                    />
                  ))}
                </Suspense>
              </div>
            </div>
            <div className="absolute bottom-px left-0 right-0 mx-auto flex-1 rounded-[20px] bg-gradient">
              <div className="h-[214px] rotate-[-180deg] rounded-[20px] bg-gradient1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
