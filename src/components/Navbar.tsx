import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import logoAmit from '../assets/logoAmit.png'
import ProfileDrawer from './ProfileDrawer'

interface NavbarProps {
  theme: 'dark' | 'light'
  toggleTheme: () => void
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false)
  const headerRef = useRef<HTMLDivElement | null>(null)

  // Track window scroll position to transition header state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Smooth click outside listener to close mobile header menu when clicking anywhere on the page
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        isMobileMenuOpen &&
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  // Lock background body scroll when mobile navigation menu is open
  const navScrollPosRef = useRef(0)
  useEffect(() => {
    if (isMobileMenuOpen) {
      navScrollPosRef.current = window.scrollY
      document.body.style.overflow = 'hidden'
    } else {
      if (!isProfileDrawerOpen) {
        document.body.style.overflow = ''
      }
      if (typeof window !== 'undefined' && navScrollPosRef.current) {
        window.scrollTo(0, navScrollPosRef.current)
      }
    }
  }, [isMobileMenuOpen, isProfileDrawerOpen])

  // Global Touch Swipe gesture to open Profile Drawer on Mobile screens
  useEffect(() => {
    let startX = 0
    let startY = 0

    const handleGlobalTouchStart = (e: TouchEvent) => {
      if (isProfileDrawerOpen || e.touches.length > 1) return
      startX = e.touches[0].clientX
      startY = e.touches[0].clientY
    }

    const handleGlobalTouchEnd = (e: TouchEvent) => {
      if (isProfileDrawerOpen) return
      const endX = e.changedTouches[0].clientX
      const endY = e.changedTouches[0].clientY
      const deltaX = endX - startX
      const deltaY = endY - startY

      // Trigger ProfileDrawer open on mobile when swiping Left-to-Right (deltaX > 45px)
      if (deltaX > 45 && Math.abs(deltaX) > Math.abs(deltaY) && window.innerWidth <= 768) {
        setIsProfileDrawerOpen(true)
      }
    }

    window.addEventListener('touchstart', handleGlobalTouchStart, { passive: true })
    window.addEventListener('touchend', handleGlobalTouchEnd, { passive: true })

    return () => {
      window.removeEventListener('touchstart', handleGlobalTouchStart)
      window.removeEventListener('touchend', handleGlobalTouchEnd)
    }
  }, [isProfileDrawerOpen])

  return (
    <>
      {/* Click-outside backdrop overlay when mobile menu is expanded */}
      {isMobileMenuOpen && (
        <div
          className="position-fixed vh-100 vw-100 z-40 bg-dark bg-opacity-25"
          onClick={closeMobileMenu}
          style={{
            top: 0,
            left: 0,
            backdropFilter: 'blur(3px)',
            WebkitBackdropFilter: 'blur(3px)',
          }}
        />
      )}

      {/* Profile Side Drawer Modal */}
      <ProfileDrawer 
        isOpen={isProfileDrawerOpen} 
        onClose={() => setIsProfileDrawerOpen(false)} 
      />

      <header ref={headerRef} className="fixed-top w-100 z-50 py-2">
        <div className="container px-3 px-lg-4">
          {/* Single Unified Floating Navbar Header Bar with Frosted Backdrop Blur */}
          <div className="unified-navbar-bar d-flex align-items-center justify-content-between ps-1 ps-md-2 pe-3 pe-md-4 py-1.5">
            
            {/* PART 1: LEFT (Brand AC Logo + Vertical Separator Line |) */}
            <div className="d-flex align-items-center">
              <div
                className="navbar-brand p-0 m-0 d-flex align-items-center position-relative text-decoration-none"
                onClick={(e) => {
                  e.preventDefault()
                  closeMobileMenu()
                  setIsProfileDrawerOpen(true)
                }}
                style={{ cursor: 'pointer' }}
                title="Click to view Developer Profile"
              >
                <div className="brand-logo-wrapper">
                  <img
                    src={logoAmit}
                    alt="Chavda Amit AC Logo"
                    className="brand-logo-img"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="nav-vertical-divider d-block"></div>
            </div>

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

              {/* Custom Interactive Hamburger Button (Sleek Rounded Square) */}
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

                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    closeMobileMenu();
                  }}
                  className="btn btn-cyan rounded-pill py-2.5 px-3 fs-6 d-flex align-items-center justify-content-center gap-2 mt-2"
                >
                  <i className="bi bi-download"></i> Download Resume
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
