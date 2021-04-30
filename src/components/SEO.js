import React from "react";
import { Helmet } from "react-helmet";

const Seo = ({ lang, title, children }) => {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | 4moms`}
    >
      {children}
    </Helmet>
  );
};

Seo.defaultProps = {
  lang: "en",
};

export default Seo;
