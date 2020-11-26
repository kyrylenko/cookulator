interface IProduct {
    glass: number;
    spoon: number;
}
const products: { [key: string]: IProduct} = {};

products['sugar'] = { glass: 300, spoon: 18 };
products['flour'] = { glass: 180, spoon: 12 };
products['salt'] = { glass: 350, spoon: 20 };
/* const products = {
    sugar: {
        glass: 300,
        spoon: 18,
    },
    flour: {
        glass: 180,
        spoon: 12,
    },
    salt: {
        glass: 350,
        spoon: 20,
    },
}; */

export const getProduct = (key: string) => {
    return products[key];
}

export default products;