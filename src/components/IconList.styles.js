import { css } from "@emotion/react";
import { mobileUp } from "app/styles/breakpoints";

export {
  blue,
  centerAll,
  flex,
  flexCol,
  grayDark,
  m0,
  w100,
  w50Md,
  mxauto,
  textcenter,
} from "app/styles/utils";

export { h1, h5, body } from "app/styles/typograhy";

export const listRoot = css`
  overflow-x: auto;
  overflow-y: hidden;
`;

export const iconBox = css`
  width: 200px;
  flex-shrink: 0;
  margin: 80px 20px;

  @media (${mobileUp}) {
    margin: 80px;
  }
`;

export const title = css`
  margin-top: 20px;
  margin-bottom: 9px;
`;
