import { Helmet } from "react-helmet";
import { Heading, Button, Img, Slider } from "../../components";
import AllAddsProviderCubesColumnclose from "../../components/AllAddsProviderCubesColumnclose";
import AddcarspackageRowcar10660x440 from "./AddcarspackageRowcar10660x440";
import React from "react";

export default function AddCarsPackagePage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  const [sliderState1, setSliderState1] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [sliderState2, setSliderState2] = React.useState(0);
  const sliderRef2 = React.useRef(null);
  const [sliderState3, setSliderState3] = React.useState(0);
  const sliderRef3 = React.useRef(null);

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
        <div className="container-8xl absolute bottom-0 left-0 right-0 ml-3 mr-[18px] flex flex-1 flex-col gap-7 rounded-[20px] bg-secondary-primary_white p-7 lg:mx-0 lg:px-5 md:mx-0 md:px-5 sm:py-4">
          <div className="flex items-start justify-center md:flex-col">
            <Img src="images/img_close_black_900_03.svg" alt="Closeoneone" className="h-[44px] md:w-full" />
            <div className="flex flex-1 items-start justify-center self-center px-14 md:self-stretch md:px-5 sm:flex-col sm:px-4">
              <div className="mt-2.5 flex gap-[15px]">
                <Img src="images/img_button1_gray_100_01.svg" alt="Buttononeone" className="h-[32px] rounded-[10px]" />
                <Button size="md" className="w-[32px] rounded-[10px] px-1.5">
                  <Img src="images/img_megaphone_gray_600_1.svg" />
                </Button>
              </div>
              <div className="flex items-center gap-[11px] self-center pl-14 pr-[74px] lg:pr-8 md:px-5 sm:flex-col sm:px-4">
                <Heading
                  size="heading11xl"
                  as="h2"
                  className="!font-heebo text-[40px] font-bold lg:text-[34px] md:text-[34px] sm:text-[32px]"
                >
                  יצרת חבילת רכבים חדשה
                </Heading>
                <Img src="images/img__black_900_03.svg" alt="Imageone" className="h-[48px] sm:w-full" />
              </div>
            </div>
          </div>
          <AllAddsProviderCubesColumnclose className="mb-[740px] ml-[124px] mr-[152px] md:mx-0" />
        </div>
        <div className="container-9xl absolute bottom-[-147px] left-0 right-0 flex justify-center px-14 md:px-5 sm:px-4">
          <div className="flex w-[84%] flex-col gap-7 overflow-x-scroll lg:w-full md:w-full">
            <AddcarspackageRowcar10660x440 />
            <div className="mr-3 flex gap-7 md:mr-0 md:flex-col">
              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                <div className="w-full rounded-[16px] bg-secondary-primary_white">
                  <div className="relative h-[218px] content-center lg:h-auto md:h-auto">
                    <div className="mx-auto flex w-full">
                      <Slider
                        autoPlay
                        autoPlayInterval={2000}
                        responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 1 }, 1441: { items: 1 } }}
                        disableDotsControls
                        activeIndex={sliderState3}
                        onSlideChanged={(e) => {
                          setSliderState3(e?.item);
                        }}
                        ref={sliderRef3}
                        items={[...Array(3)].map(() => (
                          <React.Fragment key={Math.random()}>
                            <div className="relative h-[218px] content-center lg:h-auto md:h-auto">
                              <Img
                                src="images/img_car10_660x440_jpg.png"
                                alt="Car10660x440"
                                className="h-[218px] w-full flex-1 object-cover"
                              />
                              <Button
                                shape="round"
                                className="absolute left-[21px] top-[22px] m-auto min-w-[116px] rounded-[14px] px-4 font-dmsans font-medium capitalize"
                              >
                                ממתין להצעה
                              </Button>
                            </div>
                          </React.Fragment>
                        ))}
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 justify-between gap-5 px-1.5">
                      <Button
                        size="3xl"
                        shape="circle"
                        onClick={() => {
                          sliderRef3?.current?.slidePrev();
                        }}
                        className="w-[60px] rounded-[20px] px-3"
                      >
                        <Img src="images/img_icon_secondary__primary_white.svg" />
                      </Button>
                      <Button
                        size="3xl"
                        shape="circle"
                        onClick={() => {
                          sliderRef3?.current?.slideNext();
                        }}
                        className="w-[60px] rounded-[20px] px-3"
                      >
                        <Img src="images/img_arrow_right.svg" />
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-bl-[16px] rounded-br-[16px] border-b border-l border-r border-solid border-gray-200">
                    <div className="mt-2">
                      <div className="mb-[140px] flex flex-col items-center gap-0.5">
                        <Heading as="h6" className="!font-heebo text-[18px] font-bold !text-black-900 lg:text-[15px]">
                          X8 – 5.0 במוו
                        </Heading>
                        <div className="flex justify-center self-stretch px-14 md:px-5 sm:px-4">
                          <div className="mb-1.5 flex w-[40%] items-center justify-center lg:w-full md:w-full">
                            <Heading
                              size="textmd"
                              as="p"
                              className="!font-heebo text-[14px] font-normal !text-black-900"
                            >
                              2022
                            </Heading>
                            <div className="ml-1.5 h-[6px] w-[6px] rounded-[3px] bg-red-a700_03" />
                            <Heading
                              size="textmd"
                              as="p"
                              className="ml-2.5 !font-heebo text-[14px] font-normal !text-black-900"
                            >
                              במוו
                            </Heading>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <div className="w-full rounded-[16px] bg-secondary-primary_white">
                <div className="relative h-[218px] content-center lg:h-auto md:h-auto">
                  <div className="mx-auto flex w-full">
                    <Slider
                      autoPlay
                      autoPlayInterval={2000}
                      responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 1 }, 1441: { items: 1 } }}
                      disableDotsControls
                      activeIndex={sliderState2}
                      onSlideChanged={(e) => {
                        setSliderState2(e?.item);
                      }}
                      ref={sliderRef2}
                      items={[...Array(3)].map(() => (
                        <React.Fragment key={Math.random()}>
                          <div className="relative h-[218px] content-center lg:h-auto md:h-auto">
                            <Img
                              src="images/img_car10_660x440_jpg.png"
                              alt="Car10660x440"
                              className="h-[218px] w-full flex-1 object-cover"
                            />
                            <div className="absolute left-0 right-0 top-[22px] mx-auto flex flex-1 flex-col items-start gap-[38px] px-1.5">
                              <Button
                                shape="round"
                                className="ml-3.5 min-w-[116px] rounded-[14px] px-4 font-dmsans font-medium capitalize md:ml-0"
                              >
                                ממתין להצעה
                              </Button>
                              <div className="h-[40px] self-stretch" />
                            </div>
                          </div>
                        </React.Fragment>
                      ))}
                    />
                  </div>
                  <Button
                    size="3xl"
                    shape="circle"
                    onClick={() => {
                      sliderRef2?.current?.slideNext();
                    }}
                    className="absolute bottom-0 right-1.5 top-0 my-auto w-[60px] rounded-[20px] px-3"
                  >
                    <Img src="images/img_arrow_right.svg" />
                  </Button>
                </div>
                <div className="flex flex-col items-center gap-0.5 rounded-bl-[16px] rounded-br-[16px] border-b border-l border-r border-solid border-gray-200 py-3">
                  <Heading as="h6" className="!font-heebo text-[18px] font-bold !text-black-900 lg:text-[15px]">
                    X8 – 5.0 במוו
                  </Heading>
                  <div className="mb-[130px] flex justify-center self-stretch px-14 md:px-5 sm:px-4">
                    <div className="mb-1.5 flex w-[40%] items-center justify-center lg:w-full md:w-full">
                      <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                        2022
                      </Heading>
                      <div className="ml-1.5 h-[6px] w-[6px] rounded-[3px] bg-red-a700_03" />
                      <Heading
                        size="textmd"
                        as="p"
                        className="ml-2.5 !font-heebo text-[14px] font-normal !text-black-900"
                      >
                        במוו
                      </Heading>
                    </div>
                  </div>
                </div>
              </div>
              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                <div className="w-full rounded-[16px] bg-secondary-primary_white">
                  <div className="relative h-[218px] content-center lg:h-auto md:h-auto">
                    <div className="mx-auto flex w-full">
                      <Slider
                        autoPlay
                        autoPlayInterval={2000}
                        responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 1 }, 1441: { items: 1 } }}
                        disableDotsControls
                        activeIndex={sliderState1}
                        onSlideChanged={(e) => {
                          setSliderState1(e?.item);
                        }}
                        ref={sliderRef1}
                        items={[...Array(3)].map(() => (
                          <React.Fragment key={Math.random()}>
                            <div className="relative h-[218px] content-center lg:h-auto md:h-auto">
                              <Img
                                src="images/img_car10_660x440_jpg.png"
                                alt="Car10660x440"
                                className="h-[218px] w-full flex-1 object-cover"
                              />
                              <Button
                                shape="round"
                                className="absolute left-[21px] top-[22px] m-auto min-w-[116px] rounded-[14px] px-4 font-dmsans font-medium capitalize"
                              >
                                ממתין להצעה
                              </Button>
                            </div>
                          </React.Fragment>
                        ))}
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 justify-between gap-5 px-1.5">
                      <Button
                        size="3xl"
                        shape="circle"
                        onClick={() => {
                          sliderRef1?.current?.slidePrev();
                        }}
                        className="w-[60px] rounded-[20px] px-3"
                      >
                        <Img src="images/img_icon_secondary__primary_white.svg" />
                      </Button>
                      <Button
                        size="3xl"
                        shape="circle"
                        onClick={() => {
                          sliderRef1?.current?.slideNext();
                        }}
                        className="w-[60px] rounded-[20px] px-3"
                      >
                        <Img src="images/img_arrow_right.svg" />
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-bl-[16px] rounded-br-[16px] border-b border-l border-r border-solid border-gray-200">
                    <div className="mt-2">
                      <div className="mb-[140px] flex flex-col items-center gap-0.5">
                        <Heading as="h6" className="!font-heebo text-[18px] font-bold !text-black-900 lg:text-[15px]">
                          X8 – 5.0 במוו
                        </Heading>
                        <div className="flex justify-center self-stretch px-14 md:px-5 sm:px-4">
                          <div className="mb-1.5 flex w-[40%] items-center justify-center lg:w-full md:w-full">
                            <Heading
                              size="textmd"
                              as="p"
                              className="!font-heebo text-[14px] font-normal !text-black-900"
                            >
                              2022
                            </Heading>
                            <div className="ml-1.5 h-[6px] w-[6px] rounded-[3px] bg-red-a700_03" />
                            <Heading
                              size="textmd"
                              as="p"
                              className="ml-2.5 !font-heebo text-[14px] font-normal !text-black-900"
                            >
                              במוו
                            </Heading>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                <div className="w-full rounded-[16px] bg-secondary-primary_white">
                  <div className="relative h-[218px] content-center lg:h-auto md:h-auto">
                    <div className="mx-auto flex w-full">
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
                            <div className="relative h-[218px] content-center lg:h-auto md:h-auto">
                              <Img
                                src="images/img_car10_660x440_jpg.png"
                                alt="Car10660x440"
                                className="h-[218px] w-full flex-1 object-cover"
                              />
                              <Button
                                shape="round"
                                className="absolute left-[21px] top-[22px] m-auto min-w-[116px] rounded-[14px] px-4 font-dmsans font-medium capitalize"
                              >
                                ממתין להצעה
                              </Button>
                            </div>
                          </React.Fragment>
                        ))}
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 justify-between gap-5 px-1.5">
                      <Button
                        size="3xl"
                        shape="circle"
                        onClick={() => {
                          sliderRef?.current?.slidePrev();
                        }}
                        className="w-[60px] rounded-[20px] px-3"
                      >
                        <Img src="images/img_icon_secondary__primary_white.svg" />
                      </Button>
                      <Button
                        size="3xl"
                        shape="circle"
                        onClick={() => {
                          sliderRef?.current?.slideNext();
                        }}
                        className="w-[60px] rounded-[20px] px-3"
                      >
                        <Img src="images/img_arrow_right.svg" />
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-bl-[16px] rounded-br-[16px] border-b border-l border-r border-solid border-gray-200">
                    <div className="mt-2">
                      <div className="mb-[140px] flex flex-col items-center gap-0.5">
                        <Heading as="h6" className="!font-heebo text-[18px] font-bold !text-black-900 lg:text-[15px]">
                          X8 – 5.0 במוו
                        </Heading>
                        <div className="flex justify-center self-stretch px-14 md:px-5 sm:px-4">
                          <div className="mb-1.5 flex w-[40%] items-center justify-center lg:w-full md:w-full">
                            <Heading
                              size="textmd"
                              as="p"
                              className="!font-heebo text-[14px] font-normal !text-black-900"
                            >
                              2022
                            </Heading>
                            <div className="ml-1.5 h-[6px] w-[6px] rounded-[3px] bg-red-a700_03" />
                            <Heading
                              size="textmd"
                              as="p"
                              className="ml-2.5 !font-heebo text-[14px] font-normal !text-black-900"
                            >
                              במוו
                            </Heading>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
