import React from "react";

import BaseCSS from "app/styles/global";
import Banner from "app/components/Banner";
import Footer from "app/components/Footer";
import Navbar from "app/components/Navbar";
import NormalizeCSS from "app/styles/normalize";

const Layout = ({ banner, children }) => (
  <>
    <NormalizeCSS />
    <BaseCSS />
    {banner && <Banner />}
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
