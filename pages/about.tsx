import React from 'react';
import Layout from '../components/Layout';
import data from '../services/data';

const About = (props: any) => {
    const { data } = props;

    return <Layout>
        <div style={{ textAlign: 'center' }}>
            <h2>{data.title}</h2>
        </div>
    </Layout>
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