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

    return <div style={{ marginTop: '30px', marginBottom: '30px' }}>
        <div>
            <span>{value} g</span>
            <span> = </span>
            <span>{(value / product.glass).toFixed(2)} glasses</span>
        </div>
        <input type='range'
            style={{ margin: '10px' }}
            id='grams'
            name='grams'
            value={value}
            min={10}
            max={product.glass * 3}
            step={10}
            autoFocus={true}
            onChange={handleChange}>
        </input>
    </div>
}

export default Values;