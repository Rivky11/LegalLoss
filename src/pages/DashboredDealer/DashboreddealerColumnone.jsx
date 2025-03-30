import { Img, Heading } from "../../components";
import AdvertisementColumn from "../../components/AdvertisementColumn";
import DashboredDealerEmptyColumn from "../../components/DashboredDealerEmptyColumn";
import React, { Suspense } from "react";

const data = [
  { numberText: "20", newAdsText: "מודעות חדשות" },
  { numberText: "20", newAdsText: "מודעות" },
  { numberText: "20", newAdsText: "מודעות חדשות" },
  { numberText: "20", newAdsText: "מודעות חדשות" },
  { numberText: "20", newAdsText: "מודעות חדשות" },
  { numberText: "20", newAdsText: "מודעות חדשות" },
  { numberText: "20", newAdsText: "רכבים למכרז" },
  { numberText: "20", newAdsText: "מודעות חדשות" },
];

export default function DashboreddealerColumnone() {
  return (
    <div>
      <div className="rounded-[20px] bg-secondary-primary_white shadow-xs">
        <div className="mt-3.5 flex flex-col gap-3.5">
          <div className="ml-1.5 mr-3.5 flex flex-col gap-2.5 md:mx-0">
            <div className="mx-[26px] flex items-center justify-end gap-[22px] md:mx-0">
              <Heading size="h3_assistant_25px_m" as="h1" className="text-[25px] font-medium lg:text-[21px]">
                גישה מהירה
              </Heading>
              <Img src="images/img_settings_red_a700_03.svg" alt="Settingsoneone" className="h-[36px]" />
            </div>
            <div className="h-[0.9px] bg-gray-200" />
          </div>
          <div className="relative h-[404px]">
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col gap-0.5 px-[26px] sm:px-4">
              <div className="grid grid-cols-2 justify-center gap-2.5 md:grid-cols-1">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {data.map((d, index) => (
                    <AdvertisementColumn {...d} key={"Data1" + index} className="rounded bg-black-900" />
                  ))}
                </Suspense>
              </div>
              <div className="flex gap-2.5 md:flex-row">
                <DashboredDealerEmptyColumn twenty="20" prop="הצעות שנדחו" />
                <DashboredDealerEmptyColumn twenty="20" prop="הצעות שאושרו" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-[6] mx-auto h-[214px] flex-1 rounded-[20px] bg-gradient" />
          </div>
        </div>
      </div>
    </div>
  );
}
