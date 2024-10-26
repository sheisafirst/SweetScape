import React from 'react'
import NavbarAdmin from '../components/blocks/NavbarAdmin'
import RecipesAdd from '../components/blocks/RecipesAdd'
import FooterAdmin from '../components/blocks/FooterAdmin'

export default function AddRecipe() {
    return (
        <>
            <NavbarAdmin />
            <RecipesAdd />
            <FooterAdmin />
        </>
    )
}
