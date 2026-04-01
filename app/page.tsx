import Header            from '@/components/layout/Header'
import Footer            from '@/components/layout/Footer'
import HeroSection       from '@/components/sections/HeroSection'
import TrustBar          from '@/components/sections/TrustBar'
import FeaturedCategories from '@/components/sections/FeaturedCategories'
import PromoBanner       from '@/components/sections/PromoBanner'
import BestSellers       from '@/components/sections/BestSellers'
import WhyShopWithUs     from '@/components/sections/WhyShopWithUs'
import NewsletterSection from '@/components/sections/NewsletterSection'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <FeaturedCategories />
        <PromoBanner />
        <BestSellers />
        <WhyShopWithUs />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}
