import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import products, { getProduct } from '../services/products';

const Product = (props: any) => {
    const { product } = props;
    //console.log('product: ', product);
    return <Layout>
        <div style={{ textAlign: 'center' }}>
            <span>{product.name}</span>
            <span>-{product.glass}-</span>
            <span>{product.spoon}</span>

            <ul>
                {Object.keys(products).map(p => <li key={p}>
                    <Link href={`/${p}`}><a>{p}</a></Link>
                </li>)}
            </ul>

            <Link href='/'>
                <a>Back to home</a>
            </Link>
        </div>
    </Layout>
}

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

export function getStaticProps({ params, locale }: { params: any, locale: string }) {
    const { product } = params;
    //console.log('product:   ', product, getProduct(product));
    return {
        props: {
            product: {
                name: product,
                ...getProduct(product)
            },
        },
    }
}

export default Product;