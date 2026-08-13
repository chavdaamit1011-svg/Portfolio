import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logoAc from '../assets/logo-ac.png'

interface NavbarProps {
  theme: 'dark' | 'light'
  toggleTheme: () => void
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="fixed-top w-100 z-50 py-2 py-md-3">
      <div className="container px-3 px-lg-4">
        {/* Single Unified Floating Navbar Header Bar with Frosted Backdrop Blur */}
        <div className="unified-navbar-bar d-flex align-items-center justify-content-between px-3 px-md-4 py-2">
          
          {/* PART 1: LEFT (Brand AC Logo) */}
          <NavLink
            className="navbar-brand p-0 m-0 d-flex align-items-center position-relative text-decoration-none"
            to="/"
            title="Amit Chavda Portfolio"
            onClick={closeMobileMenu}
          >
            <div className="brand-logo-container">
              <img
                src={logoAc}
                alt="Amit Chavda AC Logo"
                className="brand-logo-img"
                loading="eager"
                decoding="async"
              />
            </div>
          </NavLink>

          {/* PART 2: CENTER (Navigation Links - Integrated Inline inside Unified Header Bar) */}
          <div className="d-none d-lg-block">
            <ul className="nav flex-row align-items-center gap-1 mb-0 list-unstyled">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link nav-link-custom ${isActive ? 'active' : ''}`}
                  to="/"
                  end
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link nav-link-custom ${isActive ? 'active' : ''}`}
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link nav-link-custom ${isActive ? 'active' : ''}`}
                  to="/services"
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link nav-link-custom ${isActive ? 'active' : ''}`}
                  to="/projects"
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link nav-link-custom ${isActive ? 'active' : ''}`}
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* PART 3: RIGHT (Theme Toggle & Mobile Hamburger) */}
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

            {/* Custom Interactive Hamburger Button */}
            <button
              className={`hamburger-toggle-btn d-lg-none ${isMobileMenuOpen ? 'active' : ''}`}
              type="button"
              onClick={toggleMobileMenu}
              aria-label="Toggle Mobile Navigation"
              title="Toggle Menu"
            >
              <i className={`bi ${isMobileMenuOpen ? 'bi-x-lg fs-5' : 'bi-list fs-3'}`}></i>
            </button>
          </div>
        </div>

        {/* PART 4: SMOOTH ACCORDION MOBILE MENU */}
        <div className={`mobile-menu-accordion d-lg-none ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-glass-card">
            <nav className="d-flex flex-column gap-1">
              <NavLink
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                to="/"
                end
                onClick={closeMobileMenu}
              >
                <i className="bi bi-house-door-fill"></i> Home
              </NavLink>
              <NavLink
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                to="/about"
                onClick={closeMobileMenu}
              >
                <i className="bi bi-person-fill"></i> About
              </NavLink>
              <NavLink
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                to="/services"
                onClick={closeMobileMenu}
              >
                <i className="bi bi-code-slash"></i> Services
              </NavLink>
              <NavLink
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                to="/projects"
                onClick={closeMobileMenu}
              >
                <i className="bi bi-folder-fill"></i> Projects
              </NavLink>
              <NavLink
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                to="/contact"
                onClick={closeMobileMenu}
              >
                <i className="bi bi-envelope-fill"></i> Contact
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
