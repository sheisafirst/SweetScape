import React from 'react'
import Navbar from '../components/blocks/Navbar'
import SectionHome from '../components/blocks/SectionHome'
import Footer from '../components/blocks/Footer'
import HeroImageHome from '../components/blocks/HeroImageHome'

export default function Home() {
    return (
        <>
            <Navbar />
            <HeroImageHome />
            <SectionHome />
            <Footer />
        </>
    )
}
