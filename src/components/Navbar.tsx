import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo1 from '../assets/logo1.png'

interface NavbarProps {
  theme: 'dark' | 'light'
  toggleTheme: () => void
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const navItems = [
    { path: '/', label: 'Home', icon: 'bi-house-door-fill' },
    { path: '/about', label: 'About', icon: 'bi-person-fill' },
    { path: '/services', label: 'Services', icon: 'bi-gear-fill' },
    { path: '/projects', label: 'Projects', icon: 'bi-grid-fill' },
    { path: '/contact', label: 'Contact', icon: 'bi-envelope-fill' },
  ]

  return (
    <header className="fixed-top w-100 z-50 py-2.5 px-2 px-md-3">
      <div className="container-fluid max-w-7xl px-2 px-md-4">
        {/* Main Navbar Bar Wrapper */}
        <div
          className="d-flex align-items-center justify-content-between px-3 py-2 rounded-pill shadow-sm"
          style={{
            background: 'var(--nav-bg, rgba(18, 20, 29, 0.75))',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            border: '1px solid var(--card-border, rgba(255, 255, 255, 0.12))',
            transition: 'all 0.3s ease',
          }}
        >
          {/* LEFT: Brand Logo Image (logo1.png) */}
          <NavLink
            className="navbar-brand p-0 m-0 d-flex align-items-center position-relative"
            to="/"
            title="Amit Chavda Portfolio"
            onClick={() => setIsMobileOpen(false)}
            style={{ height: '36px', overflow: 'visible' }}
          >
            <img
              src={logo1}
              alt="Logo"
              className="brand-logo-img"
              style={{
                height: '36px',
                width: 'auto',
                objectFit: 'contain',
                transform: 'scale(1.7)',
                transformOrigin: 'left center',
                transition: 'transform 0.3s ease',
              }}
            />
          </NavLink>

          {/* CENTER: Floating Inner Glass Dock (Desktop >= 992px) */}
          <div className="d-none d-lg-block">
            <ul className="nav flex-row align-items-center gap-1 glass-nav-dock mb-0 list-unstyled">
              {navItems.map((item) => (
                <li key={item.path} className="nav-item">
                  <NavLink
                    className={({ isActive }) => `nav-link nav-link-custom ${isActive ? 'active' : ''}`}
                    to={item.path}
                    end={item.path === '/'}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT SIDE: Theme Toggle & Mobile Hamburger */}
          <div className="d-flex align-items-center gap-2">
            <label className="themeToggle st-sunMoonThemeToggleBtn" htmlFor="themeToggleBtn">
              <input
                type="checkbox"
                id="themeToggleBtn"
                className="themeToggleInput"
                checked={theme === 'light'}
                onChange={toggleTheme}
              />
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" stroke="none">
                <mask id="moon-mask-nav">
                  <rect x="0" y="0" width="20" height="20" fill="white"></rect>
                  <circle cx="11" cy="3" r="8" fill="black"></circle>
                </mask>
                <circle className="sunMoon" cx="10" cy="10" r="8" mask="url(#moon-mask-nav)"></circle>
                <g>
                  <circle className="sunRay sunRay1" cx="18" cy="10" r="1.5"></circle>
                  <circle className="sunRay sunRay2" cx="14" cy="16.928" r="1.5"></circle>
                  <circle className="sunRay sunRay3" cx="6" cy="16.928" r="1.5"></circle>
                  <circle className="sunRay sunRay4" cx="2" cy="10" r="1.5"></circle>
                  <circle className="sunRay sunRay5" cx="6" cy="3.1718" r="1.5"></circle>
                  <circle className="sunRay sunRay6" cx="14" cy="3.1718" r="1.5"></circle>
                </g>
              </svg>
            </label>

            {/* Mobile Hamburger Toggler Button (< 992px) */}
            <button
              className="btn btn-link text-custom-heading p-1.5 border-0 shadow-none d-lg-none d-flex align-items-center justify-content-center"
              type="button"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle navigation"
            >
              <i className={`bi ${isMobileOpen ? 'bi-x-lg' : 'bi-list'} fs-3 text-cyan transition-all`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer Dropdown Menu */}
        <div className={`mobile-nav-drawer d-lg-none ${isMobileOpen ? 'show' : ''}`}>
          <div className="p-3">
            <nav className="d-flex flex-column gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  onClick={() => setIsMobileOpen(false)}
                  className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                >
                  <i className={`bi ${item.icon} fs-5`}></i>
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
