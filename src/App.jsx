import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Recipes from './pages/Recipes'
import Contact from './pages/Contact'
import Login from './pages/Login'
import ManageRecipes from './pages/ManageRecipes'
import List from './pages/List'
import Edit from './pages/Edit'
import AddRecipe from './pages/AddRecipe'
import Detail from './pages/Detail'

export default function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list" element={<List />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/add" element={<AddRecipe />} />
        <Route path="/manage" element={<ManageRecipes />} />
        <Route path="/detail" element={<Detail />} />

      </Routes>
    </BrowserRouter>
  )
}
