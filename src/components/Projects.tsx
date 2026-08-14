import React from 'react'
import BorderGlow from './BorderGlow'
import SEO from './SEO'
import { projects, Project } from '../data/projectsData'

export default function Projects() {
  return (
    <section id="projects" className="py-4 position-relative">
      <SEO 
        title="Amit Chavda Projects | MERN, React, Node.js & AI Projects"
        description="Explore live web development projects by Amit Chavda. E-commerce stores, international agency web apps, and full-stack MERN applications built with React & Node.js."
        keywords="Amit Chavda Projects, MERN Stack Projects, React.js Web Applications, E-Commerce Development Ahmedabad"
        canonicalUrl="https://chavdaamit.in/projects"
      />
      <div className="container py-2">
        {/* Section Heading */}
        <div className="text-center mb-4">
          <h2 className="section-title">
            <i className="bi bi-folder-fill me-2 text-cyan"></i> Projects
          </h2>
          <div className="section-title-underline"></div>
        </div>

        <div className="row g-4">
          {projects.map((proj) => (
            <div key={proj.id} className="col-md-6 col-lg-4">
              <BorderGlow
                className="h-100 p-3"
                borderRadius={16}
                edgeSensitivity={35}
                glowRadius={35}
                glowIntensity={1.2}
                colors={['#00d2ff', '#a855f7', '#38bdf8']}
              >
                <div className="d-flex flex-column justify-content-between h-100">
                  <div>
                    {/* Browser Mockup Banner */}
                    <div className="project-banner-container mb-4">
                      <div className="browser-header-bar">
                        <span className="browser-dot red"></span>
                        <span className="browser-dot yellow"></span>
                        <span className="browser-dot green"></span>
                        <span className="browser-url-pill">{proj.domain}</span>
                      </div>

                      <div className="project-img-wrapper" style={{ minHeight: '190px', backgroundColor: 'var(--card-bg)' }}>
                        <img
                          src={proj.imgUrl}
                          alt={proj.title}
                          className="project-img-preview"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>

                    <h3 className="fs-5 fw-bold text-custom-heading mb-2">{proj.title}</h3>
                    <p className="text-custom-muted small lh-base mb-4">{proj.description}</p>
                  </div>

                  <div>
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {proj.tags.map((t) => (
                        <span key={t} className="badge-custom py-1 px-3" style={{ fontSize: '0.75rem' }}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan small fw-semibold text-decoration-none d-inline-flex align-items-center gap-1 hover-underline"
                    >
                      View Live Project <i className="bi bi-arrow-up-right fs-6"></i>
                    </a>
                  </div>
                </div>
              </BorderGlow>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
