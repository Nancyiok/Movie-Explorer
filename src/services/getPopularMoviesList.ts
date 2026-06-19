import axiosInstance from '@/services/httpService.ts'

export const getPopularMoviesList = async () => {
  return await axiosInstance.get(`movie/popular`)
}

