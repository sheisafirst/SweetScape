import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import pages
import Home from './pages/Home'
import Search from './pages/Search'
import Contact from './pages/Contact'
import AddRecipe from './pages/AddRecipe'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/addRecipe" element={<AddRecipe />} />
      </Routes>
    </BrowserRouter>
  )
}
