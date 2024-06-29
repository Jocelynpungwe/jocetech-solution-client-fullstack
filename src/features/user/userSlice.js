import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
  removeCartFromLocalStorage,
} from '../../utils/localStorage'
import customeFetch from '../../utils/customeFetch'
import { clearCart } from '../cart/cartSlice'
import { clearReview } from '../review/reviewSlice'
import { clearOrder } from '../order/orderSlice'

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
}

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (user, thunkAPI) => {
    try {
      const { data } = await customeFetch.patch('/user/updateUser', user)

      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

export const updateUserPassword = createAsyncThunk(
  'user/updateUserPassword',
  async (user, thunkAPI) => {
    try {
      const { data } = await customeFetch.patch(
        '/user/updateUserPassword',
        user
      )

      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    try {
      const { data } = await customeFetch.post('/auth/register', user)
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkAPI) => {
    try {
      const { data } = await customeFetch.post('/auth/login', user)
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

export const logoutUser = createAsyncThunk(
  'user/logoutUser',
  async (_, thunkAPI) => {
    try {
      const { data } = await customeFetch.get('/auth/logout')
      // have to clear everything later
      thunkAPI.dispatch(clearCart())
      thunkAPI.dispatch(clearReview())
      thunkAPI.dispatch(clearOrder())

      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        const { user } = payload
        state.isLoading = false
        state.user = user
        addUserToLocalStorage(user)
        toast.success(`Updated Credential Successfully`)
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })
      .addCase(updateUserPassword.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateUserPassword.fulfilled, (state, { payload }) => {
        const { user } = payload
        state.isLoading = false
        state.user = user
        addUserToLocalStorage(user)
        toast.success(`Password Changed Successfully`)
      })
      .addCase(updateUserPassword.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { user } = payload
        state.isLoading = false
        state.user = user
        addUserToLocalStorage(user)
        toast.success(`Hello There ${user.name}`)
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { user } = payload
        state.isLoading = false
        state.user = user
        addUserToLocalStorage(user)
        toast.success(`Hello There ${user.name}`)
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(logoutUser.fulfilled, (state, { payload }) => {
        const { msg } = payload
        state.isLoading = false
        state.user = null
        removeUserFromLocalStorage()
        removeCartFromLocalStorage()
        toast.success(msg)
      })
      .addCase(logoutUser.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })
  },
})

export default userSlice.reducer
