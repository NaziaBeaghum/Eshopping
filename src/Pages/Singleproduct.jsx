import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../App.css'
import { useContext } from 'react'
import { context } from '../Context/Cartcontext'


const Singleproduct = ({}) => {
    const {id}=useParams()
    const[singlepdt,setsinglepdt]=useState({})
    console.log(id)
    useEffect(()=>{
     axios.get(`https://dummyjson.com/products/${id}`)
     .then((res)=>setsinglepdt(res.data))
    },[])
    console.log(singlepdt)
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
      }
  
  return (
    <div className="container">
    <div className="singlepdt_container poppins-extralight">
        <img src={singlepdt.images} alt="" className='singleproduct_img'/> 
       <ul>
        <li><h4>{singlepdt.title}</h4></li>
       <li> <p>{singlepdt.description}</p></li>
       <button className='rating_btn'><p>{singlepdt.rating}</p><span className="material-symbols-sharp">star</span></button>
        <li className='poppins-semibold'>${singlepdt.price}</li>
        <li>{singlepdt.availabilityStatus}</li>
        <li>ratings:{singlepdt.rating}&reviews:{singlepdt.reviews?.length}</li>
        <li><span>
          discountPercentage:{singlepdt.discountPercentage}  ,
          minimumOrderQuantity:{singlepdt.minimumOrderQuantity}
        </span></li>
        <li style={{fontSize:"1rem"}}><p className='poppins-semibold '>Top Reviews </p></li>
        {singlepdt.reviews?.map((item)=>
          (
          <ul className='reviews'>
            <li className='review_name poppins-semibold'><p>{item.reviewerName}</p></li>
            <li><p>{item.reviewerEmail}</p></li>
            <li><p>{item.date}</p></li>
            <li><p>rating:{item.rating}</p></li>
            <li><p>{item.comment}</p></li>
            </ul>))}
            <li>{singlepdt.shippingInformation}</li> 
            <li>{singlepdt.warrantyInformation}</li> 
       </ul>
    </div>
    <button className='add_to_cart'  style={{ margin:"10px auto",display:"block"}} onClick={()=>handleClick(singlepdt)}>ADD to Cart</button>

    </div>
  )
}

export default Singleproduct