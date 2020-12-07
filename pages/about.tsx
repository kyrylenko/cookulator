import React from 'react';
import Layout from '../components/Layout';

const About = (props: any) => {

    return <Layout>
        <div style={{ textAlign: 'center' }}>
            <h2>About</h2>
        </div>
    </Layout>
}

/* export function getStaticProps({ locale }: { locale: string }) {
    console.log('getStaticProps locale:  ', locale);
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time

    return {
        props: {
            data: data(locale),
        },
    }
} */

export default About;