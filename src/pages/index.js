import React from "react";

import Hero from "app/components/Hero";
import IconList from "app/components/IconList";
import Layout from "app/components/Layout";
import Seo from "app/components/SEO";

const Home = () => (
  <Layout banner>
    <Seo />
    <Hero />
    <IconList />
  </Layout>
);

export default Home;
