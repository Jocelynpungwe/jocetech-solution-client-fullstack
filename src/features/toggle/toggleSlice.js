import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  isSideBarOpen: false,
}

const toggleSlice = createSlice({
  name: 'Toggle',
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen
    },
    toggleCloseSideBar: (state) => {
      state.isSideBarOpen = false
    },
  },
})

export const { toggleSideBar, toggleCloseSideBar } = toggleSlice.actions
export default toggleSlice.reducer
