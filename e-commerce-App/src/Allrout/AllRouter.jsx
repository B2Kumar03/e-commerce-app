import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainBody from '../pages/MainBody'
import ProductDetails from '../pages/ProductDetails'
import Product from '../pages/Product'
import Login from '../pages/Login'
import Cart from '../pages/Cart'
import PrivateRouter from './PrivateRouter';

const AllRouter = () => {
 
  return (
    <>
    <Routes>
       <Route path='/' element={<PrivateRouter>
        <MainBody/>
       </PrivateRouter>}/>
       <Route path='/product' element={<PrivateRouter>
        <Product/>
       </PrivateRouter>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/product/:id' element={<ProductDetails/>}/>
    </Routes>
    </>
  )
}

export default AllRouter