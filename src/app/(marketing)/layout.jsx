import Link from 'next/link'

export default function MarketingLayout({ children }) {
    return (
        <div>
            {/* Marketing Navigation */}
            <nav className="bg-gray-800 border-b border-gray-700">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex space-x-6 text-sm">
                        <Link 
                            href="/about" 
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            About Us
                        </Link>
                        <Link 
                            href="/contact" 
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Contact
                        </Link>
                        <Link 
                            href="/blog" 
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Blog
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto">
                {children}
            </main>

            {/* Marketing Footer */}
            <footer className="bg-gray-800 border-t border-gray-700 mt-12">
                <div className="container mx-auto px-4 py-6">
                    <p className="text-gray-400 text-sm text-center">
                        © 2024 Your Company. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}
