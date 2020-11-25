import React from 'react';
import Link from 'next/link';

const About = (props: any) => {
    return <div style={{ textAlign: "center" }}>
        <h2>About page goes here</h2>
        <Link href="/">
            <a>Back to home</a>
        </Link>
    </div>
}

export default About;