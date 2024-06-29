import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { useNavigate } from 'react-router-dom'

const PaymentSuccessfullPage = () => {
  const navigate = useNavigate()

  const { cart, shipping_fee, total_amount, tax } = useSelector(
    (store) => store.cart
  )

  useEffect(() => {
    window.scrollTo(0, 0)
    setTimeout(() => {
      navigate('/')
    }, 3000)
  }, [])

  return (
    <Wrapper className="section ">
      <section className="section-center ">
        <article className="success-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
          >
            <circle cx="32" cy="32" r="32" fill="#D87D4A" />
            <path
              d="M20.7539 33.3328L27.5054 40.0843L43.3085 24.2812"
              stroke="white"
              stroke-width="4"
            />
          </svg>
          <h4 className="thank-message">THANK YOU FOR YOUR ORDER</h4>
          <p className="result-message">Payment succeeded</p>
          <article className="grand-total-container">
            <h4>GRAND TOTAL</h4>
            <div className="grand-total-product-container">
              {cart.map((item) => {
                return (
                  <div className="product-total-details">
                    <img className="img-total" src={item.image} />
                    <div>
                      <p>{item.name}</p>
                      <p>Price: {formatPrice(item.price)}</p>
                      <p>Qty: {item.amount}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            <p>Shipping Fee: {formatPrice(shipping_fee)}</p>
            <p>Tax: {formatPrice(tax)}</p>
            <p>FINAL PRICE: {formatPrice(total_amount + shipping_fee + tax)}</p>
          </article>
          <p>
            <strong>Invoice Will Be Emailed Shortly</strong>
          </p>
        </article>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .backgroundOpacity {
    opacity: 0.1;
  }

  .img-total {
    width: 100px;
  }

  .product-total-details {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    p {
      margin-bottom: 5px;
    }
  }

  .result-message {
    line-height: 22px;
    font-size: 16px;
  }
  .result-message a {
    color: rgb(89, 111, 214);
    font-weight: 600;
    text-decoration: none;
  }
  .hidden {
    display: none;
  }

  h3 {
    color: #d87d4a;
    font-family: Manrope;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px; /* 192.308% */
    letter-spacing: 0.929px;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  .grand-total-container {
    /* height: 92px; */
    flex-shrink: 0;
    border-radius: 8px;
    h4 {
      color: var(--actual-black);
      font-family: Manrope;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 25px; /* 166.667% */
      opacity: 0.5;
    }
    p {
      color: var(--actual-black);
      font-family: Manrope;
      font-size: 15px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-transform: uppercase;
    }
  }
  .success-container {
    padding: 50px;
    border-radius: 8px;
    background: #fff;

    box-shadow: var(--dark-shadow);
    .thank-message {
      color: #000;
      font-family: Manrope;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 28px; /* 116.667% */
      letter-spacing: 0.857px;
      text-transform: uppercase;
    }

    .sucessfull-grand-total {
      background: var(--primary-chocolate);
      padding: 20px;
      width: 100%;
      border-radius: 8px;
      .grand-total {
        color: var(--primary-blackish);
        font-family: Manrope;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: 25px; /* 166.667% */
        opacity: 0.5;
      }
      .actual-total {
        color: var(--primary-blackish);
        font-family: Manrope;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
      }
    }
  }

  @media (min-width: 768px) {
    .grid-layout-container,
    .grand-total-product-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 18px;
    }
  }

  .disabled {
    opacity: 0.4;
    background: #000;
  }
`

export default PaymentSuccessfullPage
