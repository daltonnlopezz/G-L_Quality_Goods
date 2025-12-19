'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/images/logos/logo-2.png"
                alt="G&L Quality Goods"
                width={180}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition">
              Home
            </Link>
            <Link href="/brands" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition">
              Brands
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/brands"
              className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Brands
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

