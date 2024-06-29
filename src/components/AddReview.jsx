import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  addReview,
  handleReviewChange,
  updateReview,
} from '../features/review/reviewSlice'

addReview

const AddReview = ({ productId }) => {
  const dispatch = useDispatch()
  const { user } = useSelector((store) => store.user)
  const { title, comment, rating, isEdit, editReviewId, isLoading } =
    useSelector((store) => store.review)

  const handleReviewSubmit = (e) => {
    e.preventDefault()

    if (isEdit) {
      dispatch(
        updateReview({
          reviewId: editReviewId,
          review: { product: productId, rating, title, comment },
        })
      )

      return
    }

    dispatch(addReview({ product: productId, rating, title, comment }))
  }
  return (
    <Wrapper>
      <form className="review-form" onSubmit={handleReviewSubmit}>
        <h2>Add a Review</h2>
        <div class="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            required
            onChange={(e) =>
              dispatch(
                handleReviewChange({
                  name: e.target.name,
                  value: e.target.value,
                })
              )
            }
          />
        </div>
        <div className="form-group">
          <label for="comment">Comment</label>
          <textarea
            id="comment"
            name="comment"
            rows="5"
            value={comment}
            required
            onChange={(e) =>
              dispatch(
                handleReviewChange({
                  name: e.target.name,
                  value: e.target.value,
                })
              )
            }
          ></textarea>
        </div>
        <div class="form-group rating-group">
          <label>Rating</label>
          <div class="rating">
            <input
              type="radio"
              id="star5"
              name="rating"
              value="5"
              onClick={(e) =>
                dispatch(
                  handleReviewChange({
                    name: e.target.name,
                    value: e.target.value,
                  })
                )
              }
            />
            <label for="star5" title="5 stars">
              &#9733;
            </label>
            <input
              type="radio"
              id="star4"
              name="rating"
              value="4"
              onClick={(e) =>
                dispatch(
                  handleReviewChange({
                    name: e.target.name,
                    value: e.target.value,
                  })
                )
              }
            />
            <label for="star4" title="4 stars">
              &#9733;
            </label>
            <input
              type="radio"
              id="star3"
              name="rating"
              value="3"
              onClick={(e) =>
                dispatch(
                  handleReviewChange({
                    name: e.target.name,
                    value: e.target.value,
                  })
                )
              }
            />
            <label for="star3" title="3 stars">
              &#9733;
            </label>
            <input
              type="radio"
              id="star2"
              name="rating"
              value="2"
              onClick={(e) =>
                dispatch(
                  handleReviewChange({
                    name: e.target.name,
                    value: e.target.value,
                  })
                )
              }
            />
            <label for="star2" title="2 stars">
              &#9733;
            </label>
            <input
              type="radio"
              id="star1"
              name="rating"
              value="1"
              onClick={(e) =>
                dispatch(
                  handleReviewChange({
                    name: e.target.name,
                    value: e.target.value,
                  })
                )
              }
            />
            <label for="star1" title="1 star" style={{ color: '#f5b301' }}>
              &#9733;
            </label>
          </div>
        </div>
        {user ? (
          <button className="btn" type="submit" disabled={isLoading}>
            {isLoading ? 'Please Wait...' : 'Submit Review'}
          </button>
        ) : (
          <Link className="btn" to="/register">
            Login To Add Review
          </Link>
        )}
      </form>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding-top: 1rem;
  .review-form-container {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
  }

  .review-form-container h2 {
    margin-bottom: 20px;
  }

  .form-group {
    margin-bottom: 15px;
  }

  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  .form-group input[type='text'],
  .form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }

  .form-group textarea {
    resize: none; /* Prevent resizing */
  }

  .rating-group {
    margin-bottom: 20px;
  }

  .rating {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
  }

  .rating input {
    display: none;
  }

  .rating label {
    font-size: 30px;
    color: #ddd;
    cursor: pointer;
  }

  .rating input:checked ~ label,
  .rating input:hover ~ label,
  .rating label:hover ~ label {
    color: #f5b301;
  }
`
export default AddReview
