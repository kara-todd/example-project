import { css } from "@emotion/react";

export {
  absolute,
  BGwhite,
  black,
  baseBtn,
  baseList,
  h100,
  flexCol,
  zIndex5,
  mtauto,
} from "app/styles/utils";

export const menuBox = css`
  left: 0;
  top: var(--menu-height);
  width: 258px;
  padding: 14px 17px 32px 17px;
  height: calc(100vh - var(--menu-height) - var(--banner-height));
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const menuItem = css`
  padding: 6px 0;
`;

export const menuLink = css`
  display: block;
  padding: 6px;
`;
