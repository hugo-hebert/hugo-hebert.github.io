// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';
import {fetchAPI} from '../lib/api';
import util from '../util/strapi_utils';

function MyDocument({ appProps, pageProps }) {

  const maintenance_mode = util.getValue(pageProps, 'global', 'maintenance_mode', false);
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Lobster+Two:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" /> 
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap" rel="stylesheet" /> 
      </Head>
      <body>
        {
          maintenance_mode ? 
          <div className="maintenance-mode">
            <p>WIP. Check back soon.</p>
            <a href="https://www.linkedin.com/in/hugo-hebert-0649b1111/" className="link external">LinkedIn <img src="/assets/img/icons/top-right.png" alt='' width="40px" height="40px"/> </a>
          </div>
          : ''
        }
        <Main />
        <NextScript />
      </body>
    </Html>
  )
};

MyDocument.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await Document.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const global = await fetchAPI("/global");
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global } };
}

export default MyDocument;