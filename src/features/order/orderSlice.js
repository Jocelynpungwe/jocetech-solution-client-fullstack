import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit'
import customeFetch from '../../utils/customeFetch'
import { toast } from 'react-toastify'

const initialBilling = {
  address: {
    name: '',
    email: '',
    line1: '',
    city: '',
    state: '',
    postal_code: '',
  },
}

const initialState = {
  orderLoading: false,
  orderError: false,
  order: {},
  userOrders: [],
  status: 'pending',
  clientSecret: null,
  ...initialBilling,
}

export const createOrder = createAsyncThunk(
  'order/create',
  async (item, thunkAPI) => {
    try {
      const { data } = await customeFetch.post('/orders', item)

      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

export const updateOrder = createAsyncThunk(
  'order/update',
  async (item, thunkAPI) => {
    try {
      const { order, address, paymentIntentId } = item

      const { data } = await customeFetch.patch(`/orders/${order.orderId}`, {
        paymentIntentId,
        address,
      })

      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

export const getCurrentUserOrders = createAsyncThunk(
  'order/getCurrentUserOrders',
  async (_, thunkAPI) => {
    try {
      const { data } = await customeFetch.get('/orders/showAllMyOrders')
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

const orderSlice = createSlice({
  name: 'Order',
  initialState,
  reducers: {
    toggleAddress: (state, { payload }) => {
      const { value, name, user } = payload
      state.address.name = user.name
      state.address.email = user.email
      state.address[name] = value
    },
    clearOrder: (state) => {
      state.address.name = initialBilling.address.name
      state.address.email = initialBilling.address.email
      state.address.line1 = initialBilling.address.line1
      state.address.city = initialBilling.address.city
      state.address.state = initialBilling.address.state
      state.address.postal_code = initialBilling.address.postal_code
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state, { payload }) => {
        state.orderLoading = true
        state.orderError = false
      })
      .addCase(createOrder.fulfilled, (state, { payload }) => {
        const { order, clientSecret } = payload
        state.orderLoading = false
        state.orderError = false
        state.clientSecret = clientSecret
        state.order = {
          orderId: order._id,
          orderItems: order.orderItems,
        }
      })
      .addCase(createOrder.rejected, (state, { payload }) => {
        state.orderLoading = false
        state.orderError = true
        toast.error(payload)
      })
      .addCase(updateOrder.pending, (state, { payload }) => {
        state.orderLoading = true
        state.orderError = false
      })
      .addCase(updateOrder.fulfilled, (state, { payload }) => {
        state.orderLoading = false
        state.orderError = false
      })
      .addCase(updateOrder.rejected, (state, { payload }) => {
        state.orderLoading = false
        state.orderError = true
        toast.error(payload)
      })
      .addCase(getCurrentUserOrders.pending, (state, { payload }) => {
        state.orderLoading = true
        state.orderError = false
      })
      .addCase(getCurrentUserOrders.fulfilled, (state, { payload }) => {
        const { orders } = payload
        state.orderLoading = false
        state.orderError = false
        state.userOrders = orders
      })
      .addCase(getCurrentUserOrders.rejected, (state, { payload }) => {
        state.orderLoading = false
        state.orderError = true
        toast.error(payload)
      })
  },
})

export const { toggleAddress, clearOrder } = orderSlice.actions
export default orderSlice.reducer
