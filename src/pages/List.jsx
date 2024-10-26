import React from 'react'
import NavbarAdmin from '../components/blocks/NavbarAdmin'
import FooterAdmin from '../components/blocks/FooterAdmin'
import RecipesList from '../components/blocks/RecipesList'

export default function List() {
    return (
        <>
            <NavbarAdmin />
            <RecipesList />
            <FooterAdmin />
        </>
    )
}
