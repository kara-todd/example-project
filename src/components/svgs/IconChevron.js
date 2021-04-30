import React from "react";
import SVGIcon from "app/components/svgs/SVGIcon";

const IconChevron = ({ color, ...props }) => (
  <SVGIcon fill="none" {...props}>
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="2"
      d="M1 1.77l8.89 9.9-8.63 10.26"
    ></path>
  </SVGIcon>
);

IconChevron.defaultProps = {
  viewBox: "0 0 11 23",
  width: 11,
  height: 23,
  color: "currentColor",
};

export default IconChevron;
