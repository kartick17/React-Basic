import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react'

const initialState = {
  fullName: '',
  nationalID: '',
  createdAt: '',
}

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalID) {
        return {
          payload: {
            fullName,
            nationalID,
            createdAt: new Date().toISOString(),
          },
        }
      },

      reducer(state, action) {
        state.fullName = action.payload.fullName
        state.createdAt = action.payload.createdAt
        state.nationalID = action.payload.nationalID
      },
    },

    updateName(state, action) {
      state.fullName = action.payload
    },
  },
})

export const { createCustomer, updateName } = customerSlice.actions

export default customerSlice.reducer
