// export interface ProductResponse {
//      Title : string,
//      Year : string,
//      Rated : string,
//      Released : string
//      Runtime : string
//      Genre : string
//      Director :string
//      Writer : string
//      Actors : string
//      Plot : string
//      Language : string
//      Country : string
//      Awards : string,
//      Poster : string,
//      Ratings : [
//         {
//              Source : string,
//              Value : string
//         }
//     ],
//      Metascore : string
//      imdbRating : string
//      imdbVotes : string
//      imdbID : string
//      Type : string
//      DVD : string
//      BoxOffice : string
//      Production : string
//      Website : string
//      Response : string
// }
export interface ProductRequest {
    page?: number
}

export interface ProductResponse {
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


export interface ProductResponseError {
    error: string
}

export interface ProductState {
    products: ProductResponse[];
    error?: string
    loading: boolean
}

export const initialState: ProductState = {
    loading: false,
    products: []
};