import React from 'react'
import styled from 'styled-components'
import { services } from '../utils/constants'

const Services = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <article className="header">
          <h3>
            Jocestech <br /> we JUST love technology
          </h3>
          <p>
            Our Store is dedicated to delivering a seamless shopping experience.
            From personalized expert guidance ensuring the perfect product fit
            to fast, secure shipping and 24/7 customer support, we prioritize
            your satisfaction. Enjoy hassle-free returns, exclusive deals, and
            access to tech insights, empowering you to make informed decisions.
            We're here to elevate your tech journey, offering convenience,
            expertise, and reliable service every step of the way.
          </p>
        </article>
        <div className="services-center">
          {services.map((service) => {
            const { id, icon, title, text } = service
            return (
              <article className="service" key={id}>
                <span className="icon">{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  h3,
  h4 {
    color: var(--actual-white);
  }
  padding: 5rem 0;

  background: var(--actual-black);

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--actual-white);
    opacity: 0.75;
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: rgb(46, 45, 45);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--actual-white);
      opacity: 0.75;
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 1020px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }

  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`

export default Services
