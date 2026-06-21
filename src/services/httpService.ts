import axios from 'axios'
import responseInterceptor from './responseInterceptor'
import requestInterceptor from '@/services/requestInterceptor.ts'


const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_TMDB_API_PATH,
})

responseInterceptor(axiosInstance)
requestInterceptor(axiosInstance)

export default axiosInstance
