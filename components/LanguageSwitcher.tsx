import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const LanguageSwitcher = (props: any) => {
    const router = useRouter();
    const { locale, locales, pathname, query } = router;
    //console.log('pathname: ', pathname, query);

    const path = query.product ? `/${query.product.toString()}` : pathname;

    return <>
        {locales?.map(x => <p key={x}>
            <Link href={path} locale={x}>
                <a className={locale === x ? 'active' : ''}>{x}</a>
            </Link>
        </p>)}
    </>
}

export default LanguageSwitcher;