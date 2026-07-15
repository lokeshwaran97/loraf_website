import { About } from './components/About'
import { Analytics } from './components/Analytics'
import { Contact } from './components/Contact'
import { CtaBanner } from './components/CtaBanner'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Seo } from './components/Seo'
import { Services } from './components/Services'

export default function App() {
  return (
    <>
      <Seo />
      <Analytics />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
