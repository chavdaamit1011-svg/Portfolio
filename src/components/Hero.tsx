import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from './SEO'

const phrases = [
  'Full Stack Web Developer',
  'Best Next.js & React Expert',
  'Freelance Web Developer',
  'MERN Stack Developer',
]

export default function Hero() {
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(120)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]

    const handleTyping = () => {
      if (isDeleting) {
        setText(currentPhrase.substring(0, text.length - 1))
        setTypingSpeed(40)
      } else {
        setText(currentPhrase.substring(0, text.length + 1))
        setTypingSpeed(100)
      }

      if (!isDeleting && text === currentPhrase) {
        setTypingSpeed(2000)
        setIsDeleting(true)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setPhraseIndex((prev) => (prev + 1) % phrases.length)
        setTypingSpeed(300)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, phraseIndex, typingSpeed])

  return (
    <section
      id="home"
      className="position-relative d-flex align-items-center justify-content-center min-vh-100 text-center px-3 overflow-hidden"
      style={{ paddingTop: '100px', paddingBottom: '60px' }}
    >
      <SEO 
        title="Amit Chavda | MERN Stack Developer & Full Stack Developer"
        description="Amit Chavda is a MERN Stack Developer and Full Stack Web Developer building high-performance web applications using React.js, Next.js, Node.js, Express, and MongoDB."
        keywords="Amit Chavda, MERN Stack Developer, Full Stack Developer, React.js Developer, Next.js Developer, Node.js Developer, Portfolio"
      />

      <div className="bg-ambient-light" style={{ top: '20%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none' }}></div>

      <div className="container position-relative z-1 max-w-4xl mx-auto d-flex flex-column align-items-center justify-content-center text-center">
        {/* Availability Badge highlighting Full-Time Roles & Projects */}
        <span className="badge rounded-pill bg-cyan bg-opacity-10 text-cyan border border-cyan border-opacity-20 px-3.5 py-2 mb-3 small fw-semibold d-inline-flex align-items-center gap-2">
          <span className="pulse-dot-cyan"></span> Open for Full-Time Roles & Projects
        </span>

        <p className="text-custom-muted fs-5 mb-2 font-medium text-center w-100">Hello, I'm</p>

        <h1 className="display-2 hero-name-text text-custom-heading mb-3 text-center w-100">
          CHAVDA <span className="text-gradient-cyan-purple">AMIT</span>
        </h1>

        <div className="fs-3 text-custom-heading font-medium mb-4 min-h-12 d-flex align-items-center justify-content-center text-center w-100">
          <span>{text}</span>
          <span className="typing-cursor"></span>
        </div>

        {/* Perfectly Balanced Symmetrical Center Aligned Buttons Trio */}
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 mt-3 mb-4 w-100 mx-auto">
          <Link
            to="/projects"
            className="btn btn-cyan rounded-pill px-4 py-3 fs-6 position-relative z-2 d-inline-flex align-items-center justify-content-center"
            style={{ minWidth: '165px', maxWidth: '100%' }}
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="btn btn-outline-cyan rounded-pill px-4 py-3 fs-6 position-relative z-2 d-inline-flex align-items-center justify-content-center"
            style={{ minWidth: '165px', maxWidth: '100%' }}
          >
            Contact Me
          </Link>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="btn btn-cyan rounded-pill px-4 py-3 fs-6 position-relative z-2 d-none d-md-inline-flex align-items-center justify-content-center gap-2"
            style={{ minWidth: '185px', maxWidth: '100%' }}
          >
            <i className="bi bi-download"></i> Download Resume
          </a>
        </div>

        {/* Hero Social Icon Bar */}
        <div className="d-flex justify-content-center align-items-center gap-3 mt-3 position-relative z-2 w-100 mx-auto">
          <a
            href="https://github.com/chavdaamit1011-svg"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-card p-3 text-custom-heading text-decoration-none d-flex align-items-center justify-content-center rounded-circle"
            style={{ width: '44px', height: '44px' }}
            aria-label="GitHub"
            title="GitHub"
          >
            <i className="bi bi-github fs-5 text-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/amit-chavda-9ab181355/"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-card p-3 text-custom-heading text-decoration-none d-flex align-items-center justify-content-center rounded-circle"
            style={{ width: '44px', height: '44px' }}
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <i className="bi bi-linkedin fs-5 text-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/chavda_amit_111/"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-card p-3 text-custom-heading text-decoration-none d-flex align-items-center justify-content-center rounded-circle"
            style={{ width: '44px', height: '44px' }}
            aria-label="Instagram"
            title="Instagram"
          >
            <i className="bi bi-instagram fs-5 text-instagram"></i>
          </a>
          <a
            href="https://wa.me/919998320342"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-card p-3 text-custom-heading text-decoration-none d-flex align-items-center justify-content-center rounded-circle"
            style={{ width: '44px', height: '44px' }}
            aria-label="WhatsApp"
            title="WhatsApp"
          >
            <i className="bi bi-whatsapp fs-5 text-whatsapp"></i>
          </a>
        </div>
      </div>
    </section>
  )
}
