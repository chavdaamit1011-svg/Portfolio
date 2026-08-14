import React from 'react'
import BorderGlow from './BorderGlow'
import SEO from './SEO'

export default function Services() {
  const servicesList = [
    {
      icon: 'bi-rocket-takeoff-fill',
      title: 'Freelance Web Development',
      description: 'Custom end-to-end web development for clients & businesses worldwide with Next.js, React, and modern UI.',
    },
    {
      icon: 'bi-window-stack',
      title: 'Website Development',
      description: 'Creating modern, responsive, and user-friendly websites with latest technologies and high performance.',
    },
    {
      icon: 'bi-grid-1x2-fill',
      title: 'App Development',
      description: 'Building full-stack web applications and interactive digital products with MERN stack and Next.js.',
    },
    {
      icon: 'bi-palette',
      title: 'Frontend Development',
      description: 'Crafting beautiful user interfaces with React, Next.js, TypeScript, Tailwind CSS, and modern design systems.',
    },
    {
      icon: 'bi-database-gear',
      title: 'Backend Development',
      description: 'Developing robust server-side applications, RESTful APIs, and database architecture with Node.js, Express, and MongoDB.',
    },
    {
      icon: 'bi-robot',
      title: 'Custom AI Chatbot Integration',
      description: 'Building intelligent AI chatbots trained on your business documents & data to deliver automated 24/7 customer support.',
    },
  ]

  return (
    <section id="services" className="py-4 position-relative">
      <SEO 
        title="Chavda Amit | Freelancer"
        description="High-performance custom web development, full-stack Next.js apps, React frontend, and freelance web development services by Chavda Amit."
        keywords="Freelance Web Developer, Best Website Developer, Best Nextjs Developer, Custom Web Development, React Developer Services"
      />
      <div className="container py-2 max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-4">
          <h2 className="section-title">
            <i className="bi bi-gear-fill me-2 text-cyan"></i> Services
          </h2>
          <div className="section-title-underline"></div>
        </div>

        {/* 2x2 Sleek Services Grid */}
        <div className="row g-3">
          {servicesList.map((service, idx) => (
            <div key={idx} className="col-md-6">
              <BorderGlow
                className="p-3 p-md-4 h-100 text-center d-flex flex-column align-items-center justify-content-center"
                borderRadius={16}
                edgeSensitivity={30}
                glowRadius={30}
                glowIntensity={1.1}
                colors={['#00d2ff', '#a855f7', '#38bdf8']}
              >
                {/* Icon right beside the centered title */}
                <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
                  <div
                    className="bg-cyan bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{ width: '38px', height: '38px' }}
                  >
                    <i className={`bi ${service.icon} text-cyan fs-5`}></i>
                  </div>
                  <h3 className="fs-5 fw-bold text-custom-heading mb-0 font-heading">
                    {service.title}
                  </h3>
                </div>

                {/* Centered Description */}
                <p className="text-custom-muted small lh-base mb-0 max-w-sm mx-auto">
                  {service.description}
                </p>
              </BorderGlow>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
