export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Ready to Discover Quality?
        </h2>
        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers who trust G&L Quality Goods for their premium product needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/brands"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-primary-50 transition duration-150 ease-in-out shadow-lg hover:shadow-xl"
          >
            Browse All Brands
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-primary-700 transition duration-150 ease-in-out"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}

