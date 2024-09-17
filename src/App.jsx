import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { Route,Routes } from 'react-router-dom'
import Cart from './Pages/Cart'
import Searcheditem from './Pages/Searcheditem'
import Singleproduct from './Pages/Singleproduct'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/cart' element={<Cart/>}/>
         <Route path="/search/:text" element={<Searcheditem/>}/>
         <Route path='/singlepdt/:id' element={<Singleproduct/>}/>
      </Routes>
    </div>
  )
}

export default App