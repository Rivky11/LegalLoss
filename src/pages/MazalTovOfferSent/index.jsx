import { Helmet } from "react-helmet";
import { Img, Button, Slider, Heading } from "../../components";
import MazalTovOfferSentColumncar10660x from "../../components/MazalTovOfferSentColumncar10660x";
import React from "react";

export default function MazalTovOfferSentPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>Rivky miler&#39;s Application15</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="relative h-[1080px] w-full px-[74px] py-[126px] lg:p-8 md:p-5 sm:p-4">
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
        <div className="container-xs absolute bottom-0 left-0 right-0 top-0 my-auto flex h-[732px] flex-col items-center bg-[url(/public/images/img_group_1261154329_secondary__primary_white.svg)] bg-cover bg-no-repeat py-5 lg:h-auto lg:px-5 md:h-auto md:px-5">
          <div className="self-stretch">
            <div className="flex flex-col">
              <Img src="images/img_close_black_900_03.svg" alt="Closeoneone" className="ml-[26px] h-[44px] md:ml-0" />
              <Heading
                size="heading11xl"
                as="h2"
                className="relative mt-[-22px] text-center !font-heebo text-[40px] font-bold leading-[65px] !text-secondary-primary_white lg:text-[34px] md:text-[34px] sm:text-[32px]"
              >
                <span className="text-red-a700_03">lbl_lbl87</span>
                <span className="text-secondary-primary_white">
                  <>
                    <br />
                  </>
                </span>
                <span className="text-black-900_03">lbl_msg28</span>
              </Heading>
            </div>
            <div className="relative mx-[74px] mt-[-32px] md:mx-0">
              <div className="flex items-center gap-[27px]">
                <div className="flex flex-col items-start gap-0.5">
                  <Img
                    src="images/img_n_2206545279_3.png"
                    alt="N2206545279thre"
                    className="h-[80px] w-[82%] self-end object-contain"
                  />
                  <Img
                    src="images/img_n_2206545279_3.png"
                    alt="N2206545279two"
                    className="h-[80px] w-[82%] object-contain"
                  />
                </div>
                <Img
                  src="images/img_n_2206545279_3.png"
                  alt="N2206545279four"
                  className="mb-[22px] h-[80px] w-[8%] self-end object-contain"
                />
              </div>
            </div>
          </div>
          <div className="relative mb-[72px] mt-[-82px] flex w-[28%] flex-col items-center gap-6 lg:w-full md:w-full">
            <div className="relative h-[372px] content-center self-stretch lg:h-auto md:h-auto">
              <div className="mx-auto flex w-full flex-col">
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
                      <MazalTovOfferSentColumncar10660x className="flex flex-col self-stretch" />
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
                className="absolute right-1.5 top-[24%] m-auto w-[60px] rounded-[20px] px-3"
              >
                <Img src="images/img_arrow_right.svg" />
              </Button>
            </div>
            <Button
              size="4xl"
              shape="circle"
              leftIcon={
                <div className="flex h-[10px] w-[6px] items-center justify-center">
                  <Img
                    src="images/img_arrowleft_secondary__primary_white.svg"
                    alt="Arrow Left"
                    className="mb-1 mt-0.5 h-[10px] w-[6px] object-contain"
                  />
                </div>
              }
              className="min-w-[158px] gap-2 rounded-[20px] px-2.5 font-semibold"
            >
              לצפיה בכל ההצעות
            </Button>
          </div>
        </div>
        <Img
          src="images/img_n_2206545279_3.png"
          alt="N2206545279one"
          className="absolute bottom-[12%] right-[23%] m-auto h-[238px] w-[18%] object-contain"
        />
      </div>
    </>
  );
}
