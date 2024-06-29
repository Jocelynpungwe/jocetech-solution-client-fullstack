import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import OrderInfo from './OrderInfo'
import ShippingInfo from './ShippingInfo'
import BillingInfo from './BillingInfo'

const UserOrders = () => {
  const { userOrders } = useSelector((store) => store.order)

  return (
    <Wrapper>
      {userOrders.length === 0 ? (
        <h4>No order history</h4>
      ) : (
        userOrders.map((orders, index) => {
          return (
            <section className="orders-info">
              <article key={index}>
                {orders.orderItems.map((order, index) => {
                  const {
                    image,
                    name,
                    amount,
                    price,
                    color,
                    product: productId,
                  } = order

                  return (
                    <div key={index}>
                      <OrderInfo
                        image={image}
                        name={name}
                        price={price}
                        id={productId}
                        amount={amount}
                        colors={[`#${color}`]}
                      />
                    </div>
                  )
                })}
              </article>
              <article className="shipping-container">
                <ShippingInfo
                  name={orders.shippingAddress.name}
                  email={orders.shippingAddress.email}
                  line1={orders.shippingAddress.line1}
                  city={orders.shippingAddress.city}
                  postal={orders.shippingAddress.postal_code}
                  state={orders.shippingAddress.state}
                />
                <div>
                  <BillingInfo
                    shippingFee={orders.shippingFee}
                    tax={orders.tax}
                    subtotal={orders.subtotal}
                    createdAt={orders.createdAt}
                    total={orders.total}
                    status={orders.status}
                    updatedAt={orders.updatedAt}
                  />
                </div>
              </article>
            </section>
          )
        })
      )}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  h5,
  p {
    opacity: 0.5;
  }

  h5,
  h3 {
    margin: 5px 0;
  }

  p {
    margin: 0 0 5px 0;
  }

  .wrapper-container {
    padding: 2rem;
    background: var(--white);
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-1);
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

  .shipping-container {
    margin-top: 1rem;
    .shipping {
      margin-bottom: 1rem;
    }
  }

  .orders-info {
    margin: 2rem 0;
  }

  @media (min-width: 750px) {
    .orders-info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
      box-shadow: var(--shadow-1);
    }
  }
`

export default UserOrders
