import React, { useState, useEffect } from 'react';
import IProduct from '../types/IProduct';

const Values = ({ product }: { product: IProduct }) => {
    //console.log('product: ', product);

    /* useEffect(() => {
        setValue(product.glass);
    }, [product.glass]) */

    const [value, setValue] = useState(product.glass);

    const handleChange = (e: any) => {
        setValue(e.target.value);
    };

    return <div>
        <input type='number'
            value={value}
            min={10}
            max={1000}
            step={10}
            autoFocus={true}
            onChange={handleChange}>
        </input>
        <span> g</span>
        <p>=</p>
        <span>{(value / product.glass).toFixed(2)}</span>
        <span> glass</span>
    </div>
}

export default Values;