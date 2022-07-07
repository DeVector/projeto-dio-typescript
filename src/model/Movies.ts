interface IMovies {
    id: number,
    original_title: string,
    genre_ids: Array<number>,
    release_date: Date,
    popularity: number,
    vote_averege: number,
    backdrop_path: string,
    post_path: string,
    overview: string,
    title: string,
    original_language: string,
    vote_count: number,
    adult: boolean,
    video: boolean
}