import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading, Slider } from "../../components";
import CreateNewCarPackageCubeColumncar20660x from "../../components/CreateNewCarPackageCubeColumncar20660x";
import React from "react";

export default function CreateNewCarPackageCubePage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>Rivky miler&#39;s Application15</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="relative h-[1080px] w-full px-[74px] py-[120px] lg:p-8 md:p-5 sm:p-4">
        <div className="container-9xl absolute left-0 right-0 top-[16%] flex flex-col items-center">
          <Heading
            size="heading14xl"
            as="h1"
            className="self-stretch text-center !font-heebo text-[63px] font-bold leading-[60px] lg:text-[48px] md:text-[48px]"
          >
            <>
              המודעה נשלחה
              <br />
              בהצלחה למוכר
            </>
          </Heading>
          <div className="relative mt-[-80px] flex w-[28%] items-center justify-center rounded-md bg-secondary-primary_white px-7 py-9 shadow-lg lg:w-full md:w-full sm:flex-col sm:p-4">
            <Button size="3xl" shape="circle" className="w-[40px] rounded-[20px] px-3.5 sm:px-5">
              <Img src="images/img_arrow_left_secondary__primary_white_1.svg" />
            </Button>
            <div className="w-[80%] overflow-x-scroll sm:w-full">
              <div className="flex w-[1036px] gap-[19px] px-3.5 md:flex-col">
                <div className="mx-auto flex w-[32%] flex-col md:w-full">
                  <Slider
                    autoPlay
                    autoPlayInterval={2000}
                    responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 1 }, 1441: { items: 1 } }}
                    disableDotsControls
                    activeIndex={sliderState}
                    onSlideChanged={(e) => {
                      setSliderState(e?.item);
                    }}
                    ref={sliderRef}
                    items={[...Array(3)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <CreateNewCarPackageCubeColumncar20660x className="flex flex-col self-stretch" />
                      </React.Fragment>
                    ))}
                  />
                </div>
                <CreateNewCarPackageCubeColumncar20660x className="w-[32%] md:w-full" />
              </div>
            </div>
            <Button
              size="3xl"
              shape="circle"
              className="ml-3.5 w-[40px] rotate-[-180deg] rounded-[20px] px-3.5 sm:ml-0 sm:px-5"
            >
              <Img src="images/img_arrow_left_secondary__primary_white_1.svg" />
            </Button>
          </div>
        </div>
        <div className="container-xs absolute bottom-0 left-0 right-0 top-0 my-auto flex h-[814px] flex-col items-center justify-center bg-[url(/public/images/img_rectangle_1.svg)] bg-cover bg-no-repeat p-[26px] lg:h-auto lg:px-5 md:h-auto md:px-5 sm:py-4">
          <Heading
            size="heading11xl"
            as="h2"
            className="!font-heebo text-[40px] font-bold !text-yellow-800 lg:text-[34px] md:text-[34px] sm:text-[32px]"
          >
            יצירת חבילה רכבים חדשה
          </Heading>
          <Button
            size="4xl"
            leftIcon={
              <div className="flex h-[10px] w-[6px] items-center justify-center">
                <Img
                  src="images/img_arrowleft_secondary__primary_white.svg"
                  alt="Arrow Left"
                  className="mb-1.5 mt-0.5 h-[10px] w-[6px] object-contain"
                />
              </div>
            }
            className="mt-[546px] min-w-[68px] gap-2 rounded-[20px] px-2.5 font-semibold"
          >
            הבא
          </Button>
          <Img
            src="images/img_frame.png"
            alt="Imageone"
            className="mr-96 mt-6 h-[58px] w-[20%] self-end object-contain md:mr-0"
          />
          <div className="mr-4 mt-1.5 flex w-[96%] items-start justify-center gap-5 lg:w-full md:mr-0 md:w-full sm:flex-col">
            <div className="flex flex-1 justify-end rounded-[5px] border border-solid border-secondary-primary_white bg-gray-300 sm:self-stretch">
              <div className="h-[10px] w-[46%] rounded-[5px] bg-yellow-800" />
            </div>
            <Text
              size="h4_assistant16px_r"
              as="p"
              className="self-center text-[16px] font-normal !text-gray-900 lg:text-[13px]"
            >
              1/2
            </Text>
          </div>
        </div>
        <Img
          className="container-sm absolute bottom-0 left-0 right-0 top-0 my-auto h-[162px] object-contain"
          src="images/img_group_1261154409.svg"
          alt="Imageoneone"
        />
      </div>
    </>
  );
}
