import axios from 'axios' ;
import { logout } from '../redux/slices/authSlice';
// import store from '../redux/store';

const axiosClient = axios.create({
    baseURL : import.meta.env.VITE_API_BASE_URL ,
    headers : {
        'Content-Type' :'application/json' ,
    }
}) ;

export const setupInterceptors =  (store) => {
    axiosClient.interceptors.request.use(
        (config) => {
            const accessToken = store.getState().auth.accessToken
            if(accessToken) {
                config.headers.Authorization = `Bearer ${accessToken}`
            }
            return config
        } ,
        (error) => {
            return Promise.reject(error)
        }
    )

    axiosClient.interceptors.response.use(
        (response => response )
        (error => {
            const {response , config : originalRequest} = error ;
            if(response && response.status === 401 && originalRequest.url !== '/login') {
                console.warn("het han acesstoken ") 
                store.dispatch(logout()) ;
            }
            return Promise.reject(error)
        })
    )
}

export default axiosClient