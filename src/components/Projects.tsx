import React from 'react'
import BorderGlow from './BorderGlow'
import SEO from './SEO'
import kingqueenImg from '../assets/kingqueen.png'
import destinyImg from '../assets/destiny.png'
import darkstoreImg from '../assets/darkstore.png'
import sugarImg from '../assets/sugar.png'
import kisahImg from '../assets/kisah.png'

interface Project {
  id: string
  title: string
  domain: string
  imgUrl: string
  description: string
  tags: string[]
  link: string
  isExternal: boolean
}

export const projects: Project[] = [
  {
    id: 'kingqueen',
    title: 'KingQueen (E-Commerce)',
    domain: 'kingqueen.in',
    imgUrl: kingqueenImg,
    description: 'E-Commerce fashion & lifestyle brand web platform featuring product listings, smooth cart interactions, and modern responsive layout.',
    tags: ['React.js', 'E-Commerce', 'Tailwind CSS'],
    link: 'http://kingqueen.in/',
    isExternal: true,
  },
  {
    id: 'destiny',
    title: 'Destiny Service Agency',
    domain: 'destinyservice.nl',
    imgUrl: destinyImg,
    description: 'International business service agency website built with modern frontend architecture, service showcases, and responsive lead forms.',
    tags: ['Next.js', 'React', 'Responsive Design'],
    link: 'https://destinyservice.nl/',
    isExternal: true,
  },
  {
    id: 'darkstore',
    title: 'The Dark Store (E-Commerce)',
    domain: 'the-dark-store-g8uq.onrender.com',
    imgUrl: darkstoreImg,
    description: 'Full-Stack MERN E-Commerce platform featuring product catalog, cart management, secure user authentication, checkout flow, and scalable MongoDB backend.',
    tags: ['React.js', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://the-dark-store-g8uq.onrender.com/',
    isExternal: true,
  },
  {
    id: 'sugar',
    title: 'Sugar Cosmetics UI',
    domain: 'cosmetic-123.netlify.app',
    imgUrl: sugarImg,
    description: 'Built a responsive e-commerce UI with product listing. Added Add to Cart, Login/Signup, Wishlist, and Purchase flow functionality.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://cosmetic-123.netlify.app/',
    isExternal: true,
  },
  {
    id: 'kisah',
    title: 'Kisah Ethnic Wear',
    domain: 'kisah-ecommerce.vercel.app',
    imgUrl: kisahImg,
    description: 'Created an E-commerce website with reusable components, robust state management, and seamless API integration.',
    tags: ['React.js', 'State Management', 'API Integration'],
    link: 'https://kisah-ecommerce-react-js.vercel.app/',
    isExternal: true,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-4 position-relative">
      <SEO 
        title="Web Development Projects & Portfolio | Chavda Amit - Best Developer"
        description="Explore live full-stack web applications, e-commerce stores, and React/Next.js projects built by Chavda Amit, top freelance web developer."
        keywords="Web Projects, Best Nextjs Projects, E-commerce Web Developer, React.js Portfolio, Chavda Amit Projects"
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
