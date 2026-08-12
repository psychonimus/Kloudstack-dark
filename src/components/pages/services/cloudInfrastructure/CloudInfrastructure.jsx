import React from 'react'
import './CloudInfrastructure.css'
import CloudInfraHero from './cloudInfraHero/CloudInfraHero'
import InteractiveLinks from './InteractiveLinks/InteractiveLinks'

import EngagementMethod from './engagementMethod/EngagementMethod'
import BusinessOutcomes from './businessOutcomes/BusinessOutcomes'

const CloudInfrastructure = () => {
  return (
    <>
       <CloudInfraHero />
       <InteractiveLinks />
       <EngagementMethod />
       <BusinessOutcomes />
    </>
  )
}

export default CloudInfrastructure