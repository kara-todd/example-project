import React from "react";
import { Link } from "gatsby";

import * as S from "app/components/Btn.styles";

const Btn = ({ className, ...props }) => (
  <Link
    css={[S.white, S.BGblack, S.body, S.bold, S.centerAll, S.btnBox, className]}
    {...props}
  />
);

export default Btn;
