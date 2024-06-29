import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit'
import customeFetch from '../../utils/customeFetch'
import { getSingleProductReview } from '../product/productSlice'
import { toast } from 'react-toastify'

const initialState = {
  title: '',
  comment: '',
  rating: 1,
  isLoading: false,
  isError: false,
  isEdit: false,
  editReviewId: '',
  newReview: null,
}

export const addReview = createAsyncThunk(
  'review/addReview',
  async (review, thunkAPI) => {
    try {
      const { data } = await customeFetch.post('/reviews', review)

      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

export const updateReview = createAsyncThunk(
  'review/updateReview',
  async (reviews, thunkAPI) => {
    const { reviewId, review } = reviews
    try {
      const { data } = await customeFetch.patch(`/reviews/${reviewId}`, review)

      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

export const deleteReview = createAsyncThunk(
  'review/deleteReview',
  async (reviewsId, thunkAPI) => {
    try {
      const { data } = await customeFetch.delete(`/reviews/${reviewsId}`)

      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    handleReviewChange: (state, { payload }) => {
      const { name, value } = payload
      state[name] = value
    },
    handleEditReview: (state, { payload }) => {
      const { reviewId, reviews } = payload

      const editReview = reviews.find((review) => {
        return review._id === reviewId
      })

      state.isEdit = true
      state.editReviewId = reviewId
      state.comment = editReview.comment
      state.rating = editReview.rating
      state.title = editReview.title
      toast.success('Edit Review Mode Selected, Scroll Down')
    },
    clearReview: (state, { payload }) => {
      state.newReview = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addReview.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(addReview.fulfilled, (state, { payload }) => {
        const { review } = payload
        state.isLoading = false
        state.isError = false
        state.isEdit = false
        state.editReviewId = ''
        state.comment = initialState.comment
        state.rating = initialState.rating
        state.title = initialState.title
        state.newReview = review
        toast.success('Review Added sucessfully')
      })
      .addCase(addReview.rejected, (state, { payload }) => {
        state.isLoading = false
        state.isError = true
        toast.error(payload)
      })
      .addCase(updateReview.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(updateReview.fulfilled, (state, { payload }) => {
        const { review } = payload
        state.isLoading = false
        state.isError = false
        state.isEdit = false
        state.editReviewId = ''
        state.comment = initialState.comment
        state.rating = initialState.rating
        state.title = initialState.title
        state.newReview = review
        toast.success('Review Updated sucessfully')
      })
      .addCase(updateReview.rejected, (state, { payload }) => {
        state.isLoading = false
        state.isError = true
        toast.error(payload)
      })
      .addCase(deleteReview.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(deleteReview.fulfilled, (state, { payload }) => {
        const { msg } = payload
        state.isLoading = false
        state.isError = false
        state.isEdit = false
        state.editReviewId = ''
        state.comment = initialState.comment
        state.rating = initialState.rating
        state.title = initialState.title
        state.newReview = null
        toast.success(msg)
      })
      .addCase(deleteReview.rejected, (state, { payload }) => {
        state.isLoading = false
        state.isError = true
        toast.error(payload)
      })
  },
})

export const { handleReviewChange, handleEditReview, clearReview } =
  reviewSlice.actions
export default reviewSlice.reducer
