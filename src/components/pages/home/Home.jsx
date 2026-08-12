import React from 'react'
import Hero from './Hero/Hero'
import ClientLogos from './ClientLogos/ClientLogos'
import OurServices from './OurServices/OurServices'
import WhyKloudStack from './WhyKloudStack/WhyKloudStack'
import Capabilities from './Capabilities/Capabilities'
import AllianceEcosystem from './AllianceEcosystem/AllianceEcosystem'
import Testimonials from './Testimonials/Testimonials'
import ImageAccordion from './ImageAccordion/ImageAccordion'
import FeatureTabs from './FeatureTabs/FeatureTabs'


const Home = () => {
  return (
    <>
      <Hero />
      <ClientLogos />
      <ImageAccordion />
      {/* <OurServices /> */}
      <WhyKloudStack />
      <Capabilities />
      <AllianceEcosystem />
      <Testimonials />
      <FeatureTabs />
     
    </>
  )
}

export default Home