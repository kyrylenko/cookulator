import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import Values from '../components/Calculator';
import products, { getProduct } from '../services/products';
import IProduct from '../types/IProduct';
import ProductSelect from '../components/ProductSelect';

export const siteTitle = 'grams in glasses';

const Product = ({ product }: { product: IProduct }) => {
    const router = useRouter();
    const { locales, defaultLocale } = router;

    return <Layout title={`${siteTitle}: ${product.name}`}>
        <Head>
            {locales?.map(x => x === defaultLocale
                ? <link rel='alternate' hrefLang={x} href={`https://cookulator.vercel.app/${product.name}`} key={x} />
                : <link rel='alternate' hrefLang={x} href={`https://cookulator.vercel.app/${x}/${product.name}`} key={x} />)}
            <title>{`${siteTitle}: ${product.name}`}</title>
        </Head>

        <ProductSelect selectedProduct={product.name} />

        <div>{`${product.glass} g = 1 glass`}</div>

        <Values product={product} />
    </Layout>
}
//ref: https://nextjs.org/docs/advanced-features/i18n-routing#dynamic-getstaticprops-pages
export function getStaticPaths({ locales }: { locales: Array<string> }) {
    const paths = locales.flatMap((locale: string) => {
        return Object.keys(products).map(slug => ({
            params: {
                slug,
            },
            locale: locale
        }))
    });
    //console.log('paths: ', paths);
    return {
        paths: paths,
        fallback: false
    }
}

export function getStaticProps({ params, locale }: { params: any, locale: string }) {
    const { slug } = params;
    console.log('params:   ', params, locale);
    return {
        props: {
            product: getProduct(slug),
        },
    }
}

export default Product;