import React from 'react'
import HeroSection from './features/heroSection'
import OurServices from './features/ourServices'
import OurClient from './features/ourClient'
import './style.css'
const HomePage = () => {
    return (
        <>
            <HeroSection />
            <OurServices />
            <OurClient />
        </>

    )
}

export default HomePage