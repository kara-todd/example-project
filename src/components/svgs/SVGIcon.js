import React, { memo } from "react";

export const SVGIcon = ({ children, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" role={"img"} {...props}>
    {children}
  </svg>
);

SVGIcon.defaultProps = {
  width: "19",
  height: "19",
  viewBox: "0 0 19 19",
};

export default memo(SVGIcon);
