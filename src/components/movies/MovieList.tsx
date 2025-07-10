import { useMovieStore } from '@/stores/movie'
import { Link } from 'react-router'

export default function MovieList() {
  const movies = useMovieStore(state => state.movies)

  return (
    <div className="mt-[20px]">
      <ul className="flex flex-wrap gap-3">
        {movies.map(movie => {
          return (
            <li
              className="relative h-[300px] w-[200px]"
              key={movie.imdbID}>
              <Link to={`/movies/${movie.imdbID}`}>
                <h3 className="relative z-1 bg-black/50 p-2 text-white">
                  {movie.Title} / {movie.Year}
                </h3>
                <img
                  className="absolute top-0 left-0 h-full w-full"
                  src={movie.Poster}
                  alt={movie.Title}
                />
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
