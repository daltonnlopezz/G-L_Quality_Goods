interface BrandCardProps {
  brand: {
    id: number
    name: string
    description: string
    category: string
    image: string
    color: string
  }
}

export default function BrandCard({ brand }: BrandCardProps) {
  return (
    <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
      <div className="p-8">
        <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
          {brand.image}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{brand.name}</h3>
        <p className="text-gray-600 mb-4">{brand.description}</p>
        <button className="text-primary-600 font-semibold hover:text-primary-700 flex items-center group-hover:translate-x-2 transition-transform duration-300">
          Explore Brand
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

