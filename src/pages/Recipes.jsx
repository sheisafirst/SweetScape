import React from 'react'
import Navbar from '../components/blocks/Navbar'
import Footer from '../components/blocks/Footer'
import SearchInput from '../components/ui/SearchInput'
import Products from '../components/blocks/Products'

export default function Search() {
    return (
        <>
            <Navbar />
            <SearchInput />
            <Products className="md:grid-cols-2"/>
            <Footer />
        </>
    )
}
