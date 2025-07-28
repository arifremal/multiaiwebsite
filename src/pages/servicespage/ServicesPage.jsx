import React from 'react'
import ServicesHero from '../../components/landing/servicespage/ServicesPageHero'
import ServicesPage1 from '../../components/landing/servicespage/ServicesPage1'
// import ServicesPage2 from '../../components/landing/servicespage/ServicesPage2'
// import ServicesPage3 from '../../components/landing/servicespage/ServicesPage3'
// import ServicesPage4 from '../../components/landing/servicespage/ServicesPage4'
// import ServicesPage5 from '../../components/landing/servicespage/ServicesPage5'
// import ServicesPage6 from '../../components/landing/servicespage/ServicesPage6'
// import ServicesPage7 from '../../components/landing/servicespage/ServicesPage7'

const ServicesPage = () => {
  return (
    <div>
        <ServicesHero />
        {/* You can add more components related to services here */}
        <ServicesPage1 />
        {/* <ServicesPage2 />

        <ServicesPage3 />
        <ServicesPage4 />
        <ServicesPage5 />
        <ServicesPage6 />
        <ServicesPage7 /> */}
    </div>
  )
}

export default ServicesPage