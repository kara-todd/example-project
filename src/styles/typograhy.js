import { css } from "@emotion/react";
import { mobileUp } from "./breakpoints";

export const fontWeights = {
  bold: 700,
  normal: 400,
};

export const h1 = css`
  font-weight: ${fontWeights.normal};
  font-size: 30px;
  line-height: 1.4;

  @media (${mobileUp}) {
    font-size: 44px;
  }
`;

export const h4 = css`
  font-weight: ${fontWeights.normal};
  font-size: 22px;
  line-height: ${27 / 22};
  letter-spacing: 0.05em;
`;

export const h5 = css`
  font-weight: ${fontWeights.normal};
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.05em;
`;

export const body = css`
  font-weight: ${fontWeights.normal};
  font-size: 15px;
  line-height: 1.5;
  letter-spacing: 0.05em;
`;
