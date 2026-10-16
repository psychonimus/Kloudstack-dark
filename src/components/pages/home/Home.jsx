import React from 'react'
import { Helmet } from 'react-helmet'
import Hero from './Hero/Hero'
import ClientLogos from './ClientLogos/ClientLogos'
import OurServices from './OurServices/OurServices'
import WhyKloudStack from './StickySection/WhyKloudStack'
import Capabilities from './Capabilities/Capabilities'
import AllianceEcosystem from './AllianceEcosystem/AllianceEcosystem'
import Testimonials from './Testimonials/Testimonials'
import ImageAccordion from './ImageAccordion/ImageAccordion'
import FeatureTabs from './FeatureTabs/FeatureTabs'


const Home = () => {
  return (
    <>
      <Helmet>
        <title>KloudStack | Enterprise Cloud, Cybersecurity & AI Solutions</title>
        <meta name="description" content="KloudStack delivers enterprise-grade cloud infrastructure, cybersecurity, AI & analytics, and custom software solutions. Protect, scale, and modernise your digital enterprise." />
        <meta name="keywords" content="cloud infrastructure, cybersecurity, AI solutions, enterprise IT, disaster recovery, managed cloud, KloudStack" />
        <meta property="og:title" content="KloudStack | Enterprise Cloud, Cybersecurity & AI Solutions" />
        <meta property="og:description" content="KloudStack delivers enterprise-grade cloud infrastructure, cybersecurity, AI & analytics, and custom software solutions. Protect, scale, and modernise your digital enterprise." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kloudstack.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="KloudStack | Enterprise Cloud, Cybersecurity & AI Solutions" />
        <meta name="twitter:description" content="KloudStack delivers enterprise-grade cloud infrastructure, cybersecurity, AI & analytics, and custom software solutions." />
        <link rel="canonical" href="https://www.kloudstack.com/" />
      </Helmet>
      <Hero />
      <ClientLogos />
      <ImageAccordion />
      {/* <OurServices /> */}
      {/* <WhyKloudStack /> */}
      <WhyKloudStack />
      <Capabilities />
      <AllianceEcosystem />
      <Testimonials />
      <FeatureTabs />
     
    </>
  )
}

export default Home