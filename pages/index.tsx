import Head from 'next/head';
import { useRouter } from 'next/router';
import ProductSelect from '../components/ProductSelect';
import Layout from '../components/Layout';
import { useTranslation } from '../hooks';

const Home = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const { locales, defaultLocale } = router;

  return <>
    <Head>
      {locales?.map(x => x === defaultLocale
        ? <link rel='alternate' hrefLang={x} href={`https://cookulator.vercel.app`} key={x} />
        : <link rel='alternate' hrefLang={x} href={`https://cookulator.vercel.app/${x}`} key={x} />)}
      <title>{t('grams-in-glasses')}</title>
    </Head>

    <Layout title={t('grams-in-glasses')}>
      <h1>{t('select-ingredient')}</h1>
      <ProductSelect />
    </Layout>
  </>
}

export default Home;