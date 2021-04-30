import React from "react";
import SVGIcon from "app/components/svgs/SVGIcon";

const IconMenu = ({ color, ...props }) => (
  <SVGIcon fill="none" {...props}>
    <path stroke={color} strokeWidth="2" d="M0 1h24M0 8h24M0 15h24"></path>
  </SVGIcon>
);

IconMenu.defaultProps = {
  viewBox: "0 0 24 16",
  color: "currentColor",
};

export default IconMenu;
