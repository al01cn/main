"use client"

import Hero from "../components/Hero"
import useGsapHomeAnimations from "../hooks/useGsapHomeAnimations"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Partners from "../components/Partners"
import Footer from "../components/Footer"
import Sponsor from "../components/Sponsor"
import Ads from "../components/Ads"

export default function Page() {
  useGsapHomeAnimations()
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <Partners />
      <Sponsor />
      <Ads />
      <Footer />
    </main>
  )
}
