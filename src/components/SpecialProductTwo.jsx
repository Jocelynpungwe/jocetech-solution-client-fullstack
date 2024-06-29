import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SpecialProductTwo = ({ products }) => {
  return (
    <Wrapper className="section-center">
      <div className="special-product-one">
        {products
          .filter((product) => product.name === 'ZX7 SPEAKER')
          .map((product, index) => {
            return (
              <div className="special-product-one-container" key={index}>
                <h2>{product.name}</h2>
                <Link
                  className="btn secondary-btn"
                  to={`products/${product._id}`}
                  key={product.name}
                >
                  see product
                </Link>
              </div>
            )
          })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-bottom: 3.75rem;
  .special-product-one {
    display: flex;
    align-items: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 90% center;
    height: 367px;
    margin-top: 1.5625rem;
    padding-left: 1.25rem;
  }

  h2 {
    color: #000;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }
  .btn-secondary {
    color: #000000;
    border: 1px solid #000;
    margin-top: 1.5rem;
  }
  .special-product-one-container {
    margin-left: 2.1875rem;
  }
  @media (min-width: 768px) {
    .special-product-one-container {
      margin-left: 4rem;
    }
  }
  @media (min-width: 1020px) {
    .special-product-one-container {
      margin-left: 6.25rem;
    }
  }
`

export default SpecialProductTwo
