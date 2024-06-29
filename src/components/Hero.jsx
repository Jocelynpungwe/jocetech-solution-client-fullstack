import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="background-hero">
      <Wrapper className="section-center">
        <article className="content">
          <div className="container">
            <p className="hero-product">NEW PRODUCT</p>
            <h1>XX99 Mark II Headphones</h1>
            <p className="hero-description">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link to="/products" className="btn primary-btn">
              see products
            </Link>
          </div>
        </article>
        <article className="img-container"></article>
      </Wrapper>
    </section>
  )
}

const Wrapper = styled.section`
  height: calc(100vh - 5rem);
  display: grid;
  place-items: center;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5.625rem;
  }

  h1 {
    color: #fff;
    text-align: center;
    font-family: Manrope;
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 35px; /* 103.571% */
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .hero-product {
    color: #fff;
    text-align: center;
    font-family: Manrope;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 10px;
    text-transform: uppercase;
    opacity: 0.4964;
  }

  .hero-description {
    color: #fff;
    text-align: center;
    font-family: Manrope;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 500;
    line-height: 25px; /* 166.667% */
    opacity: 0.75;
    width: 328px;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 3.5rem;
      line-height: 58px;
      width: 490px;
    }
    .hero-description {
      width: 349px;
    }
  }

  @media (min-width: 1020px) {
    grid-template-columns: 1fr 1fr;
    gap: 8rem;

    .container {
      justify-content: center;
      align-items: start;
    }

    h1 {
      text-align: left;
    }

    .hero-product {
      text-align: left;
    }

    .hero-description {
      text-align: left;
    }
  }
`

export default Hero
