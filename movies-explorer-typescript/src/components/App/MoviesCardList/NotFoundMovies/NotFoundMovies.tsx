type TNotFoundMovies = {
  notFoundMoviesText: string;
}

function NotFoundMovies({ notFoundMoviesText }:TNotFoundMovies) {
  return <p className="movies-list__not-found">{notFoundMoviesText}</p>;
}

export default NotFoundMovies;
