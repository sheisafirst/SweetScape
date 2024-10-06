import React from 'react'
import Navbar from '../components/blocks/Navbar'
import RecipesEdit from '../components/blocks/RecipesAdd'
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
