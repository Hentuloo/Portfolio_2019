import React from 'react';
import { Helmet } from 'react-helmet';
import Favico from 'images/favicon.ico';

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
      <link rel="shortcut icon" type="image/png" href={Favico} />
      <link rel="shortcut icon" type="image/png" href={Favico} />
    </Helmet>
  );
};

export default SEO;
