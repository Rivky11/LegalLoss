import { Helmet } from "react-helmet";
import AddCarInfo2Row from "../../components/AddCarInfo2Row";
import React from "react";

export default function AddAdditinalCarDetailsPage() {
  return (
    <>
      <Helmet>
        <title>Rivky miler&#39;s Application15</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full justify-center px-14 py-[82px] lg:py-8 md:p-5 sm:p-4">
        <AddCarInfo2Row />
      </div>
    </>
  );
}
