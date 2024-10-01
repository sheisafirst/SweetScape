import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SearchInput from '../components/SearchInput'
import Products from '../components/Products'

export default function Search() {
    return (
        <>
            <Navbar />
            <SearchInput />
            <Products />
            <Footer />
        </>
    )
}
