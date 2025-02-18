import { Helmet } from "react-helmet";
import ProfilProviderStackview from "../../components/ProfilProviderStackview";
import React from "react";

export default function UserProfilPage() {
  return (
    <>
      <Helmet>
        <title>Rivky miler&#39;s Application15</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-100">
        <ProfilProviderStackview prop="פרופיל" />
      </div>
    </>
  );
}
