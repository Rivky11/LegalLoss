import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import CodeProvider from "pages/CodeProvider";
import SignnProvider from "pages/SignnProvider";
import SendNewOffer from "pages/SendNewOffer";
import CodeDealer from "pages/CodeDealer";
import SignInDealer from "pages/SignInDealer";
import DashboredProvider from "pages/DashboredProvider";
import AllAddsProviderCubes from "pages/AllAddsProviderCubes";
import MazalTovYouGetNewOffer from "pages/MazalTovYouGetNewOffer";
import MazalTovOfferApproved from "pages/MazalTovOfferApproved";
import MazalTovOfferApprovedLine from "pages/MazalTovOfferApprovedLine";
import ProfilProvider from "pages/ProfilProvider";
import MyProviders from "pages/MyProviders";
import DashboredDealerEmpty from "pages/DashboredDealerEmpty";
import AllAddsProviderCubes1 from "pages/AllAddsProviderCubes1";
import MazalTovOfferSent from "pages/MazalTovOfferSent";
import OfferPageDealer from "pages/OfferPageDealer";
import AllAddsDealerCubes from "pages/AllAddsDealerCubes";
import AllAddsDealerLines from "pages/AllAddsDealerLines";
import DashboredDealer from "pages/DashboredDealer";
import AwaitingAddsProviderLines from "pages/AwaitingAddsProviderLines";
import AwaitingAddsProviderCubes from "pages/AwaitingAddsProviderCubes";
import WonCarPurchase from "pages/WonCarPurchase";
import NewAddsDealerCubes from "pages/NewAddsDealerCubes";
import NewAddsDealerLines from "pages/NewAddsDealerLines";
import CarsWithQuotesProviderCubes from "pages/CarsWithQuotesProviderCubes";
import CarsWithQuotesProviderLines from "pages/CarsWithQuotesProviderLines";
import MidProcessOffersProviderLines from "pages/MidProcessOffersProviderLines";
import ArchiveConfirm from "pages/ArchiveConfirm";
import CarProfil from "pages/CarProfil";
import CarProfil2 from "pages/CarProfil2";
import AllOffersProviderLines from "pages/AllOffersProviderLines";
import NewOffersProviderLines from "pages/NewOffersProviderLines";
import ArchiveOffersProviderLines from "pages/ArchiveOffersProviderLines";
import AllOffersProviderLines1 from "pages/AllOffersProviderLines1";
import AwaitingAdsDealerCubes from "pages/AwaitingAdsDealerCubes";
import AwaitingAdsDealerLines from "pages/AwaitingAdsDealerLines";
import TenderAdsProviderLines from "pages/TenderAdsProviderLines";
import TenderAdsProviderCubes from "pages/TenderAdsProviderCubes";
import AllOffersDealerLines from "pages/AllOffersDealerLines";
import AllOffersDealerCubes from "pages/AllOffersDealerCubes";
import AddPageProvider from "pages/AddPageProvider";
import AwaitingAdsDealerLines1 from "pages/AwaitingAdsDealerLines1";
import ApprovedAdsDealerCubes from "pages/ApprovedAdsDealerCubes";
import CarPackageAdsProviderLines from "pages/CarPackageAdsProviderLines";
import CarPackageAdsProviderCubes from "pages/CarPackageAdsProviderCubes";
import AwaitingApprovalDealerLines from "pages/AwaitingApprovalDealerLines";
import AwaitingApprovalDealerCubes from "pages/AwaitingApprovalDealerCubes";
import ApprovedAdsDealerLines from "pages/ApprovedAdsDealerLines";
import TenderAdsDealerCubes from "pages/TenderAdsDealerCubes";
import ApprovedAdsProviderCubes from "pages/ApprovedAdsProviderCubes";
import AdsWithBidsProviderLines from "pages/AdsWithBidsProviderLines";
import ApprovedOffersDealerLines from "pages/ApprovedOffersDealerLines";
import CreateNewCarPackageLines from "pages/CreateNewCarPackageLines";
import CreateNewCarPackageCube from "pages/CreateNewCarPackageCube";
import ApprovedOffersDealerCubes from "pages/ApprovedOffersDealerCubes";
import PackageSetting from "pages/PackageSetting";
import MazalTovNewPackage from "pages/MazalTovNewPackage";
import CarPackageDealerCubes from "pages/CarPackageDealerCubes";
import CarPackageDealerLines from "pages/CarPackageDealerLines";
import RejectedOffersDealerLines from "pages/RejectedOffersDealerLines";
import ArchiveAdsProviderLines from "pages/ArchiveAdsProviderLines";
import RejectedOffersDealerCubes from "pages/RejectedOffersDealerCubes";
import ArchiveAdsProviderCubes from "pages/ArchiveAdsProviderCubes";
import AddCarsPackage from "pages/AddCarsPackage";
import ArchiveAddsDealerCubes from "pages/ArchiveAddsDealerCubes";
import Notifications2 from "pages/Notifications2";
import Settings from "pages/Settings";
import Notifications from "pages/Notifications";
import AddCarInfo2 from "pages/AddCarInfo2";
import AddCarInfo from "pages/AddCarInfo";
import UserProfil from "pages/UserProfil";
import AddCarImages from "pages/AddCarImages";
import AddCarImages2 from "pages/AddCarImages2";
import AddCarVideo from "pages/AddCarVideo";
import AddAdditinalCarDetails from "pages/AddAdditinalCarDetails";
import AdSummary from "pages/AdSummary";
import MazalTovAdd from "pages/MazalTovAdd";
import MazalTov2 from "pages/MazalTov2";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "codeprovider",
      element: <CodeProvider />,
    },
    {
      path: "signnprovider",
      element: <SignnProvider />,
    },
    {
      path: "sendnewoffer",
      element: <SendNewOffer />,
    },
    {
      path: "codedealer",
      element: <CodeDealer />,
    },
    {
      path: "signindealer",
      element: <SignInDealer />,
    },
    {
      path: "dashboredprovider",
      element: <DashboredProvider />,
    },
    {
      path: "alladdsprovidercubes",
      element: <AllAddsProviderCubes />,
    },
    {
      path: "mazaltovyougetnewoffer",
      element: <MazalTovYouGetNewOffer />,
    },
    {
      path: "mazaltovofferapproved",
      element: <MazalTovOfferApproved />,
    },
    {
      path: "mazaltovofferapprovedline",
      element: <MazalTovOfferApprovedLine />,
    },
    {
      path: "profilprovider",
      element: <ProfilProvider />,
    },
    {
      path: "myproviders",
      element: <MyProviders />,
    },
    {
      path: "dashboreddealerempty",
      element: <DashboredDealerEmpty />,
    },
    {
      path: "alladdsprovidercubes1",
      element: <AllAddsProviderCubes1 />,
    },
    {
      path: "mazaltovoffersent",
      element: <MazalTovOfferSent />,
    },
    {
      path: "offerpagedealer",
      element: <OfferPageDealer />,
    },
    {
      path: "alladdsdealercubes",
      element: <AllAddsDealerCubes />,
    },
    {
      path: "alladdsdealerlines",
      element: <AllAddsDealerLines />,
    },
    {
      path: "dashboreddealer",
      element: <DashboredDealer />,
    },
    {
      path: "awaitingaddsproviderlines",
      element: <AwaitingAddsProviderLines />,
    },
    {
      path: "awaitingaddsprovidercubes",
      element: <AwaitingAddsProviderCubes />,
    },
    {
      path: "woncarpurchase",
      element: <WonCarPurchase />,
    },
    {
      path: "newaddsdealercubes",
      element: <NewAddsDealerCubes />,
    },
    {
      path: "newaddsdealerlines",
      element: <NewAddsDealerLines />,
    },
    {
      path: "carswithquotesprovidercubes",
      element: <CarsWithQuotesProviderCubes />,
    },
    {
      path: "carswithquotesproviderlines",
      element: <CarsWithQuotesProviderLines />,
    },
    {
      path: "midprocessoffersproviderlines",
      element: <MidProcessOffersProviderLines />,
    },
    {
      path: "archiveconfirm",
      element: <ArchiveConfirm />,
    },
    {
      path: "carprofil",
      element: <CarProfil />,
    },
    {
      path: "carprofil2",
      element: <CarProfil2 />,
    },
    {
      path: "alloffersproviderlines",
      element: <AllOffersProviderLines />,
    },
    {
      path: "newoffersproviderlines",
      element: <NewOffersProviderLines />,
    },
    {
      path: "archiveoffersproviderlines",
      element: <ArchiveOffersProviderLines />,
    },
    {
      path: "alloffersproviderlines1",
      element: <AllOffersProviderLines1 />,
    },
    {
      path: "awaitingadsdealercubes",
      element: <AwaitingAdsDealerCubes />,
    },
    {
      path: "awaitingadsdealerlines",
      element: <AwaitingAdsDealerLines />,
    },
    {
      path: "tenderadsproviderlines",
      element: <TenderAdsProviderLines />,
    },
    {
      path: "tenderadsprovidercubes",
      element: <TenderAdsProviderCubes />,
    },
    {
      path: "alloffersdealerlines",
      element: <AllOffersDealerLines />,
    },
    {
      path: "alloffersdealercubes",
      element: <AllOffersDealerCubes />,
    },
    {
      path: "addpageprovider",
      element: <AddPageProvider />,
    },
    {
      path: "awaitingadsdealerlines1",
      element: <AwaitingAdsDealerLines1 />,
    },
    {
      path: "approvedadsdealercubes",
      element: <ApprovedAdsDealerCubes />,
    },
    {
      path: "carpackageadsproviderlines",
      element: <CarPackageAdsProviderLines />,
    },
    {
      path: "carpackageadsprovidercubes",
      element: <CarPackageAdsProviderCubes />,
    },
    {
      path: "awaitingapprovaldealerlines",
      element: <AwaitingApprovalDealerLines />,
    },
    {
      path: "awaitingapprovaldealercubes",
      element: <AwaitingApprovalDealerCubes />,
    },
    {
      path: "approvedadsdealerlines",
      element: <ApprovedAdsDealerLines />,
    },
    {
      path: "tenderadsdealercubes",
      element: <TenderAdsDealerCubes />,
    },
    {
      path: "approvedadsprovidercubes",
      element: <ApprovedAdsProviderCubes />,
    },
    {
      path: "adswithbidsproviderlines",
      element: <AdsWithBidsProviderLines />,
    },
    {
      path: "approvedoffersdealerlines",
      element: <ApprovedOffersDealerLines />,
    },
    {
      path: "createnewcarpackagelines",
      element: <CreateNewCarPackageLines />,
    },
    {
      path: "createnewcarpackagecube",
      element: <CreateNewCarPackageCube />,
    },
    {
      path: "approvedoffersdealercubes",
      element: <ApprovedOffersDealerCubes />,
    },
    {
      path: "packagesetting",
      element: <PackageSetting />,
    },
    {
      path: "mazaltovnewpackage",
      element: <MazalTovNewPackage />,
    },
    {
      path: "carpackagedealercubes",
      element: <CarPackageDealerCubes />,
    },
    {
      path: "carpackagedealerlines",
      element: <CarPackageDealerLines />,
    },
    {
      path: "rejectedoffersdealerlines",
      element: <RejectedOffersDealerLines />,
    },
    {
      path: "archiveadsproviderlines",
      element: <ArchiveAdsProviderLines />,
    },
    {
      path: "rejectedoffersdealercubes",
      element: <RejectedOffersDealerCubes />,
    },
    {
      path: "archiveadsprovidercubes",
      element: <ArchiveAdsProviderCubes />,
    },
    {
      path: "addcarspackage",
      element: <AddCarsPackage />,
    },
    {
      path: "archiveaddsdealercubes",
      element: <ArchiveAddsDealerCubes />,
    },
    {
      path: "notifications2",
      element: <Notifications2 />,
    },
    {
      path: "settings",
      element: <Settings />,
    },
    {
      path: "notifications",
      element: <Notifications />,
    },
    {
      path: "addcarinfo2",
      element: <AddCarInfo2 />,
    },
    {
      path: "addcarinfo",
      element: <AddCarInfo />,
    },
    {
      path: "userprofil",
      element: <UserProfil />,
    },
    {
      path: "addcarimages",
      element: <AddCarImages />,
    },
    {
      path: "addcarimages2",
      element: <AddCarImages2 />,
    },
    {
      path: "addcarvideo",
      element: <AddCarVideo />,
    },
    {
      path: "addadditinalcardetails",
      element: <AddAdditinalCarDetails />,
    },
    {
      path: "adsummary",
      element: <AdSummary />,
    },
    {
      path: "mazaltovadd",
      element: <MazalTovAdd />,
    },
    {
      path: "mazaltov2",
      element: <MazalTov2 />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
