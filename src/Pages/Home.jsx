import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Pages.css'
import Productitem from './Productitem'


const Home = () => {
   const[product,setProduct]=useState([])
   const[page,setPage]=useState(1)
   const [totalpages,setTotalpages]=useState(0)
  //  const itemperpage=20
  //  const newtotal=Math.ceil(total/itemperpage)
  //  console.log(newtotal)

   useEffect(()=>{
    axios.get(`https://dummyjson.com/products?limit=20&skip=${page*10-10}`)
    .then((response)=>{setProduct(response.data.products)
                      setTotalpages(response.data.total/20)
                      })
   },
   [page])
   

   const handlepagenumber=(value)=>{
     setPage(value)
   }
   const handlepagePrev=()=>{
    if(page>1&& page<=10)
    {
      setPage((prev)=>prev-1)
    }
   }

   const handlepageNext=()=>{
    if(page>=1 && page< 10){
      setPage((prev)=>prev+1)
    }
   }
   console.log(page)
  return (
    <div className="container">
      <div className="home_container">
            {
               product?.map((item)=>(<div key={item.id}>
                 <Productitem item={item}/>
               </div>))
             }
        </div>
        <div className="page_number">
          <button onClick={handlepagePrev} className={page<=1?"fade_out":""}>Prev</button>
        {[...Array(10)].map((_,i)=>(<span className={page===i+1?"color_change":"media"} onClick={()=>handlepagenumber(i+1)}>{i+1}</span>))}
        <button onClick={handlepageNext} className={page>=10?"fade_out":""}>Next</button>
        
      </div>
  
    </div>
  )
}

export default Home