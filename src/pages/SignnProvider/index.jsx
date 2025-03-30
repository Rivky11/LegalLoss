import { Helmet } from "react-helmet";
import { Button, Img, Input, Heading } from "../../components";
import React from "react";

export default function SignnProviderPage() {
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
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[1152px] flex-1 bg-[url(/public/images/img_group_1.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
          <div className="flex items-center md:flex-col">
            <div className="relative h-[1152px] w-[56%] rotate-[-180deg] content-center lg:h-auto md:h-auto md:w-full md:px-5">
              <Img
                src="images/img_1_1445554379_2.png"
                alt="Image"
                className="h-[1152px] w-[78%] rounded-bl-[200px] object-contain"
              />
              <div className="absolute left-0 right-0 top-1/4 mx-auto flex w-[46%] flex-col gap-0.5">
                <Img
                  src="images/img_uuid_8da7836a_2.png"
                  alt="Uuid8da7836atwo"
                  className="ml-[22px] h-[90px] w-[38%] object-contain md:ml-0"
                />
                <div className="flex flex-col items-start">
                  <Heading
                    size="heading12xl"
                    as="h1"
                    className="!font-montserrat text-[45.14px] font-extrabold !text-red-a700_01 lg:text-[38px] md:text-[29px] sm:text-[23px]"
                  >
                    <span className="text-black-900_03">lbl_buy</span>
                    <span className="text-red-a700_03">lbl_my</span>
                    <span className="text-black-900_03">lbl_car</span>
                  </Heading>
                  <Heading size="texts" as="h2" className="!font-heebo text-[13.24px] font-medium tracking-[2.12px]">
                    הופכים רכבי תאונה להזדמנות עסקית
                  </Heading>
                </div>
              </div>
            </div>
            <div className="flex w-[28%] flex-col gap-12 rounded-[10px] bg-secondary-primary_white py-7 md:w-full md:px-5 sm:py-4">
              <div className="flex flex-col items-center px-14 md:px-5 sm:px-4">
                <Heading
                  size="heading10xl"
                  as="h3"
                  className="!font-heebo text-[35px] font-bold tracking-[-0.70px] !text-red-a700_03 lg:text-[29px] md:text-[29px] sm:text-[27px]"
                >
                  הרשמה למערכת
                </Heading>
                <Heading
                  size="text3xl"
                  as="h4"
                  className="!font-heebo text-[20px] font-medium tracking-[-0.40px] lg:text-[17px]"
                >
                  אנא מלאו פרטיכם{" "}
                </Heading>
              </div>
              <div className="mx-[66px] mb-9 flex flex-col items-center gap-8 md:mx-0">
                <div className="flex flex-col gap-3.5 self-stretch">
                  <div className="flex flex-col items-end gap-2.5">
                    <Heading
                      size="textmd"
                      as="h5"
                      className="mr-[18px] !font-rubik text-[14px] font-medium tracking-[-0.28px] md:mr-0"
                    >
                      <span className="text-black-900_03">lbl5</span>
                      <span className="text-red-a700_03">lbl6</span>
                    </Heading>
                    <Input
                      name="largeinputone"
                      placeholder={`רשמו פה את שמכם המלא`}
                      className="h-[50px] self-stretch rounded-[16px] border border-blue_gray-400 px-3 font-heebo text-[14px] tracking-[-0.28px] text-gray-800"
                    />
                  </div>
                  <div className="flex flex-col items-end gap-2.5">
                    <Heading
                      size="textmd"
                      as="h6"
                      className="mr-[18px] !font-rubik text-[14px] font-medium tracking-[-0.28px] md:mr-0"
                    >
                      <span className="text-black-900_03">lbl8</span>
                      <span className="text-red-a700_03">lbl6</span>
                    </Heading>
                    <Input
                      type="password"
                      name="largeinput_one"
                      placeholder={`רשמו פה את מספר הנייד `}
                      className="h-[50px] self-stretch rounded-[16px] border border-blue_gray-400 px-3 font-rubik text-[14px] tracking-[-0.28px] text-gray-700_04"
                    />
                  </div>
                </div>
                <div className="flex w-[24%] justify-center lg:w-full md:w-full">
                  <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                    <div className="w-full">
                      <Button
                        leftIcon={
                          <div className="flex h-[10px] w-[6px] items-center justify-center">
                            <Img
                              src="images/img_arrowleft.svg"
                              alt="Arrow Left"
                              className="mb-1.5 mt-0.5 h-[10px] w-[6px] object-contain"
                            />
                          </div>
                        }
                        className="h-[40px] w-full gap-2 rounded-[20px] bg-red-800 px-2.5 text-[16px] font-semibold text-secondary-primary_white lg:text-[13px]"
                      >
                        קבל קוד
                      </Button>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
