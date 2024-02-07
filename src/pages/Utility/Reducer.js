
import { useReducer } from 'react'
import {Type} from './action.type'
// const [state, dispatch] = useReducer(reducer, initialstate, init);

export const initialstate = {
    basket:[]
}

export const Reducer = (state, action) => {
    console.log(state);
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      // check if the item existes
          const existingItem = state.basket.find((item) => item.id === action.item.id)

          if (!existingItem) {
              return {
                ...state,
                basket: [...state.basket, {...action.item,amount:1}]
              };
          } else {
              const updatedBasket = state.basket.map((item) => {
                 return item.id === action.item.id
                   ? { ...item, amount: item.amount + 1 }
                   : item;
              })
              return {
                  ...state,
                  basket : updatedBasket
              }
          }
      case Type.REMOVE_FROM_BASKET:
          const index = state.basket.findIndex(item => item.id === action.id)
          
          let newBasket = [...state.basket]

          console.log(newBasket);

              if (newBasket[index].amount > 1) {
                  newBasket[index]={...newBasket[index],amount:newBasket[index].amount - 1}
              } else {
                  newBasket.splice(index,1)
              }
      
          return {
              ...state,
              basket: newBasket
          }

    default:
      return state;
    }
    
};

