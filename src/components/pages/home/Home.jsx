import React from 'react'
import Hero from './Hero/Hero'
import ClientLogos from './ClientLogos/ClientLogos'
import OurServices from './OurServices/OurServices'
import WhyKloudStack from './WhyKloudStack/WhyKloudStack'
import Capabilities from './Capabilities/Capabilities'
import AllianceEcosystem from './AllianceEcosystem/AllianceEcosystem'
import Testimonials from './Testimonials/Testimonials'

const Home = () => {
  return (
    <>
      <Hero />
      <ClientLogos />
      <OurServices />
      <WhyKloudStack />
      <Capabilities />
      <AllianceEcosystem />
      <Testimonials />
    </>
  )
}

export default Home