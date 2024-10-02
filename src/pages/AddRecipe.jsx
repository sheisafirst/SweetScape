import React from 'react'
import Navbar from '../components/blocks/Navbar'
import HeroImageHome from '../components/blocks/HeroImageHome'
import RecipesEdit from '../components/blocks/RecipesEdit'
import Footer from '../components/blocks/Footer'

export default function AddRecipe() {
    return (
        <>
            <Navbar />
            <RecipesEdit />
            <Footer />
        </>
    )
}
