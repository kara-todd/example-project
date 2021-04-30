import { css } from "@emotion/react";
import { fontWeights } from "app/styles/typograhy";
import { mobileUp, mobileDown } from "app/styles/breakpoints";

export { mobileUp, mobileDown } from "app/styles/breakpoints";

// export const percent = n => `${Math.floor(n * 100)}%`;
// export const percentF = n => `${n.toFixed(2) * 100}%`;

export const absolute = css`
  position: absolute;
`;

export const bold = css`
  font-weight: ${fontWeights.bold};
`;

export const black = css`
  color: var(--black);
`;

export const grayDark = css`
  color: var(--gray-dark);
`;

export const blue = css`
  color: var(--blue);
`;

export const BGblack = css`
  background-color: var(--black);
`;

export const BGwhite = css`
  background-color: var(--white);
`;

export const BGgrayLight = css`
  background-color: var(--gray-light);
`;

export const white = css`
  color: var(--white);
`;

export const fixed = css`
  position: fixed;
`;

export const relative = css`
  position: relative;
`;

export const baseBtn = css`
  border: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
`;

export const hideMobile = css`
  @media (${mobileDown}) {
    display: none;
  }
`;

export const h100 = css`
  height: 100%;
`;

export const hideDesktop = css`
  @media (${mobileUp}) {
    display: none;
  }
`;

export const overflowHidden = css`
  overflow: hidden;
`;

export const visuallyHidden = css`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const mxauto = css`
  margin-left: auto;
  margin-right: auto;
`;

export const mlauto = css`
  margin-left: auto;
`;

export const mrauto = css`
  margin-right: auto;
`;

export const mtauto = css`
  margin-top: auto;
`;

export const my0 = css`
  margin-top: 0;
  margin-bottom: 0;
`;

export const m0 = css`
  margin: 0;
`;

export const p0 = css`
  padding: 0;
`;

export const w50Md = css`
  @media (${mobileUp}) {
    width: 50%;
  }
`;

export const w100 = css`
  width: 100%;
`;

export const flex = css`
  display: flex;
`;

export const flexStart = css`
  justify-content: flex-start;
`;

export const flexEnd = css`
  justify-content: flex-end;
`;

export const flexWrap = css`
  flex-wrap: wrap;
`;

export const flexMd = css`
  @media (${mobileUp}) {
    ${flex};
  }
`;

export const centerAll = css`
  align-items: center;
  justify-content: center;
`;

export const flexCenter = css`
  display: flex;
  ${centerAll};
`;

export const alignCenter = css`
  align-items: center;
`;

export const alignEnd = css`
  align-items: flex-end;
`;

export const justifyEnd = css`
  justify-content: flex-end;
`;

export const flexYCenter = css`
  display: flex;
  ${alignCenter};
`;

export const flexCol = css`
  display: flex;
  flex-direction: column;
`;

export const flexColRev = css`
  display: flex;
  flex-direction: column-reverse;
`;

export const baseList = css`
  padding: 0;
  list-style: none;
  margin: 0;
`;

export const flexList = css`
  ${flex};
  ${baseList};
`;

export const textcenter = css`
  text-align: center;
`;

export const textright = css`
  text-align: right;
`;

export const zIndexN1 = css`
  z-index: -1;
`;

export const zIndex5 = css`
  z-index: 5;
`;

export const zIndex10 = css`
  z-index: 10;
`;
