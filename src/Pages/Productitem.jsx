import React, { useContext } from 'react'
import './Pages.css'
import { context } from '../Context/Cartcontext'
import { Link } from 'react-router-dom'

const Productitem = ({item}) => {

  const {state,dispatch}=useContext(context)

  const handleClick=(item)=>
    {
    console.log(item)
    const itemexist=state.cart.some((pdt)=>pdt.id===item.id)
    if(itemexist)
      {
        alert("already present") 
      }
      else
      dispatch({type:"ADD_TO_CART",payload:{...item,quantity:1}}) 
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // For smooth scrolling effect
      }); 
    }

  return (
   <div className="product_container">
    <Link to={`/singlepdt/${item.id}`} >
    <img src={item.images} alt="" className='product_img'/>
    </Link>
    <ul >
    <Link to={`/singlepdt/${item.id}`}><li className='poppins-semibold'>{item.title}</li></Link>
    <Link to={`/singlepdt/${item.id}`}><li className='price'>${item.price}</li></Link>
    </ul>

     <button className='add_to_cart' onClick={()=>handleClick(item)}>ADD to Cart</button>
   </div>
  )
}

export default Productitem