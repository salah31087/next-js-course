export default function ProductCard({ product }) {
    return (
        <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300">
            <div className="space-y-3">
                <span className="text-sm text-gray-400">{product.category}</span>
                <h2 className="text-xl font-medium">{product.name}</h2>
                <p className="text-gray-400 text-sm">{product.description}</p>
                <div className="pt-4">
                    <span className="text-lg font-light">{product.price}</span>
                </div>
            </div>
        </div>
    )
}
