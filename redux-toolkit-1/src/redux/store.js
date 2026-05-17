import{configureStore} from "@reduxjs/toolkit" 
import todoReducer from './slices/todoSlice'
const Store = configureStore({
    reducer : {
        todos : todoReducer
    }
})

export default Store ;