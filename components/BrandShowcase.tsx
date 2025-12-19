'use client'

import { useState } from 'react'
import BrandCard from './BrandCard'

export default function BrandShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const brands = [
    {
      id: 1,
      name: 'Premium Home',
      description: 'Luxury home goods and furnishings',
      category: 'home',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 2,
      name: 'Tech Essentials',
      description: 'Cutting-edge technology products',
      category: 'tech',
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 3,
      name: 'Fashion Forward',
      description: 'Trendsetting apparel and accessories',
      category: 'fashion',
      color: 'from-pink-500 to-pink-600',
    },
    {
      id: 4,
      name: 'Outdoor Adventure',
      description: 'Gear for the great outdoors',
      category: 'outdoor',
      color: 'from-green-500 to-green-600',
    },
    {
      id: 5,
      name: 'Wellness & Health',
      description: 'Products for a healthier lifestyle',
      category: 'wellness',
      color: 'from-orange-500 to-orange-600',
    },
    {
      id: 6,
      name: 'Gourmet Kitchen',
      description: 'Premium kitchenware and culinary tools',
      category: 'kitchen',
      color: 'from-red-500 to-red-600',
    },
  ]

  const categories = [
    { id: 'all', name: 'All Brands' },
    { id: 'home', name: 'Home' },
    { id: 'tech', name: 'Tech' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'outdoor', name: 'Outdoor' },
    { id: 'wellness', name: 'Wellness' },
    { id: 'kitchen', name: 'Kitchen' },
  ]

  const filteredBrands = selectedCategory === 'all' 
    ? brands 
    : brands.filter(brand => brand.category === selectedCategory)

  return (
    <section id="brands" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Our Brand Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover quality goods from our carefully curated selection of trusted brands
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBrands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  )
}

