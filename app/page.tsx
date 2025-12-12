"use client"

import Hero from "../components/Hero"
import useGsapHomeAnimations from "../hooks/useGsapHomeAnimations"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Footer from "../components/Footer"
import Sponsor from "../components/Sponsor"

export default function Page() {
  useGsapHomeAnimations()
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <Sponsor />
      <Footer />
    </main>
  )
}
