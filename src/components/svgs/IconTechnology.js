import React from "react";
import SVGIcon from "app/components/svgs/SVGIcon";

const IconTechnology = ({ color, ...props }) => (
  <SVGIcon fill="none" {...props}>
    <path
      stroke={color}
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="M55.49 56.83a4.84 4.84 0 004.95-4.73 4.84 4.84 0 00-4.95-4.73 4.84 4.84 0 00-4.95 4.73 4.84 4.84 0 004.95 4.73zm-47.98 0a4.84 4.84 0 004.95-4.73 4.84 4.84 0 00-4.95-4.73 4.84 4.84 0 00-4.95 4.73 4.84 4.84 0 004.95 4.73zm24 0a4.84 4.84 0 004.95-4.73 4.84 4.84 0 00-4.95-4.73 4.84 4.84 0 00-4.95 4.73 4.84 4.84 0 004.95 4.73zm0-22.44v13.47m23.98-13.47v13.47M31.51 33.92a4.84 4.84 0 004.95-4.73 4.84 4.84 0 00-4.95-4.73 4.84 4.84 0 00-4.95 4.73 4.84 4.84 0 004.95 4.73zm23.98 0a4.84 4.84 0 004.95-4.73 4.84 4.84 0 00-4.95-4.73 4.84 4.84 0 00-4.95 4.73 4.84 4.84 0 004.95 4.73zm-47.98 0a4.84 4.84 0 004.95-4.73 4.84 4.84 0 00-4.95-4.73 4.84 4.84 0 00-4.95 4.73 4.84 4.84 0 004.95 4.73zm3.49-1.4l17.54 16.76"
    ></path>
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="M55.49 11.01a4.84 4.84 0 004.95-4.73 4.84 4.84 0 00-4.95-4.73 4.84 4.84 0 00-4.95 4.73 4.84 4.84 0 004.95 4.73zm-47.98 0a4.84 4.84 0 004.95-4.73 4.84 4.84 0 00-4.95-4.73 4.84 4.84 0 00-4.95 4.73 4.84 4.84 0 004.95 4.73z"
    ></path>
    <path
      stroke={color}
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="M7.51 10.99v13.47"
    ></path>
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="M31.51 11.01a4.84 4.84 0 004.95-4.73 4.84 4.84 0 00-4.95-4.73 4.84 4.84 0 00-4.95 4.73 4.84 4.84 0 004.95 4.73z"
    ></path>
    <path
      stroke={color}
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="M33.8 9.32l17.79 17"
    ></path>
  </SVGIcon>
);

IconTechnology.defaultProps = {
  viewBox: "0 0 63 59",
  width: 63,
  height: 59,
  color: "currentColor",
};

export default IconTechnology;
