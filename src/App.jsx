import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Recipes from './pages/Recipes'
import RecipeDetail from './components/blocks/DetailRecipe'
import Contact from './pages/Contact'
import Login from './pages/Login'
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
        <Route path="/recipes/:id" element={<Detail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<List />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/dashboard/add" element={<AddRecipe />} />
      </Routes>
    </BrowserRouter>
  )
}
