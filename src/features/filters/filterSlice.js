import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAllProducts } from '../product/productSlice'
import customeFetch from '../../utils/customeFetch'
import { toast } from 'react-toastify'

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: 'price-lowest',
  filters: {
    text: '',
    company: 'all',
    category: 'all',
    color: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
  isLoading: false,
  isError: false,
}

export const getfilterProduct = createAsyncThunk(
  'filter/getfilterProduct',
  async (_, thunkAPI) => {
    try {
      const { data } = await customeFetch.get('/products')
      const { products } = data
      return products
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

const filterSlice = createSlice({
  name: 'Filter',
  initialState,
  reducers: {
    setGridView: (state) => {
      state.grid_view = true
    },
    setListView: (state) => {
      state.grid_view = false
    },
    sortProduct: (state) => {
      const { sort, filtered_products } = state
      let tempProducts = []

      if (sort === 'price-lowest') {
        tempProducts = filtered_products.sort((a, b) => a.price - b.price)
      }
      if (sort === 'price-highest') {
        tempProducts = filtered_products.sort((a, b) => b.price - a.price)
      }
      if (sort === 'name-a') {
        tempProducts = filtered_products.sort((a, b) =>
          a.name.localeCompare(b.name)
        )
      }
      if (sort === 'name-z') {
        tempProducts = filtered_products.sort((a, b) =>
          b.name.localeCompare(a.name)
        )
      }

      state.filtered_products = tempProducts
    },
    updateSort: (state, { payload }) => {
      state.sort = payload
    },
    filterProducs: (state) => {
      const { all_products } = state
      const { text, category, company, color, price, shipping } = state.filters
      let tempProducts = [...all_products]
      if (text) {
        tempProducts = tempProducts.filter((product) =>
          product.name.toLowerCase().startsWith(text)
        )
      }
      if (category !== 'all') {
        tempProducts = tempProducts.filter(
          (product) => product.category === category
        )
      }
      if (company !== 'all') {
        tempProducts = tempProducts.filter(
          (product) => product.company === company
        )
      }
      if (color !== 'all') {
        tempProducts = tempProducts.filter((product) => {
          return product.colors.find((c) => c === color)
        })
      }
      // filter by price
      tempProducts = tempProducts.filter((product) => product.price <= price)
      // filter by shipping
      if (shipping) {
        tempProducts = tempProducts.filter(
          (product) => product.freeShipping === true
        )
      }

      state.filtered_products = tempProducts
    },
    updateFilters: (state, { payload }) => {
      const { name, value } = payload
      state.filters[name] = value
    },
    clearFilters: (state) => {
      state.filters = {
        ...initialState.filters,
        price: state.filters.max_price,
        max_price: state.filters.max_price,
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getfilterProduct.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(getfilterProduct.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.isError = false

        let maxPrice = payload.map((p) => p.price)
        maxPrice = Math.max(...maxPrice)
        state.all_products = payload
        state.filtered_products = payload
        state.filters.max_price = maxPrice
        state.filters.price = maxPrice
      })
      .addCase(getfilterProduct.rejected, (state, { payload }) => {
        state.isLoading = false
        state.isError = true
        toast.error(payload)
      })
  },
})

export const {
  setGridView,
  setListView,
  sortProduct,
  filterProducs,
  updateFilters,
  updateSort,
  clearFilters,
} = filterSlice.actions
export default filterSlice.reducer
