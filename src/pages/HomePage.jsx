import HeroSection from '../components/HeroSection'
import WelcomeSection from '../components/WelcomeSection'
import FeaturedSection from '../components/FeaturedSection'
import './HomePage.css'

function HomePage() {
  return (
    <section className="home-page">
      <HeroSection />
      <WelcomeSection />
      <FeaturedSection />
    </section>
  )
}

export default HomePage
