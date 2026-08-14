import React, { useEffect, useState, useRef } from 'react'
import heroImg from '../assets/amit.jpeg'
import coverVideo from '../assets/ya_Wide_Banner_Lan.mp4'
import resumePdf from '../assets/Amit-1.pdf.pdf'

interface ProfileDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export default function ProfileDrawer({ isOpen, onClose }: ProfileDrawerProps) {
  const [shouldRender, setShouldRender] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const scrollPositionRef = useRef(0)

  // Handle smooth entrance and exit animations & background scroll locking
  useEffect(() => {
    if (isOpen) {
      scrollPositionRef.current = window.scrollY
      setShouldRender(true)
      setIsClosing(false)
      document.body.style.overflow = 'hidden'
    } else if (shouldRender) {
      setIsClosing(true)
      const timer = setTimeout(() => {
        setShouldRender(false)
        setIsClosing(false)
        document.body.style.overflow = ''
        if (typeof window !== 'undefined' && scrollPositionRef.current) {
          window.scrollTo(0, scrollPositionRef.current)
        }
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      onClose()
    }, 300)
  }

  // Touch swipe gesture logic to close drawer on mobile screen swipe
  const touchStartXRef = useRef<number | null>(null)
  const touchStartYRef = useRef<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX
    touchStartYRef.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return
    const endX = e.changedTouches[0].clientX
    const endY = e.changedTouches[0].clientY
    const deltaX = endX - touchStartXRef.current
    const deltaY = endY - touchStartYRef.current

    // Trigger close if horizontal swipe is Right-to-Left (deltaX < -45px)
    if (deltaX < -45 && Math.abs(deltaX) > Math.abs(deltaY)) {
      handleClose()
    }

    touchStartXRef.current = null
    touchStartYRef.current = null
  }

  if (!shouldRender) return null

  return (
    <>
      {/* Click outside Backdrop Overlay */}
      <div 
        className={`profile-drawer-backdrop position-fixed vh-100 vw-100 ${isClosing ? 'closing' : ''}`}
        onClick={handleClose}
        style={{ zIndex: 99998 }}
      />

      {/* Floating Card Popover Container */}
      <div 
        className="profile-drawer-container position-fixed vh-100 vw-100 d-flex align-items-center justify-content-center p-3 p-md-4" 
        style={{ zIndex: 99999, cursor: 'pointer' }}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            handleClose()
          }
        }}
      >
        <div 
          className={`profile-drawer-floating-card rounded-4 shadow-2xl overflow-hidden d-flex flex-column ${isClosing ? 'closing' : ''}`}
          style={{ cursor: 'default' }}
          onClick={(e) => e.stopPropagation()}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="profile-drawer-scrollable h-100 d-flex flex-column">
            
            {/* 1. TOP COVER HEADER WITH PERMANENT ANIMATED VIDEO BACKGROUND */}
            <div 
              className="profile-drawer-cover position-relative overflow-hidden flex-shrink-0"
              style={{ height: '125px' }}
            >
              <video 
                src={coverVideo} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="profile-cover-media"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              
              {/* Top-Left: Sleek Glass Status Badge "● Hire me." */}
              <span 
                className="profile-status-badge position-absolute d-inline-flex align-items-center gap-1.5 px-3 py-1.5 rounded-pill fw-semibold text-white shadow-md" 
                style={{ 
                  top: '14px', 
                  left: '16px', 
                  zIndex: 6, 
                  fontSize: '0.76rem',
                  background: 'rgba(15, 23, 42, 0.78)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.35)'
                }}
              >
                <span className="pulse-dot-green"></span> Hire me.
              </span>

              {/* Top-Right: Circular dark close button with white 'X' */}
              <button 
                className="profile-drawer-close position-absolute btn rounded-circle text-white d-flex align-items-center justify-content-center p-0 shadow-md"
                onClick={(e) => {
                  e.stopPropagation()
                  handleClose()
                }}
                aria-label="Close Profile Drawer"
                style={{ 
                  top: '14px', 
                  right: '16px', 
                  width: '32px', 
                  height: '32px', 
                  zIndex: 6,
                  background: 'rgba(15, 23, 42, 0.78)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.35)'
                }}
              >
                <i className="bi bi-x-lg fs-6"></i>
              </button>
            </div>

            {/* SINGLE UNIFIED CONTENT PANEL */}
            <div className="px-4 pb-4 d-flex flex-column flex-grow-1 justify-content-between gap-2.5">
              
              {/* 2. PROFILE PHOTO (Overlapping 115px Circular Avatar) */}
              <div className="profile-drawer-avatar-wrapper text-center flex-shrink-0" style={{ marginTop: '-58px', marginBottom: '0.25rem' }}>
                <div className="profile-avatar-ring d-inline-block">
                  <img 
                    src={heroImg} 
                    alt="Chavda Amit Profile" 
                    className="profile-drawer-avatar img-fluid rounded-circle"
                    style={{ width: '115px', height: '115px', border: 'none', boxShadow: 'none' }}
                  />
                </div>
              </div>

              {/* 3. NAME + ROLE + INTRO + AVAILABILITY */}
              <div className="text-center">
                {/* Name + Verified Badge */}
                <h3 className="fs-3 fw-bold text-custom-heading mb-1 d-flex align-items-center justify-content-center gap-1.5 font-heading">
                Chavda Amit <i className="bi bi-patch-check-fill text-cyan fs-5" title="Verified Developer"></i>
              </h3>
              
              {/* Outlined Role Badge */}
              <div className="mb-2.5">
                <span className="badge rounded-pill bg-cyan bg-opacity-10 text-cyan border border-cyan border-opacity-20 px-3 py-1.5 fw-semibold small">
                  Full Stack Web Developer
                </span>
              </div>

              {/* Compact 2-Line Professional Introduction */}
              <p className="text-custom-muted small lh-base mb-1.5 px-1">
                Full-Stack Web & Next.js Developer.<br />
                Building modern web apps & AI solutions.
              </p>

              {/* Availability Statement */}
              <span className="text-cyan fw-semibold small d-block">
                Available for Full-Time & Freelance Projects!
              </span>
            </div>

            {/* 4. CONTACT INFORMATION LIST (Directly in panel with dividers, NO BOX CONTAINER!) */}
            <div className="profile-contact-list py-1">
              <div className="d-flex flex-column gap-2">
                
                {/* 📍 Location */}
                <div className="d-flex align-items-center justify-content-between py-2 border-bottom border-secondary border-opacity-10">
                  <div className="d-flex align-items-center gap-2.5">
                    <div className="profile-info-icon-badge rounded-circle text-primary bg-primary bg-opacity-10 d-flex align-items-center justify-content-center flex-shrink-0">
                      <i className="bi bi-geo-alt-fill"></i>
                    </div>
                    <span className="small fw-semibold text-custom-heading">Location</span>
                  </div>
                  <span className="small text-custom-muted text-end fw-medium ps-2">Naroda, Ahmedabad - 382340</span>
                </div>

                {/* ✉️ Email (Clickable) */}
                <div className="d-flex align-items-center justify-content-between py-2 border-bottom border-secondary border-opacity-10">
                  <div className="d-flex align-items-center gap-2.5">
                    <div className="profile-info-icon-badge rounded-circle text-primary bg-primary bg-opacity-10 d-flex align-items-center justify-content-center flex-shrink-0">
                      <i className="bi bi-envelope-fill"></i>
                    </div>
                    <span className="small fw-semibold text-custom-heading">Email</span>
                  </div>
                  <a 
                    href="mailto:chavdaamit1011@gmail.com" 
                    className="small text-cyan text-decoration-none hover-underline text-end fw-semibold text-truncate ps-2"
                    style={{ maxWidth: '210px' }}
                    title="Send Email"
                  >
                    chavdaamit1011@gmail.com
                  </a>
                </div>

                {/* 📞 Phone (Clickable) */}
                <div className="d-flex align-items-center justify-content-between py-2">
                  <div className="d-flex align-items-center gap-2.5">
                    <div className="profile-info-icon-badge rounded-circle text-primary bg-primary bg-opacity-10 d-flex align-items-center justify-content-center flex-shrink-0">
                      <i className="bi bi-telephone-fill"></i>
                    </div>
                    <span className="small fw-semibold text-custom-heading">Phone</span>
                  </div>
                  <a 
                    href="tel:+919998320342" 
                    className="small text-cyan text-decoration-none hover-underline text-end fw-semibold ps-2"
                    title="Call Phone"
                  >
                    +91-9998320342
                  </a>
                </div>

              </div>
            </div>

            {/* 5. SOCIAL ICONS SECTION (NO BORDER ABOVE) */}
            <div className="pt-1">
              <div className="d-flex justify-content-center align-items-center gap-3">
                <a
                  href="https://github.com/chavdaamit1011-svg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-drawer-icon social-icon-github"
                  title="GitHub"
                >
                  <i className="bi bi-github text-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/amit-chavda-9ab181355/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-drawer-icon social-icon-linkedin"
                  title="LinkedIn"
                >
                  <i className="bi bi-linkedin text-linkedin"></i>
                </a>
                <a
                  href="https://www.instagram.com/chavda_amit_111/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-drawer-icon social-icon-instagram"
                  title="Instagram"
                >
                  <i className="bi bi-instagram text-instagram"></i>
                </a>
                <a
                  href="https://wa.me/919998320342"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-drawer-icon social-icon-whatsapp"
                  title="WhatsApp"
                >
                  <i className="bi bi-whatsapp text-whatsapp"></i>
                </a>
              </div>
            </div>

            {/* 6. PRIMARY RESUME DOWNLOAD BUTTON */}
            <div>
              <a
                href={resumePdf}
                download="Amit_Chavda_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-cyan rounded-pill py-2.5 px-4 fs-6 w-100 d-flex align-items-center justify-content-center gap-2 fw-semibold shadow-sm text-decoration-none"
                style={{ height: '48px' }}
              >
                <i className="bi bi-download"></i> Download Resume
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  </>
  )
}
