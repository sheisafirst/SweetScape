import React from 'react'
import Navbar from '../components/blocks/Navbar'
import Footer from '../components/blocks/Footer'
// import TableList from '../components/TableList'
import RecipesList from '../components/blocks/RecipesList'

export default function List() {
    return (
        <>
            <Navbar />
            <RecipesList />
            {/* <TableList /> */}
            <Footer />
        </>
    )
}
