import { Img, Heading } from "../../components";
import CarProfilRow from "../../components/CarProfilRow";
import React from "react";

export default function CarprofilColumnone() {
  return (
    <div className="mb-[548px] flex flex-col items-start">
      <div className="flex w-[22%] flex-col gap-5 rounded-[20px] bg-secondary-primary_white p-3.5 shadow-xs lg:w-full md:w-full">
        <div className="relative h-[50px]">
          <div className="absolute bottom-[1.05px] left-0 right-0 mx-auto h-[20px] flex-1 border-b border-solid border-gray-200" />
          <div className="absolute left-0 right-0 top-0 mx-auto flex flex-1 items-center justify-end gap-[21px]">
            <Heading size="h3_assistant_25px_m" as="h2" className="text-[25px] font-medium lg:text-[21px]">
              התראות
            </Heading>
            <Img src="images/img_vector_red_a700_03_36x36.png" alt="Vectorthreeone" className="h-[36px] object-cover" />
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <CarProfilRow
            prop="זכית! במודעת רכב"
            plumbingrepair="X8 – 5.0 במוו"
            zipcode="2022"
            prop1="₪"
            plumbingrepair1="40,000"
            plumbingrepair2="רכב:"
            plumbingrepair3="מודל:"
            plumbingrepair4="מחיר:"
            twentytwomillio="22.11.2023"
          />
          <CarProfilRow
            prop="זכית! במודעת רכב"
            plumbingrepair="X8 – 5.0 במוו"
            zipcode="2022"
            prop1="₪"
            plumbingrepair1="40,000"
            plumbingrepair2="רכב:"
            plumbingrepair3="מודל:"
            plumbingrepair4="מחיר:"
            twentytwomillio="22.11.2023"
          />
        </div>
      </div>
    </div>
  );
}
