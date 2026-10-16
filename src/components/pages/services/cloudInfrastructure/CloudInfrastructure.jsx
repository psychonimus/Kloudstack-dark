import React from 'react'
import { Helmet } from 'react-helmet'
import './CloudInfrastructure.css'
import CloudInfraHero from './cloudInfraHero/CloudInfraHero'
import InteractiveLinks from './InteractiveLinks/InteractiveLinks'

import EngagementMethod from './engagementMethod/EngagementMethod'
import BusinessOutcomes from './businessOutcomes/BusinessOutcomes'

const CloudInfrastructure = () => {
  return (
    <>
       <Helmet>
         <title>Cloud Infrastructure Services | KloudStack</title>
         <meta name="description" content="KloudStack delivers enterprise cloud infrastructure engineering — hybrid cloud architecture, AWS/Azure migrations, IaC automation, and 24/7 managed cloud operations for scalable, secure business outcomes." />
         <meta name="keywords" content="cloud infrastructure, hybrid cloud, AWS migration, Azure, IaC, managed cloud, cloud architecture, enterprise cloud, KloudStack" />
         <meta property="og:title" content="Cloud Infrastructure Services | KloudStack" />
         <meta property="og:description" content="Enterprise cloud infrastructure engineering — hybrid cloud, AWS/Azure migrations, IaC automation, and managed cloud operations." />
         <meta property="og:type" content="website" />
         <meta property="og:url" content="https://www.kloudstack.com/services/cloud-infrastructure" />
         <meta name="twitter:card" content="summary_large_image" />
         <meta name="twitter:title" content="Cloud Infrastructure Services | KloudStack" />
         <meta name="twitter:description" content="Enterprise cloud infrastructure engineering — hybrid cloud, AWS/Azure migrations, IaC, and managed cloud operations." />
         <link rel="canonical" href="https://www.kloudstack.com/services/cloud-infrastructure" />
       </Helmet>
       <CloudInfraHero />
       <InteractiveLinks />
       <EngagementMethod />
       <BusinessOutcomes />
    </>
  )
}

export default CloudInfrastructure