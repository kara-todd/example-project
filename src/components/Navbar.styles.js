import { css } from "@emotion/react";
import { mobileUp } from "app/styles/breakpoints";
import { fontWeights } from "app/styles/typograhy";

export {
  baseBtn,
  baseList,
  black,
  flex,
  flexYCenter,
  justifyEnd,
  hideDesktop,
  hideMobile,
  mxauto,
  relative,
  zIndex10,
  w100,
} from "app/styles/utils";

export const navRoot = css`
  --menu-height: 78px;

  @media (${mobileUp}) {
    --menu-height: 100px;
  }
`;

export const navBar = css`
  height: var(--menu-height);
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
`;

export const container = css`
  max-width: var(--max-container);
  padding: 18px;

  @media (${mobileUp}) {
    padding: 31px;
  }
`;

export const navGrid = css`
  display: grid;
  grid-template-columns: 1fr 20px 145px 20px 1fr;
  grid-template-rows: 1;
  grid-template-areas: "nav1 . logo . nav2";
`;

export const nav1 = css`
  grid-area: nav1;
`;

export const logo = css`
  grid-area: logo;
`;

export const nav2 = css`
  grid-area: nav2;
`;

export const navList = css`
  li + li {
    @media (${mobileUp}) {
      margin-left: 20px;
    }
  }
`;

export const navLink = css`
  display: block;
  padding: 10px 8px;

  @media (${mobileUp}) {
    padding: 10px 16px;
  }
`;

export const navIcon = css`
  margin-right: 9px;
  vertical-align: text-top;
`;

export const navText = css`
  font-weight: ${fontWeights.bold};
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.05em;
  text-transform: capitalize;
`;
