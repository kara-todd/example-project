import React from "react";
import SVGIcon from "app/components/svgs/SVGIcon";

const IconTested = ({ color, ...props }) => (
  <SVGIcon fill="none" {...props}>
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="M28.04 53.07a7.04 7.04 0 100-14.07 7.04 7.04 0 000 14.07z"
    ></path>
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="M28.2 63.38a17.2 17.2 0 100-34.38 17.2 17.2 0 000 34.38z"
    ></path>
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="M27.9 71.8a25.9 25.9 0 100-51.8 25.9 25.9 0 000 51.8zm22.84-48.54L28.1 45.95m22.77-33.2L61.42 2.2l-.08 5.27-.05 5.28 5.28-.09 5.23-.04-10.5 10.5-5.28.1-5.28.04.04-5.23.1-5.28z"
    ></path>
  </SVGIcon>
);

IconTested.defaultProps = {
  viewBox: "0 0 74 74",
  width: 74,
  height: 74,
  color: "currentColor",
};

export default IconTested;
