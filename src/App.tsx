import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Categories from './components/Categories'
import HowItWorks from './components/HowItWorks'
import Stats from './components/Stats'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Privacy from './pages/Privacy'

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function HomePage() {
  useReveal()
  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      <Hero />
      <Marquee />
      <Categories />
      <HowItWorks />
      <Stats />
      <CTA />
      <Footer />
    </div>
  )
}

export default function App() {
  const path = window.location.pathname
  if (path === '/privacy') return <Privacy />
  return <HomePage />
}
