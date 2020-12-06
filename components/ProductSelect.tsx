import React from 'react';
//@ts-ignore
import Select from 'react-select';
import { useRouter } from 'next/router';
import products from '../services/products';
import { useTranslation } from '../hooks';

console.log('ProductSelect: above component');


const customStyles = {
    container: () => ({
        width: '90%',
        position: 'relative',
        boxSizing: 'border-box'
    }),
}

const ProductSelect = ({ selectedProduct }: { selectedProduct?: string }) => {
    const router = useRouter();
    const { locale } = router;

    const { t } = useTranslation();
    const options = Object.keys(products).map(p => ({ value: p, label: t(p) }));

    const handleChange = (option: any) => router.push(option.value, option.value, { locale: locale });

    console.log('ProductSelect: render, options: ', options);

    return <Select
        instanceId='product-list'
        name='product-list'
        styles={customStyles}
        onChange={handleChange}
        options={options}
        defaultValue={selectedProduct ? { value: selectedProduct, label: t(selectedProduct) } : undefined}
    />
}

export default ProductSelect;