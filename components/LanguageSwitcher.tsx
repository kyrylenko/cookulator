import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const LanguageSwitcher = (props: any) => {
    const router = useRouter();
    const { locale, locales, pathname } = router;

    //console.log('pathname: ', pathname);

    return <>
        {locales?.map(x => <p key={x}>
            <Link href={pathname} locale={x}>
                <a className={locale === x ? 'active' : ''}>{x}</a>
            </Link>
        </p>)}
    </>
}

export default LanguageSwitcher;