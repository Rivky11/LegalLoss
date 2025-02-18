import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  circle: "rounded-[50%]",
  round: "rounded-[14px]",
};
const variants = {
  fill: {
    yellow_800: "bg-yellow-800 text-secondary-primary_white",
    black_900_7f: "bg-black-900_7f",
    black_900_33: "bg-black-900_33",
    black_900_cc: "bg-black-900_cc",
    white_A700_7f: "bg-white-a700_7f",
    secondary__primary_white: "bg-secondary-primary_white text-black-900_03",
    red_800: "bg-red-800 text-secondary-primary_white",
    black_900: "bg-black-900 text-secondary-primary_white",
    gray_700_04: "bg-gray-700_04 text-secondary-primary_white",
    deep_orange_500: "bg-deep_orange-500 text-secondary-primary_white",
    gray_800_01: "bg-gray-800_01",
    red_A700_03: "bg-red-a700_03 text-secondary-primary_white",
    gray_100_03: "bg-gray-100_03",
    light_green_800: "bg-light_green-800 text-secondary-primary_white",
    black_900_03: "bg-black-900_03 text-secondary-primary_white",
    white_A700_26: "bg-white-a700_26",
    white_A700_33: "bg-white-a700_33",
  },
  outline: {
    gray_200: "border-gray-200 border border-solid text-black-900",
    secondary__primary_white: "border-secondary-primary_white border-[3px] border-solid",
    gray_400_06: "border-gray-400_06 border border-solid text-black-900_03",
    gray_600: "border-gray-600 border border-solid",
  },
};
const sizes = {
  "7xl": "h-[56px] px-8 text-[24px]",
  "8xl": "h-[62px] px-4",
  "2xl": "h-[40px] px-5 text-[20px]",
  xs: "h-[22px] px-1",
  "5xl": "h-[44px] px-3.5",
  md: "h-[32px] px-1.5",
  lg: "h-[34px] px-3 text-[16px]",
  "4xl": "h-[40px] px-2.5 text-[16px]",
  xl: "h-[36px] px-2",
  "6xl": "h-[52px] px-4",
  "3xl": "h-[40px] px-3",
  sm: "h-[30px] px-4 text-[14px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "circle", "round"]),
  size: PropTypes.oneOf(["7xl", "8xl", "2xl", "xs", "5xl", "md", "lg", "4xl", "xl", "6xl", "3xl", "sm"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "yellow_800",
    "black_900_7f",
    "black_900_33",
    "black_900_cc",
    "white_A700_7f",
    "secondary__primary_white",
    "red_800",
    "black_900",
    "gray_700_04",
    "deep_orange_500",
    "gray_800_01",
    "red_A700_03",
    "gray_100_03",
    "light_green_800",
    "black_900_03",
    "white_A700_26",
    "white_A700_33",
    "gray_200",
    "gray_400_06",
    "gray_600",
  ]),
};

export { Button };
