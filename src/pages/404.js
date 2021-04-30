import React from "react";
import Layout from "app/components/layout";
import Seo from "app/components/seo";

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not Found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;