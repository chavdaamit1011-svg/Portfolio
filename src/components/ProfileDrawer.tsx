import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
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

      {/* Floating Popover Drawer Card */}
      <div className={`profile-drawer-floating-card ${isClosing ? 'closing' : ''}`}>
        <div className="profile-drawer-scrollable h-100">
          
          {/* Hidden File Input for Custom Image/Video Upload */}
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            accept="image/*,video/*" 
            className="d-none" 
          />

          {/* Aesthetic Cover Banner (Clickable to Upload Image or Video) */}
          <div 
            className="profile-drawer-cover position-relative cursor-pointer overflow-hidden"
            onClick={handleBannerClick}
            title="Click to upload custom cover image or video"
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

            {/* Reset Cover Button if Media Uploaded */}
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
            
            {/* Status Hire Pill Badge */}
            <span className="profile-status-badge position-absolute top-0 start-0 m-3 d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-pill small fw-semibold text-white bg-dark bg-opacity-60 backdrop-blur border border-white border-opacity-20 shadow-sm" style={{ zIndex: 6 }}>
              <span className="pulse-dot-green"></span> Hire me.
            </span>

            {/* Close Button */}
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

          {/* Avatar Photo Overlap */}
          <div className="profile-drawer-avatar-wrapper text-center px-4">
            <div className="profile-avatar-ring d-inline-block">
              <img 
                src={heroImg} 
                alt="Chavda Amit Profile" 
                className="profile-drawer-avatar img-fluid rounded-circle"
              />
            </div>
          </div>

          {/* Profile Details Container */}
          <div className="px-4 pt-3 pb-4">
            {/* Name & Handle */}
            <div className="text-center mb-3">
              <h3 className="fs-4 fw-bold text-custom-heading mb-1 d-flex align-items-center justify-content-center gap-1.5 font-heading">
                Chavda Amit <i className="bi bi-patch-check-fill text-cyan fs-5" title="Verified Developer"></i>
              </h3>
              <p className="text-custom-muted small mb-2">@chavdaamit1011</p>
              <span className="badge rounded-pill bg-cyan bg-opacity-10 text-cyan border border-cyan border-opacity-20 px-3 py-1.5 fw-semibold small">
                Full Stack Web Developer
              </span>
            </div>

            {/* Short Tagline */}
            <p className="text-custom-muted small lh-base mb-3 text-center">
              Building scalable web apps with MERN & Next.js.
            </p>

            {/* Redesigned Spacious Contact Card */}
            <div className="profile-drawer-info-card p-3.5 rounded-4 mb-4">
              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center gap-3">
                  <div className="profile-info-icon-badge rounded-circle text-cyan bg-cyan bg-opacity-10 d-flex align-items-center justify-content-center flex-shrink-0">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div className="text-truncate">
                    <span className="d-block micro-text text-custom-muted fw-semibold uppercase">Location</span>
                    <span className="small fw-semibold text-custom-heading text-truncate">Nikol, Ahmedabad, Gujarat, India</span>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div className="profile-info-icon-badge rounded-circle text-cyan bg-cyan bg-opacity-10 d-flex align-items-center justify-content-center flex-shrink-0">
                    <i className="bi bi-briefcase-fill"></i>
                  </div>
                  <div className="text-truncate">
                    <span className="d-block micro-text text-custom-muted fw-semibold uppercase">Status</span>
                    <span className="small fw-semibold text-custom-heading text-truncate">Open for Full-Time Roles & Projects</span>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div className="profile-info-icon-badge rounded-circle text-cyan bg-cyan bg-opacity-10 d-flex align-items-center justify-content-center flex-shrink-0">
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <div className="text-truncate">
                    <span className="d-block micro-text text-custom-muted fw-semibold uppercase">Email</span>
                    <a href="mailto:chavdaamit1011@gmail.com" className="small fw-semibold text-custom-heading text-decoration-none hover-cyan text-truncate d-block">
                      chavdaamit1011@gmail.com
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div className="profile-info-icon-badge rounded-circle text-cyan bg-cyan bg-opacity-10 d-flex align-items-center justify-content-center flex-shrink-0">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div className="text-truncate">
                    <span className="d-block micro-text text-custom-muted fw-semibold uppercase">Phone</span>
                    <a href="tel:+919998320342" className="small fw-semibold text-custom-heading text-decoration-none hover-cyan d-block">
                      +91-9998320342
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="d-flex flex-column gap-2 mb-4">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="btn btn-cyan rounded-pill py-2.5 px-3 fs-6 d-flex align-items-center justify-content-center gap-2 fw-semibold shadow-sm"
              >
                <i className="bi bi-download"></i> Download Resume
              </a>
              <Link
                to="/contact"
                onClick={handleClose}
                className="btn btn-outline-cyan rounded-pill py-2 px-3 small d-flex align-items-center justify-content-center gap-2"
              >
                <i className="bi bi-envelope-fill"></i> Get In Touch
              </Link>
            </div>

            {/* Social Links Bar */}
            <div className="text-center">
              <span className="text-custom-muted micro-text d-block mb-2 text-uppercase tracking-wider fw-semibold">Connect Socially</span>
              <div className="d-flex justify-content-center align-items-center gap-3">
                <a
                  href="https://github.com/chavdaamit1011-svg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-drawer-icon"
                  title="GitHub"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/amit-chavda-9ab181355/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-drawer-icon"
                  title="LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a
                  href="https://www.instagram.com/chavda_amit_111/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-drawer-icon text-danger"
                  title="Instagram"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="https://wa.me/919998320342"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-drawer-icon text-success"
                  title="WhatsApp"
                >
                  <i className="bi bi-whatsapp"></i>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
