import React, { useEffect, useState, useRef } from 'react'
import heroImg from '../assets/amit.jpeg'

interface ProfileDrawerProps {
  isOpen: boolean
  onClose: () => void
}

interface CoverMedia {
  url: string
  type: 'image' | 'video'
}

export default function ProfileDrawer({ isOpen, onClose }: ProfileDrawerProps) {
  const [shouldRender, setShouldRender] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [coverMedia, setCoverMedia] = useState<CoverMedia | null>(() => {
    const saved = localStorage.getItem('portfolio_cover_media')
    if (saved) {
      try {
        return JSON.parse(saved)
      } catch (e) {
        return null
      }
    }
    return null
  })

  const fileInputRef = useRef<HTMLInputElement | null>(null)

  // Handle smooth entrance and exit animations
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true)
      setIsClosing(false)
      document.body.style.overflow = 'hidden'
    } else if (shouldRender) {
      setIsClosing(true)
      const timer = setTimeout(() => {
        setShouldRender(false)
        setIsClosing(false)
        document.body.style.overflow = ''
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

  const handleBannerClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const isVideo = file.type.startsWith('video/')
    const reader = new FileReader()
    reader.onload = (event) => {
      const result = event.target?.result as string
      if (result) {
        const mediaObj: CoverMedia = {
          url: result,
          type: isVideo ? 'video' : 'image',
        }
        setCoverMedia(mediaObj)
        try {
          localStorage.setItem('portfolio_cover_media', JSON.stringify(mediaObj))
        } catch (err) {
          console.warn('Cover media storage fallback used', err)
        }
      }
    }
    reader.readAsDataURL(file)
  }

  const handleRemoveCover = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCoverMedia(null)
    localStorage.removeItem('portfolio_cover_media')
  }

  if (!shouldRender) return null

  return (
    <>
      {/* Click outside Backdrop Overlay */}
      <div 
        className={`profile-drawer-backdrop ${isClosing ? 'closing' : ''}`} 
        onClick={handleClose} 
      />

      {/* Floating Popover Single Unified Profile Panel Card */}
      <div className={`profile-drawer-floating-card ${isClosing ? 'closing' : ''}`}>
        <div className="profile-drawer-scrollable h-100 d-flex flex-column">
          
          {/* Hidden File Input for Custom Image/Video Upload */}
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            accept="image/*,video/*" 
            className="d-none" 
          />

          {/* 1. TOP GRADIENT HEADER (Blue -> Purple -> Cyan Gradient Banner) */}
          <div 
            className="profile-drawer-cover position-relative cursor-pointer overflow-hidden flex-shrink-0"
            onClick={handleBannerClick}
            title="Click to upload custom cover image or video"
            style={{ height: '120px' }}
          >
            {coverMedia ? (
              coverMedia.type === 'video' ? (
                <video 
                  src={coverMedia.url} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="profile-cover-media"
                />
              ) : (
                <img 
                  src={coverMedia.url} 
                  alt="Custom Cover" 
                  className="profile-cover-media" 
                />
              )
            ) : (
              <div className="profile-cover-gradient"></div>
            )}

            {/* Hover Upload Overlay Hint */}
            <div className="profile-cover-upload-hint d-flex align-items-center justify-content-center gap-2">
              <i className="bi bi-camera-fill fs-5"></i>
              <span className="small fw-medium">Upload Image / Video</span>
            </div>

            {/* Reset Cover Button */}
            {coverMedia && (
              <button 
                className="btn btn-sm btn-dark bg-opacity-75 text-white rounded-circle position-absolute bottom-0 end-0 m-2 p-0 d-flex align-items-center justify-content-center border-0"
                style={{ width: '28px', height: '28px', zIndex: 10 }}
                onClick={handleRemoveCover}
                title="Reset to default cover"
              >
                <i className="bi bi-arrow-counterclockwise micro-text"></i>
              </button>
            )}
            
            {/* Top-Left: Small dark status pill "● Hire me." */}
            <span className="profile-status-badge position-absolute top-0 start-0 m-3 d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-pill small fw-semibold text-white bg-dark bg-opacity-60 backdrop-blur border border-white border-opacity-20 shadow-sm" style={{ zIndex: 6 }}>
              <span className="pulse-dot-green"></span> Hire me.
            </span>

            {/* Top-Right: Circular dark close button with white 'X' */}
            <button 
              className="profile-drawer-close position-absolute top-0 end-0 m-3 btn btn-sm rounded-circle text-white bg-dark bg-opacity-60 border border-white border-opacity-20 d-flex align-items-center justify-content-center p-0"
              onClick={(e) => {
                e.stopPropagation()
                handleClose()
              }}
              aria-label="Close Profile Drawer"
              style={{ width: '32px', height: '32px', zIndex: 6 }}
            >
              <i className="bi bi-x-lg fs-6"></i>
            </button>
          </div>

          {/* 2. PROFILE PHOTO (Overlapping 115px Circular Avatar) */}
          <div className="profile-drawer-avatar-wrapper text-center px-4 flex-shrink-0" style={{ marginTop: '-48px' }}>
            <div className="profile-avatar-ring d-inline-block">
              <img 
                src={heroImg} 
                alt="Chavda Amit Profile" 
                className="profile-drawer-avatar img-fluid rounded-circle"
                style={{ width: '115px', height: '115px', border: '4px solid var(--bg-secondary)' }}
              />
            </div>
          </div>

          {/* SINGLE UNIFIED CONTENT PANEL (No Nested Card Boxes!) */}
          <div className="px-4 pt-2 pb-4 d-flex flex-column flex-grow-1 justify-content-between gap-3.5">
            
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
                  <span className="small text-custom-muted text-end fw-medium ps-2">Naroda, Ahmedabad</span>
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
                  <i className="bi bi-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/amit-chavda-9ab181355/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-drawer-icon social-icon-linkedin"
                  title="LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a
                  href="https://www.instagram.com/chavda_amit_111/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-drawer-icon social-icon-instagram"
                  title="Instagram"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="https://wa.me/919998320342"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-drawer-icon social-icon-whatsapp"
                  title="WhatsApp"
                >
                  <i className="bi bi-whatsapp"></i>
                </a>
              </div>
            </div>

            {/* 6. PRIMARY RESUME DOWNLOAD BUTTON */}
            <div>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="btn btn-cyan rounded-pill py-2.5 px-4 fs-6 w-100 d-flex align-items-center justify-content-center gap-2 fw-semibold shadow-sm"
                style={{ height: '48px' }}
              >
                <i className="bi bi-download"></i> Download Resume
              </a>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
