import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-md",
};

const variants = {
  outline: {
    blue_gray_400: "border-blue_gray-400 border border-solid text-gray-800",
    indigo_100_01: "border-indigo-100_01 border border-solid text-gray-800",
    indigo_100: "border-indigo-100 border border-solid text-gray-700_04",
    gray_200: "border-gray-200 border border-solid",
  },
};

const sizes = {
  sm: "h-[50px] px-3 text-[16px]",
  xs: "h-[30px] pl-1 pr-3.5 text-[16px]",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "outline",
      size = "xs",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    return (
      <label
        className={`${className} flex items-center justify-center cursor-text border border-solid  ${shape && shapes[shape]} ${variant && (variants[variant]?.[color] || variants[variant])} ${size && sizes[size]}`}
      >
        {!!label && label}
        {!!prefix && prefix}
        <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} />
        {!!suffix && suffix}
      </label>
    );
  },
);
Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["sm", "xs"]),
  variant: PropTypes.oneOf(["outline"]),
  color: PropTypes.oneOf(["blue_gray_400", "indigo_100_01", "indigo_100", "gray_200"]),
};

export { Input };
