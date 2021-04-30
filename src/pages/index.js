import React from "react";

import Hero from "app/components/Hero";
import IconList from "app/components/IconList";
import Layout from "app/components/layout";
import Seo from "app/components/seo";

const Home = () => (
  <Layout banner>
    <Seo />
    <Hero />
    <IconList />
  </Layout>
);

export default Home;
