import { css } from "@emotion/react";

export { BGblack, bold, white, textcenter } from "app/styles/utils";

export const bannerRoot = css`
  html {
    --banner-height: 40px;
  }
`;

export const bannerBox = css`
  height: var(--banner-height);
  padding: 9px 20px;
`;
