import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import products from '../services/products';

export default function Home() {
  return <>
    <Head>
      <title>Home page</title>
    </Head>

    <Layout>
      <h1>Select a product</h1>
      <ul>
        {Object.keys(products).map(p => <li key={p}>
          <Link href={`/${p}`}><a>{p}</a></Link>
        </li>)}
      </ul>
    </Layout>
  </>
}
