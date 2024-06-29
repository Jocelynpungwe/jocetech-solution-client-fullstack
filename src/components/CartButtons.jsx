import React from 'react'
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { CiSettings } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { toggleCloseSideBar } from '../features/toggle/toggleSlice'

import { logoutUser } from '../features/user/userSlice'

const CartButtons = () => {
  const { total_items } = useSelector((store) => store.cart)
  const { user } = useSelector((store) => store.user)

  const dispatch = useDispatch()

  return (
    <Wrapper className="cart-btn-wrapper">
      <Link
        to="/cart"
        className="cart-btn"
        onClick={() => dispatch(toggleCloseSideBar())}
      >
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">{total_items}</span>
        </span>
      </Link>
      {user ? (
        <button
          type="button"
          className="auth-btn"
          onClick={() => {
            dispatch(toggleCloseSideBar())
            dispatch(logoutUser())
          }}
        >
          Logout <FaUserMinus />
        </button>
      ) : (
        <Link
          type="button"
          className="auth-btn"
          to="/register"
          onClick={() => dispatch(toggleCloseSideBar())}
        >
          Login <FaUserPlus />
        </Link>
      )}
      {user && (
        <Link
          type="button"
          className="auth-btn"
          to="/setting"
          onClick={() => dispatch(toggleCloseSideBar())}
        >
          <CiSettings />
        </Link>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1.5rem;
  align-items: center;
  width: 225px;

  .cart-btn {
    /* color: var(--clr-grey-1); */
    color: var(--actual-white);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    /* color: var(--clr-grey-1); */
    display: flex;

    align-items: center;
  }
  @media (max-width: 1020px) {
    .cart-btn {
      color: var(--actual-white);
    }
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    /* background: var(--clr-primary-5); */
    background: #d87d4a;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--primary-chocolate);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`

export default CartButtons
