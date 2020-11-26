import IProduct from '../types/IProduct';

const products: Record<string, IProduct> = {
    sugar: {
        name: 'sugar',
        glass: 300,
        spoon: 18,
    },
    flour: {
        name: 'flour',
        glass: 180,
        spoon: 12,
    },
    salt: {
        name: 'salt',
        glass: 350,
        spoon: 20,
    },
};

export const getProduct = (key: string) => {
    return products[key];
}

export default products;