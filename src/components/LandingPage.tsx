import React from 'react'
import Hero from './Hero'
import Services from './Services'
import About from './About'
import Projects from './Projects'
import Testimonials from './Testimonials'
import Contact from './Contact'

const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  )
}

export default LandingPage