
import type { AxiosInstance } from 'axios'

const requestInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.request.use((config) => {
    const accessToken =""
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`
    }
    return config
  })
  return instance
}

export default requestInterceptor
