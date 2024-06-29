import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const OrderInfo = ({ image, name, price, id, amount, colors }) => {
  return (
    <Wrapper>
      <div className="container">
        <img src={image[0]} alt={name} />
        <Link to={`/products/${id}`} className="link">
          <FaSearch />
        </Link>
      </div>
      <section className="wrapper">
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
        {amount && <p>Amount: {amount}</p>}
        {colors && colors.length > 0 && (
          <div className="color-container">
            {colors.map((color, index) => {
              return (
                <div key={index} className="color-container">
                  <div
                    style={{ backgroundColor: color }}
                    className="color-span"
                  ></div>
                </div>
              )
            })}
          </div>
        )}
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
    width: 100%;
  }
  img {
    display: block;
    object-fit: cover;
    width: 100%;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--primary-900);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--black);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }

  h5,
  p {
    text-align: center;
    opacity: 0.5;
  }

  h5 {
    font-size: 1rem;
    margin: 5px 0;
  }

  p {
    margin: 0 0 5px 0;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .color-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .color-span {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 2px solid var(--grey-50);
  }
`

export default OrderInfo
