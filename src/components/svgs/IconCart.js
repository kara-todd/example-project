import React from "react";
import SVGIcon from "app/components/svgs/SVGIcon";

const IconCart = ({ color, ...props }) => (
  <SVGIcon fill="none" {...props}>
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M7.18 17.4a.77.77 0 100-1.54.77.77 0 000 1.55zm8.5 0a.77.77 0 100-1.54.77.77 0 000 1.55zM1 1.18h3.1l2.06 10.35a1.55 1.55 0 001.55 1.24h7.5a1.55 1.55 0 001.55-1.24L18 5.05H4.86"
    ></path>
  </SVGIcon>
);

IconCart.defaultProps = {
  color: "currentColor",
};

export default IconCart;
