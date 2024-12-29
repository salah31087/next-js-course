import ProductCard from '../ProductCard'

export default function CategorySection({ category, products }) {
    return (
        <div className="mb-12">
            <h2 className="text-2xl font-medium mb-6 text-gray-400">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}
