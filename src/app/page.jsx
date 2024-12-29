import React from 'react'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Welcome to <span className="text-blue-500">NextGen</span> Learning
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover the power of modern web development with our comprehensive courses
            and hands-on learning experience.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/courses" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-all"
            >
              Get Started
              <FaArrowRight />
            </Link>
            <Link 
              href="/about" 
              className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-4">Interactive Learning</h3>
            <p className="text-gray-300">
              Engage with real-world projects and hands-on exercises to master web development.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-4">Expert Guidance</h3>
            <p className="text-gray-300">
              Learn from industry professionals with years of experience in modern web technologies.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-4">Community Support</h3>
            <p className="text-gray-300">
              Join a thriving community of developers and learn together through collaboration.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
