import React from "react";

import SwitchProvider from "@dhiwise/react-switch";
import PropTypes from "prop-types";

const variants = {
  swtOutlineGray200_5: {
    offColor: "#666666",
    onColor: "#ffffff",
    offHandleColor: "#ffffff",
    onHandleColor: "#666666",
  },
};
const sizes = {
  sm: {
    width: 64,
    height: 32,
  },
  xs: {
    width: 36,
    height: 18,
  },
};

const Switch = ({
  value = false,
  className,
  checkedIcon = <></>,
  uncheckedIcon = <></>,
  onChange,
  variant = "swtOutlineGray200_5",
  size = "xs",
}) => {
  const [selected, setSelected] = React.useState(value);
  const handleChange = (val) => {
    setSelected(val);
    onChange?.(val);
  };
  return (
    <div className={className}>
      <SwitchProvider
        checked={selected}
        onChange={handleChange}
        {...variants[variant]}
        {...sizes[size]}
        checkedIcon={checkedIcon}
        uncheckedIcon={uncheckedIcon}
      />
    </div>
  );
};

Switch.propTypes = {
  value: PropTypes.bool,
  className: PropTypes.string,
  checkedIcon: PropTypes.node,
  uncheckedIcon: PropTypes.node,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(["sm", "xs"]),
  variant: PropTypes.oneOf(["swtOutlineGray200_5"]),
};

export { Switch };
