import React from 'react'
import { Helmet } from 'react-helmet'
import AboutHero from './aboutHero/AboutHero'
import VisionSection from './visionSection/VisionSection'
import LeadershipSection from './leadershipSection/LeadershipSection'

const About = () => {
  return (
    <>
        <Helmet>
          <title>About KloudStack | Enterprise IT Leadership & Vision</title>
          <meta name="description" content="Learn about KloudStack — our mission, leadership team, and vision for enterprise digital transformation through cloud, cybersecurity, and AI innovation." />
          <meta name="keywords" content="about KloudStack, enterprise IT company, leadership team, digital transformation, cloud security vision" />
          <meta property="og:title" content="About KloudStack | Enterprise IT Leadership & Vision" />
          <meta property="og:description" content="Learn about KloudStack — our mission, leadership team, and vision for enterprise digital transformation through cloud, cybersecurity, and AI innovation." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.kloudstack.com/about" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="About KloudStack | Enterprise IT Leadership & Vision" />
          <meta name="twitter:description" content="Learn about KloudStack — our mission, leadership team, and vision for enterprise digital transformation." />
          <link rel="canonical" href="https://www.kloudstack.com/about" />
        </Helmet>
        <AboutHero />
        <VisionSection />
        <LeadershipSection />
       
    </>
  )
}

export default About