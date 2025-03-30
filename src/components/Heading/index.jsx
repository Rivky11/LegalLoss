import React from "react";

const sizes = {
  h5_assistant_12px_r: "text-[12px] font-semibold",
  heading16xl: "text-[45px] font-bold lg:text-[38px] md:text-[41px] sm:text-[35px]",
  h4_assistant_16px_b: "text-[16px] font-semibold lg:text-[13px]",
  h3_assistant_25px_m: "text-[25px] font-medium lg:text-[21px] md:text-[23px] sm:text-[21px]",
  h2_assistant_30px: "text-[30px] font-medium lg:text-[25px] md:text-[28px] sm:text-[26px]",
  h1_assistant_45px_m: "text-[45px] font-medium lg:text-[38px] md:text-[41px] sm:text-[35px]",
  ass_20: "text-[20px] font-semibold lg:text-[17px]",
  h4_assistant_18px_b: "text-[18px] font-bold lg:text-[15px]",
  textxs: "text-[12px] font-medium",
  texts: "text-[13px] font-medium",
  textmd: "text-[14px] font-medium",
  textlg: "text-[15px] font-medium",
  text3xl: "text-[20px] font-medium lg:text-[17px]",
  text6xl: "text-[35px] font-medium lg:text-[29px] md:text-[33px] sm:text-[31px]",
  headingxs: "text-[9px] font-bold",
  headings: "text-[11px] font-bold",
  headingmd: "text-[12px] font-semibold",
  headinglg: "text-[14px] font-bold",
  headingxl: "text-[15px] font-semibold",
  heading2xl: "text-[16px] font-bold lg:text-[13px]",
  heading3xl: "text-[17px] font-bold lg:text-[14px]",
  heading4xl: "text-[18px] font-semibold lg:text-[15px]",
  heading5xl: "text-[24px] font-bold lg:text-[20px] md:text-[22px]",
  heading6xl: "text-[25px] font-extrabold lg:text-[21px] md:text-[23px] sm:text-[21px]",
  heading7xl: "text-[27px] font-semibold lg:text-[22px] md:text-[25px] sm:text-[23px]",
  heading8xl: "text-[29px] font-bold lg:text-[24px] md:text-[27px] sm:text-[25px]",
  heading9xl: "text-[30px] font-bold lg:text-[25px] md:text-[28px] sm:text-[26px]",
  heading10xl: "text-[35px] font-bold lg:text-[29px] md:text-[33px] sm:text-[31px]",
  heading11xl: "text-[40px] font-bold lg:text-[34px] md:text-[38px] sm:text-[36px]",
  heading12xl: "text-[45px] font-extrabold lg:text-[38px] md:text-[41px] sm:text-[35px]",
  heading13xl: "text-[60px] font-extrabold lg:text-[51px] md:text-[52px] sm:text-[46px]",
  heading14xl: "text-[63px] font-bold lg:text-[63px] md:text-[48px]",
  heading15xl: "text-[71px] font-extrabold lg:text-[71px] md:text-[48px]",
};

const Heading = ({ children, className = "", size = "heading4xl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900_03 font-assistant ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
