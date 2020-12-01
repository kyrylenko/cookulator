import React, { useState, useEffect } from 'react';
import styles from '../styles/Calculator.module.css';
import IProduct from '../types/IProduct';

const Calculator = ({ product }: { product: IProduct }) => {
    //console.log('product: ', product);
    /* useEffect(() => {
        setValue(product.glass);
    }, [product.glass]) */

    const [value, setValue] = useState(product.glass);

    const handleChange = (e: any) => {
        setValue(e.target.value);
    };

    return <div className={styles.container}>
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

export default Calculator;