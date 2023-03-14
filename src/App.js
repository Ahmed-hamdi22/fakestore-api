import React from 'react'
import About from './About'
import Nav from './Nav'
import Product from './Product'
import Slid from './Slid'
import {Routes,Route}from"react-router-dom";
import Productdetalis from './Productdetalis'
const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/"element={
          <>
           <Slid/>
      <Product/>
          </>
        }/>
        <Route path='about'element={<About/>}/>
        <Route path='product/:productId'element={<Productdetalis/>}/>
      </Routes>
     

    </div>
  )
}

export default App