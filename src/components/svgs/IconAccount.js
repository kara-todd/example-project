import React from "react";
import SVGIcon from "app/components/svgs/SVGIcon";

const IconAccount = ({ color, ...props }) => (
  <SVGIcon fill="none" {...props}>
    <path
      fill={color}
      d="M9 0a9 9 0 103.6 17.24A9 9 0 009 0zm0 16.22a7.2 7.2 0 01-5-2.03 5.4 5.4 0 0110 0 7.2 7.2 0 01-5 2.03zM7.18 7.2a1.8 1.8 0 113.6 0 1.8 1.8 0 01-3.6 0zm8.03 5.4a7.2 7.2 0 00-3.53-3.04 3.6 3.6 0 10-5.4 0 7.2 7.2 0 00-3.52 3.04 7.14 7.14 0 011.13-8.7 7.2 7.2 0 0111.32 8.7z"
    ></path>
  </SVGIcon>
);

IconAccount.defaultProps = {
  viewBox: "0 0 18 18",
  color: "currentColor",
};

export default IconAccount;
