import React, { useState } from "react";
import { useLockBodyScroll } from "react-use";

import { MenuButton, MenuMobile } from "app/components/MenuMobile";

const useMobileMenu = () => {
  const [isOpen, setOpen] = useState(false);

  useLockBodyScroll(isOpen);

  return {
    MenuBtn: props => (
      <MenuButton
        isOpen={isOpen}
        toggleMenu={() => setOpen(!isOpen)}
        {...props}
      />
    ),
    MenuList: props => <MenuMobile isOpen={isOpen} {...props} />,
  };
};

export default useMobileMenu;
