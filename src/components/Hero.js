import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Btn from "app/components/Btn";

import * as S from "app/components/Hero.styles";

const Hero = () => (
  <section css={[S.BGgrayLight]}>
    <div
      css={[
        S.flex,
        S.alignCenter,
        S.justifyEnd,
        S.heroRoot,
        S.heroContainer,
        S.w100,
        S.mxauto,
      ]}
    >
      <div css={[S.flex, S.justifyEnd, S.w50Md, S.imgBox]}>
        <StaticImage
          css={S.img}
          placeholder="tracedSVG"
          layout="constrained"
          width={460}
          height={460}
          src="../images/hero-image.jpg"
          alt=""
        />
      </div>
      <div css={[S.flexCol, S.w50Md, S.contentBox]}>
        <h2 css={[S.h1, S.black, S.title]}>
          Freeing up your hands.
          <br />
          So you can do more.
        </h2>
        <p css={[S.h5, S.m0, S.textBox]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          euismod bibendum laoreet.
        </p>
        <Btn to="/">Shop Bassinets</Btn>
      </div>
    </div>
  </section>
);

export default Hero;
