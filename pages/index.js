
import util from '../util/strapi_utils';
import Head from 'next/head';

export default function Home(pageProps) {
  const title = (util.getValue(pageProps, 'global', 'meta_title')) + ' | Home';
  
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className=''>
        <main className='main'>
        </main>
      </div>
    </>
  )
}
