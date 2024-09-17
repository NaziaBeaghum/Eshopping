import React, { useContext, useState,useEffect } from 'react'
import { context } from '../Context/Cartcontext'
import './Pages.css'
import { Link } from 'react-router-dom'

const Cart = ({item}) => {
  const{state,dispatch}=useContext(context)
  const[total,setTotal]=useState(0)

  useEffect(()=>{
   calculate()
  },[state.cart])

  const calculate=()=>{
   const newtotal= state.cart.reduce((total,item)=>total+item.quantity*item.price,0)
   setTotal(newtotal)
  }
  const handleincrease=(item)=>{
      if(item.quantity<10){
       dispatch({type:"INCREASE",payload:item.id})
      }
  }

  const handledecrease=(item)=>{
    if(item.quantity>0){
      dispatch({type:"DECREASE",payload:item.id})
    }
  }

  const handledelete=(item)=>{
    if(item)
      dispatch({type:"REMOVE",payload:item})
  }
  return (
    <div className="checkout">
    <div className="cart_container">
       {state.cart?.map((item)=>(<div key={item.id} className='cart'>
        <Link to={`/singlepdt/${item?.id}`}><img src={item.images} alt="" className='product_img'/></Link>
           <ul>
           <Link to={`/singlepdt/${item?.id}`}><li className='poppins-semibold'>{item.title}</li></Link>
           <Link to={`/singlepdt/${item?.id}`}><li>${item.price}</li></Link>
           </ul>
           <span>
            <button className='quantity' onClick={()=>handleincrease(item)}>+</button>
             {item.quantity}
            <button className='quantity' onClick={()=>handledecrease(item)}>-</button>
            </span>
            <button className='add_to_cart' onClick={()=>handledelete(item)}>Remove from cart</button>
       </div>))} 
    </div>

    <div className='total_value'>
    {total?<ul>
        <li><h2>Total price:${total}</h2></li>
        
      </ul> :<p>Cart is empty</p>}
        
    </div>
    </div>
  )
}

export default Cart