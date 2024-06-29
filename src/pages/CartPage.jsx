import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CartContent, PageHero } from '../components'
import { useSelector, useDispatch } from 'react-redux'
import { countCartTotal } from '../features/cart/cartSlice'

const CartPage = () => {
  const { cart } = useSelector((store) => store.cart)
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  useEffect(() => {
    dispatch(countCartTotal())
  }, [cart])

  if (cart.length < 1) {
    return (
      <Wrapper className="page-100">
        <div className="empty">
          <h2>Your cart is empty</h2>
          <Link to="/products" className="btn">
            fill it
          </Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <main>
      <PageHero title="cart" />
      <Wrapper className="page">
        <CartContent />
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`

export default CartPage
