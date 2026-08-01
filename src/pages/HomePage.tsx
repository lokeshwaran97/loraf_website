import { useEffect } from 'react'
import { About } from '../components/About'
import { Analytics } from '../components/Analytics'
import { Contact } from '../components/Contact'
import { CtaBanner } from '../components/CtaBanner'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Products } from '../components/Products'
import { Seo } from '../components/Seo'
import { Services } from '../components/Services'

export function HomePage() {
  useEffect(() => {
    const id = window.location.hash.replace('#', '')
    if (!id) return
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <>
      <Seo />
      <Analytics />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
