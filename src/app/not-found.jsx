"use client"

import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4">
            <div className="text-center space-y-6">
                <div className="space-y-2">
                    <h1 className="text-9xl font-bold text-gray-700">404</h1>
                    <h2 className="text-3xl font-light tracking-wider text-gray-400">Page Not Found</h2>
                </div>
                
                <p className="text-gray-500 max-w-lg mx-auto">
                    The page you're looking for doesn't exist or has been moved. 
                    Check the URL or try navigating back to the homepage.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                    <Link 
                        href="/"
                        className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    >
                        Go Home
                    </Link>
                    <button 
                        onClick={() => window.history.back()}
                        className="px-8 py-3 border border-gray-700 text-gray-400 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                    >
                        Go Back
                    </button>
                </div>

                <div className="mt-12 text-gray-600 flex items-center justify-center space-x-4">
                    <Link href="/products" className="hover:text-gray-400 transition-colors">Products</Link>
                    <span>•</span>
                    <Link href="/blog" className="hover:text-gray-400 transition-colors">Blog</Link>
                    <span>•</span>
                    <Link href="/contact" className="hover:text-gray-400 transition-colors">Contact</Link>
                </div>
            </div>
        </div>
    )
}
