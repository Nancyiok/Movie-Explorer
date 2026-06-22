import axiosInstance from '@/services/httpService.ts'
import type { PopularMoviesListResponse, MovieDetails } from '@/types/movies.ts'

export const getPopularMovies = async (page: number = 1): Promise<PopularMoviesListResponse> => {
  return await axiosInstance.get(`movie/popular`, {
    params: {
      page,
    },
  })
}

export const getMovieDetails = async (id: string): Promise<MovieDetails> => {
  return await axiosInstance.get(`movie/${id}`)
}

export const searchMovies = async (search: string, page: number = 1) => {
  return await axiosInstance.get(`search/movie`, {
    params: {
      page,
      query: search,
    },
  })
}
