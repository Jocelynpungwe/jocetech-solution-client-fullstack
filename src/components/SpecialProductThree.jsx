import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SpecialProductThree = ({ products }) => {
  return (
    <Wrapper className="section-center">
      <div className="homepage-product">
        <div className="special-product-two"></div>
        <div className="homepage-product-container">
          {products
            .filter((product) => product.name === 'YX1 WIRELESS EARPHONES')
            .map((product) => {
              return (
                <div className="homepage-product-info" key={product.name}>
                  <h2>YX1 EARPHONES</h2>
                  <Link
                    className="btn secondary-btn"
                    to={`products/${product._id}`}
                  >
                    see product
                  </Link>
                </div>
              )
            })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .homepage-product {
    display: grid;
    margin-top: 1.5rem;
    margin-bottom: 3.125rem;
  }

  img {
    width: 100%;
    height: 200px;
  }

  .homepage-product-container {
    text-align: left;
    width: 100%;
    height: 200px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #f1f1f1;
    margin-top: 1.25rem;
    padding-top: 2.5625rem;
    padding-left: 1.25rem;
  }
  @media (min-width: 768px) {
    .homepage-product {
      grid-template-columns: 1fr 1fr;
    }
    .homepage-product-container {
      margin-top: 0;
    }
    .homepage-product-info {
      margin-left: 2.5625rem;
    }
  }
  @media (min-width: 1020px) {
    .homepage-product-info {
      margin-left: 3.4375rem;
    }
  }
`

export default SpecialProductThree
