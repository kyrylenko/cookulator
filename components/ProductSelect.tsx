import React, { useMemo } from 'react';
//@ts-ignore
import Select from 'react-select';
import { useRouter } from 'next/router';
import products from '../services/products';
import { useTranslation } from '../hooks';
import styles from '../styles/ProductSelect.module.css';

const ProductSelect = ({ selectedProduct }: { selectedProduct?: string }) => {
    const router = useRouter();
    const { locale } = router;
    const { t } = useTranslation();
    //caching the built value of options by useMemo https://app.pluralsight.com/course-player?clipId=bcc762de-e49c-4ddd-9658-d29f4f8ebe29
    const options = useMemo(() => Object.keys(products).map(p => ({ value: p, label: t(p) })), [locale]);

    const handleChange = (option: any) => router.push(option.value, option.value, { locale: locale });

    return <Select
        key={locale}//key is needed to force Select re-render on locale change
        className={styles.productselect}
        instanceId='product-select'
        name='product-select'
        onChange={handleChange}
        options={options}
        defaultValue={selectedProduct ? { value: selectedProduct, label: t(selectedProduct) } : undefined}
    />
}

export default ProductSelect;