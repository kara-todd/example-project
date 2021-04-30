import React from "react";

import * as S from "app/components/Banner.styles";

const Banner = ({ text }) => (
  <>
    <style
      dangerouslySetInnerHTML={{
        __html: `
          :root {
            --banner-height: 40px;
          }
        `,
      }}
    />
    <div css={[S.BGblack, S.bannerBox, S.white, S.textcenter, S.bold]}>
      {text}
    </div>
  </>
);

Banner.defaultProps = {
  text: "Free shipping on orders over $49",
};

export default Banner;
