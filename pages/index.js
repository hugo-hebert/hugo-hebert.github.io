
import util from '../util/strapi_utils';
import Head from 'next/head';
import get from 'lodash.get';

import Value_Statement from './components/Value_Statement';
import Skills from './components/Skills';
import Employment_History from './components/Employment_History';

export default function Home(pageProps) {
  const title = (util.getValue(pageProps, 'global', 'meta_title')) + ' | Home';

  const value_stat  = get(pageProps, 'homePage.value_statement', null);
  const skills      = get(pageProps, 'skills', null);
  const emp_hist    = get(pageProps, 'employment_history', null);
  
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className='main'>
        <section>
          {value_stat
            ? <Value_Statement title="Value Statement" value_stat={value_stat}/>
            : '' }
        </section>

        <section>
          { skills ? <Skills skills={skills} /> : ''}
        </section>

        <section>
          {emp_hist ? <Employment_History emp_hist={emp_hist} /> : ''}
        </section>
      </main>
    </>
  )
}
