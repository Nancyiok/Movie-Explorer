import axiosInstance from '@/services/httpService.ts'
import type { PopularMoviesListResponse, MovieDetails } from '@/types/movies.ts'

export const getPopularMovies = async (): Promise<PopularMoviesListResponse> => {
  return await axiosInstance.get(`movie/popular`)
}

export const getMovieDetails = async (id: string): Promise<MovieDetails> => {
  return await axiosInstance.get(`movie/${id}`)
}

export const getMovieActors = async (id: string): Promise<MovieDetails> => {
  return await axiosInstance.get(`movie/${id}/credits`)
}
