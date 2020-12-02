import React from 'react';
import Select from 'react-select';
import { useRouter } from 'next/router';
import products from '../services/products';

const options = Object.keys(products).map(p => ({ value: p, label: p }));

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

    const handleChange = (option: any) => router.push(option.value, option.value, { locale: locale });

    return <Select
        instanceId='product-list'
        name='product-list'
        styles={customStyles}
        onChange={handleChange}
        options={options}
        defaultValue={selectedProduct ? { value: selectedProduct, label: selectedProduct } : undefined}
    />
}

export default ProductSelect;