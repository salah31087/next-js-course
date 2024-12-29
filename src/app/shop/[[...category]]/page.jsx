export default function ShopPage({ params }) {
    // params.category will be:
    // undefined - for /shop
    // ['clothing'] - for /shop/clothing
    // ['clothing', 'shirts'] - for /shop/clothing/shirts
    
    const categories = params.category || ['all products']
    
    return (
        <div className="p-8">
            <h1 className="text-2xl font-medium mb-4">Shop</h1>
            
            <div className="bg-gray-800 p-4 rounded-lg">
                <h2 className="text-xl mb-2">Current Category Path:</h2>
                <div className="flex gap-2 items-center text-gray-300">
                    {categories.map((cat, index) => (
                        <div key={index} className="flex items-center">
                            {index > 0 && <span className="mx-2">→</span>}
                            <span className="bg-gray-700 px-3 py-1 rounded">
                                {cat}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-8 space-y-4">
                <h3 className="text-lg">Try these example URLs:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>/shop (shows all products)</li>
                    <li>/shop/clothing</li>
                    <li>/shop/clothing/shirts</li>
                    <li>/shop/electronics/phones/accessories</li>
                </ul>
            </div>
        </div>
    )
}
