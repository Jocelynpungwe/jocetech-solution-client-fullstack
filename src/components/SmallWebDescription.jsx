import React from 'react'
import styled from 'styled-components'
import Contact from './Contact'

const SmallWebDescription = () => {
  return (
    <Wrapper className="section section-center">
      <div className="audio-headset-product">
        <div className="special-product-three"></div>
        {/* <img src={image} alt="person with headphones on" /> */}
        <div className="project-container">
          <h2>
            Bringing you the{' '}
            <span className="span-line">
              {' '}
              <span className="span-color">best</span> Gadget
            </span>
          </h2>
          <p>
            Located at the heart of Ottawa, Jocestech is the premier store for
            high end gadgets. We have a large showroom and luxury demonstration
            rooms available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Jocestech the best place to buy your portable gadget.
          </p>
        </div>
        {/* <Contact /> */}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  text-align: center;
  h2 {
    margin: 25px 0;
    color: #000;
    font-size: 28px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;
  }

  .span-color {
    color: #d87d4a;
    font-size: 28px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;
  }

  p {
    color: #000;
    font-size: 15px;
    font-weight: 500;
    line-height: 25px; /* 166.667% */
    text-transform: none;
    opacity: 0.7;
  }

  @media (min-width: 768px) {
    .span-line {
      display: block;
    }
  }

  @media (min-width: 1020px) {
    text-align: left;
    .span-color,
    h2 {
      font-size: 40px;

      line-height: 44px; /* 110% */
      letter-spacing: 1.429px;
      text-transform: uppercase;
    }
    .span-line {
      display: inline-block;
    }
    .audio-headset-product {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 100px;
      .project-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        order: -1;
        height: 400px;
      }
    }
  }
`

export default SmallWebDescription
