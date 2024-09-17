import React, { useContext, useRef, useState } from 'react'
import { context } from '../Context/Cartcontext'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const{state,dispatch}=useContext(context)
  const[input,setinput]=useState("")
  const navigate=useNavigate() 
 const navRef= useRef(null)
  const handlesubmit=(e)=>{
    e.preventDefault();
    if(input){
       navigate(`/search/${input}`)
       setinput("")
    }
    
  }
  return (
    <nav ref={navRef}>
        <div className='title'><Link to='/'>Estore.</Link></div>
        <div className="search_wrapper"> 
         <form onSubmit={handlesubmit}> 
         
            <input type='text'
              placeholder='Enter a product'
              className='input_field' 
              value={input}
              onChange={(e)=>setinput(e.target.value)}/>
             <img src="/search.svg" className='search'/> 
             </form> 
         </div>
          

        <span className="material-symbols-outlined">
          <Link to='/cart'>
            shopping_cart_checkout
          </Link>  
        </span>
         <span className='cart_length'>{state.cart.length}</span> 
    </nav>
  )
}

export default Navbar