export function formatPrice(price) {
    return typeof price === 'string' 
        ? price 
        : new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(price)
}

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