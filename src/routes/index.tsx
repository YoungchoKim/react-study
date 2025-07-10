import { createBrowserRouter, RouterProvider } from 'react-router'
import DefaultLayout from '@/routes/layouts/Default'
import EmptyLayout from './layouts/Empty'

import Home from './pages/Home'
import About from './pages/About'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import NotFound from './pages/NotFound'
import SignIn from './pages/SignIn'
import Todos from './pages/Todos'
import { requiresAuth } from './loaders'

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/movies',
        element: <Movies />,
        loader: requiresAuth,
        children: [
          {
            path: '/movies/:movieId',
            element: <MovieDetails />
          }
        ]
      },
      {
        path: '/signin',
        element: <SignIn />
      },
      {
        path: '/todos',
        element: <Todos />
      }
    ]
  },
  {
    element: <EmptyLayout />,
    children: [
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
