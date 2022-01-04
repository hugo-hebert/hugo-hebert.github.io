import App from "next/app";
import Head from "next/head";

import '../styles/index.scss'

import { createContext } from 'react';
import { fetchAPI, fetchSingles, fetchCollections } from '../lib/api';

// Store Strapi Global object in context
export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
  const { global } = pageProps;
  
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" key="description" content={global.data.attributes.meta_title}></meta>
        <title>{global.data.attributes.meta_title}</title>

        <link rel="icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <GlobalContext.Provider value={global}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps  = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const global    = await fetchAPI("/global");

  // fetch page specific data
  // Home Page
  const homePage            = await fetchSingles("/home");
  const skills              = await fetchCollections("/skills");
  const employment_history  = await fetchCollections("/employment-histories");

  // Pass the data to our page via props
  return { ...appProps, pageProps: { global, homePage, skills, employment_history } };
};

export default MyApp
