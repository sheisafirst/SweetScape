import React from 'react'
import Navbar from '../components/Navbar'
import CardHome from '../components/CardHome'
import Footer from '../components/Footer'
import Recipes from '../components/Recipes'

export default function Home() {
    return (
        <>
            <Navbar />
            <CardHome />

            <Recipes />
            <div className='pt-10'>
                <Footer />
            </div>

        </>
    )
}
