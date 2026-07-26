import { createSlice } from '@reduxjs/toolkit'

export const addToCartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[],
  },
  reducers: {
    addtocart: (state,action) => {
      let item = state.value.find((item)=>item.title==action.payload.title)

      if(item){
        item.quantity+=action.payload.quantity ||1
      }else{

        state.value.push(action.payload)
      }

      localStorage.setItem("cart", JSON.stringify(state.value))
    },

    increment: (state,action) =>{
      state.value.map((item,index)=>{
        if(item.title==action.payload.title){
          item.quantity+=1
        }
      })
      localStorage.setItem("cart", JSON.stringify(state.value))
    },
    decrement: (state,action) =>{
      state.value.map((item,index)=>{
        if(item.title==action.payload.title){
          item.quantity-=1
          if(item.quantity<1){
            state.value.splice(index,1)
          }
        }
      })
      localStorage.setItem("cart", JSON.stringify(state.value))
    },
    removeItem: (state,action) =>{
      state.value.map((item,index)=>{
        if(item.title==action.payload.title){
          state.value.splice(index,1)
        }
      })
      localStorage.setItem("cart", JSON.stringify(state.value))
    }

  },
})


export const { addtocart,increment,decrement,removeItem } = addToCartSlice.actions

export default addToCartSlice.reducer
