import { Helmet } from "react-helmet";
import MazaltovnewpackageStack from "./MazaltovnewpackageStack";
import React from "react";

export default function MazalTovNewPackagePage() {
  return (
    <>
      <Helmet>
        <title>Rivky miler&#39;s Application15</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full py-[120px] lg:py-8 md:py-5 sm:py-4">
        <MazaltovnewpackageStack />
      </div>
    </>
  );
}
