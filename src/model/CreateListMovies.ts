interface CreateListMovies {
    statusMessage: string,
    success: boolean,
    statusCode: number,
    listId: string
}

interface AddMovieToList {
    success: boolean,
    statusCode: number,
    statusMessage: string
}

interface GetListMovies {
    createBy: string,
    description: string,
    favoriteCount: number,
    id: number,
    items: IMovies[],
    itemCount: number,
    iso_639_1: string,
    name: string,
    postPath: string | null
}