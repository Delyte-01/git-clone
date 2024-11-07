import React from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Product from './Components/Product'
import ProductDetails from './Components/ProductDetails'

function App() {


  return (
    <>
    <Routes>
      <Route  path='/products' element={<Product />}/>
      <Route  path='/products/:id' element={<ProductDetails />}/>
    </Routes>
    </>
  )
}

export default App
