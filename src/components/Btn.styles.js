import { css } from "@emotion/react";

export { bold, white, BGblack, centerAll } from "app/styles/utils";
export { body } from "app/styles/typograhy";

export const btnBox = css`
  display: inline-flex;
  padding: var(--btn-pad-y) var(--btn-pad-x);
  border-radius: var(--btn-border-radius);
  min-width: var(--btn-min-width);
  text-decoration: none;
`;
