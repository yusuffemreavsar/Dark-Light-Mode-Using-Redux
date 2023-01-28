//Creating a Store
import { configureStore } from '@reduxjs/toolkit'
import uiReducer from "../ui/ui_slice"
export default configureStore({
  reducer: {
    ui:uiReducer
  },
})