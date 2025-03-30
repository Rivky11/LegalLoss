import { Helmet } from "react-helmet";
import { Heading, Img, Button, Slider, Text, Switch } from "../../components";
import SendNewOfferRow from "../../components/SendNewOfferRow";
import React from "react";

export default function SendNewOfferPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>Rivky miler&#39;s Application15</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="relative h-[1080px] w-full px-[74px] py-40 lg:p-8 md:p-5 sm:p-4">
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
        <div className="container-xs absolute bottom-0 left-0 right-0 top-0 my-auto flex h-[732px] flex-col gap-3.5 bg-[url(/public/images/img_group_1261154329.svg)] bg-cover bg-no-repeat px-[26px] py-5 lg:h-auto lg:px-5 md:h-auto md:px-5">
          <Img src="images/img_close_black_900_03.svg" alt="Closeoneone" className="h-[44px]" />
          <div className="mb-32 ml-52 mr-[170px] flex flex-col items-center gap-[70px] lg:gap-[70px] md:mx-0 md:gap-[52px] sm:gap-[35px]">
            <Heading
              size="heading11xl"
              as="h2"
              className="!font-heebo text-[40px] font-bold lg:text-[34px] md:text-[34px] sm:text-[32px]"
            >
              הגש הצעה חדשה
            </Heading>
            <div className="flex items-start self-stretch sm:flex-col">
              <div className="mt-3.5 flex flex-1 flex-col items-start gap-8 px-12 md:px-5 sm:self-stretch sm:px-4">
                <div className="flex w-[76%] flex-col gap-3.5 lg:w-full md:w-full">
                  <div className="flex items-end justify-end gap-[7px]">
                    <Heading as="h3" className="!font-heebo text-[18px] font-bold lg:text-[15px]">
                      ₪
                    </Heading>
                    <Img
                      src="images/img_group_1261154300.svg"
                      alt="Imageone"
                      className="h-[28px] w-[78%] object-contain"
                    />
                  </div>
                  <div className="ml-[52px] flex flex-col gap-3.5 md:ml-0 md:flex-row sm:flex-col">
                    <SendNewOfferRow />
                    <SendNewOfferRow prop="__ / __  /__ " prop1="תאריך איסוף:" className="gap-4" />
                  </div>
                  <div className="flex items-center justify-end">
                    <div className="h-[16px] w-[36%] border-b border-solid border-blue_gray-400" />
                    <div className="flex">
                      <Text size="textxl" as="p" className="text-[16px] font-normal lg:text-[13px]">
                        מיקום ההצעה:
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center gap-5">
                    <Text size="textxl" as="p" className="text-[16px] font-normal !text-blue_gray-400 lg:text-[13px]">
                      __ / __ /__{" "}
                    </Text>
                    <Text size="textxl" as="p" className="text-[16px] font-normal lg:text-[13px]">
                      תאריך סיום תשלום:
                    </Text>
                  </div>
                  <div className="flex items-center justify-end">
                    <Switch size="sm" value={true} className="border border-solid border-gray-200" />
                    <div className="flex self-end">
                      <Text size="textxl" as="p" className="text-[16px] font-normal lg:text-[13px]">
                        שיריון הרכב
                      </Text>
                    </div>
                  </div>
                </div>
                <Button
                  size="4xl"
                  shape="circle"
                  rightIcon={<Img src="images/img_icon.svg" alt="Icon" className="h-[22px] w-[22px] object-contain" />}
                  className="ml-[38px] min-w-[156px] gap-2 rounded-[20px] px-3 font-semibold md:ml-0"
                >
                  שלח הצעת מחיר
                </Button>
              </div>
              <div className="w-[44%] self-center rounded-[16px] bg-secondary-primary_white sm:w-full">
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
                      sliderRef?.current?.slideNext();
                    }}
                    className="absolute bottom-0 right-1.5 top-0 my-auto w-[60px] rounded-[20px] px-3"
                  >
                    <Img src="images/img_arrow_right.svg" />
                  </Button>
                </div>
                <div className="relative z-[1] flex flex-col items-center justify-center rounded-bl-[16px] rounded-br-[16px] border-b border-l border-r border-solid border-gray-200 p-3">
                  <div className="flex pl-[78px] pr-14 lg:pl-8 md:px-5 sm:px-4">
                    <Heading as="h4" className="!font-heebo text-[18px] font-bold !text-black-900 lg:text-[15px]">
                      X8 – 5.0 במוו
                    </Heading>
                  </div>
                  <div className="flex w-[26%] items-center justify-center lg:w-full md:w-full">
                    <Heading size="textmd" as="h5" className="!font-heebo text-[14px] font-normal !text-black-900">
                      2022
                    </Heading>
                    <div className="ml-1.5 h-[6px] w-[6px] rounded-[3px] bg-red-a700_03" />
                    <Heading
                      size="textmd"
                      as="h6"
                      className="ml-2.5 !font-heebo text-[14px] font-normal !text-black-900"
                    >
                      במוו
                    </Heading>
                  </div>
                  <div className="mb-1 mt-5 flex w-[88%] items-center justify-between gap-5 lg:w-full md:w-full">
                    <div className="flex flex-1 items-center justify-between gap-5">
                      <div className="flex flex-col items-start gap-0.5">
                        <Img
                          src="images/img_icon_black_900_01.svg"
                          alt="Icononeone"
                          className="ml-[26px] h-[26px] md:ml-0"
                        />
                        <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                          2287 נפח מנוע
                        </Heading>
                      </div>
                      <div className="flex w-[28%] flex-col items-start gap-0.5">
                        <Img src="images/img_artboard_2_copy_3.svg" alt="Artboard2copy" className="h-[24px]" />
                        <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                          יד 4
                        </Heading>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 self-end">
                      <Img src="images/img_icon_black_900.svg" alt="Iconthreeone" className="mr-3 h-[18px] md:mr-0" />
                      <Heading size="textmd" as="p" className="!font-heebo text-[14px] font-normal !text-black-900">
                        אוטומטי
                      </Heading>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
