import type { MovieDetails } from '@/types/movies.ts'
import axiosInstance from '@/services/httpService.ts'

export const getMovieActors = async (id: string): Promise<MovieDetails> => {
  return await axiosInstance.get(`movie/${id}/credits`)
}

export const getActorDetails = async (personId: number | string) => {
  return await axiosInstance.get(`person/${personId}`, {
    params: {
      append_to_response: 'movie_credits',
    },
  })
}
