import React from "react";
import SVGIcon from "app/components/svgs/SVGIcon";

const IconTested = ({ color, ...props }) => (
  <SVGIcon fill="none" {...props}>
    <path
      stroke="#17A7E0"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="M22.48 65.3v-6.4m9.61 4l-3.18-5.53m-15.92 5.2l3.18-5.58m23.11-.93l-5.6-3.18M6.07 55.4l5.6-3.18m30.36-5.63H35.6m-31.9-.77h6.43m29.48-8.86l-5.54 3.23M6.45 36.35L12 39.53m20.75-9.69l-3.18 5.53m-15.98-5.91l3.24 5.58m6.42 24.19c7.13 0 12.9-5.76 12.9-12.86s-5.77-12.86-12.9-12.86c-7.12 0-12.9 5.76-12.9 12.86s5.78 12.86 12.9 12.86zm0-32.13v6.41M48.78 29v-3.69m5.52 2.3l-1.83-3.18m-9.14 2.99l1.82-3.21m13.27-.54l-3.21-1.83M39.36 23.3l3.21-1.83M60 18.22h-3.69M38 17.78h3.69m16.92-5.11l-3.18 1.86m-15.85-2.2l3.18 1.82m11.91-5.57l-1.82 3.18m-9.18-3.4l1.86 3.21m3.69 13.93a7.4 7.4 0 100-14.81 7.4 7.4 0 000 14.81zm0-18.5v3.69"
    ></path>
  </SVGIcon>
);

IconTested.defaultProps = {
  viewBox: "0 0 89 69",
  width: 89,
  height: 69,
  color: "currentColor",
};

export default IconTested;
