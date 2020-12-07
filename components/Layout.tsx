import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import LanguageSwitcher from './LanguageSwitcher';
import Link from 'next/link';
import styles from '../styles/Layout.module.css';

const Layout = ({ children, title }: any) => {
    const router = useRouter();
    const { asPath } = router;

    return <div className={styles.container}>
        <Head>
            <link rel='icon' href='/favicon.ico' />
            <meta
                name='description'
                content='Grams in glasses or grams on spoons'
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
            <LanguageSwitcher />
            {asPath !== '/' && <Link href='/'><a>Home</a></Link>}
        </header>
        <main className={styles.main}>
            {children}
        </main>
        <footer className={styles.footer}>
            <small><a target='_blank' rel='noopener noreferrer' href='mailto:kirilenko.pavlo@gmail.com'>contact us</a></small>
            <small>&copy; 2020 pak</small>
        </footer>
    </div>
}

export default Layout;