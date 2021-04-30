import React from "react";

import IconFunctional from "app/components/svgs/IconFunctional";
import IconTested from "app/components/svgs/IconTested";
import IconTechnology from "app/components/svgs/IconTechnology";

import * as S from "app/components/IconList.styles";

const IconBox = ({ Icon, title, text }) => (
  <section css={[S.iconBox, S.flexCol, S.centerAll, S.textcenter]}>
    <Icon css={S.blue} />
    <h3 css={[S.m0, S.h5, S.grayDark, S.title]}>{title}</h3>
    <p css={[S.m0, S.body]}>{text}</p>
  </section>
);

const IconList = () => (
  <div css={S.listRoot}>
    <div css={[S.flex, S.centerAll]}>
      <IconBox
        Icon={IconFunctional}
        title={"Functional Design"}
        text={"Products designed to make parents lives easier"}
      />
      <IconBox
        Icon={IconTested}
        title={"Parent Tested"}
        text={"Tested with real parents to ensure the best results"}
      />
      <IconBox
        Icon={IconTechnology}
        title={"Technology"}
        text={"Tested w(FPO)arents to ensure the best results"}
      />
    </div>
  </div>
);

export default IconList;
