export interface Movie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  softcore: boolean
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface PopularMoviesListResponse {
  page: number
  results: Movie
  total_pages: number
  total_results: number
}

export interface Genre {
  id: number
  name: string
}

export interface Collection {
  id: number
  name: string
  poster_path: string | null
  backdrop_path: string | null
}

export interface ProductionCompany {
  id: number
  logo_path: string | null
  name: string
  origin_country: string
}

export interface ProductionCountry {
  iso_3166_1: string
  name: string
}

export interface SpokenLanguage {
  english_name: string
  iso_639_1: string
  name: string
}

export interface MovieDetails {
  id: number
  title: string
  original_title: string
  tagline: string | null
  overview: string | null
  release_date: string
  runtime: number | null
  status: string
  adult: boolean
  softcore: boolean
  video: boolean
  poster_path: string | null
  backdrop_path: string | null

  budget: number
  revenue: number
  popularity: number
  vote_average: number
  vote_count: number

  homepage: string | null
  imdb_id: string | null

  genres: Genre[]
  belongs_to_collection: Collection | null
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  spoken_languages: SpokenLanguage[]
  origin_country: string[]
}
