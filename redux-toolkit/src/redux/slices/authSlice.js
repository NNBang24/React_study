import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosClient from '../../api/axiosClient'
import { use } from 'react'
export const register = createAsyncThunk(
    'auth/register',
    async ({ username, password }) => {
        const response = await axiosClient.post('/register', { username, password })
        return response.data
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async ({ username, password }) => {
        const response = await axiosClient.post('/login', { username, password })
        return response.data

    }
)

export const logout = createAsyncThunk(
    'auth/logout',
    async () => {
        localStorage.removeItem('accessToken')
    }
)
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        error: null,
        loading: false,
        accessToken: localStorage.getItem('accessToken') || null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // register
            .addCase(register.pending, (state) => {
                state.loading = true,
                    state.error = null
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false,
                    state.error = null
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.error.message || "Register failed"
            })

            // login 
            .addCase(login.pending, (state) => {
                state.loading = true,
                    state.error = null
            })
            .addCase(login.fulfilled, (state , action) => {
                state.loading = false,
                    state.error = null ,
                    state.accessToken = action.payload.accessToken ;
                    state.user = action.payload.user
                    localStorage.setItem("accessToken" , action.payload.accessToken)
                    // localStorage.setItem("user" , action.payload.user)
                    // 
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false,
              
                    state.error = action.error.message || "Login failed"
            })

            // logout 
            .addCase(logout.fulfilled , (state) => {
                state.accessToken = null ,
                state.user = null 
            })

    }
})

export const {} = authSlice.actions ;
export default authSlice.reducer