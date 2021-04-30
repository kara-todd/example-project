import React from "react";
import { Helmet } from "react-helmet";
import { css, Global } from "@emotion/react";

const base = css`
  :root {
    --blue: rgba(23, 167, 224, 1);

    --gray-light: rgba(233, 233, 233, 1);
    --gray: rgba(99, 99, 99, 1);
    --gray-dark: rgba(34, 34, 34, 1);
    --white: rgba(255, 255, 255, 1);
    --black: rgba(0, 0, 0, 1);

    --text-base: var(--gray-dark);
    --text-light: var(--gray);

    --base-font-size: 15px;
    --line-height: 1.5;

    --btn-min-width: 260px;
    --btn-border-radius: 10px;
    --btn-pad-y: 12px;
    --btn-pad-x: 12px;

    --hero-min-height: 620px;

    --base-margin: 45px;

    --banner-height: 0px;

    --max-container: 1420px;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;
    font-family: "Mulish", sans-serif;
    font-size: var(--base-font-size);
    box-sizing: border-box;
    scroll-behavior: smooth;
    color: var(--text-base);
    line-height: var(--line-height);
  }

  p {
    margin-bottom: var(--base-margin);
    margin-top: var(--base-margin);
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;

const GlobalStyles = () => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Global styles={base} />
    </>
  );
};

export default GlobalStyles;
