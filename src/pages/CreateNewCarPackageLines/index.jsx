import { Helmet } from "react-helmet";
import { Heading } from "../../components";
import CreateNewCarPackageLinesRowone from "../../components/CreateNewCarPackageLinesRowone";
import SettingsAndStatusRow from "../../components/SettingsAndStatusRow";
import CreatenewcarpackagelinesRowview from "./CreatenewcarpackagelinesRowview";
import React, { Suspense } from "react";

const data = [
  {
    prop: "לצפיה במודעה",
    prop1: "ממתין לאישור",
    prop2: "פירוק",
    prop3: "₪",
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
    prop: "לצפיה במודעה",
    prop1: "ממתין לאישור",
    prop2: "פירוק",
    prop3: "₪",
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
    prop: "לצפיה במודעה",
    prop1: "ממתין לאישור",
    prop2: "פירוק",
    prop3: "₪",
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
    prop: "לצפיה במודעה",
    prop1: "ממתין לאישור",
    prop2: "פירוק",
    prop3: "₪",
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
    prop: "לצפיה במודעה",
    prop1: "ממתין לאישור",
    prop2: "פירוק",
    prop3: "₪",
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
    prop: "לצפיה במודעה",
    prop1: "ממתין לאישור",
    prop2: "פירוק",
    prop3: "₪",
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
    prop: "לצפיה במודעה",
    prop1: "ממתין לאישור",
    prop2: "פירוק",
    prop3: "₪",
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
    prop: "לצפיה במודעה",
    prop1: "ממתין לאישור",
    prop2: "פירוק",
    prop3: "₪",
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
    prop: "לצפיה במודעה",
    prop1: "ממתין לאישור",
    prop2: "פירוק",
    prop3: "₪",
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
    prop: "לצפיה במודעה",
    prop1: "ממתין לאישור",
    prop2: "פירוק",
    prop3: "₪",
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

export default function CreateNewCarPackageLinesPage() {
  return (
    <>
      <Helmet>
        <title>Rivky miler&#39;s Application15</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="relative h-[1080px] w-full px-[74px] lg:px-8 md:px-5 sm:px-4">
        <Heading
          size="heading14xl"
          as="h1"
          className="absolute left-0 right-0 top-[16%] mx-auto flex-1 text-center !font-heebo text-[63px] font-bold leading-[60px] lg:text-[48px] md:text-[48px]"
        >
          <>
            המודעה נשלחה
            <br />
            בהצלחה למוכר
          </>
        </Heading>
        <div className="container-8xl absolute bottom-0 left-0 right-0 ml-3 mr-[18px] flex flex-1 rounded-[20px] bg-secondary-primary_white py-7 lg:mx-0 lg:px-5 md:mx-0 md:px-5 sm:py-4">
          <CreatenewcarpackagelinesRowview />
        </div>
        <div className="container-9xl absolute bottom-[-48px] left-0 right-0 flex flex-1 justify-center px-14 md:px-5 sm:px-4">
          <div className="mt-2.5 flex w-[84%] flex-col gap-2.5 lg:w-full md:w-full">
            <div className="mr-1.5 flex flex-col gap-2.5 md:mr-0">
              <Suspense fallback={<div>Loading feed...</div>}>
                {data.map((d, index) => (
                  <CreateNewCarPackageLinesRowone {...d} key={"Data1" + index} />
                ))}
              </Suspense>
            </div>
            <SettingsAndStatusRow />
          </div>
        </div>
      </div>
    </>
  );
}
