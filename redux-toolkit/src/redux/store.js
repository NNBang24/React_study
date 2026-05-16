import {configureStore} from '@reduxjs/toolkit' ;
import todoReducer from './slices/todoSlice'
import authReducer from './slices/authSlice'
import { setupInterceptors } from '../api/axiosClient';
const store = configureStore({
    reducer :{
        auth : authReducer ,
        todos : todoReducer
    }
})
setupInterceptors(store)
export default store