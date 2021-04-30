import React from "react";
import SVGIcon from "app/components/svgs/SVGIcon";

const IconClose = ({ color, ...props }) => (
  <SVGIcon fill="none" {...props}>
    <path stroke={color} strokeWidth="2" d="M1 1l14 14M1 15L15 1"></path>
  </SVGIcon>
);

IconClose.defaultProps = {
  viewBox: "0 0 16 16",
  color: "currentColor",
};

export default IconClose;
