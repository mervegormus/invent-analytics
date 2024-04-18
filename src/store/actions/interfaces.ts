export interface MoviesDetailResponse {
     Title : string,
     Year : string,
     Rated : string,
     Released : string
     Runtime : string
     Genre : string
     Director :string
     Writer : string
     Actors : string
     Plot : string
     Language : string
     Country : string
     Awards : string,
     Poster : string,
     Ratings : [],
     Metascore : string
     imdbRating : string
     imdbVotes : string
     imdbID : string
     Type : string
     DVD : string
     BoxOffice : string
     Moviesion : string
     Website : string
     Response : string
}
export interface MoviesRequest {
    page?: number
    y?:string
    type?:string
}

export interface MoviesResponse {
    Search:
        {
            Title: string,
            Year: string,
            imdbID: string,
            Type: string,
            Poster: string
        }[]
    totalResults:string
}
export interface MoviesRequest{
    page?:number
}

export interface MoviesResponseError {
    error: string
}
export interface MoviesDetailResponseError {
    error: string
}

export interface MoviesState {
    movies: MoviesResponse[];
    error?: string
    loading: boolean
    moviesDetail?:MoviesDetailResponse
}

export const initialState: MoviesState = {
    loading: false,
    movies: [],
};