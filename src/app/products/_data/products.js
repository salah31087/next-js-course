export const products = [
    {
        id: 1,
        name: 'Minimalist Watch',
        price: 129.99,
        description: 'Simple and elegant timepiece',
        category: 'Accessories',
        createdAt: '2023-12-24'
    },
    {
        id: 2,
        name: 'Leather Wallet',
        price: 59.99,
        description: 'Handcrafted genuine leather',
        category: 'Accessories',
        createdAt: '2023-12-23'
    },
    {
        id: 3,
        name: 'Ceramic Mug',
        price: 24.99,
        description: 'Modern design coffee mug',
        category: 'Home',
        createdAt: '2023-12-22'
    },
    {
        id: 4,
        name: 'Notebook',
        price: 19.99,
        description: 'Premium paper notebook',
        category: 'Stationery',
        createdAt: '2023-12-21'
    }
]

export function getProductById(id) {
    return products.find(product => product.id === Number(id))
}

export function getProductsByCategory(category) {
    return products.filter(product => product.category === category)
}
