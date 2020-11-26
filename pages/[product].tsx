import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import Values from '../components/Values';
import products, { getProduct } from '../services/products';

const Product = (props: any) => {
    const { product } = props;
    //console.log('props: ', props);
    return <Layout>
        <div style={{ textAlign: 'center' }}>
            <h1>{product.name}</h1>

            <ul>
                {Object.keys(products).map(p => <li key={p}>
                    <Link href={`/${p}`}><a>{p}</a></Link>
                </li>)}
            </ul>

            <div>{`1 glass = ${product.glass} g`}</div>

            <Values product={product} />

            <Link href='/'>
                <a>Back to home</a>
            </Link>
        </div>
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