export default function DocsPage({ params }) {
    // params.slug will be an array of segments
    // For example, if the URL is /docs/features/auth/login
    // params.slug will be ['features', 'auth', 'login']
    return (
        <div className="p-8">
            <h1 className="text-2xl font-medium mb-4">Documentation</h1>
            <div className="bg-gray-800 p-4 rounded-lg">
                <h2 className="text-xl mb-2">Current Path Segments:</h2>
                <pre className="bg-gray-700 p-4 rounded font-mono text-sm">
                    {JSON.stringify(params.slug, null, 2)}
                </pre>
            </div>
            
            <div className="mt-8 space-y-4">
                <h3 className="text-lg">Try these example URLs:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>/docs/getting-started</li>
                    <li>/docs/features/authentication</li>
                    <li>/docs/api/endpoints/users</li>
                </ul>
            </div>
        </div>
    )
}
