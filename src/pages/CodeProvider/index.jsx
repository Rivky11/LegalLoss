import { Helmet } from "react-helmet";
import { Img } from "../../components";
import CodeproviderRow from "./CodeproviderRow";
import React from "react";

export default function CodeProviderPage() {
  return (
    <>
      <Helmet>
        <title>Rivky miler&#39;s Application15</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="relative h-[1152px] w-full content-center bg-secondary-primary_white lg:h-auto md:h-auto">
        <Img
          src="images/img_background_2.png"
          alt="Backgroundtwo"
          className="ml-auto h-[1152px] w-[70%] object-contain"
        />
        <CodeproviderRow />
      </div>
    </>
  );
}
