import React from "react";

import Logo from "app/components/svgs/Logo";
import IconAccount from "app/components/svgs/IconAccount";
import IconCart from "app/components/svgs/IconCart";
import IconLocation from "app/components/svgs/IconLocation";
import IconSearch from "app/components/svgs/IconSearch";

import useMobileMenu from "app/hooks/useMobileMenu";

import * as S from "app/components/Navbar.styles";

const NavButton = ({ Icon, label, ...props }) => (
  <button css={[S.navLink, S.baseBtn]} {...props}>
    <Icon aria-label={label} />
  </button>
);

const NavLink = ({ Icon, uri, text }) => (
  <a to={`/${uri}`} css={[S.navLink, S.navText]}>
    {Icon && <Icon css={S.navIcon} />}
    {text}
  </a>
);

const Navbar = () => {
  const { MenuBtn, MenuList } = useMobileMenu();

  return (
    <div css={[S.navRoot, S.relative]}>
      <div css={[S.navBar, S.relative, S.zIndex10]}>
        <nav css={[S.navGrid, S.w100, S.mxauto, S.container, S.black]}>
          <Logo css={S.logo} />
          <ul css={[S.baseList, S.navList, S.flex, S.flexYCenter, S.nav1]}>
            <li css={S.hideDesktop}>
              <MenuBtn css={[S.navLink, S.baseBtn]} />
            </li>
            <li css={S.hideDesktop}>
              <NavButton Icon={IconAccount} label="Account" />
            </li>
            <li css={S.hideMobile}>
              <NavLink text={"Shop"} />
            </li>
            <li css={S.hideMobile}>
              <NavLink text={"About 4moms"} />
            </li>
          </ul>
          <ul
            css={[
              S.baseList,
              S.navList,
              S.flex,
              S.flexYCenter,
              S.justifyEnd,
              S.nav2,
            ]}
          >
            <li css={S.hideMobile}>
              <NavLink Icon={IconLocation} text={"United States"} />
            </li>
            <li css={S.hideMobile}>
              <NavLink text={"Support"} />
            </li>
            <li>
              <NavButton Icon={IconSearch} label="Search" />
            </li>
            <li css={S.hideMobile}>
              <NavButton Icon={IconAccount} label="Account" />
            </li>
            <li>
              <NavButton Icon={IconCart} label="Cart" />
            </li>
          </ul>
        </nav>
      </div>
      <MenuList />
    </div>
  );
};

export default Navbar;
