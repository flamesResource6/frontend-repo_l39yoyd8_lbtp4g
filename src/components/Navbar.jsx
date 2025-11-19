import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Ministries' },
  { to: '/get-involved', label: 'Get Involved' },
  { to: '/stories', label: 'Stories' },
  { to: '/transparency', label: 'Transparency' },
  { to: '/blog', label: 'News' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-teal-600 to-teal-400 text-white font-bold">FI</span>
            <span className="font-bold text-slate-900">Favor International</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${isActive ? 'text-teal-700' : 'text-slate-700 hover:text-slate-900'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/donate" className="ml-2 inline-flex items-center rounded-md bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500">
              Donate
            </Link>
          </nav>
          <div className="md:hidden">
            <details>
              <summary className="list-none cursor-pointer px-3 py-2 rounded-md border border-slate-300 text-slate-700">Menu</summary>
              <div className="mt-2 bg-white rounded-md shadow p-2">
                {navItems.map((item) => (
                  <Link key={item.to} to={item.to} className="block px-3 py-2 rounded hover:bg-slate-100 text-sm text-slate-700">
                    {item.label}
                  </Link>
                ))}
                <Link to="/donate" className="block mt-2 px-3 py-2 rounded bg-teal-600 text-white text-sm text-center">Donate</Link>
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
