import React from 'react'
import styled from 'styled-components'

const ShippingInfo = ({ name, email, line1, city, postal, state }) => {
  return (
    <Wrapper className="shipping wrapper-container">
      <h5>Shipping Address</h5>
      <p className="info">
        <span>User Name : </span>
        {name}
      </p>
      <p className="info">
        <span>User Email :</span> {email}
      </p>
      <p className="info">
        <span>Street :</span> {line1}
      </p>
      <p className="info">
        <span>City :</span> {city}
      </p>
      <p className="info">
        <span>Postal Code :</span> {postal}
      </p>
      <p className="info">
        <span>State :</span> {state}
      </p>
      <p className="info">
        <span>Country :</span> Canada
      </p>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  h5,
  p {
    opacity: 0.5;
  }

  h5 {
    margin: 5px 0;
  }

  p {
    margin: 0 0 5px 0;
  }

  .wrapper-container {
    box-shadow: var(--shadow-4);
  }

  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  .shipping {
    margin-bottom: 1rem;
  }

  @media (min-width: 750px) {
    .shipping {
      margin-bottom: none;
    }
  }
`
export default ShippingInfo
