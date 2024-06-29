import { useEffect } from 'react'
import { Hero, Services, Contact, AdvertismentSection } from '../components'
const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <Hero />
      <AdvertismentSection />
      <Services />
      <Contact />
    </main>
  )
}

export default HomePage
