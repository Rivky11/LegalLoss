import { Img, Heading } from "../../components";
import AllAddsDealerLinesRownineteen from "../../components/AllAddsDealerLinesRownineteen";
import DashboredDealerRow from "../../components/DashboredDealerRow";
import React, { Suspense } from "react";

const data = [
  {
    two: "לצפיה בהצעה",
    two1: "לצפיה",
    prop: "ממתין לאישור",
    prop1: "פירוק",
    prop2: "₪",
    plumbingrepair: "40,000",
    plumbingrepair1: "8.9.23",
    plumbingrepair2: "4",
    plumbingrepair3: "80,000",
    plumbingrepair4: "אוטומטי",
    zipcode: "2022",
    plumbingrepair5: " במוו",
    plumbingrepair6: "X8 – 5.0 במוו",
  },
  {
    two: "לצפיה בהצעה",
    two1: "לצפיה",
    prop: "ממתין לאישור",
    prop1: "פירוק",
    prop2: "₪",
    plumbingrepair: "40,000",
    plumbingrepair1: "8.9.23",
    plumbingrepair2: "4",
    plumbingrepair3: "80,000",
    plumbingrepair4: "אוטומטי",
    zipcode: "2022",
    plumbingrepair5: " במוו",
    plumbingrepair6: "X8 – 5.0 במוו",
  },
  {
    two: "לצפיה בהצעה",
    two1: "לצפיה",
    prop: "ממתין לאישור",
    prop1: "פירוק",
    prop2: "₪",
    plumbingrepair: "40,000",
    plumbingrepair1: "8.9.23",
    plumbingrepair2: "4",
    plumbingrepair3: "80,000",
    plumbingrepair4: "אוטומטי",
    zipcode: "2022",
    plumbingrepair5: " במוו",
    plumbingrepair6: "X8 – 5.0 במוו",
  },
  {
    two: "הצעה חדשה",
    two1: "לצפיה",
    prop: "ממתין לאישור",
    prop1: "פירוק",
    prop2: "₪",
    plumbingrepair: "0",
    plumbingrepair1: "8.9.23",
    plumbingrepair2: "4",
    plumbingrepair3: "80,000",
    plumbingrepair4: "אוטומטי",
    zipcode: "2022",
    plumbingrepair5: " במוו",
    plumbingrepair6: "X8 – 5.0 במוו",
  },
  {
    two: "לצפיה בזכיה",
    two1: "לצפיה",
    prop: "ממתין לאישור",
    prop1: "פירוק",
    prop2: "₪",
    plumbingrepair: "40,000",
    plumbingrepair1: "8.9.23",
    plumbingrepair2: "4",
    plumbingrepair3: "80,000",
    plumbingrepair4: "אוטומטי",
    zipcode: "2022",
    plumbingrepair5: " במוו",
    plumbingrepair6: "X8 – 5.0 במוו",
  },
];

export default function DashboreddealerRowtwentytwo() {
  return (
    <div className="self-stretch">
      <div>
        <div className="flex items-center md:flex-col">
          <div className="flex w-[92%] rounded-[20px] bg-secondary-primary_white shadow-xs md:w-full">
            <div className="mt-2.5 flex w-full flex-col gap-2.5">
              <div className="ml-[34px] mr-9 flex items-center md:mx-0 sm:flex-col">
                <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                  <div className="flex w-[8%] justify-center rounded-[20px] bg-secondary-primary_white px-1 py-2 sm:w-full">
                    <div className="flex w-full items-start justify-center gap-3.5">
                      <Img src="images/img_arrow_left_black_900_03_1.svg" alt="Arrowleftone" className="h-[10px]" />
                      <Heading
                        size="h4_assistant_16px_b"
                        as="h3"
                        className="self-center text-[16px] font-semibold lg:text-[13px]"
                      >
                        לכל המודעות
                      </Heading>
                    </div>
                  </div>
                </a>
                <div className="flex flex-1 items-center justify-end gap-[22px] self-end sm:self-stretch">
                  <Heading
                    size="h3_assistant_25px_m"
                    as="h4"
                    className="self-end text-[25px] font-medium lg:text-[21px]"
                  >
                    מודעות רכבים
                  </Heading>
                  <Img src="images/img_car_red_a700_03_2.png" alt="Caroneone" className="h-[32px] object-cover" />
                </div>
              </div>
              <div className="ml-[30px] mr-9 flex flex-col gap-2.5 md:mx-0">
                <div className="h-[2px] border-b border-solid border-gray-200" />
                <AllAddsDealerLinesRownineteen />
              </div>
              <div className="relative h-[318px]">
                <div className="absolute bottom-0 left-0 right-0 top-0 my-auto ml-3.5 mr-1.5 flex flex-1 flex-col gap-1.5 lg:mx-0 md:relative md:mx-0">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {data.map((d, index) => (
                      <DashboredDealerRow {...d} key={"list" + index} />
                    ))}
                  </Suspense>
                </div>
                <Img
                  src="images/img_rectangle_1550_214x1396.png"
                  alt="Imagethirteen"
                  className="absolute bottom-px left-0 right-0 mx-auto h-[214px] flex-1 rounded-[20px] object-cover"
                />
              </div>
            </div>
          </div>
          <Img src="images/img_group_1261154368.svg" alt="Imagefourteen" className="h-[402px] w-px md:w-full" />
        </div>
      </div>
    </div>
  );
}
