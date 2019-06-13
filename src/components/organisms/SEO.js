import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = () => {
  return (
    <Helmet>
      <meta httpEquiv="Content-type" content="text/html;charset=UTF-8" />
      <meta name="description" content="Portfolio front-end developer" />
      <meta
        name="keywords"
        content="Kami Chędkowski Portfolio developer projekty kontakt"
      />
      <link rel="index" title="Strona główna" href="#" />
      <title>Kamil Chędkowski - Portfolio</title>
    </Helmet>
  );
};

export default SEO;
