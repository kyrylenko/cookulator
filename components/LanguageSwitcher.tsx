import React from 'react';
import { useRouter } from 'next/router';

const LanguageSwitcher = () => {
    const router = useRouter();
    const { locale, locales, pathname, query } = router;
    //console.log('pathname: ', pathname, query);
    const path = query.slug ? `/${query.slug.toString()}` : pathname;

    const handleChange = (e: any) => router.push(path, path, { locale: e.target.value });

    return <select role='navigation' onChange={handleChange} defaultValue={locale}>
        {locales?.map(x => <option key={x} value={x} lang={x}>{x}</option>)}
    </select>
}

export default LanguageSwitcher;