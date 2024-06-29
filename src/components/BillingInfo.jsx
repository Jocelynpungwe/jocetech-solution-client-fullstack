import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import moment from 'moment'

const BillingInfo = ({
  shippingFee,
  tax,
  subtotal,
  createdAt,
  total,
  status,
  updatedAt,
}) => {
  return (
    <Wrapper className="wrapper-container">
      <h5>Billing Info</h5>
      <p className="info">
        <span>Shipping :</span>

        {formatPrice(shippingFee)}
      </p>
      <p className="info">
        <span>Tax :</span>
        {formatPrice(tax)}
      </p>
      <p className="info">
        <span>Subtotal :</span>
        {formatPrice(subtotal)}
      </p>
      <div>
        <p className="info">
          <span>Placed Date :</span> {moment(createdAt).format('YYYY-MM-DD')}
        </p>
        <p className="info">
          <span>Total :</span>
          {formatPrice(total)}
        </p>
        <p className="info">
          <span>Status :</span>
          {status}
        </p>
        <p className="info">
          <span>Updated Date :</span> {moment(updatedAt).format('YYYY-MM-DD')}
        </p>
      </div>
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

  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
`

export default BillingInfo
