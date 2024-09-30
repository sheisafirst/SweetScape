import React from 'react'
import Navbar from '../components/Navbar'
import HeroImageHome from '../components/HeroImageHome'
import RecipesEdit from '../components/RecipesEdit'
import Footer from '../components/Footer'

export default function AddRecipe() {
    return (
        <>
            <Navbar />
            <RecipesEdit />
            <Footer />
        </>
    )
}
