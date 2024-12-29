
export default function LoginPage() {
    return (
        <div className="space-y-6">
            <div className="text-center">
                <h1 className="text-2xl font-semibold">Login</h1>
                <p className="text-gray-400 mt-2">Welcome back! Please login to your account.</p>
            </div>

            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        className="w-full px-3 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                        placeholder="Enter your email"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        className="w-full px-3 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                        placeholder="Enter your password"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors"
                >
                    Sign In
                </button>
            </form>
        </div>
    )
}
