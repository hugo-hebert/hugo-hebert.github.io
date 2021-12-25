
import util from '../util/strapi_utils';
import Head from 'next/head';

export default function Home(pageProps) {
  //console.log(getValue(pageProps, 'global', 'meta_title'));
  const title = (util.getValue(pageProps, 'global', 'meta_title')) + ' | Home';
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className=''>
        <main className='main'>
          WIP. Check back soon.
          <a href="https://www.linkedin.com/in/hugo-hebert-0649b1111/" className="link external">LinkedIn <img src="/assets/img/icons/top-right.png" alt='' width="40px" height="40px"/> </a>
        </main>
      </div>
    </>
  )
}
