
import type { AxiosInstance } from 'axios'

const requestInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.request.use((config) => {
    const accessToken = import.meta.env.VITE_AUTH_TMDB_TOKEN
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`
    }
    return config
  })
  return instance
}

export default requestInterceptor
