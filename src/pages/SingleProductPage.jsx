import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  getSingleProduct,
  getSingleProductReview,
} from '../features/product/productSlice'

import { useParams } from 'react-router-dom'
import { formatPrice } from '../utils/helpers'
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
  Reviews,
  SmallWebDescription,
  RecommendedProducts,
} from '../components'

import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SingleProductPage = () => {
  const { id } = useParams()

  const dispatch = useDispatch()
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    single_product_review: singleProductReview,
    single_product_review_loading: singleReviewLoading,
    single_product_review_error: singleReviewError,
    page,
  } = useSelector((store) => store.products)
  const { newReview } = useSelector((store) => store.review)

  useEffect(() => {
    dispatch(getSingleProduct(id))
    window.scrollTo(0, 0)
  }, [id, newReview])

  useEffect(() => {
    dispatch(getSingleProductReview(id))
  }, [id, page, newReview])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  const {
    name,
    price,
    description,
    inventory,
    averageRating,
    reviews,
    id: sku,
    company,
    image,
    features,
    box,
    freeShipping,
    groupRating,
    numOfReviews,
    category,
  } = product

  return (
    <Wrapper>
      <PageHero title={name} product />
      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="product-center">
          <ProductImages image={image} />
          <section className="content">
            <h2>{name}</h2>
            <Stars
              averageRating={averageRating}
              reviews={numOfReviews}
              showReview={true}
            />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Available : </span>
              {inventory > 0 ? 'In stock' : 'out of stock'}
            </p>
            <p className="info">
              <span>SKU :</span>
              {sku}
            </p>
            <p className="info">
              <span>Brand :</span>
              {company}
            </p>
            {freeShipping && (
              <p className="info">
                <span>Free Shipping</span>
              </p>
            )}
            <hr />
            {inventory > 0 && <AddToCart product={product} />}
          </section>
        </div>
        <div className="feature-and-inbox-container">
          <div>
            <h6>FEATURES</h6>
            <p className="feature-desc">{features}</p>
          </div>
          <div className="inbox-container">
            <h6>in the box</h6>
            {box &&
              box.map((c) => {
                return (
                  <p key={c}>
                    <span>{c.substring(0, 3)}</span>
                    {c.substring(3)}
                  </p>
                )
              })}
          </div>
        </div>
        {singleReviewLoading ? (
          <Loading />
        ) : singleReviewError ? (
          <Error />
        ) : (
          <>
            <h6>Reviews</h6>
            <Reviews
              reviews={singleProductReview}
              groupRating={groupRating}
              averageRating={averageRating}
              productId={id}
            />
          </>
        )}

        <h6>RECOMMANDED PRODUCTS</h6>
        <RecommendedProducts />
        <SmallWebDescription />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  img {
    width: 100%;
  }
  .feature-desc {
    color: #000;
    font-family: Manrope;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 500;
    line-height: 25px; /* 166.667% */
    opacity: 0.5;
  }

  h6 {
    color: #000;
    font-family: Manrope;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 36px; /* 150% */
    letter-spacing: 0.857px;
    text-transform: uppercase;
    margin: 1.25rem 0;
  }

  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--secondy-chocolate);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
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

  .inbox-container {
    p {
      color: #000;
      font-family: Manrope;
      font-size: 0.9375rem;
      font-style: normal;
      font-weight: 500;
      line-height: 25px; /* 166.667% */
      opacity: 0.5;
      span {
        color: var(--primary-chocolate);
        font-family: Manrope;
        font-size: 0.9375rem;
        font-style: normal;
        font-weight: 700;
        line-height: 25px; /* 166.667% */
      }
    }
  }

  .feature-and-inbox-container {
    margin: 3.125rem 0;
  }

  @media (min-width: 550px) {
    .product-image-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 0.625rem;
    }
  }

  @media (min-width: 768px) {
    .feature-and-inbox-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 100px;
    }
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage
