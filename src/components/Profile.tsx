import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/amit.jpeg'
import BorderGlow from './BorderGlow'
import SEO from './SEO'
import { getDynamicExperience, getDynamicProjectsCount } from '../utils/dynamicStats'

export default function Profile() {
  return (
    <section id="profile" className="py-4 position-relative">
      <SEO 
        title="Amit Chavda | Developer Profile"
        description="Developer profile and skills summary for Amit Chavda, MERN Stack & Full Stack Web Developer based in Ahmedabad, Gujarat."
        keywords="Amit Chavda Profile, MERN Stack Developer Ahmedabad, Full Stack Web Developer Profile"
        canonicalUrl="https://chavdaamit.in/profile"
      />
      <div className="container py-2 max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-4">
          <h2 className="section-title">
            <i className="bi bi-person-badge-fill me-2 text-cyan"></i> Developer Profile
          </h2>
          <div className="section-title-underline"></div>
        </div>

        {/* Main Profile Card Container */}
        <BorderGlow className="p-4 p-md-5 mb-5" borderRadius={24} edgeSensitivity={35} glowRadius={45}>
          <div className="row g-4 align-items-center">
            {/* Profile Avatar Column */}
            <div className="col-lg-4 text-center">
              <div className="profile-glow-container mb-3 mb-lg-0">
                <img
                  src={heroImg}
                  alt="Chavda Amit Profile"
                  className="profile-img-square shadow-lg"
                  loading="eager"
                  decoding="async"
                  style={{ width: '280px', height: '320px', borderRadius: '16px', objectFit: 'cover' }}
                />
                <div className="profile-experience-badge">
                  <i className="bi bi-patch-check-fill text-primary fs-5"></i>
                  <span>MERN & Next.js Developer</span>
                </div>
              </div>
            </div>

            {/* Profile Details Column */}
            <div className="col-lg-8">
              <div className="ps-lg-3">
                <span className="badge mb-3 d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-pill small fw-semibold text-primary bg-primary bg-opacity-10 border border-primary border-opacity-20">
                  <span className="pulse-dot-cyan"></span> Active Software Engineer
                </span>

                <h1 className="display-5 hero-name-text text-custom-heading mb-2">
                  CHAVDA <span className="text-gradient-cyan-purple">AMIT</span>
                </h1>

                <h4 className="fs-5 text-primary fw-bold mb-3 font-heading">
                  Full Stack Web Developer
                </h4>

                <p className="text-custom-muted fs-6 lh-lg mb-4">
                  Passionate and detail-oriented Full Stack Developer specializing in crafting responsive, high-performance web applications using React.js, Next.js, Node.js, Express, and MongoDB. Committed to clean code, seamless UX/UI, and continuous learning.
                </p>

                {/* Quick Info Grid */}
                <div className="row g-3 mb-4">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center gap-2.5 text-custom-heading">
                      <div className="rounded-circle p-2 bg-primary bg-opacity-10 text-primary d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
                        <i className="bi bi-geo-alt-fill"></i>
                      </div>
                      <span className="small fw-medium">Naroda, Ahmedabad, Gujarat - 382340</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center gap-2.5 text-custom-heading">
                      <div className="rounded-circle p-2 bg-primary bg-opacity-10 text-primary d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
                        <i className="bi bi-envelope-fill"></i>
                      </div>
                      <a href="mailto:chavdaamit1011@gmail.com" className="small fw-medium text-custom-heading text-decoration-none hover-blue">
                        chavdaamit1011@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center gap-2.5 text-custom-heading">
                      <div className="rounded-circle p-2 bg-primary bg-opacity-10 text-primary d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
                        <i className="bi bi-telephone-fill"></i>
                      </div>
                      <a href="tel:+919998320342" className="small fw-medium text-custom-heading text-decoration-none hover-blue">
                        +91-9998320342
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center gap-2.5 text-custom-heading">
                      <div className="rounded-circle p-2 bg-primary bg-opacity-10 text-primary d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
                        <i className="bi bi-mortarboard-fill"></i>
                      </div>
                      <span className="small fw-medium">B.Com Graduate (First Class)</span>
                    </div>
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="d-flex flex-wrap gap-3 align-items-center">
                  <Link to="/projects" className="btn btn-cyan rounded-pill px-4 py-2.5 fs-6">
                    View Projects
                  </Link>
                  <Link to="/contact" className="btn btn-outline-cyan rounded-pill px-4 py-2.5 fs-6">
                    Get In Touch
                  </Link>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="btn btn-cyan rounded-pill px-4 py-2.5 fs-6 d-inline-flex align-items-center gap-2"
                  >
                    <i className="bi bi-download"></i> Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </BorderGlow>

        {/* Stats Grid */}
        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div className="custom-card p-4 text-center">
              <h3 className="display-6 fw-bold text-cyan mb-1 font-heading">{getDynamicExperience()}</h3>
              <p className="text-custom-muted mb-0 fw-medium">Professional Experience</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="custom-card p-4 text-center">
              <h3 className="display-6 fw-bold text-cyan mb-1 font-heading">{getDynamicProjectsCount()} Live</h3>
              <p className="text-custom-muted mb-0 fw-medium">Deployed Web Projects</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="custom-card p-4 text-center">
              <h3 className="display-6 fw-bold text-cyan mb-1 font-heading">100%</h3>
              <p className="text-custom-muted mb-0 fw-medium">Responsive & Clean Code</p>
            </div>
          </div>
        </div>

        {/* Social Media Links Bar */}
        <div className="text-center">
          <h5 className="fs-6 fw-bold text-custom-heading mb-3 font-heading">Connect With Me</h5>
          <div className="d-flex justify-content-center align-items-center gap-3">
            <a
              href="https://github.com/chavdaamit1011-svg"
              target="_blank"
              rel="noopener noreferrer"
              className="social-drawer-icon social-icon-github"
              aria-label="GitHub"
              title="GitHub"
            >
              <i className="bi bi-github fs-5 text-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/amit-chavda-9ab181355/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-drawer-icon social-icon-linkedin"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <i className="bi bi-linkedin fs-5 text-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/chavda_amit_111/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-drawer-icon social-icon-instagram"
              aria-label="Instagram"
              title="Instagram"
            >
              <i className="bi bi-instagram fs-5 text-instagram"></i>
            </a>
            <a
              href="https://wa.me/919998320342"
              target="_blank"
              rel="noopener noreferrer"
              className="social-drawer-icon social-icon-whatsapp"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <i className="bi bi-whatsapp fs-5 text-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
