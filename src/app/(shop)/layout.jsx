import Link from 'next/link'

export default function ShopLayout({ children }) {
    return (
        <div>
            {/* Shop Navigation */}
            <nav className="bg-gray-800 border-b border-gray-700">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex space-x-6 text-sm">
                        <Link 
                            href="/products" 
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            All Products
                        </Link>
                        <Link 
                            href="/categories" 
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Categories
                        </Link>
                        <Link 
                            href="/deals" 
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Special Deals
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto">
                {children}
            </main>
        </div>
    )
}
