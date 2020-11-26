import React from 'react';
import Link from 'next/link';
import data from '../services/data';

const About = (props: any) => {
    const { data } = props;

    return <div style={{ textAlign: 'center' }}>
        <h2>{data.title}</h2>
        <h3>{data.content}</h3>
        <Link href='/'>
            <a>Back to home</a>
        </Link>
    </div>
}

export function getStaticProps({ locale }: { locale: string }) {
    console.log('getStaticProps locale:  ', locale);
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time

    return {
        props: {
            data: data(locale),
        },
    }
}

export default About;