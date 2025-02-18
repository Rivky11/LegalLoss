import { Helmet } from "react-helmet";
import OfferPageDealerStackview from "../../components/OfferPageDealerStackview";
import React from "react";

export default function SettingsPage() {
  return (
    <>
      <Helmet>
        <title>Rivky miler&#39;s Application15</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-100">
        <OfferPageDealerStackview prop="הגדרות" vectoroneone="images/img_vector_red_a700_03_36x40.png" />
      </div>
    </>
  );
}
