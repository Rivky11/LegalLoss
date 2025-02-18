import React from "react";

const sizes = {
  text8xl: "text-[28px] font-normal lg:text-[23px] md:text-[26px] sm:text-[24px]",
  text10xl: "text-[41px] font-normal lg:text-[34px] md:text-[37px] sm:text-[31px]",
  text11xl: "text-[44px] font-normal lg:text-[37px] md:text-[40px] sm:text-[34px]",
  text12xl: "text-[45px] font-light lg:text-[38px] md:text-[41px] sm:text-[35px]",
  h4_assistant16px_r: "text-[16px] font-normal lg:text-[13px]",
  textxl: "text-[16px] font-normal lg:text-[13px]",
  text2xl: "text-[18px] font-normal lg:text-[15px]",
  text4xl: "text-[22px] font-normal lg:text-[18px]",
  text5xl: "text-[24px] font-normal lg:text-[20px] md:text-[22px]",
};

const Text = ({ children, className = "", as, size = "text2xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900_03 font-assistant ${className} ${sizes[size]} `} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
