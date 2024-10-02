import React from 'react'
import Navbar from '../components/blocks/Navbar'
import CardList from '../components/ui/CardList'
import Footer from '../components/blocks/Footer'
import TableList from '../components/TableList'

export default function List() {
    return (
        <>
            <Navbar />
            {/* <CardList /> */}
            <TableList />
            <Footer />
        </>
    )
}
