import { useOutlet } from 'react-router'
import MovieList from '@/components/movies/MovieList'
import MovieSearcher from '@/components/movies/MovieSearcher'
export default function Movies() {
  const outlet = useOutlet()
  return (
    <>
      <main className="mx-auto max-w-[1200px] p-4">
        <MovieSearcher />
        <MovieList />
        {outlet}
      </main>
    </>
  )
}
