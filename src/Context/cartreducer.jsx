 export const cartreducer=(state,action)=>{
  switch(action.type){
    
    case "ADD_TO_CART":
      console.log(action.payload)
        return{
           ...state,cart:[...state.cart,action.payload]
        }
        
      case "INCREASE":
        return {
        ...state,cart:state.cart.map((item)=>(item.id===action.payload)?{...item,quantity:item.quantity+1}:item)
        }

      case "DECREASE":
        return{
          ...state,cart:state.cart.map((item)=>(item.id===action.payload)?{...item,quantity:item.quantity-1}:item)
        }

      case "REMOVE":
        return{
         ...state, cart:state.cart.filter((item)=>(item.id!=action.payload.id))
        }
      default:
        return state
  }
}