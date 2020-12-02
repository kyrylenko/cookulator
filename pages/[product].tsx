import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Select from 'react-select';
import Layout from '../components/Layout';
import Values from '../components/Calculator';
import products, { getProduct } from '../services/products';
import IProduct from '../types/IProduct';

export const siteTitle = 'grams in glasses';

const options = Object.keys(products).map(p => ({ value: p, label: p }));

const customStyles = {
    container: () => ({
        width: '90%',
        position: 'relative',
        boxSizing: 'border-box'
    }),
}

const Product = (props: any) => {
    const router = useRouter();
    const { locale, locales, defaultLocale } = router;
    const { product }: { product: IProduct } = props;

    const handleChange = (option: any) => router.push(option.value, option.value, { locale: locale });

    return <Layout title={`${siteTitle}: ${product.name}`}>
        <Head>
            {locales?.map(x => x === defaultLocale
                ? <link rel='alternate' hrefLang={x} href={`https://cookulator.vercel.app/${product.name}`} key={x} />
                : <link rel='alternate' hrefLang={x} href={`https://cookulator.vercel.app/${x}/${product.name}`} key={x} />)}
            <title>{`${siteTitle}: ${product.name}`}</title>
        </Head>

        <Select
            instanceId='product-list'
            name='product-list'
            isSearchable={true}
            styles={customStyles}
            onChange={handleChange}
            options={options}
            defaultValue={{ value: product.name, label: product.name }}
        />

        <div>{`${product.glass} g = 1 glass`}</div>

        <Values product={product} />
    </Layout>
}
//ref: https://nextjs.org/docs/advanced-features/i18n-routing#dynamic-getstaticprops-pages
export function getStaticPaths({ locales }: { locales: Array<string> }) {
    const paths = locales.flatMap((locale: string) => {
        return Object.keys(products).map(product => ({
            params: {
                product,
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

export function getStaticProps({ params }: { params: any }) {
    const { product } = params;
    //console.log('params:   ', params);
    return {
        props: {
            product: getProduct(product),
        },
    }
}

export default Product;