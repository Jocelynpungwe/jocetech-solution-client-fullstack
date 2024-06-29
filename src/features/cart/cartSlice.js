import { createSlice } from '@reduxjs/toolkit'

import {
  getCartFromLocalStorage,
  addCartToLocalStoreage,
  removeCartFromLocalStorage,
} from '../../utils/localStorage'

const initialState = {
  cart: getCartFromLocalStorage() || [],
  total_items: 0,
  total_amount: 0,
  tax: 377,
  shipping_fee: 534,
}

const cartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const { id, mainColor: color, amount, product } = payload
      const tempItem = state.cart.find((i) => i.id === id + color)

      if (tempItem) {
        const tempCart = state.cart.map((cartItem) => {
          if (cartItem.id === id + color) {
            let newAmount = cartItem.amount + amount
            if (newAmount > cartItem.max) {
              newAmount = cartItem.max
            }
            return { ...cartItem, amount: newAmount }
          } else {
            return cartItem
          }
        })
        state.cart = tempCart
      } else {
        const newItem = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.image[0],
          price: product.price,
          max: product.inventory,
          productId: id,
        }

        state.cart = [...state.cart, newItem]
        addCartToLocalStoreage(state.cart)
      }
    },
    removeItem: (state, { payload }) => {
      const tempCart = state.cart.filter((item) => item.id !== payload)
      state.cart = tempCart
      addCartToLocalStoreage(state.cart)
    },
    toggleAmount: (state, { payload }) => {
      const { id, value } = payload

      const tempCart = state.cart.map((item) => {
        if (item.id === id) {
          if (value === 'inc') {
            let newAmount = item.amount + 1
            if (newAmount > item.max) {
              newAmount = item.max
            }

            return { ...item, amount: newAmount }
          }
          if (value === 'dec') {
            let newAmount = item.amount - 1
            if (newAmount < 1) {
              newAmount = 1
            }

            return { ...item, amount: newAmount }
          }
        }
        return item
      })

      state.cart = tempCart
      addCartToLocalStoreage(state.cart)
    },

    clearCart: (state) => {
      state.cart = []
      state.total_items = 0
      state.total_amount = 0
      removeCartFromLocalStorage()
    },
    countCartTotal: (state) => {
      const { total_items, total_amount } = state.cart.reduce(
        (total, cartItem) => {
          const { amount, price } = cartItem
          total.total_items += amount
          total.total_amount += price * amount
          return total
        },
        { total_items: 0, total_amount: 0 }
      )

      state.total_items = total_items
      state.total_amount = total_amount
    },
  },
})

export const {
  addToCart,
  removeItem,
  toggleAmount,
  clearCart,
  countCartTotal,
} = cartSlice.actions
export default cartSlice.reducer
