import HeroSection       from '@/components/sections/HeroSection'
import TrustBar          from '@/components/sections/TrustBar'
import FeaturedCategories from '@/components/sections/FeaturedCategories'
import PromoBanner       from '@/components/sections/PromoBanner'
import BestSellers       from '@/components/sections/BestSellers'
import NewsletterSection from '@/components/sections/NewsletterSection'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturedCategories />
      <TrustBar />
      <BestSellers />
      <PromoBanner />
      <NewsletterSection />
    </main>
  )
}
