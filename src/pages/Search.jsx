import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SearchInput from '../components/SearchInput'
import Recipes from '../components/Recipes'

export default function Search() {
    return (
        <>
            <Navbar />
            <SearchInput />
            <Recipes />
            <Footer />
        </>
    )
}
