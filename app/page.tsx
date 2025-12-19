import Hero from '@/components/Hero'
import BrandShowcase from '@/components/BrandShowcase'
import Features from '@/components/Features'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <BrandShowcase />
      <CTA />
    </div>
  )
}

