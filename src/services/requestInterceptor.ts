import axiosInstance from '@/services/index.ts'

axiosInstance.interceptors.request.use((config) => {
  // Add Bearer token or other headers
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
