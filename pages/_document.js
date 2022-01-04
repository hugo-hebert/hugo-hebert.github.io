// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';
import Header from './components/Header';
import Footer from './components/Footer';

import {fetchAPI, fetchSingles, fetchCollections} from '../lib/api';
import util from '../util/strapi_utils';

function MyDocument({ docProps, pageProps }) {

  const maintenance_mode  = util.getValue(pageProps, 'global', 'maintenance_mode', false);
  const header            = pageProps.header;
  const footer            = pageProps.footer;

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
        <Header data={header}/>
        <Main />
        <NextScript />
        <Footer data={footer}/>
      </body>
    </Html>
  )
};

MyDocument.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `docProps.pageProps`
  const docProps = await Document.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const global = await fetchAPI("/global");
  // fetch header and footer info
  const header = await fetchSingles('/header', ['navigation']);
  const footer = await fetchSingles("/footer", ['links']);
  
  const headerBis = await fetchSingles('/header', ['navigation']);
  // Pass the data to our page via props
  return { ...docProps, pageProps: { global, header, footer } };
}

export default MyDocument;