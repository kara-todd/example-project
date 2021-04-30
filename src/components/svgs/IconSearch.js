import React from "react";
import SVGIcon from "app/components/svgs/SVGIcon";

const IconSearch = ({ color, ...props }) => (
  <SVGIcon fill="none" {...props}>
    <circle cx="8" cy="8" r="7" stroke={color} strokeWidth="2"></circle>
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17 17l-3.5-3.5"
    ></path>
  </SVGIcon>
);

IconSearch.defaultProps = {
  color: "currentColor",
};

export default IconSearch;
