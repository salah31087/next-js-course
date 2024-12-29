export default function AuthLayout({ children }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="w-full max-w-md">
                <div className="bg-gray-800 rounded-lg shadow-lg p-8">
                    {children}
                </div>
            </div>
        </div>
    )
}

