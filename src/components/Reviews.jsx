import { useState, useEffect } from 'react'
import { BsStarFill } from 'react-icons/bs'
import Stars from './Stars'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import moment from 'moment'
import Pagination from './Pagination'
import AddReview from './AddReview'
import {
  deleteReview,
  handleEditReview,
  updateReview,
} from '../features/review/reviewSlice'

const Reviews = ({ reviews, groupRating = [], averageRating, productId }) => {
  const [totalGroupRating, setTotalGroupRating] = useState(0)
  const { user } = useSelector((store) => store.user)
  const { numOfPages } = useSelector((store) => store.products)
  const dispatch = useDispatch()

  useEffect(() => {
    if (groupRating.length > 0)
      setTotalGroupRating(
        groupRating.reduce((prev, curr) => {
          return prev + curr.groupRating
        }, 0)
      )
  }, [groupRating])

  return (
    <Wrapper>
      <h6>
        {averageRating}{' '}
        <span className="star">
          <BsStarFill />
        </span>{' '}
        overall rating
      </h6>
      {groupRating.length > 0 &&
        groupRating.map((rating) => {
          return (
            <div key={rating._id} className="group-rating">
              <h4>{rating._id} stars</h4>
              <div className="overal-rate-bar">
                <div
                  style={{
                    width: `${Math.ceil(
                      (rating.groupRating / totalGroupRating) * 100
                    )}%`,
                    backgroundColor: 'var( --secondy-chocolate)',
                    height: '100%',
                    borderRadius: '10px',
                  }}
                ></div>
              </div>
              <h4>
                {Math.ceil((rating.groupRating / totalGroupRating) * 100)}%
              </h4>
            </div>
          )
        })}
      {reviews.map((review) => {
        const formattedDate = moment(review.createdAt).format('MMMM Do YYYY')
        return (
          <div key={review._id}>
            <hr />
            <div className="review">
              <Stars averageRating={review.rating} />
              <div className="info">
                <p className="name">{review.user.name}</p>
                <p className="date">{formattedDate}</p>
              </div>
              <h5>{review.title}</h5>
              <p>{review.comment}</p>
              {review.user._id === user?.userId && (
                <div>
                  <button
                    type="button"
                    className="btn-review edit-btn"
                    onClick={() =>
                      dispatch(
                        handleEditReview({ reviewId: review._id, reviews })
                      )
                    }
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn-review delete-btn"
                    onClick={() => dispatch(deleteReview(review._id))}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
            <hr />
          </div>
        )
      })}
      {numOfPages > 1 && <Pagination />}
      <AddReview productId={productId} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .star {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  .group-rating {
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-column-gap: 1rem;
    margin-bottom: 1rem;
  }
  .overal-rate-bar {
    background-color: var(--primary-gray);
    border-radius: 10px;
    max-height: 1rem;
    width: '80%';
  }
  h4 {
    font-size: 1rem;
  }
  .review {
    padding: 1rem 0;
    text-align: left;
  }

  .review .info {
    display: flex;
  }
  .name {
    font-weight: 700;
    margin-right: 10px;
  }
  .date {
    opacity: 0.5;
  }

  .btn-review {
    font-size: 1rem;
    color: var(--actual-white);
    padding: 5px 10px;
    border: none;
    border: 15px;
    cursor: pointer;
  }
  .edit-btn {
    background-color: var(--primary-chocolate);
    margin-right: 1rem;
  }
  .edit-btn:hover {
    background-color: var(--secondy-chocolate);
  }
  .delete-btn {
    background-color: var(--clr-red-dark);
  }
  .delete-btn {
    background-color: var(--clr-red-light);
  }
`

export default Reviews
