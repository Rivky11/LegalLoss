import { Helmet } from "react-helmet";
import { Heading, Img } from "../../components";
import AllAddsProviderCubesColumncar9660x4 from "../../components/AllAddsProviderCubesColumncar9660x4";
import React from "react";

export default function ArchiveConfirmPage() {
  return (
    <>
      <Helmet>
        <title>Rivky miler&#39;s Application15</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="relative h-[1080px] w-full px-[366px] py-[110px] lg:p-8 md:p-5 sm:p-4">
        <Img
          className="container-xs absolute left-0 right-0 top-[10%] h-[732px] flex-1"
          src="images/img_rectangle_1.svg"
          alt="Imageone"
        />
        <div className="container-md absolute left-0 right-0 top-[17%] flex flex-1 flex-col items-center gap-[42px]">
          <Heading
            size="heading11xl"
            as="h1"
            className="self-stretch text-center !font-heebo text-[40px] font-bold leading-[45px] lg:text-[34px] md:text-[34px] sm:text-[32px]"
          >
            <>
              אישרת את תהליך המכירה
              <br />
              הרכב יעבור לארכיון
            </>
          </Heading>
          <AllAddsProviderCubesColumncar9660x4 className="w-[28%] lg:w-full md:w-full" />
        </div>
      </div>
    </>
  );
}
