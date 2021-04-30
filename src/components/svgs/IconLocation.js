import React from "react";
import SVGIcon from "app/components/svgs/SVGIcon";

const IconLocation = ({ color, ...props }) => (
  <SVGIcon fill="none" {...props}>
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M13.27 7.14c0 4.77-6.13 8.86-6.13 8.86S1 11.9 1 7.14a6.14 6.14 0 0112.27 0z"
    ></path>
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M7.14 9.18a2.05 2.05 0 100-4.09 2.05 2.05 0 000 4.1z"
    ></path>
  </SVGIcon>
);

IconLocation.defaultProps = {
  viewBox: "0 0 15 17",
  width: 15,
  height: 17,
  color: "currentColor",
};

export default IconLocation;
