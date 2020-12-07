import React, { useState, useEffect } from 'react';
import styles from '../styles/Calculator.module.css';
import IProduct from '../types/IProduct';
import { useTranslation } from '../hooks';

const Calculator = ({ product }: { product: IProduct }) => {

    useEffect(() => {
        setValue(product.glass);
    }, [product.glass])

    const [value, setValue] = useState(product.glass);

    const handleChange = (e: any) => setValue(e.target.value);

    const { t } = useTranslation();

    return <div className={styles.container}>
        <h3>{`${value} ${t('g')} = ${(value / product.glass).toFixed(2)} glasses`}</h3>
        <input type='range'
            style={{ margin: '10px' }}
            id='grams'
            name='grams'
            value={value}
            min={10}
            max={product.glass * 3}
            step={10}
            onChange={handleChange}>
        </input>
    </div>
}

export default Calculator;