import type { AxiosInstance } from 'axios'

const responseInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    (response) => response.data,
    (error) => {
      if (error.response?.status === 401) {
        // Handle logout or redirect to login
        console.error('Unauthorized, logging out...')
      }
      // Show error message
      return Promise.reject(error)
    },
  )
}

export default responseInterceptor
