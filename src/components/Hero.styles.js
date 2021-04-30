import { css } from "@emotion/react";
import { mobileDown, mobileUp } from "app/styles/breakpoints";

export {
  alignCenter,
  alignEnd,
  black,
  BGgrayLight,
  flex,
  flexCol,
  justifyEnd,
  m0,
  w100,
  w50Md,
  mxauto,
  textright,
} from "app/styles/utils";

export { h1, h5 } from "app/styles/typograhy";

export const heroRoot = css`
  min-height: 0;

  @media (${mobileUp}) {
    min-height: var(--hero-min-height);
  }
`;

export const heroContainer = css`
  max-width: var(--max-container);
  flex-direction: column-reverse;

  @media (${mobileUp}) {
    padding: 90px;
    flex-direction: row;
  }
`;

export const contentBox = css`
  justify-content: center;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;

  @media (${mobileUp}) {
    align-items: flex-end;
    text-align: right;
  }
`;

export const textBox = css`
  max-width: 460px;
  margin-bottom: 62px;
`;

export const imgBox = css`
  position: relative;
  padding: 25px 25px 0 25px;
  height: 250px;
  width: 100%;
  overflow: hidden;

  @media (${mobileUp}) {
    padding: 0;
    height: auto;
  }
`;

export const img = css`
  @media (${mobileDown}) {
    position: absolute !important; /* override gatsby image */
    top: 25px;
    left: 25px;
    width: calc(100% - 50px);
  }
`;

export const title = css`
  margin: 20px 0;

  @media (${mobileUp}) {
    margin: 0;
  }
`;
