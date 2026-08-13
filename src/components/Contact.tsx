import React, { useState } from 'react'
import SEO from './SEO'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 4000)
  }

  return (
    <section id="contact" className="py-4 position-relative">
      <SEO 
        title="Contact & Hire Chavda Amit | Best Freelance Web Developer"
        description="Hire Chavda Amit for custom freelance web development, Next.js applications, and full-stack web solutions. Available for remote work & freelance projects."
        keywords="Hire Freelance Developer, Contact Chavda Amit, Best Web Developer Contact, Freelance Next.js Developer Hire"
      />
      <div className="container py-2 max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-4">
          <h2 className="section-title">
            <i className="bi bi-envelope-fill me-2 text-cyan"></i> Contact
          </h2>
          <div className="section-title-underline"></div>
        </div>

        {/* Top Header Text Banner */}
        <div className="mb-4 text-start">
          <span className="badge-connect-pill mb-3 d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-pill small fw-semibold text-cyan bg-cyan bg-opacity-10 border border-cyan border-opacity-20">
            <span className="pulse-dot-cyan"></span> Open for Full-Time Opportunities & Projects
          </span>

          <h3 className="fs-2 fw-bold text-custom-heading mb-2" style={{ fontFamily: "'Outfit', 'Syne', sans-serif" }}>
            Let's talk about everything!
          </h3>

          <p className="text-custom-muted mb-4 fs-6 lh-base" style={{ maxWidth: '620px' }}>
            Feel free to reach out to me for web development projects, freelance inquiries, or software engineering job opportunities.
          </p>
        </div>

        {/* 2-Column Row starting EXACTLY at Location Card & Contact Form Card */}
        <div className="row g-4 g-lg-5 align-items-start">
          {/* Left Column: Location, Email, Phone Cards + Social Icons */}
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="d-flex flex-column gap-3 mb-4">
              {/* Location Card */}
              <div className="custom-card p-3 d-flex align-items-center gap-3">
                <div className="contact-icon-wrapper rounded-circle d-flex align-items-center justify-content-center text-primary bg-primary bg-opacity-10">
                  <i className="bi bi-geo-alt-fill fs-5"></i>
                </div>
                <div>
                  <h5 className="fs-6 fw-bold text-custom-heading mb-1">Location</h5>
                  <p className="text-custom-muted small mb-0">Nikol, Ahmedabad, Gujarat, India</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="custom-card p-3 d-flex align-items-center gap-3">
                <div className="contact-icon-wrapper rounded-circle d-flex align-items-center justify-content-center text-primary bg-primary bg-opacity-10">
                  <i className="bi bi-envelope-fill fs-5"></i>
                </div>
                <div>
                  <h5 className="fs-6 fw-bold text-custom-heading mb-1">Email</h5>
                  <a href="mailto:chavdaamit1011@gmail.com" className="text-custom-muted small text-decoration-none hover-white mb-0">
                    chavdaamit1011@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="custom-card p-3 d-flex align-items-center gap-3">
                <div className="contact-icon-wrapper rounded-circle d-flex align-items-center justify-content-center text-primary bg-primary bg-opacity-10">
                  <i className="bi bi-telephone-fill fs-5"></i>
                </div>
                <div>
                  <h5 className="fs-6 fw-bold text-custom-heading mb-1">Phone</h5>
                  <a href="tel:+919998320342" className="text-custom-muted small text-decoration-none hover-white mb-0">
                    +91-9998320342
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links (GitHub, LinkedIn, Instagram, WhatsApp) */}
            <div className="d-flex align-items-center gap-3">
              <a
                href="https://github.com/chavdaamit1011-svg"
                target="_blank"
                rel="noopener noreferrer"
                className="custom-card p-3 text-custom-heading text-decoration-none d-flex align-items-center justify-content-center rounded-circle"
                style={{ width: '45px', height: '45px' }}
                aria-label="GitHub"
                title="GitHub"
              >
                <i className="bi bi-github fs-5"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/amit-chavda-9ab181355/"
                target="_blank"
                rel="noopener noreferrer"
                className="custom-card p-3 text-custom-heading text-decoration-none d-flex align-items-center justify-content-center rounded-circle"
                style={{ width: '45px', height: '45px' }}
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <i className="bi bi-linkedin fs-5"></i>
              </a>
              <a
                href="https://www.instagram.com/chavda_amit_111/"
                target="_blank"
                rel="noopener noreferrer"
                className="custom-card p-3 text-custom-heading text-decoration-none d-flex align-items-center justify-content-center rounded-circle"
                style={{ width: '45px', height: '45px' }}
                aria-label="Instagram"
                title="Instagram"
              >
                <i className="bi bi-instagram fs-5 text-danger"></i>
              </a>
              <a
                href="https://wa.me/919998320342"
                target="_blank"
                rel="noopener noreferrer"
                className="custom-card p-3 text-custom-heading text-decoration-none d-flex align-items-center justify-content-center rounded-circle"
                style={{ width: '45px', height: '45px' }}
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <i className="bi bi-whatsapp fs-5 text-success"></i>
              </a>
            </div>
          </div>

          {/* Right Column: Compact Contact Form Card starting ALIGNED with Location Card */}
          <div className="col-lg-7">
            <div className="custom-card p-4 p-md-4 position-relative overflow-hidden">
              {/* Decorative Matrix Dots Pattern in Top Right Corner */}
              <div className="position-absolute top-0 end-0 p-4 opacity-25 pointer-events-none d-none d-sm-block">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="currentColor" className="text-primary">
                  <circle cx="6" cy="6" r="2.5" />
                  <circle cx="24" cy="6" r="2.5" />
                  <circle cx="42" cy="6" r="2.5" />
                  <circle cx="6" cy="24" r="2.5" />
                  <circle cx="24" cy="24" r="2.5" />
                  <circle cx="42" cy="24" r="2.5" />
                  <circle cx="6" cy="42" r="2.5" />
                  <circle cx="24" cy="42" r="2.5" />
                  <circle cx="42" cy="42" r="2.5" />
                </svg>
              </div>

              {/* Form Header */}
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="rounded-circle p-2 bg-primary bg-opacity-10 text-primary d-flex align-items-center justify-content-center" style={{ width: '42px', height: '42px' }}>
                  <i className="bi bi-send-fill fs-6"></i>
                </div>
                <h4 className="fs-5 fw-bold text-custom-heading mb-0">Send me a message</h4>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <div className="contact-input-group">
                      <i className="bi bi-person contact-input-icon"></i>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-control contact-input-field"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-input-group">
                      <i className="bi bi-envelope contact-input-icon"></i>
                      <input
                        type="email"
                        required
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-control contact-input-field"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="contact-input-group align-items-start">
                    <i className="bi bi-chat-text contact-input-icon pt-2"></i>
                    <textarea
                      rows={3}
                      required
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-control contact-input-field"
                      style={{ paddingTop: '0.65rem' }}
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary-gradient btn-md rounded-pill w-100 py-2.5 fs-6 fw-bold d-flex align-items-center justify-content-center gap-2"
                >
                  <i className="bi bi-send-fill"></i> Send Message
                </button>
              </form>

              {submitted && (
                <div className="mt-3 p-3 bg-success bg-opacity-25 text-success border border-success border-opacity-25 rounded-3 text-center small">
                  <i className="bi bi-check-circle-fill me-2"></i>
                  Thank you! Your message has been sent successfully.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
