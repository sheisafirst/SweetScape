import React from 'react'
import Navbar from '../components/Navbar'
import CardHome from '../components/SectionHome'
import Footer from '../components/Footer'
import HeroImageHome from '../components/HeroImageHome'

export default function Home() {
    return (
        <>
            <Navbar />
            <HeroImageHome />
            <CardHome />
            <Footer />
        </>
    )
}
