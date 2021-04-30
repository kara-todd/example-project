import React from "react";
import { Link } from "gatsby";

import IconMenu from "app/components/svgs/IconMenu";
import IconClose from "app/components/svgs/IconClose";

import * as S from "app/components/MenuMobile.styles";

export const MenuButton = ({ isOpen, toggleMenu, className }) => (
  <button onClick={toggleMenu} className={className} css={[S.baseBtn]}>
    {!isOpen && <IconMenu label="Open Menu" />}
    {isOpen && <IconClose label="Close Menu" />}
  </button>
);

export const MenuMobile = ({ isOpen, navItems, extras }) => {
  if (!isOpen) {
    return <></>;
  }

  return (
    <div css={[S.absolute, S.BGwhite, S.black, S.zIndex5, S.menuBox]}>
      <ul css={[S.baseList, S.flexCol, S.h100]}>
        {navItems.map(text => (
          <li key={text} css={S.menuItem}>
            <Link css={S.menuLink}>{text}</Link>
          </li>
        ))}
        {extras.map((text, idx) => (
          <li key={text} css={[!idx && S.mtauto, S.menuItem]}>
            <Link css={S.menuLink}>{text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

MenuMobile.defaultProps = {
  navItems: [
    "Shop All",
    "Seats",
    "Playards",
    "Feeding",
    "Bassinets",
    "Bath",
    "Mobile",
    "Accessories",
    "Spare Parts",
  ],
  extras: ["About 4moms", "Support"],
};

export default MenuMobile;
