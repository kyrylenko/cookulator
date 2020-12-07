import React from 'react';
import Head from 'next/head';
import LanguageSwitcher from './LanguageSwitcher';
import Link from 'next/link';
import styles from '../styles/Layout.module.css';

const Layout = ({ children, title }: any) => {
    return <div className={styles.container}>
        <Head>
            <link rel='icon' href='/favicon.ico' />
            <meta
                name='description'
                content='Learn how to build a personal website using Next.js'
            />
            {/* <meta
                property='og:image'
                content={`https://og-image.now.sh/${encodeURI(
                    title
                )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            /> */}
            <meta name='og:title' content={title} />
            {/* <meta name='twitter:card' content='summary_large_image' /> */}
        </Head>
        <header className={styles.header}>
            <Link href='/'><a>Home</a></Link>
            <LanguageSwitcher />
        </header>
        <main className={styles.main}>
            {children}
        </main>
        {/* <footer className={styles.footer}>

        </footer> */}
    </div>
}

export default Layout;