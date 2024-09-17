import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { context } from '../Context/Cartcontext'
import { Link } from 'react-router-dom'


const Searcheditem = () => {
  const{text}=useParams()
  const{state,dispatch}=useContext(context)
  const[searchitem,setsearchitem]=useState(null)
  console.log(text)
    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/search?q=${text}`)
        .then((res)=>setsearchitem(...res.data.products))
    },[])
    // console.log(searchitem.description)

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
      }
  return (
    <div className="product_container margin">
       <Link to={`/singlepdt/${searchitem?.id}`}><img src={searchitem?.images} alt="" className='product_img'/></Link>
    <ul >
    <Link to={`/singlepdt/${searchitem?.id}`}><li className='poppins-semibold'>{searchitem?.title}</li></Link>
    <Link to={`/singlepdt/${searchitem?.id}`}><li className='price'>${searchitem?.price}</li></Link>
    </ul>
     <button className='add_to_cart' onClick={()=>handleClick(searchitem)}>ADD to Cart</button>
   </div>
    
  )
}

export default Searcheditem