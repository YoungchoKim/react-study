import { Link, NavLink } from 'react-router'
const navigations = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/movies', label: 'Movies' },
  { to: '/movies/tt4736550', label: 'The Great Hack' },
  { to: '/signin', label: 'Sign In' }
]
// a tag는 이동할때 새로고침된다. Link를 사용해야한다.
export default function Header() {
  return (
    <header>
      <nav className="flex items-center gap-2">
        {navigations.map(nav => {
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
      </nav>
    </header>
  )
}
