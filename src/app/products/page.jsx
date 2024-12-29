import { products } from './_data/products'
import { groupProductsByCategory } from './_utils/products'
import CategorySection from './_components/CategorySection'

export default function Products() {
    const productsByCategory = groupProductsByCategory(products)

    return (
        <div className="py-12 px-4">
            <h1 className="text-3xl font-light mb-8 tracking-wide">Our Products</h1>
            
            {Object.entries(productsByCategory).map(([category, products]) => (
                <CategorySection 
                    key={category} 
                    category={category} 
                    products={products} 
                />
            ))}
        </div>
    )
}
