"use client"
import { Link } from 'next-view-transitions'
import React from 'react'
import { usePathname } from "next/navigation"
import { cn } from '@/utils/cn'

export default function Header() {
  const pathname = usePathname()
  return (
    <header className="py-6 px-4 border-b border-gray-800">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className={cn("text-2xl font-bold", pathname === "/" && "text-blue-500")}>
          NextGen
        </Link>
        
        <ul className="flex items-center gap-8">
          <li>
            <Link href="/" className={cn("text-gray-300 transition-colors", pathname === "/" && "text-blue-500")}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className={cn("text-gray-300 transition-colors", pathname === "/shop" && "text-blue-500")}>
              Shop
            </Link>
          </li>
          <li>
            <Link href="/shop/categories" className={cn("text-gray-300 transition-colors", pathname === "/shop/categories" && "text-blue-500")}>
              Categories
            </Link>
          </li>
          <li>
            <Link 
              href="/login" 
              className={cn("bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors", pathname === "/login")}
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
