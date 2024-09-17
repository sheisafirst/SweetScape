import React from 'react'
import Navbar from '../components/Navbar'
import CardHome from '../components/CardHome'
import CardHomeResep from '../components/CardHomeResep'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <>
            <Navbar />
            <CardHome />
            <CardHomeResep />
            <div className='pt-10'>
                <Footer />
            </div>

        </>
    )
}
