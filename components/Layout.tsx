import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

const Layout = (props: any) => {
    const router = useRouter();
    const { locale, locales, pathname } = router;

    return <div className={styles.container}>
        <header>
            <Link href='/about'><a>About</a></Link>
            <LanguageSwitcher />
        </header>
        <main className={styles.main}>
            {props.children}
        </main>
        <footer className={styles.footer}>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' '}
                <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
            </a>
        </footer>
    </div>
}

export default Layout;