import axiosInstance from '@/services/index.ts'

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle logout or redirect to login
      console.error('Unauthorized, logging out...')
    }
    // Show error message
    return Promise.reject(error)
  },
)
