export function groupProductsByCategory(products) {
    return products.reduce((acc, product) => {
        const category = product.category
        if (!acc[category]) {
            acc[category] = []
        }
        acc[category].push(product)
        return acc
    }, {})
}

export function filterProductsByPrice(products, maxPrice) {
    return products.filter(product => {
        const price = typeof product.price === 'string' 
            ? parseFloat(product.price.replace('$', ''))
            : product.price
        return price <= maxPrice
    })
}
