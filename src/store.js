import { configureStore } from '@reduxjs/toolkit'
import workReducer from './states/workSlice'

export default configureStore({
  reducer: {
    work:workReducer
  },
})