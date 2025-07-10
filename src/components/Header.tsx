import { NavLink, useLocation, useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import Button from '@/components/Button'
const navigations = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/movies', label: 'Movies' },
  { to: '/movies/tt4736550', label: 'The Great Hack' },
  { to: '/signin', label: 'Sign In' }
]
// a tag는 이동할때 새로고침된다. Link를 사용해야한다.
export default function Header() {
  const [token, setToken] = useState<string | null>(null)
  const location = useLocation()
  const navigate = useNavigate()

  function signOut() {
    localStorage.removeItem('token')
    navigate('/')
    window.location.reload()
  }
  useEffect(() => {
    setToken(localStorage.getItem('token'))
  }, [location])
  return (
    <header>
      <nav className="flex items-center gap-2">
        {navigations.map(nav => {
          const isSignIn = nav.to === 'signin'
          if (isSignIn && token) return null
          return (
            <NavLink
              key={nav.to}
              to={nav.to}
              end
              className={({ isActive }) => {
                return isActive ? 'text-red-500' : 'text-black'
              }}>
              {nav.label}
            </NavLink>
          )
        })}
        {token && <Button onClick={signOut}>로그아웃</Button>}
      </nav>
    </header>
  )
}
