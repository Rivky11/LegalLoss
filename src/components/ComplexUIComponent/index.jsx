import { Img, Text, Switch, Heading, ChipView } from "./..";
import React from "react";

export default function ComplexUIComponent({
  backgroundone,
  linktwo,
  prop,
  televisionone,
  zipcodeText,
  viewoneoneOne,
  bmwText,
  mainTitleText,
  groupImageFourteen,
  proposalApprovalText,
  groupImageFifteen,
  priceText,
  groupImageSixteen,
  paymentCompletionText,
  groupImageSeventeen,
  collectionText,
  groupImageEighteen,
  reservedText,
  groupImageNineteen,
  locationText,
  groupImageTwentyOne,
  proposalDateText,
  groupimagetwentyone1,
  ratingText,
  arrowleftthree,
  onehundredeleve,
  plusthreeone,
  one,
  plumbingrepair,
  userthreeone,
  linethirtysix,
  plumbingrepair1,
  linethirtyeight,
  plumbingrepair2,
  linethirtyfive,
  eleventhreeone,
  linethirtyseven,
  plumbingrepair3,
  linethirtynine,
  plumbingrepair4,
  linethirtythree,
  imagetwentytwo,
  imagethreeOne,
  imagefiveOne,
  imagesevenOne,
  imagetwentysix,
  carImageMain,
  ...props
}) {
  const [chipOptions, setChipOptions] = React.useState(() => [
    { value: 1, label: `מיקום המודעה: 1` },
    { value: 2, label: `חבילה ממתינה לאישור` },
  ]);
  const [selectedChipOptions, setSelectedChipOptions] = React.useState([]);

  return (
    <div {...props} className={`${props.className} border-gray-400_11 border-t border-solid container-xl`}>
      <div className="mt-2 flex w-full flex-col gap-2.5">
        <div className="flex items-center bg-gray-100_02 p-2 md:flex-col">
          <div className="flex flex-1 gap-4 md:self-stretch sm:flex-col">
            <ChipView
              options={chipOptions}
              setOptions={setChipOptions}
              values={selectedChipOptions}
              setValues={setSelectedChipOptions}
              className="flex w-[50%] flex-wrap gap-3.5"
            >
              {(option) => (
                <React.Fragment key={option.index}>
                  {option.isSelected ? (
                    !!backgroundone ? (
                      <div
                        onClick={option.toggle}
                        className="flex h-[30px] cursor-pointer flex-row items-center gap-[18px] whitespace-pre-wrap rounded-[14px] bg-gray-200_01 px-3.5 text-[16px] text-red-a700_03"
                      >
                        <span>{option.label}</span>
                        <Img src="images/img_group_1261154425.svg" alt="Group 1261154425" className="h-[14px] w-[2%]" />
                      </div>
                    ) : null
                  ) : !!backgroundone ? (
                    <div
                      onClick={option.toggle}
                      className="flex h-[30px] cursor-pointer flex-row items-center gap-[18px] rounded-[14px] bg-yellow-800 px-3.5 text-[16px] text-secondary-primary_white"
                    >
                      <span>{option.label}</span>
                      <Img src="images/img_group_1261154425.svg" alt="Group 1261154425" className="h-[14px] w-[2%]" />
                    </div>
                  ) : null}
                </React.Fragment>
              )}
            </ChipView>
            <div className="flex w-[16%] items-center justify-center gap-[18px] rounded-[14px] bg-secondary-primary_white sm:w-full">
              {!!prop ? (
                <Heading
                  size="textmd"
                  as="p"
                  className="self-end !font-dmsans text-[14px] font-medium capitalize !text-black-900"
                >
                  {prop}
                </Heading>
              ) : null}
              {!!televisionone ? <Img src={televisionone} alt="Televisionone" className="h-[22px]" /> : null}
            </div>
          </div>
          <div className="flex w-[44%] items-end justify-center gap-[38px] md:w-full">
            <div className="flex flex-1 items-center justify-end">
              {!!zipcodeText ? (
                <Text size="text4xl" as="p" className="text-[22px] font-normal !text-black-900">
                  {zipcodeText}
                </Text>
              ) : null}
              {!!viewoneoneOne ? (
                <div className="ml-6 mt-2 h-[8px] w-[10px] self-start rounded bg-red-a700_03" />
              ) : null}
              {!!bmwText ? (
                <Text size="text4xl" as="p" className="ml-5 text-[22px] font-normal !text-black-900">
                  {bmwText}
                </Text>
              ) : null}
            </div>
            {!!mainTitleText ? (
              <Heading
                size="heading12xl"
                as="h3"
                className="text-[30px] font-bold !text-black-900 md:text-[28px] sm:text-[26px]"
              >
                {mainTitleText}
              </Heading>
            ) : null}
          </div>
        </div>
        <div className="flex items-center py-3.5 md:flex-col">
          <div className="flex flex-1 flex-col gap-[30px] md:self-stretch">
            <div className="ml-[26px] mr-12 flex justify-center md:mx-0 md:flex-col">
              <div className="flex items-center gap-3">
                {!!groupImageFourteen ? (
                  <Img src={groupImageFourteen} alt="Imagefourteen" className="h-[12px]" />
                ) : null}
                {!!proposalApprovalText ? (
                  <Heading size="heading3xl" as="h6" className="text-[16px] font-bold">
                    {proposalApprovalText}
                  </Heading>
                ) : null}
              </div>
              <div className="flex items-center gap-1.5">
                {!!groupImageFifteen ? <Img src={groupImageFifteen} alt="Imagefifteen" className="h-[12px]" /> : null}
                {!!priceText ? (
                  <Heading size="heading3xl" as="h6" className="text-[16px] font-bold">
                    {priceText}
                  </Heading>
                ) : null}
              </div>
              <div className="flex flex-1 justify-between gap-5 px-[34px] md:self-stretch sm:flex-col sm:px-5">
                <div className="flex items-center gap-2.5">
                  {!!groupImageSixteen ? <Img src={groupImageSixteen} alt="Imagesixteen" className="h-[12px]" /> : null}
                  {!!paymentCompletionText ? (
                    <Heading size="h4_assistant_18px_b" as="h6" className="text-[18px] font-bold">
                      {paymentCompletionText}
                    </Heading>
                  ) : null}
                </div>
                <div className="flex flex-1 justify-center gap-3.5 sm:self-stretch">
                  <div className="flex items-center gap-[7px]">
                    {!!groupImageSeventeen ? (
                      <Img src={groupImageSeventeen} alt="Imageseventeen" className="h-[12px]" />
                    ) : null}
                    {!!collectionText ? (
                      <Heading size="heading3xl" as="h6" className="self-end text-[16px] font-bold">
                        {collectionText}
                      </Heading>
                    ) : null}
                  </div>
                  <div className="flex flex-1 items-center justify-center gap-2.5">
                    {!!groupImageEighteen ? (
                      <Img src={groupImageEighteen} alt="Imageeighteen" className="h-[12px]" />
                    ) : null}
                    {!!reservedText ? (
                      <Heading size="heading3xl" as="h6" className="text-[16px] font-bold">
                        {reservedText}
                      </Heading>
                    ) : null}
                  </div>
                  <div className="flex items-center gap-1">
                    {!!groupImageNineteen ? (
                      <Img src={groupImageNineteen} alt="Imagenineteen" className="h-[12px]" />
                    ) : null}
                    {!!locationText ? (
                      <Heading size="heading3xl" as="h6" className="self-end text-[16px] font-bold">
                        {locationText}
                      </Heading>
                    ) : null}
                  </div>
                  <div className="flex items-center gap-2">
                    {!!groupImageTwentyOne ? (
                      <Img src={groupImageTwentyOne} alt="Imagetwentyone" className="h-[12px]" />
                    ) : null}
                    {!!proposalDateText ? (
                      <Heading size="heading3xl" as="h6" className="text-[16px] font-bold">
                        {proposalDateText}
                      </Heading>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 px-1">
                {!!groupimagetwentyone1 ? (
                  <Img src={groupimagetwentyone1} alt="Imagetwentyone" className="h-[12px]" />
                ) : null}
                {!!ratingText ? (
                  <Heading size="heading3xl" as="h6" className="text-[16px] font-bold">
                    {ratingText}
                  </Heading>
                ) : null}
              </div>
            </div>
            <div className="flex items-center justify-center border-b border-solid border-gray-200 px-[18px] py-5 md:flex-col">
              <div className="flex items-center gap-2 rounded-[16px] border border-solid border-black-900_03 bg-secondary-primary_white p-1">
                {!!arrowleftthree ? <Img src={arrowleftthree} alt="Arrowleftthree" className="h-[10px]" /> : null}
                {!!onehundredeleve ? (
                  <Heading size="h4_assistant_16px_b" as="h6" className="self-end text-[16px] font-semibold">
                    {onehundredeleve}
                  </Heading>
                ) : null}
              </div>
              <div className="flex items-start">
                {!!plusthreeone ? <Img src={plusthreeone} alt="Plusthreeone" className="h-[18px]" /> : null}
                {!!one ? (
                  <Heading
                    size="headingxl"
                    as="p"
                    className="ml-1.5 self-end !font-heebo text-[14px] font-bold !text-red-a700_03"
                  >
                    {one}
                  </Heading>
                ) : null}
                <div className="flex items-start gap-2.5 self-center">
                  {!!plumbingrepair ? (
                    <Heading
                      size="heading5xl"
                      as="h6"
                      className="self-center !font-heebo text-[18px] font-bold !text-red-a700_03"
                    >
                      {plumbingrepair}
                    </Heading>
                  ) : null}
                  {!!userthreeone ? <Img src={userthreeone} alt="Userthreeone" className="h-[18px]" /> : null}
                </div>
              </div>
              {!!linethirtysix ? (
                <div className="ml-[26px] h-[16px] w-px bg-gray-400_07 md:ml-0 md:h-px md:w-[16px]" />
              ) : null}
              {!!plumbingrepair1 ? (
                <Text as="p" className="ml-10 text-[18px] font-normal md:ml-0">
                  {plumbingrepair1}
                </Text>
              ) : null}
              {!!linethirtyeight ? (
                <div className="ml-[42px] h-[16px] w-px bg-gray-400_07 md:ml-0 md:h-px md:w-[16px]" />
              ) : null}
              {!!plumbingrepair2 ? (
                <Text as="p" className="ml-10 text-[18px] font-normal md:ml-0">
                  {plumbingrepair2}
                </Text>
              ) : null}
              {!!linethirtyfive ? (
                <div className="ml-10 h-[16px] w-px bg-gray-400_07 md:ml-0 md:h-px md:w-[16px]" />
              ) : null}
              {!!eleventhreeone ? (
                <Switch value={true} className="ml-[38px] border border-solid border-gray-200 md:ml-0" />
              ) : null}
              {!!linethirtyseven ? (
                <div className="ml-[38px] h-[16px] w-px bg-gray-400_07 md:ml-0 md:h-px md:w-[16px]" />
              ) : null}
              {!!plumbingrepair3 ? (
                <Text as="p" className="ml-[38px] self-end text-[18px] font-normal md:ml-0">
                  {plumbingrepair3}
                </Text>
              ) : null}
              {!!linethirtynine ? (
                <div className="ml-[38px] h-[16px] w-px bg-gray-400_07 md:ml-0 md:h-px md:w-[16px]" />
              ) : null}
              <div className="flex flex-1 items-center justify-between gap-5 px-[38px] md:self-stretch sm:px-5">
                {!!plumbingrepair4 ? (
                  <Text as="p" className="text-[18px] font-normal">
                    {plumbingrepair4}
                  </Text>
                ) : null}
                {!!linethirtythree ? <div className="h-[16px] w-px bg-gray-400_07" /> : null}
                <div className="flex w-[30%] justify-center">
                  <div className="w-full bg-black-900">
                    {!!imagetwentytwo ? (
                      <Img src={imagetwentytwo} alt="Imagetwentytwo" className="h-[8px] w-full" />
                    ) : null}
                  </div>
                  <div className="w-full bg-black-900">
                    {!!imagethreeOne ? <Img src={imagethreeOne} alt="Imagethree" className="h-[8px] w-full" /> : null}
                  </div>
                  <div className="w-full bg-black-900">
                    {!!imagefiveOne ? <Img src={imagefiveOne} alt="Imagefive" className="h-[8px] w-full" /> : null}
                  </div>
                  <div className="w-full bg-black-900">
                    {!!imagesevenOne ? <Img src={imagesevenOne} alt="Imageseven" className="h-[8px] w-full" /> : null}
                  </div>
                  <div className="w-full bg-black-900">
                    {!!imagetwentysix ? (
                      <Img src={imagetwentysix} alt="Imagetwentysix" className="h-[8px] w-full" />
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {!!carImageMain ? (
            <Img
              src={carImageMain}
              alt="Car11qgcqjcnfp"
              className="relative ml-[-8px] h-[144px] w-[16%] rounded-[10px] object-contain md:ml-0 md:w-full"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
