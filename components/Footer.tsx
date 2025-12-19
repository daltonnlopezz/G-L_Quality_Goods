import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 border-t-2 border-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/images/logos/logo-2.png"
              alt="G&L Quality Goods"
              width={180}
              height={60}
              className="h-12 w-auto mb-4"
            />
            <p className="mb-4 max-w-md">
              Your trusted destination for premium quality goods from the world's finest brands. 
              We consolidate excellence, bringing you the best in one place.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-gold transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/brands" className="hover:text-gold transition">
                  Brands
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gold transition">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} G&L Quality Goods. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

