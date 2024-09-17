import React, { createContext } from 'react'
import { cartreducer } from './cartreducer'
import { useReducer } from 'react'

export const context=createContext()
 
const initialstate={cart:[]}



const Cartcontext = ({children}) => {
  const[state,dispatch]=useReducer(cartreducer,initialstate)
 
  return (
    <context.Provider value={{state,dispatch}}>
         {children}
    </context.Provider>
  )
}

export default Cartcontext