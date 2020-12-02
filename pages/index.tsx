import Head from 'next/head';
import ProductSelect from '../components/ProductSelect';
import Layout from '../components/Layout';

export default function Home() {
  return <>
    <Head>
      <title>Home page</title>
    </Head>

    <Layout>
      <h1>Select a product</h1>
      <ProductSelect />
    </Layout>
  </>
}
