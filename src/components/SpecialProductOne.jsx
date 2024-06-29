import styled from 'styled-components'
import specialImgeOne from '../assets/images/speaker/image-removebg-preview-38.png'
import { Link } from 'react-router-dom'

const SpecialProductOne = ({ products }) => {
  return (
    <Wrapper className="section-center">
      <div className="homepage-product">
        <div className="oval-container">
          <div className="oval-shape-one">
            <div className="oval-shape-two">
              <div className="oval-shape-three">
                <img src={specialImgeOne} alt="speakers" />
              </div>
            </div>
          </div>
        </div>
        <div className="project-container">
          <h2>
            ZX9 <span className="title-span">SPEAKER</span>
          </h2>
          {products
            .filter((product) => product.name === 'ZX9 SPEAKER')
            .map((product, index) => {
              return (
                <div key={index}>
                  <p>{product.description}</p>
                  <Link
                    className="btn third-btn"
                    to={`products/${product._id}`}
                    key={product.name}
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
  height: 540px;
  border-radius: 8px;
  background: var(--primary-chocolate);
  text-align: center;
  color: var(--actual-white);
  padding-top: 3.4375rem;
  margin-bottom: 3.75rem;

  .homepage-product {
    margin-top: -2.5rem;
  }
  .oval-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .oval-shape-one,
  .oval-shape-two,
  .oval-shape-three {
    display: flex;
    border-radius: 50%;
  }

  .oval-shape-one {
    width: 600px;
    height: 300px;
    margin-top: -3.75rem;
    border-bottom: 1px solid var(--actual-white);
  }

  .oval-shape-two {
    width: 200px;
    height: 200px;
    margin: auto;
    border: 1px solid var(--actual-white);
  }

  .oval-shape-three {
    justify-content: center;
    width: 150px;
    height: 150px;
    margin: auto;
    border: 1px solid var(--actual-white);
  }

  .oval-shape-one {
    img {
      width: 100%;
      align-self: center;
    }
  }

  h2 {
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 40px; /* 111.111% */
    letter-spacing: 1.286px;
    text-transform: uppercase;
    margin-top: -3.125rem;
    margin-bottom: 1.5rem;
  }
  .title-span {
    display: block;
  }

  p {
    color: #fff;
    text-align: center;
    font-family: Manrope;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 500;
    line-height: 25px; /* 166.667% */
    opacity: 0.75;
    max-width: 280px;

    margin: 0 auto;
    margin-bottom: 1.5625rem;
  }
  .btn-quarterly {
    background: #000;
  }
  @media (min-width: 760px) {
    .oval-shape-one {
      border-left: 1px solid var(--actual-white);
      border-right: 1px solid var(--actual-white);
      margin-top: -3.125rem;
    }
  }
  @media (min-width: 1020px) {
    display: grid;
    grid-template-columns: 1fr 1fr;

    text-align: left;

    h2 {
      color: #fff;
      font-family: Manrope;
      font-size: 2.5rem;
      font-style: normal;
      font-weight: 700;
      line-height: 58px; /* 103.571% */
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-top: 0;
    }

    p {
      text-align: left;
      margin-left: -3px;
    }

    .homepage-product {
      display: flex;
      margin-top: 0;
    }
    .oval-shape-one {
      img {
        width: 410.234px;
        height: 493px;
        flex-shrink: 0;
      }
    }
    .oval-shape-one {
      width: 944px;
      height: 944px;
      flex-shrink: 0;
      border-bottom: none;
      border-left: none;
      border-top: none;
      border-right: none;
      border-radius: 944px;
    }

    .oval-shape-three {
      width: 472px;
      height: 472px;
      flex-shrink: 0;
      border-bottom: none;
      border-radius: 472px;
    }

    .oval-shape-two {
      width: 542px;
      height: 542px;
      flex-shrink: 0;
      border-bottom: none;
    }

    .oval-container {
      margin-top: -10.625rem;
      margin-left: -9.375rem;
    }
    .project-container {
      margin-left: -11.25rem;
      margin-top: 3.125rem;
    }
  }

  @media (min-width: 1220px) {
    h2 {
      font-size: 3.125rem;
    }
    p {
      width: 450px;
    }
    .project-container {
      margin-left: -6.25rem;
    }
  }
`

export default SpecialProductOne
